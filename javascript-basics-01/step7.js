document.getElementById("validate").addEventListener("click",function(){
    var shoesize=parseFloat(document.getElementById("shoe_size").value);
    var bYear=parseFloat(document.getElementById("year").value);

    if (!isNaN(shoesize) && !isNaN(bYear)){
        var result = ((shoesize * 2 + 5) *50 -bYear +1766)
        alert("The result is: " + result);
    } else {
        alert("Invalid input. Please enter valid numbers.");
    }


})