function getRestValue(priceValue, percentDecrease, noOfYears)
{
    return Math.round(priceValue * Math.pow((100-percentDecrease)/100, noOfYears));
}

function getAnnualPercentDecrease(priceValue, restValue, noOfYears)
{
    return Math.round(100 - Math.pow(restValue/priceValue, 1/noOfYears) * 100);
}

function calculator()
{
    this.carValue = 0;
    this.yearsToOwe = 0;
    this.annualPrivateDistance = 0;
    this.annualWorkDistance = 0;
    this.intrest = 0;
    this.fuelConsumptionPerMile = 0;
    this.tyresPerMile = 0;
    this.serviceAndRepairs = 0;
    this.insurance = 0;
    this.restValue = 0;
    this.gasolinePrice = 0;
    this.annualValueDecrease = 0;
    this.annualFuelCost = 0;
    this.annualInterestCost = 0;
    this.annualTyreCost = 0;
    this.annualCareCost = 0;
    this.annualServiceAndRepairCost = 0;
    this.annualInsuranceCost = 0;
    this.sumAnually = 0;
    this.sumMonthly = 0;
    this.sumMiley = 0;
    this.miledeDuction = 0;
    this.miledeDuctionLimit = 0;
    
    this.calculateAndSetRestValue = function(annualPercentDecrease)
    {
        this.restValue = Math.round(carValue * Math.pow((100-annualPercentDecrease)/100, yearsToOwe));
    }
}

