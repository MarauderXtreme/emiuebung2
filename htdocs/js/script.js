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
				var mail = $('#email').val();
				var mailcheck = mail.match('/^[_-a-zA-Z0-9.]@[-a-zA-Z0-9.]');
				alert(mail);
			}
		);
	}
);
