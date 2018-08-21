# mercadolibre-challenge

Al descargar el repositorio, se deben agregar dependencias, solo ejecuta el siguiente comando: npm install en la terminal.

La base de datos utilizada fue el Mongodb. El servidor MongoDb está rodando en la herramienta en la nube llamada MLab.


Para ejecutar o programar, basta con utilizar algún software que envie requiseo http, por exemplo o "Postman",
Desta forma basta enviar como informações a través de HTTP Post, conforme exemplo:
http://localhost:3000/mutante

{
"dna": ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]
}

Y para obtener el resultado basta utilizar una requisa a través de Get:

http://localhost:3000/stats

El resultado es una relación entre el humano y el mutante.

URL de la API nível 2: http://localhost:3000/mutante

URL de la API nível 3: http://localhost:3000/stats
