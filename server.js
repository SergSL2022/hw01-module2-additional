const { app, colors } = require("./app");

const port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log(`Server is running on port: ${colors.bold.brightMagenta(port)}`.green);
})
