/* todos
    pre-condition: isNumeric (eller liknande)
*/

document.body.onLoad = initialize();

function initialize()
{
    // initialize presenter
    p = new presenter();
    p.view = document;
    p.setDefaultValuesOfViewAndCalculator();    
}

function presenter()
{
    this.view = null;
    this.calculator = new calculator();
    this.p = this;
    
    this.setViewFromCalculator = function()
    {
        p.view.getElementById("valueDecrease").value = parseInt(p.calculator.annualValueDecrease);
        p.view.getElementById("fuelCost").value =               p.calculator.annualFuelCost;
        p.view.getElementById("interestCost").value =           p.calculator.annualInterestCost;
        p.view.getElementById("tyreCost").value =               p.calculator.annualTyreCost;
        p.view.getElementById("taxCost").value =                p.calculator.annualTaxCost;
        p.view.getElementById("miscCost").value =               p.calculator.annualMiscCost;
        p.view.getElementById("serviceAndRepairCost").value =   p.calculator.annualServiceAndRepairCost;
        p.view.getElementById("insuranceCost").value =          p.calculator.annualInsuranceCost;
        p.view.getElementById("commuteTaxDeduction").value =    p.calculator.getAnnualCommuteTaxDeduction();
        p.view.getElementById("sumAnually").value =             p.calculator.sumAnually;
        p.view.getElementById("sumMonthly").value =             p.calculator.sumMonthly;
        p.view.getElementById("sumMiley").value =               p.calculator.sumMiley;        
    }

    this.setCalculatorFromView = function()
    {
        /* todo: encapsulate parseFloat( ... .replace(",",".") in a method */
        p.calculator.carValue = parseInt(p.view.getElementById("carValue").value);
        p.calculator.yearsToOwn = parseInt(p.view.getElementById("yearsToOwn").value);
        p.calculator.fuelConsumptionPerMile = 
            parseFloat(p.view.getElementById("fuelConsumptionPerMile").value.replace(",","."));
        p.calculator.annualTaxCost = parseInt(p.view.getElementById("annualTax").value);
        p.calculator.annualMiscCost = parseInt(p.view.getElementById("annualCareCost").value) + 
                                      parseInt(p.view.getElementById("parking").value) + 
                                      parseInt(p.view.getElementById("inspection").value);
        p.calculator.serviceAndRepairs = parseInt(p.view.getElementById("serviceAndRepairs").value);
        p.calculator.annualInsuranceCost = parseInt(p.view.getElementById("insurance").value);
        p.calculator.annualPrivateDistance = parseInt(p.view.getElementById("annualPrivateDistance").value);
        p.calculator.annualWorkDistance = parseInt(p.view.getElementById("annualWorkDistance").value);
        p.calculator.tyresPer1000Mile =
            parseFloat(p.view.getElementById("tyresPer1000Mile").value.replace(",","."));
        p.calculator.annualCareCost =
            parseFloat(p.view.getElementById("annualCareCost").value.replace(",","."));
        p.calculator.annualInsuranceCost=
            parseFloat(p.view.getElementById("insurance").value.replace(",","."));
        p.calculator.intrest=
            parseFloat(p.view.getElementById("intrest").value.replace(",","."));
        
        p.calculator.fuelPrice = p.getFuelPrice();
        p.calculator.restValue = p.getRestValue();
        
        
        p.calculator.calculateResults();
    }

    this.viewElementChange = function()
    {
        p.setCalculatorFromView();
        p.setViewFromCalculator();
    }
    
    this.getRestValue = function()
    {
        if (p.view.getElementById("restValueRadio").checked) 
            return parseFloat(p.view.getElementById("restValue").value.replace(",","."));
        
        return p.calculator.calculateRestValue(
            parseFloat(p.view.getElementById("annualPercentDecrease").value.replace(",",".")));
    }
    
    this.getFuelPrice = function()
    {
        if (p.view.getElementById("fuel95Radio").checked) 
            return parseFloat(p.view.getElementById("fuel95").value.replace(",","."));
            
        if (p.view.getElementById("fuel98Radio").checked) 
            return parseFloat(p.view.getElementById("fuel98").value.replace(",","."));
            
        if (p.view.getElementById("dieselRadio").checked) 
            return parseInt(p.view.getElementById("diesel").value.replace(",","."));
            
        if (p.view.getElementById("e85Radio").checked)    
            return parseInt(p.view.getElementById("e85").value.replace(",","."));        
        
        return 0;
    }
    
    this.setDefaultValuesOfViewAndCalculator = function()
    {
        // set values for view
        p.view.getElementById("carValue").value = 150000;
        p.view.getElementById("yearsToOwn").value = 3;
        p.view.getElementById("annualPrivateDistance").value = 2000;
        p.view.getElementById("intrest").value = 5;
        p.view.getElementById("annualWorkDistance").value = 0;
        p.view.getElementById("fuelConsumptionPerMile").value = "0,85";
        p.view.getElementById("annualTax").value = 2000;
        p.view.getElementById("tyresPer1000Mile").value = 2000;
        p.view.getElementById("serviceAndRepairs").value = 3500;
        p.view.getElementById("annualCareCost").value = 1000;
        p.view.getElementById("insurance").value = 4000;
        p.view.getElementById("inspection").value = 300;
        p.view.getElementById("parking").value = 1200;
        p.view.getElementById("annualPercentDecrease").value = 15;
        p.view.getElementById("restValue").value = 70000;
        p.view.getElementById("fuel95").value = "14,73";
        p.view.getElementById("fuel98").value = "15,23";
        p.view.getElementById("diesel").value = "14,68";
        p.view.getElementById("e85").value = "10,23";
        
        // add event handlers
        p.addEvent(p.view.getElementById("carValue"), "change", p.viewElementChange);
        p.view.getElementById("carValue").focus();
        p.view.getElementById("carValue").select();
        p.addEvent(p.view.getElementById("yearsToOwn"), "change", p.viewElementChange);
        p.addEvent(p.view.getElementById("annualPrivateDistance"), "change", p.viewElementChange);
        p.addEvent(p.view.getElementById("annualWorkDistance"), "change", p.viewElementChange);
        p.addEvent(p.view.getElementById("intrest"), "change", p.viewElementChange);
        p.addEvent(p.view.getElementById("fuelConsumptionPerMile"), "change", p.viewElementChange);
        p.addEvent(p.view.getElementById("annualTax"), "change", p.viewElementChange);
        p.addEvent(p.view.getElementById("tyresPer1000Mile"), "change", p.viewElementChange);
        p.addEvent(p.view.getElementById("serviceAndRepairs"), "change", p.viewElementChange);
        p.addEvent(p.view.getElementById("annualCareCost"), "change", p.viewElementChange);
        p.addEvent(p.view.getElementById("insurance"), "change", p.viewElementChange);
        p.addEvent(p.view.getElementById("inspection"), "change", p.viewElementChange);
        p.addEvent(p.view.getElementById("parking"), "change", p.viewElementChange);
        p.view.getElementById("annualPercentDecreaseRadio").checked = true;
        p.addEvent(p.view.getElementById("annualPercentDecreaseRadio"), "change", p.viewElementChange);
        p.addEvent(p.view.getElementById("annualPercentDecrease"), "change", p.viewElementChange);
        p.addEvent(p.view.getElementById("restValueRadio"), "change", p.viewElementChange);
        p.addEvent(p.view.getElementById("restValue"), "change", p.viewElementChange);
        p.view.getElementById("fuel95Radio").checked = true;
        p.addEvent(p.view.getElementById("fuel95Radio"), "change", p.viewElementChange);
        p.addEvent(p.view.getElementById("fuel95"), "change", p.viewElementChange);
        p.addEvent(p.view.getElementById("fuel98Radio"), "change", p.viewElementChange);
        p.addEvent(p.view.getElementById("fuel98"), "change", p.viewElementChange);
        p.addEvent(p.view.getElementById("dieselRadio"), "change", p.viewElementChange);
        p.addEvent(p.view.getElementById("diesel"), "change", p.viewElementChange);
        p.addEvent(p.view.getElementById("e85Radio"), "change", p.viewElementChange);
        p.addEvent(p.view.getElementById("e85"), "change", p.viewElementChange);
        
        // set values for calculator
        p.calculator.miledeDuction = 18.5;
        p.calculator.miledeDuctionLimit = 8000;
        
        p.viewElementChange();
    }    
    
    this.addEvent = function (obj, evType, fn)
    {
      if (obj.addEventListener) /* FF */
      {
        obj.addEventListener(evType, fn, false);
        return true;
      } 
      else if (obj.attachEvent) /* IE */
      {
        var r = obj.attachEvent("on"+evType, fn);
        return r;
      }
    }
}


function calculator()
{
    this.miledeDuction = 0;
    this.miledeDuctionLimit = 0;
    this.carValue = 0;
    this.yearsToOwn = 0;
    this.annualPrivateDistance = 0;
    this.annualWorkDistance = 0;
    this.intrest = 0;
    this.fuelConsumptionPerMile = 0;
    this.tyresPer1000Mile = 0;
    this.serviceAndRepairs = 0;
    this.insurance = 0;
    this.restValue = 0;
    this.fuelPrice = 0;
    /* todo: omfaktorera resultatet till egen "result"-klass */
    this.annualValueDecrease = 0;
    this.annualFuelCost = 0;
    this.annualInterestCost = 0;
    this.annualTyreCost = 0;
    this.annualTaxCost = 0;
    this.annualMiscCost = 0;
    this.annualServiceAndRepairCost = 0;
    this.annualInsuranceCost = 0;
    this.sumAnually = 0;
    this.sumMonthly = 0;
    this.sumMiley = 0;
    
    this.calculateRestValue = function(annualPercentDecrease)
    {
        return parseFloat(this.carValue * (Math.pow((100-annualPercentDecrease)/100, this.yearsToOwn)));
    }
    
    this.getMileTotal = function()
    {
        return parseInt(this.annualPrivateDistance) + parseInt(this.annualWorkDistance);
    }
    
    this.calculateResults = function()
    {
        this.annualValueDecrease = ((this.carValue-this.restValue) / this.yearsToOwn);
        this.annualFuelCost = parseInt(this.fuelPrice * this.getMileTotal() * this.fuelConsumptionPerMile);
        this.annualInterestCost = 
            parseInt((this.carValue - ((this.carValue - this.restValue) / 2)) 
            * this.intrest / 100 * 0.7);
        this.annualTyreCost = this.tyresPer1000Mile * this.getMileTotal() / 1000;
        this.annualServiceAndRepairCost = (this.serviceAndRepairs * (this.getMileTotal() / 1000));
        this.sumAnually = parseInt(this.annualValueDecrease + 
                                   this.annualFuelCost + 
                                   this.annualInterestCost + 
                                   this.annualTyreCost +
                                   this.annualTaxCost +
                                   this.annualMiscCost +
                                   this.annualServiceAndRepairCost + 
                                   this.annualInsuranceCost +
                                   this.getAnnualCommuteTaxDeduction());
        this.sumMonthly = parseInt(this.sumAnually / 12);
        this.sumMiley = parseInt(this.sumAnually / this.getMileTotal()); /* todo: ersätt . -> , & en decimal*/
    }
    
    this.getAnnualCommuteTaxDeduction = function()
    {
        var result = 0.3 * (this.miledeDuction * this.annualWorkDistance - this.miledeDuctionLimit);
        
        if (result > 0) return -1 * result;
        
        return 0;
    }
    
    this.isNumeric = function(text2Test)
    {
       var ValidChars = "0123456789.,";
       var IsNumber=true;
       var Char;

     
      for (i = 0; i < text2Test.length && IsNumber == true; i++) 
      { 
        Char = text2Test.charAt(i); 
        if (ValidChars.indexOf(Char) == -1) 
         {
            IsNumber = false;
         }
      }
       
       return IsNumber;   
    }

}
