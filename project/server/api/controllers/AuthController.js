/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Auth = require("../models/Auth");

module.exports = {
  signUp: async function (req, res) {
   sails.log.info("@Controller AuthController @Method signUp(req,res)")

    if (!req.body.userName || !req.body.emailId || !req.body.password) {
      return res.badRequest({
        message: "parameter(s) is missing",
      });
    }
    try {
      await Auth.signUp(req, res);
    } catch (err) {
      sails.log.error("@Controller AuthController @Method signUp(req,res)", err);
      res.badRequest(err);
    }

  },

  signIn: async function (req, res) {
   sails.log.info("@Controller AuthController @Method signUp(req,res)")

    if (!req.body.emailId || !req.body.password) {
      return res.badRequest({
        message: "parameter(s) is missing",
      });
    }
    
    try {
      await Auth.signIn(req, res);
    } catch (err) {
      sails.log.error("@Controller AuthController @Method signUp(req,res)", err);
      res.badRequest(err);
    }
  },
};
