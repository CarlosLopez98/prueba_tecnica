# Prueba técnica
Prueba técnica para Creativa

Este proyecto consiste en la implementación de una API para almacenar texto a una cadena que se encuentra en el servidor, esto mediante peticiones GET y POST.
Cada vez que el servidor recibe la petición POST y esta contiene texto, lo concatena y además añade un punto(.) entre cada uno para diferenciarlos.
La peticion GET simplemente devuelve esta cadena para que el cliente la maneje.

Por otro lado, el cliente está compuesto por un formulario que contiene un input y un botón, es decir, escribimos algo en el input y le damos al botón, esto ejecutara la petición POST a la API y de una vez hace la peticion GET para actualizar el contenido de la cadena, que en este caso se muestra en forma de lista usando como separacion para los items el punto(.).

# Instrucciones
- Instalar las dependencias
```
cd api/
npm install
```
- Ejecutar el servidor de node
(Ubicado en api/) 
```
npm start
```
- Abrir el archivo html ubicado en:
```
front/index.html
```

Si todo salio bien, debería funcionar correctamente.
