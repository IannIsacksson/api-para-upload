const Box = require('../models/box');

class BoxController {
    async store(req, res) {
        const box = await Box.create(req.body);

        return res.json(box);
    }
}

module.exports = new BoxController();