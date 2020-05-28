## Solucion ejercicio practico

## Instalar dependencias

``
yarn install
``

o

``
npm install
``

## Para ejecutar
``
REACT_APP_APY_KEY={aqui la clave de Google} yarn start
``

o


``
REACT_APP_APY_KEY={aqui la clave de Google} npm start
``



## Solución
Se utilizó CRA para crear la aplicación. También la librería llamada google-maps-react para facilitar la comunicación con la API de Google.

De lo solicitado, se muestra el mapa y la barra de búsqueda. Se puede buscar lugares y marcarlos en el mapa. Cada "Marker" se guarda en el store de Redux y se mantienen en el mapa. Si se hace dobleclick el marker se muestra info del lugar.

## Faltó hacer
Dado el tiempo no pude agregar mas tests, se dejo uno simple que renderiza el mapa a modo de ejemplo.
