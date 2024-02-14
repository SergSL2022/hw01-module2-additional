const healthzController = (req, res) => {
    try {
        const data = {
            status: 200,
            message: "OK"
        }
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = { healthzController }