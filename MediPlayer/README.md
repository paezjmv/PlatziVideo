# ¿Como llega un script al navegador?

El *DOM* es una representacion de un documento de hmtl. Al cargar un archivo index.html, el *DOM* carga toda una estructura y procesa. Cuando termina de procesar es cuando lo llamamos *DOMContentloaded". Hasta este punto tenemos una garantia que todo esta cargado y listo para manipular.

En muchas ocasiones nos encontraremos con scripts incluidos den el html. Estos pueden ser de diversas maneras. La manera en como el *DOM* toma estos scripts no hay que tomarlos a la ligera, ya que dependiendo del tipo de script y ubicacion del mismo dentro de la estructura del html tendra resultados diversos.

Estos pueden ir desde cargas ligeras como *google analytics* hasta librerias complejas, codigos externos o embebidos. Ejemplo: Cuando el hmtl llegue a ese codigo embebdio va a detener todo el procesamiento. Hastta que este no se haya realizado, no se continuara cargando el *DOM* 

Asi que la pregunta *¿Donde ponemos ese script?* Se vuelve muy importante para el performence de nuestra pagina. Si bien, siempre estaremos pensando en que es mas importante para nuestra pagina. Priorizar las opciones a ejecutar y posteriormente empezar la ejecucion de los partes menos crucianles.

## Codigos Externos
Muchas de las librerias o codigos de externos que utilizamos pueden debidirse en 2 instancias: *Script fetching y Script Execution*. El tiempo de fetching dependera mucho del tipo y tiempo de carga de la peticion. Para no detener la carga del html, muchas veces se opta por realizar de manera asincrona con *async*. Sin embargo, una vez terminando de inmediato inicia el *execution* interrupiendo la carga del *DOM*.

Como una mejor practica, se creo el *defer* para estos casos. Este nos permite cargar de forma asincrona la peticion y ejecutarla cuando el *DOM* ya haya sido cargado.