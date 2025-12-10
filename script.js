/* Variable unbekannteZahl erstellen, random für 0,XXX Zahl mit 10 Multiplizieren, mit round auf Ganzzahl runden 
// Javascript wird beim Laden der Seite automatisch ausgeführt*/
let unbekannteZahl = Math.round(Math.random() * 10);
// zum Spielstart sind es 0 Versuche
let versuche = 0;


// Funktion wird erst über Event ausgeführt
function zahlRaten(){
    // nach jedem Versuch Anzahl um 1 erhöhen
    versuche = versuche + 1;
    // Zähler/Counter: über id auf HTML-Element zugreifen und Inhalt definieren
    anzeigeVersuche.innerHTML = 'Versuche: ' + versuche;
    //Emojis über controll+command+space
    if(unbekannteZahl == gerateneZahl.value){
        nachricht.innerHTML = '🏆 Richtig geraten, die ' + unbekannteZahl + ' war gesucht. 🏆';
        //Konfetti einblenden über vorhandenen Code von https://www.npmjs.com/package/js-confetti
        let jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
            emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
         });
    }
    if(unbekannteZahl < gerateneZahl.value){
        nachricht.innerHTML = '❌ Die gesuchte Zahl ist kleiner, versuche es erneut. ❌';
    } 
    if(unbekannteZahl > gerateneZahl.value){
        nachricht.innerHTML = '❌ Die gesuchte Zahl ist größer, versuche es erneut. ❌';
    }
    // Löscht die Eingabe nach jedem Versuch
    gerateneZahl.value = '';
}
// alert(numberToGuess);