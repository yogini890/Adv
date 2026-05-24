const User = require('./models/User');

const ADMIN_EMAIL = 'advocatemeetshah@gmail.com';
const ADMIN_PASSWORD = 'advocatemeetshah@123';

const seedAdmin = async () => {
  const email = ADMIN_EMAIL.toLowerCase();
  let user = await User.findOne({ email });

  if (!user) {
    await User.create({
      name: 'Advocate Meet Shah',
      email,
      password: ADMIN_PASSWORD,
      role: 'admin',
    });
    console.log(`Admin account ready: ${email}`);
    return;
  }

  let changed = false;
  if (user.role !== 'admin') {
    user.role = 'admin';
    changed = true;
  }

  const passwordMatch = await user.matchPassword(ADMIN_PASSWORD);
  if (!passwordMatch) {
    user.password = ADMIN_PASSWORD;
    changed = true;
  }

  if (changed) {
    await user.save();
    console.log(`Admin account updated: ${email}`);
    return;
  }

  console.log(`Admin account ready: ${email}`);
};

module.exports = seedAdmin;
