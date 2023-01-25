Esta es la documentación para una aplicación Web del Emprendimiento Pawe.

![Alt text](/src/assets/LogoPawe.svg?raw=true "Distibución Inicial de las Carpetas")

<b><i>Pawe</i></b> es un emprendimiento colombiano, ideado por la diseñadora <b>Mariana Jiménez</b>, 
                        quién después de estudiar Producción Escénica y Visual en LaSalle College Institute de Bogotá, 
                        decidió plasmar su <b>creatividad y talento</b> en la elaboración de Bolsos y accesorios 
                        hechos a la medida. 
                        <br></br>
                        <br></br>
                        Todos los productos cuentan con <i>inspiración de películas, y momentos trascendentales de la producción escénica </i>
                        en los cuales  <b>la materialidad, los colores y las texturas son lo personajes principales</b> en la creación de bolsos 
                        y carteras con el toque de originalidad que distinguen la identidad de la marca. Dale click para continuar.

![Alt text](./carpetas.png?raw=true "Distibución Inicial de las Carpetas")

Cuando se crea una nueva aplicación con Vite en React, se generan varios archivos y carpetas por defecto:

node_modules: esta carpeta contiene todas las dependencias de npm utilizadas en la aplicación.

public: esta carpeta contiene los archivos estáticos de la aplicación, como imágenes, archivos CSS, etc. También contiene el archivo index.html, que es el archivo principal de la aplicación.

src: esta carpeta contiene el código fuente de la aplicación. Por defecto, contiene las siguientes subcarpetas:

components: contiene los componentes de React de la aplicación.
App.js: es el componente principal de la aplicación, el cual es renderizado en el archivo index.js
index.js: es el punto de entrada de la aplicación, donde se renderiza el componente principal App
package.json: este archivo contiene la información de las dependencias y scripts de la aplicación.

.gitignore: es un archivo en el que se especifica qué archivos o carpetas deben ser ignorados por Git.

vite.config.js: es el archivo de configuración de Vite, que se utiliza para configurar el servidor de desarrollo y otras opciones de la aplicación.

![Alt text](./main.png?raw=true "Archivo main.jsx")

Este es el archivo de punto de entrada para la aplicación en React. Utiliza la librería React y ReactDOM para renderizar la aplicación en el navegador.

La primera línea importa la librería React.

La segunda línea importa ReactDOM, que es la librería de React utilizada para interactuar con el DOM del navegador.

La tercera línea importa el componente principal de la aplicación, que se llama App.

La cuarta línea importa un archivo CSS llamado "index.css" que se utiliza para dar estilo a la aplicación.

La quinta línea importa un componente llamado "StateProvider" del archivo "./StateProvider".

La sexta línea importa un archivo de reducer y un estado inicial del archivo "./reducer.jsx"

La función ReactDOM.createRoot() es una función experimental que se utiliza para crear un componente raíz en lugar de usar ReactDOM.render().

Dentro de la función createRoot() se establece el elemento del DOM donde se renderizará la aplicación, especificando el elemento con id "root".

Dentro de la función createRoot() se utiliza el componente <React.StrictMode> para ejecutar una versión en modo estricto de la aplicación, que ayuda a detectar problemas potenciales en tiempo de desarrollo.

Dentro de <React.StrictMode>, se utiliza el componente <StateProvider> el cual proporciona un contexto de estado global para la aplicación, utilizando el estado inicial y reducer importado anteriormente.

Dentro de <StateProvider> se renderiza el componente principal <App />

En general, este código establece la configuración inicial para la aplicación y se encarga de renderizar la aplicación en el navegador utilizando React y ReactDOM.