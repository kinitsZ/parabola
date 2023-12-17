const btn = document.getElementById('redirect');
const btn1 = document.getElementById('redirect1');
const btn2 = document.getElementById('redirect2');

btn.addEventListener("click", function(){
    window.location = "index.html";
});
btn1.addEventListener("click", function(){

    window.location = "prob1.html";
});
btn2.addEventListener("click", function(){
    window.location = "prob2.html";
});