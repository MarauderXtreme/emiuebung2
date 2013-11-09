/**
 * @author Christoph Kepler
 */

function checkempty() {
	var error = new Array();
	if(!document.getElementById('men').checked || !document.getElementById('woman').checked) {
		error[0] = 'Bitte kreuzen Sie Ihre Anrede an.';
		document.getElementById('genderlabel').style.color = '#FF0000';
	}
	if(document.getElementById('name') == '') {
		error[1] = 'Bitte geben Sie Ihren Namen an.';
		document.getElementById('namelabel').style.color = '#FF0000';
	}
	if(document.getElementById('email') == '') {
		error[2] = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
		document.getElementById('maillabel').style.color = '#FF0000';
	}
	if(document.getElementById('text') == '') {
		error[3] = 'Bitte geben Sie Ihre Nachricht ein.';
		document.getElementById('textlabel').style.color = '#FF0000';
	}
	var msg;
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
 * @TODO msg still not working. There is work needed
 */

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
	
// function stylereset() {
	// document.getElementById("style").removeAttribute("href");
	// document.getElementById("style").setAttribute("href", "css/style.css");
// }

/**
 * RegEx:
 * var check = RegExpr;
 * return check.test(mailaddress);
/**
 * @TODO Maybe add email encoded to js (http://stackoverflow.com/questions/246801/how-can-you-encode-a-string-to-base64-in-javascript)
 * @TODO Add a email delivery/how to encode
 */

/**
 * @TODO Fix Regex
 * @TODO Fix Regex Check
 */
