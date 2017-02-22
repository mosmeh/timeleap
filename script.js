window.onload = function()
{
	updatetime();
}

function updatetime()
{
	date = new Date();
	document.getElementById("time").innerHTML = 
		padding(date.getFullYear(),4) + " : " + 
		padding(date.getMonth() + 1,2) + " : " + 
		padding(date.getDate(),2) + " : " + 
		padding(date.getHours(),2) + " : " + 
		padding(date.getMinutes(),2) + " : " + 
		padding(date.getSeconds(),2) + " : " + 
		padding(date.getMilliseconds(),3);
		setTimeout(updatetime,10);
}

function padding(str,digit)
{
	return ("0" + str).slice(digit * -1);
}