function compute()
{
    
    var p = document.getElementById("principal");
    var r = document.getElementById("rate");
    var y = document.getElementById("years");
    var res = document.getElementById("result"); 
    var currDate = new Date; 
    var future = currDate.getFullYear() + parseInt(y.value); 
    if(p.value == ""){
        alert("Please enter the amount");
        p.focus();
        return false;
    }
    let interest = Math.round(p.value * (r.value/100) * y.value); 
    res.innerHTML = "If you deposit " + p.value + "<br/>" + "at an interest rate of " + r.value + "% <br/>" + "You will receive an amount of " + interest + "<br/>"+ "in the year " + future + "<br/>";
    
   

    

    
}

function populateList() 
{
    var select = document.getElementById("years");
    for(var i = 0; i <= 30; i++){
        var optn = i; 
        var element = document.createElement("option"); 
        element.textContent = optn; 
        element.value = optn; 
        select.appendChild(element); 
    }
}
