const cool = require("cool-ascii-faces");

console.log("Hola Mundo");
console.log(cool());

//Ahora vamos a probar el express, siempre se crea una constante y tal... y por norma se le pone a la var el nombre "app" porque es una aplicación web
const express = require("express");
var app = express();

//Esto significa que crea un servidor web escuchando en el puerto 80, y cuando alguien acceda al recurso "/cool" le va a devolver una carita feliz.
app.get("/cool",(req, response) => {
	response.send("<html>"+cool()+"</html>");
})
app.listen(80);
console.log("server ready");

//... Cuando ejecutemos npm start nos saldrá los dos primeros console de arriba y el "server ready" pero como queremos que se ponga cada vez que nosotro
//accedamos al recurso cool nos vamos a la pestaña de GOORM en PROJECT > RUNNING URL AND PORT > ponemos la url que queramos + el puerto que hemos
//elegido que escuche > Luego le damos a REGISTER > Y luego al botón de al lado del portapapeles.