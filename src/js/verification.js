var allowed_age = 21;
var cookie_expire = 7;
var validate_date = true;

function createCookie(cname,cvalue,exdays) {

	var d = new Date();

	d.setTime(d.getTime()+(exdays*24*60*60*1000));

	var expires = "expires="+d.toGMTString();

	document.cookie = cname+"="+cvalue+"; "+expires;

}

function readCookie(cname) {

	var name = cname + "=";
	var ca = document.cookie.split(';');

	for(var i=0; i<ca.length; i++) {

		var c = ca[i].trim();
		
		if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  
	}

	return "";

}

function autotab(original,destination) {

	if (original.getAttribute&&original.value.length==original.getAttribute("maxlength"))

	destination.focus()
}

$(document).ready(function () {
	
	var currentYear = (new Date).getFullYear();
	
	for (var i = currentYear; i >= 1913; i--) {
	
		$("#birthYear").append(
		$("<option>" + i + "</option>").val(i));
	
	}
	
	for (var i = 1; i <= 12; i++) {
	
		$("#birthMonth").append(
		$("<option>" + i + "</option>").val(i));
	
	}
	
	for (var i = 1; i <= 31; i++) {
	
		$("#birthDay").append(
		$("<option>" + i + "</option>").val(i));
	
	}

	var id = $('#link').attr('href');

	var maskHeight = $(document).height();
	var maskWidth = $(window).width();
	var getVal=readCookie("avsultimate");

	if (getVal=="") {
 
		// $('#mask').show();
	
		$('#verification').show();

		var winH = $(window).height();
		var winW = $(window).width();

		$(id).css('top', winH / 2 - $(id).height() / 2);
		$(id).css('left', winW / 2 - $(id).width() / 2);

		$(id).fadeIn("slow");

	}

	$('#submitAge').click(function () {
	
		var age = $("#inputAge").val();
	
		if (age >= allowed_age) {

			createCookie('avsultimate', 'set', cookie_expire);

			$('#mask, .window').hide();

			return false;
		
		} else {
		
			$("#error").html('Sorry, you are not allowed to view content');

			return false;

		}

	}); 

	$('#submit').click(function () {

		var birthDay = $("#birthDay").val();
		var birthMonth = $("#birthMonth").val();
		var birthYear = $("#birthYear").val();

		birthDate = new Date(birthYear, birthMonth, birthDay);

		var todayDate = new Date();
		var age = Math.floor((todayDate - birthDate) / (365.25 * 24 * 60 * 60 * 1000));

		if (validate_date == true) {

			if ((birthMonth == 2)) {
	
				if (birthDay > 29) {
		
					var febError = true;
			
				} else if (birthDay == 29) {
				
					if (((birthYear % 4 == 0) && ((birthYear % 100 != 0) || (birthYear % 400 == 0)))) {
					
						var febError = false;
				
					} else {
				
						var febError = true;
				
					}
			
				}
		
			}

			if ((febError == true) || ((((birthMonth == 4) || (birthMonth == 6) || (birthMonth == 9) || (birthMonth == 11)) && (birthDay == 31)))) {
		
				$("#error p").html('Invalid date, please verify.');

				return false;
		
			}
		
		}

		if (age >= allowed_age) {
	
			createCookie('avsultimate', 'set', cookie_expire);
	
			$('#mask, .window').hide();
		
			return false;
	
		} else {
	
			$("#error").html('Sorry, you are not allowed to view content');

			return false;
	
		}
	
	});
	
	$('#submitDate').click(function () {
		
		var birthDay = $("#inputDay").val();
		var birthMonth = $("#inputMonth").val();
		var birthYear = $("#inputYear").val();
		
		birthDate = new Date(birthYear, birthMonth, birthDay);
		
		var todayDate = new Date();
		var age = Math.floor((todayDate - birthDate) / (365.25 * 24 * 60 * 60 * 1000));
		
		if (validate_date == true) {
		
			if ((birthMonth == 2)) {
		
				if (birthDay > 29) {
		
					var febError = true;
		
				} else if (birthDay == 29) {
		
					if (((birthYear % 4 == 0) && ((birthYear % 100 != 0) || (birthYear % 400 == 0)))) {
		
						var febError = false;
		
					} else {
		
						var febError = true;
		
					}
		
				}
		
			}
		
			if (((birthMonth>12)||(birthMonth<1)) || ((birthDay>31)||(birthDay<1)) || (birthYear<1000)) {

				var rangeError = true;

			} else {

				var rangeError = false;

			}
			
			if ((!$.isNumeric(age)) || (febError) || (rangeError) || ((((birthMonth == 4) || (birthMonth == 6) || (birthMonth == 9) || (birthMonth == 11)) && (birthDay == 31)))) {
				
				$("#error p").html('Invalid date, please verify.');

				return false;
			}

		}
		
		if (age >= allowed_age) {
		
			createCookie('avsultimate', 'set', cookie_expire);
		
			// $('#mask, .window').hide();
		
			// $('#verification').hide();

			// $('body').addClass('verified');

			$('#verification').fadeOut();

			return false;
		
		} else {
			
			$("#error p").html('Sorry, you are not allowed to view content.');

			return false;
			
		}
		
	});

	$('.positive').click(function () {

		createCookie('avsultimate', 'set', cookie_expire);
		
		$('#mask, .window').hide();
		
		return false;
		
	});

	$('.negative').click(function () {
		
		$("#error p").html('Sorry, you are not allowed to view content.');

		return false;
		
	});

});