let btn=document.querySelector("button");



btn.addEventListener("click", function(){
    let RandomColor=getRandomColor();

    let h1=document.querySelector("h1");
    h1.innerText=RandomColor;

    let div=document.querySelector("div");
    div.style.backgroundColor=RandomColor;

});




function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;

}