const gen = document.getElementById("gen");
const caption = document.getElementById("caption");

function run() {
	if (getRandomInt(0,2) == 0) {
		caption.innerHTML = "when u fighting with someone and bro starts";
		if (document.getElementById("includeExtendedVerbs").checked == "false") {
			gen.innerHTML = demonyms[getRandomInt(0, demonyms.length - 1)] + " " + verbs[getRandomInt(0, verbs.length - 1)];
		} else {
			gen.innerHTML = demonyms[getRandomInt(0, demonyms.length - 1)] + " " + verbsExt[getRandomInt(0, verbsExt.length - 1)];
		}
	} else {
		caption.innerHTML = "when u fighting with someone and bro starts to";
		gen.innerHTML = demonyms[getRandomInt(0, demonyms.length - 1)] + " " + infinitives[getRandomInt(0, infinitives.length - 1)];
	}
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}