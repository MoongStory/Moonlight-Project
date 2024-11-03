function onGeoOk(position) {
	const CONST_API_KEY = "";
	
	const CONST_LATITUDE = position.coords.latitude;
	const CONST_LONGITUDE = position.coords.longitude;

	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${CONST_LATITUDE}&lon=${CONST_LONGITUDE}&appid=${CONST_API_KEY}&units=metric&lang=kr`;

	fetch(url)
		.then(response => response.json())
		.then(data => {
			const weather = document.querySelector("#weather span:first-child");
			const city = document.querySelector("#weather span:last-child");

			city.innerText = data.name;
			weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
		});
}

function onGeoError() {
	alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
