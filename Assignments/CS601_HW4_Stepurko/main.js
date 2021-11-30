const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const facilitator = document.getElementById('facilitator');
const form = document.getElementById('form');

// change default event submit
form.addEventListener('submit', (e) => {
	if (!fieldsValid()) {
		e.preventDefault();
	}
});

function showError(input) {
	const formFrame = input.parentElement;
	formFrame.className = 'from-frame error';
}

// check 3 fields to enable submit
function fieldsValid() {
	let isValid = false;
	if (isValidName(firstName.value) && isValidName(lastName.value) && isValidFacilitator()) {
		isValid = true;
	}
	return isValid;
}

// check names input for only letters
function isValidName(str) {
	let validRegex = /(^[A-Za-z]+$)/
	if (str.match(validRegex)) {
		return true;
	} else {
		alert('Names can contain only letters')
		return false;
	}
}

// check facilitator name
function isValidFacilitator() {
	let name = facilitator.value.trim();
	if (name === 'Laura' || name === 'Fazil' || name === 'Harsh') {
		return true;
	} else {
		showError(facilitator);
		return false;
	}
}