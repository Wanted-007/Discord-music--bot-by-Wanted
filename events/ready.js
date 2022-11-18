module.exports = {
	name : "ready",
	once : true,
	
	execute(client) {
	console.log("Successfully Logged in as " + client.user.tag); // You can change the text if you want, but DO NOT REMOVE "client.user.tag"
  }
};