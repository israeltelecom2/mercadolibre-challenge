const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose
    .connect('mongodb://israel:Advanced840@ds125862.mlab.com:25862/exame')
    .then(() => console.log(`Connected on exame database`))
    .catch(err => console.log(err))

const Schema = mongoose.Schema;
 
const MutantDnaSchema = new Schema({
  dna: String
})

const HumanDnaSchema = new Schema({
  dna: String
})

MutantDna = mongoose.model('count_mutant_dna', MutantDnaSchema)
HumanDna = mongoose.model('count_human_dna', HumanDnaSchema)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const port = 3000

function checkDna(reqDna){

  // Declaring counter variables
  let diagonalCount = 0
  let verticalCount = 0
  let horizontalCount = 0
  // Declaring array dna and putting strings coming from request into arrays
  const dna = []
  reqDna.forEach(e => {
    dna.push(e.split(""))
  })

  // Checking for diagonal matches
  for(let i = 0; i < dna.length-1; i++){
   if(dna[i][i] == dna[i+1][i+1]){
    diagonalCount++
   }
  }

  // Checking for vertical matches
  for(let j = 0; j < 6; j++){
    let columnCount = 0
    for(let i = 0 ; i < dna.length-1; i++){
      if(dna[i][j] == dna[i+1][j]){    
        columnCount++
      }
     }
     if(columnCount >= 4){
      verticalCount = columnCount
     }
  }

  // Checking for horizontal matches
  for(let j = 0; j < 6; j++){
    let rowCount = 0
    for(let i = 0 ; i < dna.length-1; i++){
      if(dna[j][i] == dna[j][i+1]){    
        rowCount++
      }
     }
     if(rowCount >= 3){
      horizontalCount = rowCount
     }
  }
  
 //Checking counters for return result
 if(horizontalCount >= 3 || verticalCount >= 3 || diagonalCount >= 3){
   return true
 }else {
   return false
 }
 
}

app.get('/stats', (req, res) => {
  // Sending the response to the user and adding to database based o checkDna function
  let count_mutant_dna = 0
  let count_human_dna = 0
  MutantDna.count()
  .then(MutantDnas => count_mutant_dna = MutantDnas)
  .then(data => {return HumanDna.count()})
  .then(HumanDnas => count_human_dna = HumanDnas)
  .then(data => {return count_mutant_dna/count_human_dna})
  .then(ratio => res.json({count_mutant_dna: count_mutant_dna, count_human_dna: count_human_dna, ratio: ratio ? ratio.toFixed(1) : 0 }))
})

app.post('/mutant', (req, res) => {
// Sending the response to the user and adding to database based o checkDna function
if(checkDna(req.body.dna)){
  res.status(200).json({msg: 'DNA MUTANTE'})

  const mutantDna = new MutantDna ({
    dna: req.body.dna,
   })
   mutantDna.save()

}else {
  res.status(403).json({msg: 'DNA HUMANO'})
  const humanDna = new HumanDna ({
    dna: req.body.dna,
   })
   humanDna.save()
}

})

app.listen(port, ()=>{
 console.log(`Server running at port ${port}`)
})
