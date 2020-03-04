# SOS-Laboratorios

Esto es lo que dimos en el laboratorio 4

- Comandos

npm permite gestionar paquetes/modulos/programa en node.js 

Empezaremos a crear un paquete básico y lo haremos en local. 
Lo primero es utilizar el comando npm, para inicializar el manifiesto del paquete que no es más que un archivo json que tiene una serie de información. Por lo tanto hacemos npm init y le ponemos el nombre, después nos pide lo de la versión le pondremos la versión 0.0.0 y una descripción, luego te pedirá cual será el archivo principal le das a enter y listo para dejarlo como index.js y el siguiente que es para hacer test lo dejamos vacío también, luego como te pilla tu git pues listo, enter también. Luego te creará un archivo json que si lo abrimos verás que es lo que nos ha ido preguntando. JSON lo único que es es una forma de escribir objetos y siempre va igual con sus llavecitas, sus comillas y sus cosas. 
Luego nos crearemos un archivo index.js que haga algo. (touch index.js es el comando) Y ahora abrimos el index.js y le ponemos un console.log("Hola Mundo"); y cuando ejecutemos en la consola "node indexjs" pues nos saldrá.
Ahora vamos  tocar un poquito el json y vamos a añadir un script para que cuando lancemos el npm start nos salte el "Hola Mundo" nos vamos al package.json y debajo de esa línea de "scripts" añadimos  "start": "node index"
Ahora vamos a probar el paquete más inútil del mundo que es el de las ascii faces, para ello ponemos en consola npm install cool-ascii-faces --save. Ok y donde se ha metido ese paquete? Pues se ha metido en la carpeta node_modules que tiene ahi to la lista de paquetes de los que depende. Bueno pues voy ahora al index.js y le añado esas cositas que he puesto.