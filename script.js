let url_string = window.location;
let url = new URL(url_string);
let data = atob(url.searchParams.get("data"));
let data_json = JSON.parse(data);

const $username_h2 = document.getElementById("username_h2");
$username_h2.innerHTML = data_json.name;

//alert(data_json.name);
