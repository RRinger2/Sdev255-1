var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mydb_test");
var clientSchema = mongoose.Schema({
 lastname : String,
 firstname : String,
 address : String
});
// creation of the Client class associated with the clients 
// collection
var Client = mongoose.model("clients", clientSchema);
Client.deleteOne({ lastname: "Clinton", address: "New York" })
  .then(function(result) {
    console.log("Document deleted successfully:", result);

    // Close the connection
    mongoose.connection.close();
  })
  .catch(function(err) {
    console.error("Error deleting document:", err);
  });