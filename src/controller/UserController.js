const User = require('../model/User');

module.exports = {
  async findAll(req, res) {
    return res.json(await User.findAll());
  },
  async create(req, res) {
    const { name, email } = req.body;

    return res.json(await User.create({ name, email }));
  }
}