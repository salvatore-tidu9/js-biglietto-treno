var km;

km = prompt("Km da percorrere");
console.log(km);



var età_passeggero;

età_passeggero = prompt("Età passeggero");
console.log(età_passeggero);



var importo;

importo = (km * 0.21);



var sconto_20;

sconto_20 = (importo / 100 * 20);

var importo_minorenni;

importo_minorenni = (km * 0.21) - (importo / 100 * 20);



var sconto_40;

sconto_40 = (importo / 100 * 40);

importo_over_65 = (km * 0.21) - (importo / 100 * 40);



if (età_passeggero < 18) {
    // alert("L'importo totale è di €" + importo_minorenni);

    document.getElementById("my_id_1").innerHTML = km;

    document.getElementById("my_id_2").innerHTML = età_passeggero;

    document.getElementById("my_id_3").innerHTML = importo_minorenni;
} else if ((età_passeggero >= 18) && (età_passeggero <= 65)) {
    // alert("L' importo totale è di €" + importo);

    document.getElementById("my_id_1").innerHTML = km;

    document.getElementById("my_id_2").innerHTML = età_passeggero;

    document.getElementById("my_id_3").innerHTML = importo;
} else if (età_passeggero > 65) {
    // alert("L'importo totale è di €" + importo_over_65);

    document.getElementById("my_id_1").innerHTML = km;

    document.getElementById("my_id_2").innerHTML = età_passeggero;

    document.getElementById("my_id_3").innerHTML = importo_over_65;
}






if ((isNaN(km)) || (km == "") || (km == "undefined")) {
    alert("L'importo totale è di NaN€");
} else if ((isNaN(età_passeggero)) || (età_passeggero == "") || (età_passeggero == "undefined")) {
    alert("L'importo totale è di NaN€"); 
}