module.exports = {
    contacts: async function (req, res) {
      let result = await sails.sendNativeQuery(`SELECT * from users`);
      res.json(result.rows);
    },
    sendMessage: async function (req, res) {
      let user_id = req.body.userId;
      let par_user_id = req.body.participantId;
      let message = req.body.message;
      let result = await sails.sendNativeQuery(
        `INSERT INTO messages (user_id,par_user_id,message) VALUES($1,$2,$3)`,
        [user_id, par_user_id, message]
      );
      res.json("posted");
    },
    getMessage: async function (req, res) {
      let { userId, participantId } = req.params;
  
      console.log(userId);
      console.log(participantId);
  
      let result = await sails.sendNativeQuery(
        `SELECT * from messages where (user_id = $1 and par_user_id = $2) or (user_id = $3 and par_user_id = $4)`,
        [userId, participantId,participantId,userId]
      );
      res.json(result.rows);
    },
  };
  