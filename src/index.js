var data = require('./data/data');

window.onload = function() {
	document.body.innerHTML += '<button type="button" class="btn btn-danger">' + Object.keys(data)[0] + '</button>';
	console.log('just test log');
};
