module.exports = {
    contacts:async function(req,res){
      await Home.contacts(req,res)
    },
    sendMessage:async function(req,res){
      await Home.sendMessage(req,res)
    },
    getMessage:async function(req,res){
      await Home.getMessage(req,res)
    }
}