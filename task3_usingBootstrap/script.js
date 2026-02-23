// JavaScript for Bootstrap Registration Form with CAPTCHA

document.addEventListener('DOMContentLoaded', function () {
    // Get form elements
    const form = document.getElementById('registrationForm');
    const captchaBox = document.getElementById('captchaBox');
    const refreshBtn = document.getElementById('refreshCaptcha');
    const captchaInput = document.getElementById('captchaInput');
    const messageEl = document.getElementById('formMessage');
    
    // Store current CAPTCHA
    let currentCaptcha = '';
    
    // Generate random CAPTCHA code (5 characters)
    function generateCaptcha(length = 5) {
        const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // avoid confusing O and 0
        let code = '';
        for (let i = 0; i < length; i++) {
            code += chars[Math.floor(Math.random() * chars.length)];
        }
        return code;
    }
    
    // Display CAPTCHA in the box
    function displayCaptcha() {
        currentCaptcha = generateCaptcha();
        captchaBox.textContent = currentCaptcha;
    }
    
    // Show success or error message
    function showMessage(text, isSuccess) {
        messageEl.textContent = text;
        messageEl.classList.remove('d-none', 'alert-success', 'alert-danger');
        messageEl.classList.add(isSuccess ? 'alert-success' : 'alert-danger');
    }
    
    // Refresh CAPTCHA button click
    refreshBtn.addEventListener('click', function (e) {
        e.preventDefault();
        displayCaptcha();
        captchaInput.value = '';
        captchaInput.focus();
    });
    
    // Form submit handler
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Get form values
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const password = document.getElementById('password').value.trim();
        const gender = document.getElementById('gender').value;
        const dob = document.getElementById('dob').value;
        const entered = captchaInput.value.trim();
        
        // Validate required fields
        if (!firstName) {
            showMessage('Please enter your first name.', false);
            return;
        }
        
        if (!lastName) {
            showMessage('Please enter your last name.', false);
            return;
        }
        
        if (!email) {
            showMessage('Please enter your email.', false);
            return;
        }
        
        if (!phone) {
            showMessage('Please enter your phone number.', false);
            return;
        }
        
        if (!password || password.length < 6) {
            showMessage('Password must be at least 6 characters.', false);
            return;
        }
        
        if (!gender) {
            showMessage('Please select your gender.', false);
            return;
        }
        
        if (!dob) {
            showMessage('Please enter your date of birth.', false);
            return;
        }
        
        if (!entered) {
            showMessage('Please enter the CAPTCHA.', false);
            captchaInput.focus();
            return;
        }
        
        // Validate CAPTCHA (case-insensitive)
        if (entered.toUpperCase() !== currentCaptcha.toUpperCase()) {
            showMessage('CAPTCHA is incorrect. Please try again.', false);
            displayCaptcha();
            captchaInput.value = '';
            captchaInput.focus();
            return;
        }
        
        // Success message
        showMessage('✓ Registration successful! CAPTCHA verified.', true);
        
        // Log form data (in a real app, send to server)
        console.log('Form Data:', {
            firstName, lastName, email, phone, password, gender, dob
        });
        
        // Reset form after success
        setTimeout(function () {
            form.reset();
            displayCaptcha();
            messageEl.classList.add('d-none');
        }, 2000);
    });
    
    // Initialize CAPTCHA on page load
    displayCaptcha();
});
