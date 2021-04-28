var obrazki = ["pizza.jfif", "pizza2.jfif", "pizza3.jfif"];
var nr = 0;

function nastepny() {
	var galeria = document.getElementById("galeria");
	nr++;
	if (nr >= obrazki.length) {
		nr = 0;
	}
	galeria.src = "grafika/" + obrazki[nr];
}

function poprzedni() {
	var galeria = document.getElementById("galeria");
	nr--;
	if (nr < 0) {
		nr = obrazki.length - 1;
	}
	galeria.src = "grafika/" + obrazki[nr];
}

function zmiana() {
	nastepny();
	setTimeout("zmiana()",5000);
}

