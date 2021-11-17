const register = document.querySelector('.js-btn-register');
        const modall = document.querySelector('.modal-register');
        const closeBtnRe = document.querySelector('.js-register-back')
        const modalRegister = document.querySelector('.js-auth-form-register')

        function showRegister() {
            modall.classList.add('open');
        }

        function hideRegister() {
            modall.classList.remove('open')
        }

        register.addEventListener('click', showRegister)
        modall.addEventListener('click', hideRegister)
        closeBtnRe.addEventListener('click', hideRegister)
        modalRegister.addEventListener('click', function(event) {
            event.stopPropagation()
        })

        // LogIn JS
        const logIn = document.querySelector('.js-btn-login');
        const modal= document.querySelector('.modal-login');
        const closeBtn = document.querySelector('.js-login-back');
        const modalLogin=document.querySelector('.js-auth-form-login');

        function showLogin() {
            modal.classList.add('open')
        }
        
        function hideLogin() {
            modal.classList.remove('open')
        }

        logIn.addEventListener('click', showLogin);
        closeBtn.addEventListener('click', hideLogin);
        modal.addEventListener('click' ,hideLogin);
        modalLogin.addEventListener('click', function(event) {
            event.stopPropagation()
        })

        
        var logInBtn = document.getElementById('js-login-id')
        var registerBtn =document.getElementById('js-register-id')
        logInBtn.onclick = function() {
            hideRegister()
            showLogin()
        }

        registerBtn.onclick = function() {
            hideLogin()
            showRegister()
        }