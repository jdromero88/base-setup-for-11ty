let test = 'hola mundo'
function start() {
	console.log(test)
	showCurrentYear()
}

function showCurrentYear() {
	let currentYear = new Date()
	let timeEl = document.getElementById('currentYear')
	timeEl.textContent = currentYear.getFullYear()
}


document.addEventListener('DOMContentLoaded', start)
