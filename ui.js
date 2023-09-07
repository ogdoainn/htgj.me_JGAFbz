const sheet = document.querySelector('#bottomsheet');
document.querySelectorAll('.openBottomSheet').forEach((btn, nth) => {
	btn.addEventListener('click', (e) => {
		sheet.classList.add('open-sheet');
	});
});

function closeSheet() {
	sheet.classList.remove('open-sheet');
}

const btnsCopy = document.querySelectorAll('[copy]');
btnsCopy.forEach((btn, i) => {
	btn.addEventListener('click', function () {
		const data = btn.getAttribute('copy');
		navigator.clipboard.writeText(data);
	});
});
