# mercadolibre


Si tiene que descargar el repositorio, se deben agregar dependencias, solo ejecuta el siguiente comando: npm install en la terminal.

La base de datos utilizada fue el Mongodb. El servidor MongoDb está rodando en la herramienta en la nube llamada MLab.
El usuario y contraseña de bd están en el archivo server.js en la línea 7.
De esta forma la API está totalmente preparada para recibir gran volumen de tráficos


El programa se almacena en la herramienta Heroku. Sigue la dirección:
https://adnmutante.herokuapp.com/stats y https://adnmutante.herokuapp.com/mutant



Si es necesario, el programa se puede ejecutar utilizando un software que envie requiseo HTTP, por ejemplo el "Postman". 
De esta forma basta con enviar como información a través de HTTP Post, como ejemplo:
https://adnmutante.herokuapp.com/mutant

{
"dna": ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]
}


Para saber la relación entre lo humano y el mutante, basta con usar una llamada a través del Get:

https://adnmutante.herokuapp.com/stats


URL de la API nível 2: https://adnmutante.herokuapp.com/mutant

URL de la API nível 3: https://adnmutante.herokuapp.com/stats
