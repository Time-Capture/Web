let btn = document.getElementById('loginBtn');
let inputs = document.querySelectorAll('input');

btn.onclick = (e) => {
    e.preventDefault();
    $.ajax({
        url: "http://52.14.74.219:9024/api/signin",
        type: 'POST',
        data: {
            id: inputs[0].value,
            password: inputs[1].value
        },
        success: function (data) {
            //alert(data);
            if (data) {
                localStorage.setItem("token", data.token);
                window.location = "landing.html";
            } else {
                console.log("Error" + "\n" + data);
            }
        },
        error: function (data) {
            console.log(data);
        }
    });
}
