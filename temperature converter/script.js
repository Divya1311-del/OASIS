


    const degree = document.document.getElementById("#degree");
    const temperatureType = document.getElementById("#temp_type");
    const celsiusField = document.getElementById("#celsius");
    const convertBtn = document.getElementById("#convertbtn");
    window.addEventListener("load", () =>{
        degree.value="";
        celsiusField.innerHTML="";
    });
    convertBtn.addEventListener("click",(e) =>{
        e.preventDefault();
        convertToCelsius();
    });
    function convertToCelsius(){
    let inputValue=degreeField.value;
    if(temperatureType.value==="fahrenheit"){
        const fahrenheitToCelsius=(inputValue - 32)*(5/9);
        celsiusField.innerHTML=`${fahrenheitToCelsius.toFixed(3)} &deg;c`;
        
    }
    else if(temperatureType.value==="kelvin"){
        const kelvinToCelsius=inputValue - 273.15;
        celsiusField.innerHTML=`${kelvinToCelsius.toFixed(3)} &deg;c`;
    }
    
}