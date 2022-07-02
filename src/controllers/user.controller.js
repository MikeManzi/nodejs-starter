const { User, validateData } = require('../models/user.model')

exports.login = async (req, res) => {
    try {
        const { error } = validateData(req.body, 'login');
        if (error) return res.status(400).send(error.details[0].message);
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
    } catch (error) {
        res.status(400).send(error.toString());
    }
}

exports.signup = async (req, res) => {
    try {
        const { error } = validateData(req.body, 'register');
        if (error) return res.status(400).send(error.details[0].message);
        const user = new User(req.body)
        await user.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error)
    }
}