module.exports = {
  signUp: async function (req, res) {
    let user_name = req.body.userName;
    let mail_id = req.body.emailId;
    let password = req.body.password;
    let id = await sails.sendNativeQuery(
      "SELECT user_id FROM users WHERE email_id=$1",
      [mail_id]
    );
    if (id.rows[0]) {
      res.json("Already existed");
    } else {
      let result = await sails.sendNativeQuery(
        `INSERT INTO users (user_name,email_id,password) VALUES ($1,$2,$3)`,
        [user_name, mail_id, password] 
      );
      res.json("Uploaded successfully");
    }
  },
  signIn: async function (req, res) {
    let emailId = req.body.emailId;
    let password = req.body.password;

    let mailIds = await sails.sendNativeQuery("SELECT email_id FROM users");


    for (let index = 0; index < mailIds.rowCount; index++) {
      if (mailIds.rows[index].email_id == emailId) {
        let user = await sails.sendNativeQuery(
          "SELECT * FROM users WHERE email_id=$1",
          [emailId]
        );
        if (
          password == user.rows[0].password &&
          emailId == user.rows[0].email_id
        ) {
          res.json(user.rows[0].user_id)
        }
         
      }
    }
    console.log("Please check your Password or Mail Id")
    res.json("Please check your Password or Mail Id")
  
  },

};  


