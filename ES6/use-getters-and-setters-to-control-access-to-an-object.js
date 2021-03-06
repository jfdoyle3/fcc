/* Alter code below this line */
class Thermostat
{
    constructor(fahrenheit)
    {
      this._tempInCelsius = 5/9 * (fahrenheit - 32); 
    }
    get temperature()
    {
        return this._tempInCelsius;
    }
    set temperature(newTemp)
    {
       this._tempInCelsius = newTemp;
    }

}
/* Alter code above this line */

let thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
