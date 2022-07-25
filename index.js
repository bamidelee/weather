async function weather (location = 'london'){
    const error = document.querySelector('.error');
    try{
    const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0070a42df4676bc71ba5572a61433e6e&units=metric`, {mode:'cors'})
    const response = await weather.json();
    display(response);
    error.textContent = '';
    }
    catch(err){
        error.textContent = err;
    }
}
const cityName = document.querySelector('input');
weather();
cityName.addEventListener('change', (e)  =>{
    weather(cityName.value)
})


function display (response){
    const city = document.querySelector('.city-name');
    city.textContent = response.name;

    const weatherMain = document.querySelector('.weather-main');
    weatherMain.textContent = response.weather[0].main;

    const weatherDescription = document.querySelector('.weather-description');
    weatherDescription.textContent = response.weather[0].description;

    const mainTemp = document.querySelector('.main-temp');
    mainTemp.textContent = `${Math.round(Number(response.main.temp))}°C`;

    const minTemp = document.querySelector('.min-temp')
    minTemp.textContent = `${Math.round(Number(response.main.temp_min))}°C`;

    const maxTemp = document.querySelector('.max-temp')
    maxTemp.textContent = `${Math.round(Number(response.main.temp_max))}°C`;

    const mainHUmidity = document.querySelector('.main-humidity')
    mainHUmidity.textContent = `${response.main.humidity}%`;

    const windSpeed= document.querySelector('.wind-speed')
    windSpeed.textContent = `${response.wind.speed}mph`;

    const cloud = document.querySelector('.cloud-all')
    cloud.textContent = `${response.clouds.all}%`;
}


function clock ()
{
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
        function setDate ()
        {
        const date = new Date();
        const seconds = date.getSeconds();
        const secondDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondDegrees}deg)`
        
        }
        setInterval(setDate, 1000);
        function setMinute()
        {
        const date = new Date();
        const minute = date.getMinutes();
        const minuteDegrees = ((minute  / 60) * 360) + 90;
        minuteHand.style.transform = `rotate(${minuteDegrees }deg)`
        
        }
        setInterval(setMinute, 1000)
        function setHour()
        {
        const date = new Date();
        const hour = date.getHours();
        const hourDegrees = ((hour  / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hourDegrees }deg)`
        
        }
        setInterval(setHour, 1000)
}
clock();