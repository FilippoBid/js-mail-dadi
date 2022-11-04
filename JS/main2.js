const startBtn = document.getElementById("start");
const outputEl = document.querySelector(".card-text")
console.log();

startBtn.addEventListener("click", function () {

    for (let i = 0; i < 10; i++) {
        let numeroUtente = (Math.round(Math.random() * 5) + 1);
        let numeroComputer = (Math.round(Math.random() * 5) + 1);
        console.log(numeroUtente); 
        outputEl.innerHTML += `<h1>${numeroUtente}</h1>`;
        
        console.log(numeroComputer); 
        outputEl.innerHTML += `<h1>${numeroComputer}</h1>`;
        
            if (numeroUtente > numeroComputer) {
                outputEl.innerHTML += `<h1>ti é andata bene</h1>`;
            } else if (numeroComputer > numeroUtente) {
                outputEl.innerHTML += `<h1>a sto giro hai perso</h1>`;
            } else {
                outputEl.innerHTML += `<h1>sei cosí sfigato che non riesci ne a vincere ne a perdere</h1>`;
            }
    }
    
})

/* let numeroUtente;
let numeroComputer;


    for (i = 0; i < 10; i++) {
        let numeroUtente = Math.round(Math.random() * 5) + 1;;
        let numeroComputer = Math.round(Math.random() * 5) + 1;;
        alert = (`il tuo numero é ${numeroUtente}`);
        alert = (`il numero del tuo avversario é ${numeroComputer}`);
            if (numeroUtente > numeroComputer) {
                alert = (`ti é andata bene`);
            } else if (numeroComputer > numeroUtente) {
                alert = (`a sto giro hai perso`);
            } else {
                alert = (`sei cosí sfigato che non riesci ne a vincere ne a perdere`);
            }
    }

 */