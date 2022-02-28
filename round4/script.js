const navbar = document.querySelector("nav");
const menu = navbar.querySelector("ul");
const openMenuButton = navbar.querySelector("button.open-links");

const navAnimationKeyframes = [
	{ transform: "scale(0)" },
	{ transform: "scale(1)" },
];
const navAnimationSettings = {
	duration: 200,
	fill: "forwards",
	easing: "ease",
};
openMenuButton.addEventListener("click", () => {
	switch (menu.classList.contains("visible")) {
		case true:
			const animation = menu.animate(navAnimationKeyframes, {
				...navAnimationSettings,
				direction: "reverse",
			});
			animation.addEventListener("finish", () => {
				menu.classList.remove("visible");
			});
			break;
		case false:
			menu.classList.add("visible");
			menu.animate(navAnimationKeyframes, navAnimationSettings);
	}
	openMenuButton.classList.toggle("toggled");
});

const countdownElement = document.querySelector("section#countdown");

function updateTimer(el) {
	// The event starts at 9th March 2022, 10:00 AM
	const date = new Date("2022-03-09T10:00:00.000+05:30");
	const currDate = new Date();

	const daysEl = el.querySelector("span.days");
	const hoursEl = el.querySelector("span.hours");
	const minutesEl = el.querySelector("span.minutes");
	const secondsEl = el.querySelector("span.seconds");

	// Date calculation works by finding the difference between the two dates
	// and converting the result from milliseconds to desired unit of time.
	daysEl.textContent = Math.floor((date - currDate) / (1000 * 60 * 60 * 24));
	hoursEl.textContent = Math.floor(((date - currDate) / (1000 * 60 * 60)) % 24);
	minutesEl.textContent = Math.floor(((date - currDate) / (1000 * 60)) % 60);
	secondsEl.textContent = Math.floor(((date - currDate) / 1000) % 60);
}

setInterval(() => updateTimer(countdownElement), 1000);

const gallery = document.querySelector("section#gallery");
gallery.querySelectorAll("img").forEach((img) => {
	img.addEventListener("click", () => {
		window.open(img.src, "_blank");
	});
});
