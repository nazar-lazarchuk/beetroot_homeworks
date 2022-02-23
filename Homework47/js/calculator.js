$(document).ready(function() {  
	$("input[name=send]").click( function () { 
		const action = $("select[name=action]").val();
		const first = $("input[name=first]").val() * 1; 
		const second = $("input[name=second]").val() * 1; 
		let result; 
		if (action == '+') { 
			result = first + second; 
		}
		else if (action == '-'){ 
			result = first - second; 
		}
		else if (action == '*'){ 
			result = first * second; 
		}
		else if (action == '/'){ 
			result = first / second; 
		}
		$("input[name=result]").val(result); 
	});
});