const User = require('../model/User');
const Tech = require('../model/Tech');

module.exports = {
  async findAll(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: {
        association: 'techs',
        through: {
          attributes: []
        }
      }
    });

    if (!user) {
      return res.status(400).json({ error: 'User not found'});
    }

    return res.json(user.techs);
  },
  async create(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found'});
    }

    const [ tech ] = await Tech.findOrCreate({
      where: { name }
    });

    await user.addTech(tech);

    return res.json(tech);
  },
  async delete(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found'});
    }

    const tech = await Tech.findOne({
      where: { name }
    });

    await user.removeTech(tech);

    return res.json();
  }
}