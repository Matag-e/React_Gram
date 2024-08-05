const mongoose = require("mongoose");
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

const conn = async () => {
    try{
        const dbConn = await mongoose.connect(
<<<<<<< HEAD
            `mongodb+srv://${dbUser}:${dbPassword}@reactgram.cwiwhbg.mongodb.net/?retryWrites=true&w=majority&appName=ReactGram`
=======
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.2qbzvx6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
>>>>>>> d1fa4c6c6362080cff7be934a28a04091cd51171
        )
        console.log("Conectou ao banco!!")
        return dbConn;
    }catch(error){
        console.log(error)
    }
}


conn();

module.exports = conn;
