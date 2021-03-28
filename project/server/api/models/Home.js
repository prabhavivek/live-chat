module.exports = {

    contacts:async function(req,res){
        let result = await sails.sendNativeQuery(`SELECT * from users`)
        console.log(result.rows);
        res.json(result.rows)
    },

}