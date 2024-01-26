let nomeHeroi = "jubiscreodo"
let nivelHeroi = 7984
let nivel = ""
let carregando = "carregando"
if (nivelHeroi < 1000){
 nivel = "ferro"
} else if (nivelHeroi >= 1001 && nivelHeroi <= 2000){
  nivel = "bronze"
} else if (nivelHeroi >= 2001 && nivelHeroi <= 5000){
  nivel = "prata"
}  else if (nivelHeroi >= 5001 && nivelHeroi <= 7000){
  nivel = "ouro"
}  else if (nivelHeroi >= 7001 && nivelHeroi <= 8000){
  nivel = "platina"
}  else if (nivelHeroi >= 8001 && nivelHeroi <= 9000){
  nivel = "ascendente"
}  else if (nivelHeroi >= 9001 && nivelHeroi <= 10000){
  nivel = "imortal"
}  else if (nivelHeroi >= 10001){
  nivel = "radiante"
} 
for (let i = 0; i< 4 ; i++){
    carregando += 1
    console.log("carrgegando personagen " + i)
}
console.log ("o heroi " + nomeHeroi + " esta no nivel " + nivel)
