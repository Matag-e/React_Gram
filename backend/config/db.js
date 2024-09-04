const mongoose = require("mongoose");
<<<<<<< HEAD
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.tgfnn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Conectou ao banco!!");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  }
};
=======
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

>>>>>>> 529039b3f60c409868cc59045320dd7d29cc9d5c

conn();

module.exports = conn;
