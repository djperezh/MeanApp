var restful = require('node-restful');
module.exports = function(app, route){
    // set up the controller for Rest
    var rest = restful.model(
        'movie',
        app.models.movie
    ).methods(['get', 'put', 'post', 'delete']);

    // Register this endPoint with the application
    rest.register(app, route);

    // Return middleware
    return function(req, res, next){
        next();
    };
};

