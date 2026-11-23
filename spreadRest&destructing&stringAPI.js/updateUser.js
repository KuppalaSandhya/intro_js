const user = {
  id: 101,
  username: "aarav_dev",
  passwordHash: "x98s7d98a7sd",
  role: "intern",
  theme: "light",
};

const updates = {
  id: 109,
  role: "junior-dev",
  theme: "dark",
  notifications: true,
};

const updateUserProfile = function (user, updates) {
  const {id, passwordHash, ...details} = user;
  const {id: updateId, ...saferUpdates} = updates;

  return {id, ...details, ...saferUpdates};
};

console.log(updateUserProfile(user, updates));
