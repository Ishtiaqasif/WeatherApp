const 
    searchElement = document.getElementById('data-city-serach');// querySelector('[data-city-search]'),
    //searchBox = new google.maps.places.SearchBox(searchElement);
    //let cityName = searchElement.value;

    searchElement.addEventListener("change", () => {
        let cityName = searchElement.value;
//searchBox.addListener('places_changed', ()=>{
    //const place = searchBox.getPlaces()[0];
    //if (place == null) {
        if (cityName != '') {
        //const latitide = place.geomertry.location.lat();
        //const longitude = place.geomertry.location.lng();

        fetch('/weather',{
            method: 'POST',
            headers: {
                'Content-type':'Application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                cityName: cityName
                //latitide: latitide,
                //longitude: longitude
            })
        })
        .then(res => res.json())
        .then( data => {
            console.log(data.weatherInfo);
            setWeatherData(data.weatherInfo/*, place.fomatted_address*/);
        })
        .catch((error) => {
            //console.error('client-side error: ', error);
        });
    }
});

//const icon = new Skycons({color: '#FF4500'});
const statusElement = document.getElementById('data-status');
const locationElement = document.getElementById('data-location');
const windElement = document.getElementById('data-wind');
const tempElement = document.getElementById('data-temperature');
const preciElement = document.getElementById('data-precipitation');

let setWeatherData = (data) => {
    
    statusElement.textContent = data.weather.main;
    locationElement.textContent = data.name;
    windElement.textContent = data.wind.speed;
    tempElement.textContent = data.main.temp;
    preciElement.textContent = data.main.humidity;

    //icon.set('icon', data.weather.icon)
    
};