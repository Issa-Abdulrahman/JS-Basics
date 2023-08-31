let name = document.querySelector('#name');
let surname = document.querySelector('#surname');
let city = document.querySelector('#city');
let reset = document.querySelector('button');

reset.addEventListener("click",function(){
let yes = confirm("yes");
if(yes){
    name.value="";
    surname.value="";
    city.value="";
}
 

})