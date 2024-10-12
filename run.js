const gen = document.getElementById("gen");
const caption = document.getElementById("caption");

function run() {
	if (getRandomInt(0,2) == 0) {
		caption.innerHTML = "when u fighting with someone and bro starts";
		if (document.getElementById("includeExtendedVerbs").checked == "false") {
			gen.innerHTML = demonyms[getRandomInt(0, demonyms.length)] + " " + verbs[getRandomInt(0, verbs.length)];
		} else {
			gen.innerHTML = demonyms[getRandomInt(0, demonyms.length)] + " " + verbsExt[getRandomInt(0, verbsExt.length)];
		}
	} else {
		caption.innerHTML = "when u fighting with someone and bro starts to";
		gen.innerHTML = demonyms[getRandomInt(0, demonyms.length)] + " " + infinitives[getRandomInt(0, infinitives.length)];
	}
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}