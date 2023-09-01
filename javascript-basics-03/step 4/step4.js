document.querySelector("[name='button']").onclick=()=>{
    let pass=document.querySelector("#password")
    let conf=document.querySelector("#confirmation")
    if(pass.value !== conf.value){
        pass.style.border="2px solid red"
        conf.style.border="2px solid red"
    }
    else{
        pass.style.border="2px solid green"
        conf.style.border="2px solid green"
    }
}