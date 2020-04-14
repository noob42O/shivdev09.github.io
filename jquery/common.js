/**
Application common jquery functions

**/
function showInput() {
		var userData = $('#userInput').val();
		if(userData!=''){
			$('#display').html(userData);
		}else{
			$('#display').html('Please enter message..');
		}
		$('#userInput').val("");
}

function clearAll(){
	$('#userInput').val('');
	$('#display').html('');
}	
	