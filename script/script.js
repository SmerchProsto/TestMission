var button = document.getElementById('submit-button');
var buyerButton = document.getElementById('buyer');
var providerButton = document.getElementById('provider');
var userSite = document.getElementById('user-site');

userSite.hidden = false;

button.onclick =(e)=>
	alert("Успешно!");

buyerButton.onclick =(e)=> 
	userSite.style.display = "none";

providerButton.onclick =(e)=> 
	userSite.style.display = "flex";
