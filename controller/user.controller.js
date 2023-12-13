const UserService = require ("../services/user.services");

exports.register = async(req, res, next) => {
  try {
    const { nic, password, confirmPassword, phone, username, address } = req.body;

    const successRes = await UserService.registerUser(nic, password, confirmPassword, phone, username, address);

    res.json({ status: true, success: "User Registration succeed" });
  } catch (error) {
    next(error); // Pass the error to the next middleware
  }
}
