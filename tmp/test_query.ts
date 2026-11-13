import mongoose from 'mongoose';
import { UserModel } from './lib/mongodb/models/user.ts';

async function test() {
  try {
    await mongoose.connect('mongodb://localhost:27017/grammar-learning-app');
    const userId = "69ac80099ccffa16fb6e7c74";
    const query: any = { $or: [{ id: userId }] };
    if (mongoose.Types.ObjectId.isValid(userId)) {
      query.$or.push({ _id: new mongoose.Types.ObjectId(userId) });
    }
    console.log("Query:", JSON.stringify(query, null, 2));
    const user = await UserModel.findOne(query).lean();
    console.log("User found:", !!user);
    process.exit(0);
  } catch (e) {
    console.error('Error:', e);
    process.exit(1);
  }
}
test();
