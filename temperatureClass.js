function makeClass(){
    class Thermostat {
        constructor(temp){
            //convert faraheit to celsius
            this._temp = 5/9 * (temp - 32);
        }
        //getter
        get temperature(){
            return this._temp;
        }
        //setter
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}


//make class
const Thermostat = makeClass();

//create a thermostat object with 76
const thermos = new Thermostat(76);

// getter to get temperature
let temp = thermos.temperature;

//set with updated temperature
thermos.temperature = 26;
temp = thermos.temperature;


console.log(temp);



