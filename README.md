## Restaurant Project

Este proyecto fue creado con el proposito de practicar el desarrollo de React en este caso maquetando la interfaz propuesta por un ingeniero, mostrar elementos de transacción en DOM y consumo de API's.

### Built With

Esta sección enumero los principales marcos/bibliotecas utilizados para iniciar el proyecto.


* [React.ts](https://reactjs.org/)
* [styled-components](https://styled-components.com)
* [Firebase](https://firebase.google.com/?hl=es)
* [Vite.js](https://vitejs.dev)
* [json-server](https://www.npmjs.com/package/json-server)

## Getting Started

A partir de ahora se dan una serie de instrucciones para que corras el proyecto sin problemas en tu sistema.

### Prerequisites

Antes que nada asegurate de tener instalado npm 

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

2. Clone the repo
   ```sh
   git clone https://github.com/FabianMosquera/restaurant-project.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Corre tu fake-api (el puerto a tu preferencia)
   ```sh
   npx json-server --watch db.json -p 5000
   ```
6. corre tu servidor
   ```sh
   npm run dev
   ```
## Usage

* Apenas abres tu servidor la pantalla incial que aparecera sera la siguiente interfaz en el cual podra elegir si te quieres registras y loguearte.

![img](/images/Inicio.PNG)

* Como no te has registrado llenaras tus datos en los campos vacios ojo! todo los campos deben ser llenados.

![img](/images/Registraese.PNG)

* Luego de registrarse los datos pasaran al db.json que es en el cual se estan almacenando, y podra hacer uso del login, todos los campos deben ser llenados.

![img](/images/Login.PNG)

* Pasaras a la ventana de restaurantes el cual mostrara una serie de restaurante que han sido almacenados en el firebase

![img](/images/Restaurante.PNG)

* Del cual podras hacer uso de la barra buscadora para buscar los restaurantes por ciudad, en este caso las ciudades disponibles son: Cali, Medellin y Palmira.

![img](/images/Restaurante-busqueda.PNG)
