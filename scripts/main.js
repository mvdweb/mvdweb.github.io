// Plaatje veranderen met muisklik
var mijnAfbeelding = document.querySelector('img');

mijnAfbeelding.onclick = function() {
    var mijnSrc = mijnAfbeelding.getAttribute('src');
    if(mijnSrc === 'afbeeldingen/firefox-icon.png') {
      mijnAfbeelding.setAttribute ('src','afbeeldingen/firefox-icongray.png');
    } else {
      mijnAfbeelding.setAttribute ('src','afbeeldingen/firefox-icon.png');
    }
}

// Titel met persoonlijke naam instellen
var mijnKnop = document.querySelector('button');
var mijnHoofding= document.querySelector('h1');

function stelNaamIn() {
  var mijnNaam = prompt('Voer uw naam in');
  localStorage.setItem('naam', mijnNaam);
  mijnHoofding.textContent = 'Mozilla, ' + mijnNaam;
}

if(!localStorage.getItem('naam')) {
  stelNaamIn();
} else {
  var opgeslagenNaam = localStorage.getItem('naam');
  mijnHoofding.textContent = 'Mozilla, ' + opgeslagenNaam;
}

mijnKnop.onclick = function() {
  stelNaamIn();
}


//var mijnIndexPagina = document.querySelector('html');
//var mijnHoofding = document.querySelector('h1');

//mijnHoofding.textContent= 'Hallo wereld!';

/*mijnIndexPagina.onclick = function(){
	alert('U heeft geklikt');
}*/

// var mijnHoofding = document.querySelector('h1');
// mijnHoofding.textContent = 'Hallo wereld!';

/*function vermenigvuldigen(num1,num2) {
  var resultaat = num1 * num2;
  return resultaat;
}*/

// alert(vermenigvuldigen(8,7));

/* document.querySelector('html').onclick = function() {
    alert('Au! Houd op met me te porren!');
}*/

