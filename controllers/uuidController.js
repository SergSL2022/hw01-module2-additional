const { v4: uuidv4 } = require('uuid');

const uuidController = (req, res) => {
    try {
        const randomId = uuidv4();
        const data = {
            uuid: randomId
        }
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = { uuidController }