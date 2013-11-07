/**
 * @author Christoph Kepler
 */

/**
 * @TODO Fix Regex
 * @TODO Fix Regex Check
 */
$(document).ready(
	function () {
		$('#email').blur(
			function(){
				var mailregex = 
				var mail = $('#email').val();
				var mailcheck = mail.exec();
			}
		);
		$('#contactsubmit').click(
			function() {
				var notempty;
				var submitsuccess;
					/**
					 * @TODO Maybe the use of an array would be smooth
					 */
				if($('#name').val() == '') {
					Array() = '';
				}
				if($('#email').val() == '') {
					
				}
				if($('#text').val() == '') {
					notempty = 0;
				}
				else {
					notempty = 1;
				}
				if(notempty == 1 && mailcheck == mail) {
					submitsuccess = 1;
				}
				else {
					alert('TOD UND VERDERBEN');
				}
			}
		);
	}
);

document.onmousemove = updateTooltip;
function updateTooltip (e) {
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

function stylereset() {
	document.getElementById("style").removeAttribute("href");
	document.getElementById("style").setAttribute("href", "css/style.css");
}
function validate() {
	return true;
}

/**
 * RegEx:
 * var check = RegExpr;
 * return cheack.test(mailaddress);
/**
 * @TODO Maybe add email encoded to js (http://stackoverflow.com/questions/246801/how-can-you-encode-a-string-to-base64-in-javascript)
 * @TODO Add a email delivery
 */
