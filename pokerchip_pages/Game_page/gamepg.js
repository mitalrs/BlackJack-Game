var dealerSum = 0;
yourSum = 0;

var dealerAceCount = 0;
var yourAceCount = 0;

var hidden;
var deck;

var conHit = true;

window.onload = function(){
    buildDeck();
}

function buildDeck(){
    let values = ["A","2", "3","4","5","6","7","8","9","10","J","Q","K"];
    let types = ["C", "D", "H", "S"];
    deck = [];


    for(let i=0;i<types.length;i++)
    {
        for(let j=0;j<values.length;j++)
        {
            deck.push(values[j]+ "-" + types[i]);
        }
    }
}

