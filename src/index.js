import express from 'express';
import routes from './routes'; 
const app = express() // instanciranje aplikacije
const port = 3000 // port na kojem će web server slušati
app.get('/', routes.home)
app.get('/dodaj', routes.dodaj)
let dohvati = (req, res) => res.send(lista)
app.get('/dohvati', dohvati) 

app.listen(port, () => console.log(`Slušam na portu ${port}!`))
////Datum
//
//let vrijeme=moment().format("DD.MM.YYYY, HH:mm");
//console.log(vrijeme);
//
//
//let prognoza = ['sunčano', 'kišovito', 'oblačno'];
//let pomocni = prognoza[Math.floor(Math.random()*prognoza.length)];
//console.log('Danas će biti ' + pomocni);

var lista = [];
while(lista.length < 10){
    var r = Math.floor(Math.random() * 100) + 1;
    if(lista.indexOf(r) === -1) lista.push(r);
}
console.log(lista);

