const UserModel = require('../model/user.model');

class UserService {
  static async registerUser(nic, password, confirmPassword, phone, address, username) {
    try {
      const createUser = new UserModel({ nic, password, confirmPassword, phone, address, username });
      return await createUser.save();
    } catch (err) {
      throw err;
    }
  }
}

module.exports = UserService;
