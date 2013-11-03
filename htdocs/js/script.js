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
/**
 * @TODO Maybe add email encoded to js (http://stackoverflow.com/questions/246801/how-can-you-encode-a-string-to-base64-in-javascript)
 * @TODO Add a email delivery
 */