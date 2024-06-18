let serialdiv = document.querySelector(".serial");
let generatebtn = document.querySelector(".generate");

let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let characterslength = characters.length;

let serialLength = 8;

let serial = "";

function generateSerial () {
    for (let i = 0; i < serialLength; i++) {
        serial += characters.charAt(Math.random() * characterslength);

    }
    document.querySelector(".serial").innerHTML = serial;
}

generatebtn.addEventListener("click", () => {
    serialdiv= "";
    serial = "";

    generateSerial();
})