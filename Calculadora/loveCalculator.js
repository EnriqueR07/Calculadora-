const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;


xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
        let resultado = JSON.parse(this.response)
        document.getElementById("percentatge").innerHTML = resultado.percentage + "❤️";
        document.getElementById("frase").innerHTML=resultado.result+"🫶";
        document.getElementById("imagen").innerHTML=resultado;
        if(resultado.percentage <50){
            document.getElementById("imagen").src = "./img/corazon roto.png"}
            else if(resultado.percentage >50){
                document.getElementById("imagen").src = "./img/corazón png.png"}

        if(resultado.percentage <50){
            ducumentos.get
        }
        document.getElementById(" backgroundImage").innerHTML=resultado;
        if(resultado.percentage <50){
            document.getElementById("background-color").src = "" }
            else if (resultado.porcentage <50){
            }
  color = document.getElementById("color").innerHTML;
if (resultado.percentage <50){
    document.getElementById("color").innerHTML=resultado = "#0000FF";
}
else if (resultado.percentage >50){
    document.getElementById("color").innerHTML=resultado = "#FF0000";
}
}
});

document .getElementById("afegir").addEventListener("click", function () {
let nom1 = document.getElementById("1").value
let nom2 =  document.getElementById("2").value

xhr.open('GET', 'https://love-calculator.p.rapidapi.com/getPercentage?sname='+nom1+'&fname='+nom2);
xhr.setRequestHeader('X-RapidAPI-Key', '8d5886dc28mshcb8cb4af2de6751p1d614bjsnc8828f0f22b3');
xhr.setRequestHeader('X-RapidAPI-Host', 'love-calculator.p.rapidapi.com');

xhr.send();

})

