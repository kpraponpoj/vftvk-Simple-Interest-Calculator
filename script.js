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
    if(p.value == 0){
        alert("Invalid input: Please enter the amount greater than 0"); 
        p.focus(); 
        return false; 
    }
    if(p.value < 0){
        alert("Invalid input: Please enter positive values"); 
        p.focus(); 
        return false; 
    }
    let interest = Math.round(p.value * (r.value/100) * y.value); 
    res.innerHTML = "If you deposit " + "<span style='background-color:yellow'>" + p.value + "</span>" +"<br/>" 
                    + "at an interest rate of " + "<span style='background-color:yellow'>" + r.value + "%" + "</span>" + "<br/>" 
                    + "You will receive an amount of " +"<span style='background-color:yellow'>"  + interest + "</span>" + "<br/>"
                    + "in the year " + "<span style='background-color:yellow'>" + future + "</span>" + "<br/>";
    
   

    

    
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
