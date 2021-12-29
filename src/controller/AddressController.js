const Address = require('../model/Address');
const User = require('../model/User');

module.exports = {
  async findAll(req, res) {
    const user = await User.findByPk(req.params.user_id, {
      include: { association: 'addresses' }
    });

    if (!user) {
      return res.status(400).json({ error: 'User not found'});
    }

    return await res.json(user)
  },
  async create(req, res) {
    const { user_id } = req.params;
    const { zipCode, street, number } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found'});
    }

    return res.json(await Address.create({ zipCode, street, number, user_id }));
  }
}