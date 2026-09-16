const CHANNEL = "strawberryhaze111";

const wrap = document.getElementById("twitch-embed-wrap");

function initTwitchEmbed() {
	if (typeof Twitch === "undefined" || !wrap) return;

	const embed = new Twitch.Embed("twitch-embed", {
		width: "100%",
		height: 360,
		channel: CHANNEL,
		layout: "video",
		autoplay: false,
		parent: [window.location.hostname]
	});

	embed.addEventListener(Twitch.Embed.ONLINE, () => {
		wrap.hidden = false;
	});

	embed.addEventListener(Twitch.Embed.OFFLINE, () => {
		wrap.hidden = true;
	});
}

initTwitchEmbed();
