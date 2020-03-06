console.log("========================= [Hola, soy la tarea 13] =========================");

//Nos vamos creando el servidor web...
const express = require("express");
var app = express();

//Esto significa que crea un servidor web escuchando en el puerto 80, y cuando alguien acceda al recurso "/cool" le va a devolver una carita feliz.
/**app.get("/cool",(req, response) => {
	response.send("<html>"+cool()+"</html>");
})**/

//Nos vamos a hacer ahora para cuando pidamos el recurso "/date"

app.get("/time", (req, response) => {
	var  date = new Date();
	response.send("<html>"+date+"</html>")
})
app.listen(80);
console.log("server ready");