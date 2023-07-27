const loginForm = document.getElementById('loginForm');


loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); 

 
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'abbes' && password === '123456') {
    alert('Login successful!');
    window.location.href = 'page1.html';
 
  } else {
    alert('Invalid username or password. Please try again.');
   
  }
});