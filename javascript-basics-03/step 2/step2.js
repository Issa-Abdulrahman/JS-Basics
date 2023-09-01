let show=document.querySelector("#show");
let hide=document.querySelector("#hide");
let text = document.querySelector("#texte")
show.addEventListener("click",display)
hide.addEventListener("click",display)

function display(e){
    if(e.target.id=="show"){
        text.style.display="block"
    }else{
        text.style.display="none"
    }
}
