
let delay_popup = 0;
setTimeout("document.getElementById('myModal').style.display='block'", delay_popup);

let data = document.getElementById("data__result");
let modal = document.getElementById('myModal');
function radius(){
	let rad = document.getElementById('radius').value;
	let resultRad = Math.PI * Math.pow(rad, 2);
	document.getElementById('result__radius').innerHTML = resultRad.toFixed(3);

	let dis = document.getElementById('distans').value;
	let period = document.getElementById('time').value;

	let resultSpead = dis / period;
	document.getElementById('result__spead').innerHTML = resultSpead.toFixed(3);

	let val = document.getElementById('valuta').value;
	let well = 1.13;
	let resultVal = val * well;
	document.getElementById('result__valuta').innerHTML = resultVal.toFixed(3);
	
	modal.style.display = 'none'
	data.style.display = 'block'
}



