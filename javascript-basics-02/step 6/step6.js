let allImg=document.querySelectorAll("img");
console.log(allImg);

allImg.forEach((i)=>{
        i.addEventListener("mouseover",()=>{
        i.src=`images/${i.id}_2.jpg`;
        
    })
   
})
