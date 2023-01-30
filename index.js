const mongoose = require("mongoose");
const app = require("./app");
const port = 3000;
const urlMongoAtlas = "mongodb+srv://admin:admin123456@alejandromdb.i3igtuv.mongodb.net/mydb";

mongoose.connect(urlMongoAtlas, (err, res) => {
    try{
        if(err){
            throw err
        } else{
            console.log("La conexion a la BD es la correcta");

            app.listen(port, () => {
                console.log("Servidor del API REST está funcionando en http://localhost:3000");
            })

        }
    }catch (error){
        console.error(error);
    }
});