import crypto from "crypto"
import { Types } from "mongoose"
import { UserModel } from "@/lib/mongodb/models"
import { connectToMongoDB } from "@/lib/mongodb/mongodb"

export interface AppUser {
  id: string
  email: string
  role: string
  status: string
  phone?: string | null
  user_metadata?: Record<string, any>
}

function toAppUser(row: any): AppUser {
  return {
    id: row.id || row._id?.toString(),
    email: row.email,
    role: row.role || "user",
    status: row.status || "pending",
    phone: row.phone || null,
    user_metadata: row.user_metadata || {},
  }
}

export async function findUserByEmail(email: string) {
  await connectToMongoDB()
  const user = await UserModel.findOne({ email: email.toLowerCase() }).lean()
  return user
}

export async function findUserById(userId: string) {
  await connectToMongoDB()
  const filter = Types.ObjectId.isValid(userId)
    ? { $or: [{ id: userId }, { _id: new Types.ObjectId(userId) }] }
    : { id: userId }
  const user = await UserModel.findOne(filter).lean()
  return user
}

export async function createUser(params: {
  email: string
  passwordHash: string
  name?: string
  phone?: string
}) {
  await connectToMongoDB()
  const now = new Date()
  const user = await UserModel.create({
    id: crypto.randomUUID(),
    email: params.email.toLowerCase(),
    passwordHash: params.passwordHash,
    phone: params.phone || null,
    provider: "email",
    role: "user",
    status: "pending",
    user_metadata: { name: params.name || params.email.split("@")[0] },
    created_at: now,
    updated_at: now,
  })
  return toAppUser(user.toObject())
}

export async function findUserByGoogleId(googleId: string) {
  await connectToMongoDB()
  return UserModel.findOne({ googleId }).lean()
}

export async function upsertGoogleUser(params: {
  googleId: string
  email: string
  name: string
  picture?: string
}) {
  await connectToMongoDB()
  const now = new Date()

  let user = await UserModel.findOne({
    $or: [{ googleId: params.googleId }, { email: params.email.toLowerCase() }],
  }).lean()

  if (user) {

    await UserModel.updateOne(
      { _id: (user as any)._id },
      {
        $set: {
          googleId: params.googleId,
          provider: "google",
          user_metadata: {
            name: params.name,
            picture: params.picture,
          },
          updated_at: now,
        },
      },
    )
    const updated = await UserModel.findOne({ _id: (user as any)._id }).lean()
    return toAppUser(updated)
  }

  const created = await UserModel.create({
    id: crypto.randomUUID(),
    email: params.email.toLowerCase(),
    googleId: params.googleId,
    provider: "google",
    passwordHash: null,
    role: "user",
    status: "pending",
    user_metadata: { name: params.name, picture: params.picture },
    created_at: now,
    updated_at: now,
  })
  return toAppUser(created.toObject())
}

export async function updateUserPassword(userId: string, passwordHash: string) {
  await connectToMongoDB()
  const filter = Types.ObjectId.isValid(userId)
    ? { $or: [{ id: userId }, { _id: new Types.ObjectId(userId) }] }
    : { id: userId }

  await UserModel.updateOne(
    filter,
    {
      $set: {
        passwordHash,
        updated_at: new Date(),
        resetTokenHash: null,
        resetTokenExpiresAt: null,
      },
    },
  )
}

export async function setPasswordResetToken(email: string, tokenHash: string, expiresAt: Date) {
  await connectToMongoDB()
  await UserModel.updateOne(
    { email: email.toLowerCase() },
    {
      $set: {
        resetTokenHash: tokenHash,
        resetTokenExpiresAt: expiresAt,
        updated_at: new Date(),
      },
    },
  )
}

export async function findUserByResetToken(tokenHash: string) {
  await connectToMongoDB()
  const now = new Date()
  const user = await UserModel.findOne({
    resetTokenHash: tokenHash,
    resetTokenExpiresAt: { $gt: now },
  }).lean()
  return user as any
}

export function mapDbUserToAuthShape(row: any) {
  if (!row) return null
  return {
    id: row.id || row._id?.toString(),
    email: row.email,
    role: row.role || "user",
    status: row.status || "pending",
    phone: row.phone || null,
    user_metadata: row.user_metadata || {},
  }
}
