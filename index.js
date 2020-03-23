const express = require("express");
const bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

var port = process.env.PORT || 80; //Si no nos dice nada, desplegamos en puerto 80 y si no, pues el puerto que diga HEROKU.

var contacts = [
	{ 
		name: "Leandro",
		phone: 123456	
	},
	{ 
		name: "pablo",
		phone: 789456	
	}
];

const BASE_API_URL = "/api/v1"; //Tendremos aqui la URL Base, la api el path...

////////////////////////////////////////////////////
// GET CONTACTS   
////////////////////////////////////////////////////

app.get(BASE_API_URL+"/contacts", (req,res) =>{ //En req vienen los datos de la petición.
	res.send(JSON.stringify(contacts,null,2)); //En JSON devuelvo todos los contactos
	console.log("Data sent: "+JSON.stringify(contacts, null, 2));
});


////////////////////////////////////////////////////
// POST CONTACTS   
////////////////////////////////////////////////////

app.post(BASE_API_URL+"/contacts",(req,res) =>{
	//contacts.push(req.body);  //En req me vienen los datos de la petición, cojo el body también
	//Verificaremos ahora que es un contacto
	var newContact = req.body;
	if((newContact == "") || (newContact.name == null)){  //Si está vacío o es nulo
		res.sendStatus(400, "BAD REQUEST");
	}else{
		contacts.push(newContact);
		res.sendStatus(201,"CREATED"); 
	}
});

////////////////////////////////////////////////////
// DELETE CONTACTS   
////////////////////////////////////////////////////


//  ========> AHORA SOBRE ELEMENTOS EN CONCRETO...

////////////////////////////////////////////////////
// GET CONTACTS/XXX Es decir, a un recurso en concreto   
////////////////////////////////////////////////////


app.get(BASE_API_URL+"/contacts/:name", (req,res)=>{ //El :name lo que hace es como que crea una variable que puede tener cualquier valor, yo puedo tener /:org /:loquesea yo puedo tener los que yo quiera
	//¿Cómo accedería al valor concreto de lo que me ha llegado? Pues así con el params el nombre que yo le haya puesto en el : con param me lo pilla
	var name = req.params.name;
	
	var filteredContacts = contacts.filter((c) => {
		//Le digo que solo me deje pasar en el caso de que el contacto tenga el mismo nombre que el que me están pasando
		return (c.name == name);
	});
	
	if(filteredContacts.length >= 1){
		res.send(filteredContacts[0]); //Devolvería el primer elemento de ese array
	}else{
		res.sendStatus(404, "CONTACT NOT FOUND");
	}
});




////////////////////////////////////////////////////
// PUT CONTACTS/XXX Es decir, a un recurso en concreto   
////////////////////////////////////////////////////

////////////////////////////////////////////////////
// DELETE CONTACTS/XXX Es decir, a un recurso en concreto   
////////////////////////////////////////////////////

app.delete(BASE_API_URL+"/contacts/:name", (req,res)=>{ //Para el delete podría usar un filter pero quitando el que me llega
	var name = req.params.name;

	
	var filteredContacts = contacts.filter((c) => {
		return (c.name != name);
	});
	
	
	if(filteredContacts.length < contacts.length){
		contacts = filteredContacts;
		res.sendStatus(200);
	}else{
		res.sendStatus(404,"CONTACT NOT FOUND");
	}
	
	
});

	



app.listen(port, () => {
	console.log("Server ready");
});

console.log("Starting server...");