document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try{
        const response = await fetch('http://restapi.adequateshop.com/api/authaccount/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer <token>'},
            body: JSON.stringify({ 'email': email, 'password':password }),
        });

        console.log(response);
        const response_json = await response.json();
        console.log(response_json);

        if (response.status === 200) {

            if(response_json.message == "success") {
                window.location.href = "index.html?data=" + btoa(JSON.stringify(
                    {
                        'name': response_json.data.Name,
                        'email': response_json.data.Email,
                        'token': response_json.data.Token,
                    }
                )
                    );
            }
            else{
                popUp(response_json.message);
            }
            
        } else {
            alert(response_json.error);
        }
    } catch(err){
        alert(err);
    }
});



const $loginDiv = document.querySelector(".login_div");

function popUp(message){
    const $dark = document.createElement("div");
    $dark.style.position = "absolute";
    $dark.style.width = "100%";
    $dark.style.height = "100%";
    $dark.style.backgroundColor = "black";
    $dark.style.opacity = "0.5";
    $dark.style.zIndex="0";

    const $div = document.createElement("div");
    $div.classList.add("popUpDiv");

    const $p = document.createElement("p");
    $p.classList.add("popUpP");
    $p.innerHTML = message;

    const $btn = document.createElement("button");
    $btn.classList.add("popUpBtn");
    $btn.innerHTML = "Close";

    $loginDiv.appendChild($dark);
    $loginDiv.appendChild($div);


    $div.classList.add("b-show");
    $div.appendChild($p);
    $div.appendChild($btn);

    $btn.addEventListener("click", function () {
        $dark.remove();
        $div.remove();
        $p.remove();
        $btn.remove();
    });
}