const Url="https://ip-uacs.herokuapp.com/api/Convert/ToFahrenheit/%7BCtemp%7D"
const data={
	Ctemp=20
}
$('btn').click(function(){
	$post(Url,data,function(data,status){
		console.log(`${data}`)});})