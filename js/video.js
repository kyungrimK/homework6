var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate *= 0.9;
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate *= 1.1;
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 5;
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		console.log("unmute");
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute"
	}
	else {
		console.log("mute");
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute"
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function () {
	console.log(this);
	console.log(this.value);
	document.getElementById("myVideo").volume = this.value / 100;
	vol = document.querySelector("#volume").innerHTML = this.value + "%";
});

document.querySelector("#old").addEventListener("click", function() {
	console.log("Old School");
	video.style.filter = "grayscale(100%)"
	video.classList.add("grayscale");
});

document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	video.style.filter = "grayscale(0%)"
	video.classList.remove("grayscale");
});