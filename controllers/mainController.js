const mainController = (req, res) => {
    try {
        const data = {
            message: "Hello world!"
        }
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = { mainController }