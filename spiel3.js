// Wartet, bis die Seite vollständig geladen ist
window.onload = function() {
	// Holt das Character-Element aus dem DOM
	let character = document.getElementById("character");
	// Holt das Block-Element aus dem DOM
	let block = document.getElementById("block");

	let speed =3500;
	block.style.animation = "block speed + ms";


	// Definition der Sprungfunktion
	function jump() {
		// Prüft, ob der Character nicht bereits springt
		if (!character.classList.contains("animate")) {
			// Fügt die animate-Klasse hinzu (löst Animation aus)
			character.classList.add("animate");

			// Timer zum Zurücksetzen der Animation
			setTimeout(function () {
				// Entfernt die animate-Klasse nach Sprungende
				character.classList.remove("animate");
				// Debug-Ausgabe in der Konsole
				console.log("gehüpft"); // Prüfen Sie die Konsole
			}, 500); // 500ms = Dauer der Sprunganimation
		}
	}

	// Event-Listener für Tastatureingaben
	document.addEventListener("keydown", (event) => { //Hüpfen durch Leerzeichen
		// Prüft, ob die Leertaste gedrückt wurde
		if (event.code === "Space") {
			// Führt Sprungfunktion aus
			jump();
		}
	});

	// Event-Listener für Mausklicks auf das Spielfeld
	document.getElementById("game").addEventListener("click", jump); //Hüpfen durch Maus Click

	// Kollisionserkennung (läuft alle 10ms)
	let checkDead = setInterval(() => { //gibt top Position
		// Aktuelle vertikale Position des Characters
		let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); // parseInt entfernt 'px'
		// Aktuelle horizontale Position des Blocks
		let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

		// Kollisionsbedingung:
		// - Block ist zwischen 0-20px vom linken Rand
		// - Character ist tiefer als 130px (nicht gesprungen)
		if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
			// Stoppt die Block-Animation
			block.style.animation = "none";
			// Versteckt den Block
			block.style.display = "none";
			// Spielende-Meldung
			alert("du hast verloren")
		}
	}, 10) // Intervall: 10 Millisekunden
}