module.exports = function (app) {
	console.log("Registering contactAPI . . . ");
	const dataStore = require("nedb");
	const path = require("path");
	
	const dbFileName = path.join(__dirname,"./contacts.db"); 
	const BASE_API_URL = "/api/v1";
	
	const db = new dataStore({
					fileName: dbFileName,
					autoload: true
	});

	var initialContacts = [
	{ 
		name: "Leandro",
		phone: 123456	
	},
	{ 
		name: "pablo",
		phone: 789456	
	}
];



////////////////////////////////////////////////////
// LOAD INITIAL DATA  
////////////////////////////////////////////////////

app.get(BASE_API_URL+"/contacts/loadInitialData", (req,res) =>{ //En req vienen los datos de la petición.
	console.log("New GET ../loadInitialData");
	db.insert(initialContacts); //De esta forma almaceno información dentro de la BBDD
	res.sendStatus(200);
	console.log("Initial Contacts loaded: "+JSON.stringify(initialContacts, null, 2));
});

////////////////////////////////////////////////////
// GET CONTACTS   
////////////////////////////////////////////////////

app.get(BASE_API_URL+"/contacts", (req,res) =>{ //En req vienen los datos de la petición.
	console.log("New GET .../contacts");
	db.find({}, (err, contacts) => {//Para recoger los datos el método find
		//..Si queremos quitar la propiedad id
		contacts.forEach( (c) => {
			delete c._id;
		});
		
		res.send(JSON.stringify(contacts, null, 2));
		console.log("Data sent: "+JSON.stringify(contacts, null, 2));
	})
	
});

	console.log("OK");
	
	
}

