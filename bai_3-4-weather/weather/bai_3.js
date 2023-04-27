//lọc ra các ngày có nhiệt độ trên 5
const filteredDays = fs.hourly.temperature_2m.filter((st)=>(st > 5))
// console.log('filteredDays',filteredDays);

//lọc ra các ngày có tốc độ gió trên 7.5 
const windspeed = fs.hourly.windspeed_10m.filter((st)=>(st > 7.5))
// console.log('windspeed',windspeed);
//lọc ra các ngày có độ ẩm trên 60

const relativehumidity = fs.hourly.relativehumidity_2m.filter((st)=>(st > 60))
// console.log('relativehumidity',relativehumidity);

//lọc ra ngày và nhiệt độ có độ ẩm trên 6.5

const relativehumidity_2m = fs.hourly.relativehumidity_2m.map((st,index)=>{
	const arr = []
	if(st > 6.5){
		arr.push({
			relativehumidity_2m:st,
			temperature: fs.hourly.temperature_2m[index],
			time: fs.hourly.time[index]
		})
		return arr
	}
})
// console.log('relativehumidity_2m',relativehumidity_2m.filter((value)=> value != undefined));


//lọc ra ngày và tốc độ ,nhiệt độ có độ ẩm  trên 70
const relativehumiditys = fs.hourly.relativehumidity_2m.map((st,index)=>{
	const arr = []
	if(st > 70){
		arr.push({
			relativehumidity:st,
			windspeed:fs.hourly.windspeed_10m[index],
			temperature: fs.hourly.temperature_2m[index],
			time: fs.hourly.time[index]
		})
		return arr
	}
})
// console.log('relativehumiditys',relativehumiditys.filter((value)=> value != undefined));

//lọc ra ngày và độ ẩm ,nhiệt độ có tốc độ trên 8.2
const windspeeds = fs.hourly.windspeed_10m.map((st,index)=>{
	const arr = []
	if(st > 8.2){
		arr.push({
			windspeed:st,
			relativehumidity:fs.hourly.relativehumidity_2m[index],
			temperature: fs.hourly.temperature_2m[index],
			time: fs.hourly.time[index]
		})
		return arr
	}
})
// console.log('windspeeds',windspeeds.filter((value)=> value != undefined));


//lọc ra ngày và nhiệt độ có độ ẩm dưới  65
const relativehumidity_65 = fs.hourly.relativehumidity_2m.map((st,index)=>{
	const arr = []
	if(st < 65){
		arr.push({
			relativehumidity:st,
			temperature: fs.hourly.temperature_2m[index],
			time: fs.hourly.time[index]
		})
		return arr
	}
})
// console.log('relativehumidity_65',relativehumidity_65.filter((value)=> value != undefined));

//lọc ra ngày và tốc độ ,nhiệt độ có độ ẩm  dưới 70

const relativehumiditys_70 = fs.hourly.relativehumidity_2m.map((st,index)=>{
	const arr = []
	if(st < 70){
		arr.push({
			relativehumidity:st,
			windspeed:fs.hourly.windspeed_10m[index],
			temperature: fs.hourly.temperature_2m[index],
			time: fs.hourly.time[index]
		})
		return arr
	}
})
// console.log('relativehumiditys_70',relativehumiditys_70.filter((value)=> value != undefined));

//lọc ra ngày và độ ẩm ,nhiệt độ có tốc độ dưới 8.2

const windspeeds_82 = fs.hourly.windspeed_10m.map((st,index)=>{
	const arr = []
	if(st < 8.2){
		arr.push({
			windspeed:st,
			relativehumidity:fs.hourly.relativehumidity_2m[index],
			temperature: fs.hourly.temperature_2m[index],
			time: fs.hourly.time[index]
		})
		return arr
	}
})
// console.log('windspeeds_82',windspeeds_82.filter((value)=> value != undefined));
