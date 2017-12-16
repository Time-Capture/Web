let btn = document.getElementById('signupBtn');
let inputs = document.querySelectorAll('input');

inputs[5].onkeyup = (e) => {
    if (e.target.value != inputs[4].value) {
        e.target.style.border = "1px solid red";
    } else {
        e.target.style.border = "1px solid #179329";
    }
}

btn.onclick = (e) => {
    e.preventDefault();
    if (inputs[4].value == inputs[5].value) {
        console.log("Same");
        $.ajax({
            url: "http://52.14.74.219:9024/api/signup",
            type: "POST",
            data: {
                name: inputs[0].value,
                school: inputs[1].value,
                andTime: inputs[2].value,
                id: inputs[3].value,
                password: inputs[4].value
            },
            //dataType : 'json',
            success: function (data, text) {
                alert("회원가입에 성공하셨습니다.");

                localStorage.setItem("key", inputs[0].value);

                window.location.href = "login.html";
            },
            error: function (data, data2, data3) {
                console.log(data + "\n" + data2 + "\n" + data3);
                console.log("Error");
            }
        });
    } else {
        alert("Check your password");
    }
}
