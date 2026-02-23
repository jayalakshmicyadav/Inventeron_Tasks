// Simple, beginner-friendly JavaScript for the form and CAPTCHA
document.addEventListener('DOMContentLoaded', function () {
	const captchaBox = document.getElementById('captchaBox');
	const refreshBtn = document.getElementById('refreshCaptcha');
	const captchaInput = document.getElementById('captchaInput');
	const form = document.getElementById('registrationForm');
	const messageEl = document.getElementById('formMessage');

	// Generate a random CAPTCHA string (letters and numbers)
	function generateCaptcha(length = 5) {
		const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // avoid confusing chars like O and 0
		let txt = '';
		for (let i = 0; i < length; i++) {
			txt += chars[Math.floor(Math.random() * chars.length)];
		}
		return txt;
	}

	// Store current captcha value here
	let currentCaptcha = generateCaptcha();
	captchaBox.textContent = currentCaptcha;

	// When user clicks Refresh, create a new captcha
	refreshBtn.addEventListener('click', function () {
		currentCaptcha = generateCaptcha();
		captchaBox.textContent = currentCaptcha;
		captchaInput.value = '';
		captchaInput.focus();
	});

	// Simple message helper
	function showMessage(text, ok) {
		messageEl.textContent = text;
		messageEl.style.color = ok ? 'green' : 'crimson';
	}

	// Handle form submit: check required fields and captcha
	form.addEventListener('submit', function (e) {
		e.preventDefault();

		// Basic HTML5 validation: check required inputs
		const name = document.getElementById('name').value.trim();
		const email = document.getElementById('email').value.trim();
		const entered = captchaInput.value.trim();

		if (!name || !email) {
			showMessage('Please fill in name and email.', false);
			return;
		}

		if (!entered) {
			showMessage('Please enter the CAPTCHA.', false);
			return;
		}

		// Compare case-insensitive
		if (entered.toUpperCase() !== currentCaptcha.toUpperCase()) {
			showMessage('CAPTCHA is incorrect. Try again.', false);
			currentCaptcha = generateCaptcha();
			captchaBox.textContent = currentCaptcha;
			captchaInput.value = '';
			captchaInput.focus();
			return;
		}

		// Success: here you would normally send the data to a server
		showMessage('Success! CAPTCHA verified.', true);
		form.reset();
		// refresh captcha after successful submit
		currentCaptcha = generateCaptcha();
		captchaBox.textContent = currentCaptcha;
	});
});

