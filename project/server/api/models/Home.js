module.exports = {

    contacts:async function(){
        let user_id = req.body.userId
        let result = await sails.sendNativeQuery(`SELECT * from users`)
        res.json(result)
    },

}