# ABM React - Heroku

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

Desarrolle una aplicación web que cumpla con los requisitos colocados en la sección Inicio y también se detallan en la sección de requisitos README.

### Instructions

Pasos a seguir para poder probar el proyecto en tu pc.

1. Open shell

```
Shell in Visual Studio Code
```

2. npm install

```
Instalamos los paquetes necesarios para poder ejecutar el sistema con "npm install"
```

3. npm start

```
Iniciamos el servidor con el comando "npm start"
```

Ejecuta la aplicación en el modo development .\
Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

La página se recargará si realiza modificaciones. \
También verá errores de pelusa en la consola.

### Work and distribution team

```
- Mena Mariano branch (products)

```
### Requirements

Desarrollar una aplicación web que cumpla con los siguientes requisitos:
● Debe estar desarrollada con React utilizando el CLI de create-react-app.
● Contar con una lista de recursos siguiendo la lógica de un ABM.
● Debe contar con una librería para el manejo de formularios. (sugerencia final-form)
● Debe contar con un layout, el cual debe contener:
○ Header
○ NavBar (barra de navegación)
○ Body o contenido
○ Footer
● Debe contar con más de 1 ruta navegable.
● La app debe tener AL MENOS 2 pantallas:
○ Home: Esta debe contar con los nombres de los integrantes y el nombre de la
aplicación. Es básicamente para poder probar el ruteo de la aplicación.
○ Recurso: en esta pantalla deberán mostrar la lista de recursos con la lógica del
AMB (si trabajan solos, solo deberán tener home y la del recurso trabajado) para
poder evidenciar la navegación dentro de la app.
● Debe contar con componentes tanto para el Header, Body y Footer, como también un
componente para la tabla. A su vez, estos componentes deben utilizar componentes
compartidos, como ser: botones, inputs, modal etc. Estos componentes deben contar
con sus archivos .css, preferentemente utilizando CSS modules.
● Debe contar con formularios a la hora de realizar un POST, un DELETE o un UPDATE
de un nuevo recurso a la lista.
● Debe contar con modals cuando se solicite agregar, eliminar o modificar un recurso a la
lista. Dentro de los modals se deberá mostrar el formulario y/o el mensaje de
confirmación de eliminación o actualización de un recurso.
● Cada formulario debe contar con las validaciones correspondientes para evitar agregar
nuevos recursos con datos erróneos o sin datos.
● Debe ser posible realizar las diferentes request (GET, POST, PUT, DELETE) desde el
ABM de cada recurso.
● Debe contar con un archivo donde se haga la configuración inicial del store de Redux.
● Debe contar con un reducer por cada recurso y un rootReducer.
● Debe contar con un archivo de actions por cada recurso.
● Debe contar con un archivo de types (constantes) para las actions.
● Debe contar con el uso de action creators utilizando la librería Redux Thunk, los cuales
son necesarios para realizar la conexión del FE con el BE. Para esto, deberán utilizar la
API ya realizada para el primer parcial.
