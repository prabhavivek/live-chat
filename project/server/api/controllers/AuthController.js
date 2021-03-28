/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Auth = require("../models/Auth");

module.exports = {
  
    signUp:async function(req,res){ 
       await Auth.signUp(req,res)
    },
    signIn:async function(req,res){
       await Auth.signIn(req,res)
    }
};