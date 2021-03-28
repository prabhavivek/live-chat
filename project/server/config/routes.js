/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
 //auth
'POST /auth/signUp' : 'AuthController.signUp',
'POST /auth/signIn' : 'AuthController.signIn',

//home
'GET  /home/contacts': 'HomeController.contacts',

};
