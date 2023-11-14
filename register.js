document.getElementById('registerForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('http://restapi.adequateshop.com/api/authaccount/registration', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer <token>'},
      body: JSON.stringify({ 'name':username, 'email':email, 'password':password }),
  });

  console.log(response);
  const data = await response.json();
  if (response.status === 200) {
      alert(data);
      console.log(data);
  } else {
      alert(data.error);
  }
});