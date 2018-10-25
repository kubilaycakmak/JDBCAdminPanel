window.addEventListener("load",
    function(){

        registerform = document.getElementById("registerForm");
        loginform = document.getElementById("loginForm");
        inputs = document.getElementsByTagName("input");
        rq = document.getElementsByClassName("required");
        submit = document.getElementById("submit");
        enterRegister = document.getElementById("enterRegister");
        enterLogin = document.getElementById("enterLogin");
        loginConnect = document.getElementById("loginConnect");
        enterRegister.addEventListener('click',
            function() {
                registerform.style.display = "block";
                enterLogin.style.display = "none";
                enterRegister.style.display = "none";
            });
        enterLogin.addEventListener('click',
            function() {
                loginform.style.display = "block";
                enterLogin.style.display = "none";
                enterRegister.style.display = "none";
            });


        document.getElementById("loginSide").addEventListener("click",
            function() {
                loginform.style.display = "block";
                registerform.style.display = "none";

            });
        document.getElementById("registerSide").addEventListener("click",
            function() {
                registerform.style.display = "block";
                loginform.style.display = "none";

            });
        loginConnect.addEventListener("click",
            function() {
                loginform.style.display = "block";
                enterLogin.style.display = "none";
                enterRegister.style.display = "none";
            });
    });