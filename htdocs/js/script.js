/**
 * @author Christoph Kepler
 */

/**
 * Maybe there is a good way to hide the mail-address (no plaintext)
 */
var somemail = "";
document.getElementById('feedback').action = "mailto:" + somemail;

function checkempty() {
	var error = new Array();
	var counter=0;
	if(!document.getElementById('men').checked && !document.getElementById('woman').checked) {
		error[counter] = 'Bitte kreuzen Sie Ihre Anrede an.';
		counter=counter+1;
		document.getElementById('genderlabel').style.color = '#FF0000';
	}
	else if(document.getElementById('men').checked || document.getElementById('woman').checked) {
		document.getElementById('genderlabel').style.color = '#000000';
	}
	if(document.getElementById('name').value == '') {
		error[counter] = 'Bitte geben Sie Ihren Namen an.';
		counter=counter+1;
		document.getElementById('namelabel').style.color = '#FF0000';
	}
	else {
		document.getElementById('namelabel').style.color = '#000000';
	}
	if(document.getElementById('email').value == '') {
		error[counter] = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
		counter=counter+1;
		document.getElementById('maillabel').style.color = '#FF0000';
	}
	/**
	 * @TODO I believe the email-validation also belongs here
	 */
	else {
		document.getElementById('maillabel').style.color = '#000000';
	}
	if(document.getElementById('text').value == '') {
		error[counter] = 'Bitte geben Sie Ihre Nachricht ein.';
		counter=counter+1;
		document.getElementById('textlabel').style.color = '#FF0000';
	}
	else {
		document.getElementById('textlabel').style.color = '#000000';
	}
	var msg='';
	if(error.length != 0) {
		for (var i=0; i<error.length; i++) {
			msg = msg + error[i] + "\n";
		}
		alert(msg);
		return false;
	}
	else {
		return true;
	}
}
/**
 * @TODO Fix Mail Check
 */
function emailvalidate() {
	// var check = new RegExp('[\-_.A-Za-z0-9]*\/@\/[\-.A-Za-z0-9]*.[\-.A-Za-z0-9](1-3)');
 	// return check.test(mailaddress); 
}

function displayTooltip(id) {
	document.getElementById(id).style.display = 'block';
	tooltip = document.getElementById(id);
}
function hideTooltip(id) {
	document.getElementById(id).style.display = 'none';
}

document.onmousemove = updateTooltip;
function updateTooltip (e) {
	if(typeof tooltip !== 'undefined') {
		if(tooltip != null && tooltip.style.display == "block") {
			var x = (e.pageX ? e.pageX : window.event.x)
				+ tooltip.offsetParent.scrollLeft
				- tooltip.offsetParent.offsetLeft;
		
			var y = (e.pageY ? e.pageY : window.event.y)
				+ tooltip.offsetParent.scrollTop
				- tooltip.offsetParent.offsetTop;
	
			tooltip.style.left = (x + 20) +  "px";	
			tooltip.style.top = (y + 20) +  "px";	
		}
	}
}
/**
 * @TODO Doesn't fix the style of the labels
 */
function stylereset() {
	/*document.getElementById("style").removeAttribute("href");
	document.getElementById("style").setAttribute("href", "css/style.css");*/
	document.getElementByClassName("contactlabel").style.color = "#000000";
}


/**
 * @TODO Maybe add email encoded to js (http://stackoverflow.com/questions/246801/how-can-you-encode-a-string-to-base64-in-javascript)
 * @TODO Add a email delivery/how to encode
 */