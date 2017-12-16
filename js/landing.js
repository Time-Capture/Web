//window.onbeforeunload = (e) => {
//e.preventDefault();
//localStorage.clear();
//}

$(document).ready(function () {
    let login = document.getElementById('loginText');
    let signup = document.getElementById('signupText');

    $.ajax({
        success: function (data) {
            let successUser = document.createElement('div');

            let token = localStorage.getItem("token");

            if (token && token !== "null") {
                login.innerHTML = "로그아웃";
                signup.style.display = "none";

                let key = localStorage.getItem("key")

                if (key && key !== "null") {
                    successUser.setAttribute('id', 'successUser');
                    successUser.innerText = `${localStorage.getItem("key")} 님 환영합니다!`;

                    document.body.appendChild(successUser);
                }


                login.onclick = (e) => {
                    e.preventDefault();

                    if (login.innerHTML == "로그아웃") {
                        localStorage.setItem("token", null);
                        login.innerHTML = "로그인";
                        signup.style.display = defaultStatus;

                        window.location = "landing.html";
                    }
                }
            } else {
                login.onclick = (e) => {
                    e.preventDefault();
                    window.location = "login.html";
                }
            }

        },
        error: function (data) {
            console.log("No Datas are saved");
        }
    });
});
