var Konami = (function() {
	var konami = {
		pos: 0,
		pattern: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
		limit: 500,
		timeout: null
	};
	konami.listen = function(event) {
		if (event.which === konami.pattern[konami.pos]) {
			konami.pos++;
			clearTimeout(konami.timeout);
		}
		konami.timeout = setTimeout(konami.reset, konami.limit);
		if (konami.pos >= konami.pattern.length) {
			konami.reset();
			konami.complete();
		}
	};
	konami.reset = function() {
		konami.pos = 0;
	};
	konami.complete = function() {
		var script = document.createElement('script');
		script.src = 'td4w.js';
		document.head.appendChild(script);
	};
	document.addEventListener('keydown', konami.listen, false);
	return konami;
}());