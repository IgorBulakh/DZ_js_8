$(document).ready(function(){
  $('#btn1').on('click', f_showAlert);
  
});

function f_showAlert(argument) {

	var url = $('#conInp').val();
	var lockZon = url.lastIndexOf('.');
	var lockZon1 = url.slice(0, lockZon);

	var prot = lockZon1.lastIndexOf('.');
	var prot1 = lockZon1.lastIndexOf('/');

	var lockZon2;

	if(prot != -1){
		lockZon2 = lockZon1.slice( prot +1, lockZon1.length);
	}
	else if(prot1 != -1){
		lockZon2 = lockZon1.slice( prot1 +1, lockZon1.length);
	}
	else if(prot1 == -1){
		lockZon2 = lockZon1.slice( prot1 +1, lockZon1.length);
	}

	var prot3 = lockZon2.replace(/o/gi, '0').replace(/l/gi, '1').replace(/i/gi, '3').replace(/s/gi, '5');


	var charStr = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
  var newRndStr = '';
  for (var i = 0; i < 4; i++) {
    var rndChar = Math.ceil(Math.random() * charStr.length);
    newRndStr += charStr[rndChar];
  }






 $('#textArea').html(prot3 + newRndStr);

};