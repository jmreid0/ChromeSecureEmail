window.onload = function () {
	var jq = document.createElement('script');
	jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js";
	document.querySelectorAll('body')[0].appendChild(jq);
	var gmsrc = document.createElement('script');
	gmsrc.src = "https://xmailchrome.appspot.com/gmail.js";
	document.querySelectorAll('body')[0].appendChild(gmsrc);
	
	
	var gmail = new Gmail();
	gmail.observe.before(open_email, beforeOpenEmail);
	gmail.observe.before(send_message, beforeSendEmail);
}

function beforeOpenEmail() {
	console.log("Opening Email");
}

function beforeSendEmail() {
	console.log("Sending Email");
}