function parse(){
	request = new XMLHttpRequest();
	request.open("GET", "messages.json", true);
	request.onreadystatechange = parseData;
	request.send();
}

function parseData(){
	if (request.readyState == 4 && request.status == 200){
		messagesDiv = document.getElementById("messages");
		converted = JSON.parse(request.responseText);
		for (i=0; i<converted.length; i++){
			messagesDiv.innerHTML += "<p>" + converted[i]['content'] + " - " 
			converted[i]['username'] + "</p>";
		}
	}
	else if (request.readyState == 4 && request.status != 200){
		alert("Page not loaded");
	}
}
