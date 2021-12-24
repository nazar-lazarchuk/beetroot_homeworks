function summ () {
	let period = document.getElementById("month").value;
	let rate = document.getElementById("interest").value;
	let bank = document.getElementById("deposit").value;
	let val = ' грн';
	let resultRate = rate / 12 / 100;
	let resultMounth = bank * resultRate * period;
	
	let resultSumm = Math.floor(bank*100)/100 + Math.floor(resultMounth*100)/100;
	
	document.getElementById('out').innerHTML = resultSumm.toFixed(2)+val;

}
