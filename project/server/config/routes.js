module.exports.routes = {
 //auth
'POST /auth/signUp' : 'AuthController.signUp',
'POST /auth/signIn' : 'AuthController.signIn',

//home

'GET  /home/contacts': 'HomeController.contacts',

    //send messages
    'POST /home/message' : 'HomeController.sendMessage',
    //get messages
    'GET /home/message/:userId/:participantId'  : 'HomeController.getMessage' 

};
