const div=document.createElement("div")
const name=document.querySelector("#name")
name.oninput=function(){
    div.textContent=name.value
    document.body.append(div)
}