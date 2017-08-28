function textInputChange(textInputId)
{
    alert(textInputId);
    
    // TODO:
    switch(textInputId)
    {    
        case "priceValue":
            annualPercentDecrease.value = 300;
            break;
        
        default:
            break;
    }
}

function load() 
{
    priceValue.value = 100;
    
    document.all.numberOfYearsOwned.value = 4;
    
    document.all.annualPercentDecrease.value = 15;
    //document.all.annualPercentDecrease.fireEvent("onChange");
    
    //restValue is set up my the event handler above
//    restValue.onChange = restValueChange();
//    restValue.value = 52;
    
    document.all.intrestPerCent.value = 5;
    
    document.all.gasoline95Radio.checked = true;
}

function annualValueDecreaseChange()
{
    // TODO: check if valid value

    var newRestValue = getRestValue(
                        priceValue.value, 
                        annualPercentDecrease.value, 
                        numberOfYearsOwned.value);
    
//    if (restValue.value != newRestValue)
//    {
        restValue.value = newRestValue;
//    }
}

function restValueChange()
{
    // TODO: check if valid value

    var newAnnualPercentDecrease = getAnnualPercentDecrease(
                        priceValue.value, 
                        restValue.value, 
                        numberOfYearsOwned.value);
    
    if (annualPercentDecrease.value != newAnnualPercentDecrease)
    {
        annualPercentDecrease.value = newAnnualPercentDecrease;
    }
    
    return false;
}

function addEvent(obj, eventName, fn){
 if (obj.addEventListener){
   obj.addEventListener(eventName, fn, true);
   return true;
 } else if (obj.attachEvent){
   var r = obj.attachEvent("on"+eventName, fn);
   return r;
 } else {
   return false;
 }
}

