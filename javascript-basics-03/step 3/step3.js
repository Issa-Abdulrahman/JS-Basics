let div=document.querySelectorAll(".color")
let text=document.querySelector("#text")
for (let i=0;i<div.length;i++){
    div[i].onclick=function(e){
        if(e.target.classList[1]=="green"){
            text.style.color="green"
        }
        else if(e.target.classList[1]=="red"){
            text.style.color="red"
        }else{
            text.style.color="blue"
        }
    }
}