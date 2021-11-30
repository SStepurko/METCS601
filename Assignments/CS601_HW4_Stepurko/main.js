const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const facilitator = document.getElementById('facilitator');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
	if (!fieldsValid()) {
		e.preventDefault();
	}
});

function fieldsValid() {
	let isValid = false;

	return isValid;
}

function isValidNames(str) {
	let validRegex = 
}