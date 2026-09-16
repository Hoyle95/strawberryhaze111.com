const container = document.querySelector(".falling-strawberries");

if (container) {
	const minCount = Math.min(40, Math.max(7, Math.round(window.innerWidth / 55)));
	const extraRange = Math.min(20, Math.max(5, Math.round(window.innerWidth / 130)));
	const count = minCount + Math.floor(Math.random() * extraRange);

	for (let i = 0; i < count; i++) {
		const berry = document.createElement("div");
		berry.className = "berry";

		const size = Math.random() * 42 + 26;
		const duration = Math.random() * 10 + 10;
		const delay = Math.random() * -duration;
		const startRot = Math.random() * 360;
		const spin = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 360 + 180);
		const opacity = Math.random() * 0.35 + 0.2;

		berry.style.setProperty("--x", `${Math.random() * 100}%`);
		berry.style.setProperty("--size", `${size}px`);
		berry.style.setProperty("--duration", `${duration}s`);
		berry.style.setProperty("--delay", `${delay}s`);
		berry.style.setProperty("--rot", `${startRot}deg`);
		berry.style.setProperty("--spin", `${spin}deg`);
		berry.style.setProperty("--opacity", opacity.toFixed(2));

		container.appendChild(berry);
	}
}
