import User from '../models/User';

module.exports = {
    async store(req, res) {
        const { name, email, password} = req.body;

        const user = await  User.create({
            name, 
            email, 
            password,
        });

        const { _id } = user;

        return res.json({ _id });
    }
}