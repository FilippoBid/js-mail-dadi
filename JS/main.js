/*const autorizedEmail = ["ezioauditore@gmail.com", "giusitnomasciu@gmail.com", "mericospiertu@gmail.com", "donatoflessibile@gmail.com", "pietrosmusi@gmail.com", "figrobar@gmail.com", "carcarlopravettoni@gmail.com"];
let userEmail = prompt("inserisci la tua E-mail");
for (let i = 0; i <= autorizedEmail.length; i++) {
    if (autorizedEmail[i] === userEmail) {
        alert(`benvenuto ${userEmail}!`)
    } else if (i === autorizedEmail.length && !i === userEmail) {
        i = 0
        alert("l'email non é presente nel database");
        userEmail = prompt(`inserire un E-mail valida per entrare`);

    }
};*/

const autorizedEmail = ["ezioauditore@gmail.com", "giusitnomasciu@gmail.com", "mericospiertu@gmail.com", "donatoflessibile@gmail.com", "pietrosmusi@gmail.com", "figrobar@gmail.com", "carcarlopravettoni@gmail.com"];
const userEmail = prompt("inserisci la tua E-mail");
for (let i = 0; i <= autorizedEmail.length; i++) {
    if (autorizedEmail[i] === userEmail) {
        alert(`benvenuto ${userEmail}!`)
    } else if (i == autorizedEmail.length && !(i === userEmail)) {
        alert("l'email non é presente nel database");
        window.location.reload();

    }
};


