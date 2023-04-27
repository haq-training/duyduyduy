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
	  
  const relativeHumidity = (elemen,idx,index,abc) => {
	let time = [];
	let temperature = [];
	let windSpeed=[];
	let c = {};
	let ngay = fs.hourly.time;
	let d=ngay.length;
	for(let i=0;i<d;i++){
	  if(fs.hourly.relativehumidity_2m[i] > idx ){
		time.push(ngay[i].slice(0, 10))
		}
		if(index != 0){
			temperature.push(fs.hourly.temperature_2m[i])
		}
		if(abc != 0){
			windSpeed.push(fs.hourly.windspeed_10m[i])
		}
	}
	const uniqueSet = new Set(time);
	c.relativehumidity=uniqueSet;
    c.temperature=temperature;
	c.windSpeed=windSpeed;
	return uniqueSet;
}
const relativeHumidity2 = (elemen,idx,index,abc) => {
	let time = [];
	let temperature = [];
	let windSpeed=[];
	let c = {};
	let ngay = fs.hourly.time;
	let d=ngay.length;
	for(let i=0;i<d;i++){
	  if(fs.hourly.relativehumidity_2m[i] < idx ){
		time.push(ngay[i].slice(0, 10))
		}
		if(index != 0){
			temperature.push(fs.hourly.temperature_2m[i])
		}
		if(abc != 0){
			windSpeed.push(fs.hourly.windspeed_10m[i])
		}
	}
	const uniqueSet = new Set(time);
	c.relativehumidity=uniqueSet;
    c.temperature=temperature;
	c.windSpeed=windSpeed;
	return uniqueSet;
}

    const windSpeed = (elemen,idx,index,abc) => {
	let time = [];
	let temperature = [];
	let relativehumiditys=[];
	let c = {};
		let ngay = fs.hourly.time;
		let d=ngay.length;
		for(let i=0;i<d;i++){
		  if(fs.hourly.windspeed_10m[i] > idx ){
				 time.push(ngay[i].slice(0, 10))
			}
			if( index !=0){
				temperature.push(fs.hourly.temperature_2m[i])
		   }
		   if(abc!=0 ){
			relativehumiditys.push(fs.hourly.relativehumidity_2m[i])
	   }

		}
	const uniqueSet = new Set(time);
	c.relativehumidity=uniqueSet;
    c.temperature=temperature;
	c.relativehumiditys=relativehumiditys;
	return uniqueSet;
	}
	const windSpeed2 = (elemen,idx,index,abc) => {
		let time = [];
		let temperature = [];
		let relativehumiditys=[];
		let c = {};
			let ngay = fs.hourly.time;
			let d=ngay.length;
			for(let i=0;i<d;i++){
			  if(fs.hourly.windspeed_10m[i] < idx ){
					 time.push(ngay[i].slice(0, 10))
				}
				if( index !=0){
					temperature.push(fs.hourly.temperature_2m[i])
			   }
			   if(abc!=0 ){
				relativehumiditys.push(fs.hourly.relativehumidity_2m[i])
		   }
	
			}
		const uniqueSet = new Set(time);
		c.relativehumidity=uniqueSet;
		c.temperature=temperature;
		c.relativehumiditys=relativehumiditys;
		return uniqueSet;
		}
	
  const temperature = (elemen,idx) => {
	let a = [];
	let ngay = fs.hourly.time;
	let d=ngay.length;
	for(let i=0;i<d;i++){
	  if(fs.hourly.temperature_2m[i] > idx ){
			 a.push(ngay[i].slice(0, 10))
		}
	}
	const uniqueSet = new Set(a);
	return uniqueSet;
}

  const getData4 = (elemen,idx) => {
  
	  let ngay1 = getData1(elemen);
	 let temperatureysTB = 0;
	 let relativeHumidityysTB=0
	 let windSpeedysTB=0;
	 for(let i = 0 ; i<idx;i++){
		 temperatureysTB= temperatureysTB + ngay1.temperature[i]
		 relativeHumidityysTB= relativeHumidityysTB + ngay1.relativeHumidity[i]
		 windSpeedysTB= windSpeedysTB + ngay1.windSpeed[i]
	 }
	  let weatherPrediction;
	  if ((temperatureysTB/24) > 25 && (relativeHumidityysTB/24) > 70 && (windSpeedysTB/24) < 10) {
		weatherPrediction = "Nắng";
	  } else {
		weatherPrediction = "Mưa";
	  }
	 return `Dự đoán thời tiết ngày ${elemen} ${weatherPrediction}`;
 }




  console.log(' 7 giờ tính từ 00:00h ngày 2023-04-24 du doan troi : ',getData4("2023-04-24",7));
  console.log('nhiet d tren 5  : ',temperature("",5));
  console.log('toc do gio tren 7,5   : ',windSpeed("",7,5));
  console.log('do am tren 60  : ',relativeHumidity("",60));
  console.log('ngay va nhiet do co do am tren 6,5  : ',relativeHumidity("",6,5,1));
  console.log('lọc ra ngày và tốc độ ,nhiệt độ có độ ẩm  trên 70 : ',relativeHumidity("",70,1,1));
  console.log('lọc ra ngày và tốc độ ,nhiệt độ có toc do  trên 8,2 : ',windSpeed("",8,2,1,1));
  console.log('lọc ra ngày và nhiệt độ có độ ẩm dưới 65 : ',relativeHumidity2("",65,1,0));
  console.log('lọc ra ngày, toc do  và nhiệt độ có độ ẩm dưới 70 : ',relativeHumidity2("",70,1,1));
  console.log('lọc ra ngày và tốc độ ,nhiệt độ có toc do  duoi 8,2 : ',windSpeed2("",8,2,1,1));

})();
