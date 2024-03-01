function saluta(nome){
    //alert(`CIAO ${nome}`);
    alert('CIAO ' + nome);
}
function colora(){
    let btn = document.querySelector("#btn_colora");
    btn.style.backgroundColor = "red";
    btn.style.color = "#00FF00";
    btn.style.borderRadius = "50%";
    btn.classList.add("btn");//inserisce una nuova classe
}
function cancella(){
    let btn = document.querySelector("#btn_colora");
    btn.remove();
}
function crea(){
    let main = document.querySelector("main");
    main.innnerHTML = "<button onclick='cancella()'>Nuovo Bottone</button>";
}