
API REST development and deployment

Course
25/26
Group
IFC31C
Delivery date
31/12/2025
Module
Web application implantation
Title
API REST development and deployment



Work type
Individually
Realization steps
OBJECTIVE

This project objective is to develop and deploy a basic API REST which reads data from JSON files and has some sort of user-interaction via parameters or POST data.

The project has to be deployed as a docker container and has to be deployed on an Internet domain with help of a reverse-proxy.


TASK DESCRIPTION

Firstly you have to think and choose some API you want to create. It could be student data, videogames, movies… Describe why you chose that data.

After choosing the data you will work with, just follow the tasks until you complete your API REST.

Remember that this solution has to be deployed and reachable for everyone. It’s important to document the whole setup.

Pro tip: On your last project you will have to show API’s content visually using HTML and other frameworks. Maybe you could think of an idea that lets you reuse the work!

DELIVERY

Project memory in Word, PDF or similar format.
Project via GitHub Classroom.
Domain URL where the project is published.


Qualification criteria
This project evaluates RA1, RA4 and RA5.
You have to grade at least a 4 in every RA. If not, students will need to recover the task.
Check project rubric for specific qualification criterias.



Task 1

Describe your API REST idea indicating:
Main objective.

Videojuegos. El Objetivo principal es temer o ofrecer información sobre videojuegos, usando peticiones HTTP,
ya que por eso usamos REST, ya que REST es un estilo de diseño para crear APIs usando HTTP

Where did you get the data? What’s for?
La información para poder crear el JSON, la he sacado de mi mismo, ya que he utilizado juegos que son conocidos
y juegos a los que juego diariamente.

Ahora bien, el género, las plataformas y el año lo he encontrado en la wikipedia

https://es.wikipedia.org/wiki/Valorant

https://es.wikipedia.org/wiki/League_of_Legends

https://es.wikipedia.org/wiki/Teamfight_Tactics


Create the JSON containing your data.



Explain the data JSON model.
Is there some node that you will not use?

No, como se puede ver en la imagen, todos los nodos se están usando para poder ofrecer
la información que pidan los usuarios/clientes. No queda ningún nodo.

El data JSON tiene como campos:

    id: número
    titulo, genero, plataforma: string
    year: número

Design your requirements and briefly explain your classes and methods. Do it BEFORE programming, so you get the visual idea before starting.

**LA IMAGEN LA TENDRÁS EN EL DOCUMENTO QUE TE VOY A ENVIAR CUANDO ACABE LA API POR EL CLASSROOM**

Está será mi estructura. ahora la voy a explicar paso a paso de el porque he creado los directorios y los archivos.
Creo el directorio Data. Dentro creo el archivo videojuegos.json, que es donde tengo la información sobre, el nombre,
el género, plataforma, año y la ID de los videojuegos. Aquí lo único que se hace es almacenar los datos


Luego he creado el directorio Routes y dentro creo el archivo videojuegos.js donde asignaremos los campos que usamos
en el archivo de Data para poder ofrecer la información y no dejar ningún campo vacío. Digamos que cada ruta llama a 
un controlador que sabe como leer y procesar los datos



Directorio Controller/videojuegoscontroller.js

En este archivo es donde se encuentra la lógica, es decir, no es como el data, ya que el data solo almacena, en cambio
el controller lee el archivo JSON, filtra datos, calcula y devuelve las respuestas de las rutas de la carpeta que hemos
creado anteriormente.

APP.JS

Es el archivo más importante de todos, y sin este archivo no funcionaría la API. Es el archivo principal y aquí es donde
vamos a configurar y arrancar nuestro servidor, conectas rutas y todo básicamente.


README.md
Básicamente es el documento donde yo voy a estar escribiendo y documentando todos los pasos que hago para pode realizar
el API REST


DOCKERFILE
Aquí es donde voy a poner toda la configuración de todos los archivos para luego crear la imagen y luego hacer un
docker-compose.yml y poner la imagen creada y al levantarlo con un “docker-compose up”, tener los contenedores con toda
la configuración que he estado haciendo sobre mi API REST


Task 2

During development it’s really important that you keep storing your advances on GitHub. Everytime you archive something, push it towards your repository with a message of your work. The more commits and clear messages, the better. You should create one branch for each task and merge them to the main branch once finished. That way you can keep track of unfinished tasks.


Task 3

Dockerize your project so it’s deployed as a docker container. Use the following advice:

Create a Dockerfile on the root of your project.
Use the node.js base.
The image name should have the following format:
ifc31c-iaw-surname-name
Expose only the required port.
The application should not be installed or executed as a root user.
Deploy your image to DockerHub. Keep track of the version number, don’t overwrite them.
Make a readme/manual on how to put the image to work.


Task 4

Deploy your API REST as production-ready on a production server. For this project, consider the following:

Use the docker image generated on previous tasks.
Deploy your application in a VM as a docker container.
Add a DNS registry pointing to your domain and the IP address of your VM.
Put your API REST behind a reverse-proxy such as Caddy. Either you build a docker-compose or create a network and use it in the two containers.
Redirect all HTTP traffic to HTTPS installing a SSL certificate. Use Let’s Encrypt! for free certs.


Task 5

Develop your REST API.

Minimum requirements:
Route that lists every single item for each of your JSON data.
Route that allows the user to pass an ID as a path parameter and it retrieves all the data for that ID.
Route with name search that allows the users to use some query parameters to filter results.
Route with name calculate that retrieves this example JSON introduced by the user and returns the following list ordered by surname.
Input:
[
{
"name": "Oscar",
"surname": "Cobo",
"age": 28,
"grades": [5,6,7,8,9]
},
{
"name": "Silvia",
"surname": "Cobo",
"age": 38,
"grades": [5,5,4,4,6]
},
{
"name": "Manuel",
"surname": "Cobo",
"age": 48,
"grades": [4,2,2,10,7]
}
]
Output:
[
{
"student": "Cobo, Oscar",
"finalMark": 7
},
{
"student": "Cobo, Silvia",
"finalMark": 4
},
{
"student": "Cobo, Manuel",
"finalMark": 5
}
]


Optional requirements:
Clean code and project structure.
Data is validated. For example, if a user has mandatory fields and they don’t come on the JSON data, throw an exception.
Every request is logged at the console.


Task 6 (validation)

Explain in which tasks you have used IA. If the teacher has doubts on IA usage not contained in the following table, the project will be evaluated as 0 and the student will go to a recovery exam.


Task
IA questions
Why?














