let nrows = prompt("Ingresa el número de filas", "4");
let ncolumns = prompt("Ingresa el número de columnas", "4");
let tableBody = document.body.querySelector('[data-function="board"]');
let contador = 0;
let intentos = 0;
let attCounter = document.body.querySelector ('[data-function="attempts"]')
const tesoro = "el" + NumerosAleatorios(1,(nrows*ncolumns));


for (let i= 0 ; i< nrows; i++){
    let tr = tableBody.insertRow(i);

    for (let ind= 0 ; ind< ncolumns; ind++){
        const td = tr.insertCell(ind);
        contador++;
        td.style.width = "10%";
        td.style.height= "auto"
        td.id = "el" + contador;
        
        let img = document.createElement("img");

        img.setAttribute ("src", "sand.png");
        img.style.height = "auto";
        img.style.width = "150px";

        td.addEventListener ("click",function(){
            check(img,td.id)
        })
        td.appendChild(img);
        
        
    }
}

function check (img,id){
    if (id != tesoro){
        img.setAttribute("src", "crab.png")
        img.style.height = "90px";
        img.style.width = "150px";
        intentos ++;
        attCounter.textContent = intentos;
        const sonido = cargarSonido("crab-sound.mp3");
        sonido.play();
        
    }else{
        img.setAttribute("src", "treasure.png")
        img.style.height = "90px";
        img.style.width = "150px";
        
        myVar = setTimeout(alertLento, 500);
        
    }
    
    
    
}

function NumerosAleatorios(min, max) {
    return Math.round(Math.random() * (max - min) + min);
 }


function alertLento() {
    alert("You won with "+ intentos + " attempts");
    window.location.reload()
}


const cargarSonido = function (fuentee) {
    const sonido = document.createElement("audio");
    sonido.src = fuentee;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.playbackRate = 3;
    sonido.style.display = "none"; // <-- oculto
    document.body.appendChild(sonido);
    return sonido;
};