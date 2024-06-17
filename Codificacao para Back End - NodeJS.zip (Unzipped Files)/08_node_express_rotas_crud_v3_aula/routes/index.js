const routerJobs = require("./jobRouter.js");

module.exports = (app, express) => {
    app.use(express.json());
    app.use(routerJobs);
};
