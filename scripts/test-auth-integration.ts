
import { createUser, findUserByEmail, findUserById } from '../lib/mongodb/repositories/user-repository';
import bcrypt from 'bcryptjs';

async function testAuth() {
    console.log('--- Starting Auth Backend Test ---');
    const testEmail = `test_${Date.now()}@example.com`;
    const password = 'testpassword123';

    try {
        // 1. Test Signup / Create User
        console.log(`Step 1: Creating test user with email: ${testEmail}`);
        const passwordHash = await bcrypt.hash(password, 10);
        const user = await createUser({
            email: testEmail,
            passwordHash,
            name: 'Test Bot',
            phone: '1234567890'
        });

        console.log('User created:', JSON.stringify(user, null, 2));

        // 2. Test Find by Email
        console.log('Step 2: Finding user by email...');
        const dbUser = await findUserByEmail(testEmail);
        if (!dbUser) throw new Error('User not found by email');
        console.log('User found by email in DB');

        // 3. Test Password Verification
        console.log('Step 3: Verifying password hash...');
        const isMatch = await bcrypt.compare(password, dbUser.passwordHash);
        console.log('Password match:', isMatch);
        if (!isMatch) throw new Error('Password verification failed');

        // 4. Test Find by ID
        console.log('Step 4: Finding user by ID...');
        const foundById = await findUserById(user.id);
        if (!foundById) throw new Error('User not found by ID');
        console.log('User found by ID success');

        console.log('\n--- Status: ALL BACKEND TESTS PASSED ---');
    } catch (error) {
        console.error('\n--- Status: TEST FAILED ---');
        console.error(error);
        process.exit(1);
    }
    process.exit(0);
}

testAuth();
