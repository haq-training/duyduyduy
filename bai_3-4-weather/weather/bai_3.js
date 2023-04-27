(async function () {
	const loadData = async () => {
	  return await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&past_days=10&hourly=temperature_2m,relativehumidity_2m,windspeed_10m')
		.then((res) => {
		  return res.json();
		})
		.then((loadedQuestions) => {
		  return loadedQuestions;
		})
		.catch((err) => {
		  console.error(err);
		});
	};
	const fs = await loadData();

	const getData1 = (element,idx) => {
	  let a = {};
	  let dailyData = [];
	  let  temperature = [];
	  let relativeHumidity = [];
	  let windSpeed = [];
	  let ngay = fs.hourly.time;
	  let d=ngay.length;
	  if(idx!=0){
		let b = Number(element.slice(8,element.length))+idx;
        element = element.slice(0,8)+b;
	  }
	  for(let i=0;i<d;i++){
		  if(ngay[i].indexOf(element) != -1 ){
	   dailyData.push(fs.hourly.time[i]);
	   temperature.push(fs.hourly.temperature_2m[i]);
	   relativeHumidity.push( fs.hourly.relativehumidity_2m[i]);
	   windSpeed.push( fs.hourly.windspeed_10m[i]);
		  }
	  }
	  a.dailyData = dailyData; 
	  a.temperature = temperature; 
	  a.relativeHumidity = relativeHumidity; 
	  a.windSpeed = windSpeed; 
	  return a;
  }

  const getData4 = (arr,idx) => {
     
	 let ngay1 = getData1(arr[0]);
	 let ngay2 = getData1(arr[1]);
	 let temperatureysTB = 0;
	 let relativeHumidityysTB=0
	 let windSpeedysTB=0;
	 let ngay = fs.hourly.time;
	 for(let i = 0 ; i<ngay;i++){
		 temperatureysTB= temperatureysTB + (ngay1.temperature[i]+ngay2.temperature[i])
		 relativeHumidityysTB= relativeHumidityysTB + (ngay1.relativeHumidity[i]+ngay2.relativeHumidity[i])
		 windSpeedysTB= windSpeedysTB + (ngay1.windSpeed[i]+ngay2.windSpeed[i])
	 }
	  let weatherPrediction;
	  if ((temperatureysTB/48) > 25 && (relativeHumidityysTB/48) > 70 && (windSpeedysTB/48) < 48) {
		weatherPrediction = "Nắng";
	  } else {
		weatherPrediction = "Mưa";
	  }
	 return  weatherPrediction;
 }
 const getData3 = (arr,idx) => {
     
	let ngay1 = getData1(arr);
	let temperatureysTB = 0;
	let relativeHumidityysTB=0
	let windSpeedysTB=0;
	let ngay = fs.hourly.time;
	for(let i = 0 ; i<ngay;i++){
		temperatureysTB= temperatureysTB + (ngay1.temperature[i])
		relativeHumidityysTB= relativeHumidityysTB + (ngay1.relativeHumidity[i])
		windSpeedysTB= windSpeedysTB + (ngay1.windSpeed[i])
	}
	 let weatherPrediction;
	 if ((temperatureysTB/24) > 25 && (relativeHumidityysTB/24) > 70 && (windSpeedysTB/24) < 24) {
	   weatherPrediction = "Nắng";
	 } else {
	   weatherPrediction = "Mưa";
	 }
	return  weatherPrediction;
}
 const getData5 = () => {
	const today = new Date();
	const daysToSaturday = 7 - today.getDay();
	const daysToSunday = 8 - today.getDay();

	const saturday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + daysToSaturday);
	const sunday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + daysToSunday);

	const formattedSaturday = saturday.toISOString().slice(0, 10);
	const formattedSunday = sunday.toISOString().slice(0, 10);
	console.log("đoán thời tiết ngày thu bay  là",getData3(formattedSaturday));
	console.log("đoán thời tiết ngày chu nhat là",getData3(formattedSunday));

}

console.log("2023-04-14",getData1("2023-04-14",0));
console.log("nhiet do , do am va toc do gio cua 1 ngay sau ngay 2023-04-14",getData1("2023-04-14",1));
console.log("nhiet do , do am va toc do gio cua 3 ngay sau ngay 2023-04-14",getData1("2023-04-14",3));
console.log("đoán thời tiết ngày 2023-04-20 là",getData4(["2023-04-18","2023-04-19"]));
getData5();



})();

