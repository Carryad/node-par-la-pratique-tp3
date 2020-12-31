let users = require('./UserData');
const User = require('./models/UserModel');

// Read all
exports.readAll = (req,res) => {

    User.find()
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            return res.status(400).json(err);
        })
};

// Read one by ID
exports.readOneById = (req,res) =>{

    User.findById(req.params.id)
        .exec()
        .then(result => {
            return res.status(200).json(result);
        })
        .catch(err => {
            return res.status(400).json(err);
        })
}

// Create one
exports.createOne = (req,res) => {

    const user = new User(req.body);
    user
        .save()
        .then(result => {
            return res.status(201).json(result);
        })
        .catch(err => {
            return res.status(400).json(err);
        })
}

// Update one by id
exports.editOneById = (req,res) => {

    User.findByIdAndUpdate(req.params.id, req.body)
        .exec()
        .then(result => {
            return res.status(200).json("L'utilisateur a été modifié");
        })
        .catch(err => {
            return res.status(400).json(err);
        })    
}

// Delete one
exports.deleteOne = (req,res) =>{

    User.findByIdAndDelete(req.params.id)
        .exec()
        .then(result => {
            return res.status(200).json("L'utilisateur a été supprimé");
        })
        .catch(err => {
            return res.status(400).json(err);
        })
}