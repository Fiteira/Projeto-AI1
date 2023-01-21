
/*menu de 3 barras responsivo ao click*/
const barra3 = document.querySelector(".menu3barras");
const navMenu = document.querySelector(".nav-menu");

barra3.addEventListener("click",( )=>{
    barra3.classList.toggle('active');
    navMenu.classList.toggle('active');
})


/*para aparecer o botao quando damos scroll */

const botao = document.querySelector(".botao");
const topo = document.querySelector(".topo");
const metadeWindow = window.innerHeight * 2.2;

function aprecerbotoa()
{
    const topoItem = topo.getBoundingClientRect().top
    const itemVisivel = topoItem - metadeWindow < 0

    //console.log(topoItem)

    if(itemVisivel){
        botao.style.display = "block";
    }else{
        botao.style.display = "none";
    }

}
window.addEventListener('scroll',aprecerbotoa)


/*timer para o footer */

time();
function time()
{
    const interval = setInterval(function() {
        var today = new Date();
        var hour = today.getHours();
        var minute = today.getMinutes();
        var second = today.getSeconds();
        if(hour<10) hour = "0" + hour;
        if(minute<10) minute = "0" + minute;
        if(second<10) second = "0" + second;
        var time = hour + ":" + minute + ":" + second;
        document.getElementById("timer").innerText = time;
      }, 100);
}