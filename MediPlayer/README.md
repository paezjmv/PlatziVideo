# ¿Como llega un script al navegador?

El *DOM* es una representacion de un documento de hmtl. Al cargar un archivo index.html, el *DOM* carga toda una estructura y procesa. Cuando termina de procesar es cuando lo llamamos *DOMContentloaded". Hasta este punto tenemos una garantia que todo esta cargado y listo para manipular.

En muchas ocasiones nos encontraremos con scripts incluidos den el html. Estos pueden ser de diversas maneras. La manera en como el *DOM* toma estos scripts no hay que tomarlos a la ligera, ya que dependiendo del tipo de script y ubicacion del mismo dentro de la estructura del html tendra resultados diversos.

Estos pueden ir desde cargas ligeras como *google analytics* hasta librerias complejas, codigos externos o embebidos. Ejemplo: Cuando el hmtl llegue a ese codigo embebdio va a detener todo el procesamiento. Hastta que este no se haya realizado, no se continuara cargando el *DOM* 

Asi que la pregunta *¿Donde ponemos ese script?* Se vuelve muy importante para el performence de nuestra pagina. Si bien, siempre estaremos pensando en que es mas importante para nuestra pagina. Priorizar las opciones a ejecutar y posteriormente empezar la ejecucion de los partes menos crucianles.

## Codigos Externos
Muchas de las librerias o codigos de externos que utilizamos pueden devidirse en 2 instancias: *Script fetching y Script Execution*. El tiempo de fetching dependera mucho del tipo y tiempo de carga de la peticion. Para no detener la carga del html, muchas veces se opta por realizar de manera asincrona con *async*. Sin embargo, una vez terminando de inmediato inicia el *execution* interrumpiendo la carga del *DOM*.

Como una mejor practica, se creo el *defer* para estos casos. Este nos permite cargar de forma asincrona la peticion y ejecutarla cuando el *DOM* ya haya sido cargado.
***

# Contexto de ejecucion
Se define como el entorno en el que se ejecuta el codigo de Js. Por entorno, se refiere al valor de *this, variables, objetos y funciones* a las que el codigo Js tiene acceso en un *momento particular*.

Si una variable u otra expresion no esta en el contexto de ejecucion, entonces estas no estan disponibles para su uso.

## Contexto de ejecucion global
Este es el contexto de ejecucion predeterminado en el que Js comienza su ejecucuion cuando el archuivo se carga por primera vez.

Todo el **codigo globaal** es el codigo que **no** esta dentro de ninguna funcion u objeto, es decir, se ejecuta dentro del contexto de ejecucion global.

El *contexto de ejecucion global* **no** puede ser mas de uno por que solo es posible un entorno global para la ejecucion del codigo Js ya que su motor tiene un solo subproceso.

## Contexto de ejecuccion funcional
Se define como el contexto creado por el motor de Js cada vez que encuntra alguna llamada a una funcion. Cada funcion tiene su propio contexto de ejecucion. Puede ser mas de uno.

El contexto de ejecucion funcional tiene acceso a todo **el codigo del contexto de ejecucion global**, aunque viceversa no es aplicable.

# Scope
El scope de una variable representa el tiempo de vida en el que esta existe. Puede ser una variable que hayamos definido o el argumento de una funcion.

Js no siempre tuvo el mejor scope de variable. Hoy tenemos 2 declaraciones que permiten eliminar los problemas del mismo. **Let y const**.

## ¿Por que es importante el alcance?
1. El princiapl beneficio es la seguridad. Es decir, **solo puedes acceder a las variables des un area determinada del programa**. Usando el alcance podemos evitar modificaciones no deseadas a las variables de otras partes del programa
2. El alcance tambien**reduce las colisiones del espacio de nombres**. Es decir, podemos usar los **mismos nombres de variables** en diferentes ambitos.

## Tipos de alcancde del Scope
Existen 4 tipos de alcance en Js: **Global, de Funcion, de bloque y Modular**.

* **Alcance global:** Windows es el detalle. Cualquier variable que no este dentro de ninguna funcion o bloque (un par de llaves) esta dentro de este. Se puede acceder a las variables en el ambito local desde **cualquier parte** del programa. Incluso corremos el riesgo de **modificar** alguna variable ya definida en este ambito.

* **Alcance de Funcion:** Las variables declaradas dentro de una funcion estan dentro del alcance local (incluyendo los argumentos que se pasan a la funcion). **Solo se puede acceder desde esa funsion**, lo que significa que **no** se puede acceder desde el codigo externo.

* **Alcance de bloque:** ES6 introdujo las variables **let y const**. A diferencia de **var**, se pueden definir en el par de llaves mas cercano. Eso significa que **no se puede acceder desde fuera de ese par de llaves**. 

Dentro de este apartado podemos encontrar el **Alcance anidado**. Al igual que las funciones de Js, un ambito se puede anidar dentro de otro ambito. 

* **Module Scope:** Cuando se denota un script de tipo module con el atributo **type="Module"**, las variables son limitadas al archivo en el que estan declaradas. Ya no podemos acceder a las variables globales de este archivo desde la consola.

Ahora podemos separar codigo que este en un archivo js suando **export e import**.

## Metodos call, apply y bind
Son metodos dentro del lenguaje que nos permiten establecer el valor de *this*, es decir **cambiar el contexto** que se va a usar cuando la funcion sea llamada.

* *call* permite invocar la nueva instancia de this, añadir parametros con parentesis y ejecutarla de inmediato

* *apply* permite invocar la nueva instancia de *this*, invocar parametros con [] y ejecutarla de inmediato

* *bind* permite señalar la nueva instancia de this. Tiene que ser invocada despues de ser creada.