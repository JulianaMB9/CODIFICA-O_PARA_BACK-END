const routerJobs = require("./pessoasRouter")

module.exports= function(app, express){
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(routerJobs);
}