import User from '../models/User';


module.exports = {
    async showUser(req, res) {
        const user = await User.findById(req.userId);

        return res.json({"Usuario-Logado":user.email});
    }
}