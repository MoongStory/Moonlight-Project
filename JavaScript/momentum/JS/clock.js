const clock = document.querySelector("h2#clock");

function getCurrentTime() {
	const currentTime = new Date();

	return `${currentTime.getHours()}:${currentTime.getMinutes().toString().padStart(2, "0")}:${currentTime.getSeconds().toString().padStart(2, "0")}.${currentTime.getMilliseconds().toString().padStart(3, "0")}`;
}

clock.innerText = getCurrentTime();
setInterval(() => {
	clock.innerText = getCurrentTime();
}, 1);