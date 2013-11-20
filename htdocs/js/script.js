/**
 * @author Christoph Kepler, Michael Schneider
 */

/**
 * Primary Validation Function
 */
function checkempty() {
	var msg = '';
	if(!document.getElementById('men').checked && !document.getElementById('woman').checked) {
		msg = msg + 'Bitte kreuzen Sie Ihre Anrede an.\n';
		document.getElementById('genderlabel').style.color = '#FF0000';
	}
	else if(document.getElementById('men').checked || document.getElementById('woman').checked) {
		document.getElementById('genderlabel').style.color = '#000000';
	}
	if(document.getElementById('name').value == '') {
		msg = msg + 'Bitte geben Sie Ihren Namen an.\n';
		document.getElementById('namelabel').style.color = '#FF0000';
	}
	else {
		document.getElementById('namelabel').style.color = '#000000';
	}
	if(document.getElementById('email').value == '' || !emailvalidate(document.getElementById("email").value)) {
		msg = msg + 'Bitte geben Sie eine gültige E-Mail-Adresse ein.\n';
		document.getElementById('maillabel').style.color = '#FF0000';
	}
	else {
		document.getElementById('maillabel').style.color = '#000000';
	}
	if(document.getElementById('text').value == '') {
		msg = msg + 'Bitte geben Sie Ihre Nachricht ein.\n';
		document.getElementById('textlabel').style.color = '#FF0000';
	}
	else {
		document.getElementById('textlabel').style.color = '#000000';
	}
	if(msg != '') {
		alert(msg);
		return false;
	}
	// else {
		// return true;
	// }
}
/**
 * Emailvalidation
 */
function emailvalidate(mailaddress) {
	/**
	 * @TODO There are TLDs like *.museum and *.travel. Maybe we need to extend our regex on the end
	 * @TODO Added numbers 0-9. Is this okay?
	 */
	var check = new RegExp("^[0-9a-zA-Z\.\_\-]+@{1}[0-9a-zA-Z\.\_\-]+[\.]{1}[a-zA-Z]{2,6}$");
	return check.test(mailaddress); 
}

function mailcheck(mailaddress){
	var mailaddress = mailaddress.replace(/(^\s+|\s+$)/g,'');
	document.getElementById('email').value = mailaddress;
	if(!emailvalidate(mailaddress)){
		alert("Bitte eine gültige Mail eingeben!");
		document.getElementById('maillabel').style.color = '#FF0000';
	}else{
		document.getElementById('maillabel').style.color = '#000000';
	}
}

/**
 * Set Action
 * @TODO The actual mailto needs some approvement :-)
 * @TODO For later it would be great, to add the mail somehow encoded (not in plain-text) (http://stackoverflow.com/questions/246801/how-can-you-encode-a-string-to-base64-in-javascript)
 */
function get_action(form) {
	form.action = "mailto:example@test.com?subject=Site-Feedback&cc=" + document.getElementById('email').value; 
}

/**
 * Tooltip Functions
 */
function displayTooltip(id) {
	document.getElementById(id).style.display = 'block';
	tooltip = document.getElementById(id);
}
function hideTooltip(id) {
	document.getElementById(id).style.display = 'none';
}
/**
 * Movement for Tooltip
 */
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
 * Stylereset after the field is correct
 */
function stylereset() {
		
	var list = document.getElementsByClassName("contactlabel");
	for (var i = 0; i < list.length; i++) {
   	 list[i].style.color= "#000000";
	}
}

/**
 * @TODO DEFERRED How to style the email
 */