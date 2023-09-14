let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
let result = JSON.parse(request.response);
console.log(result);

for(let i=0;i<result.length;i++){
        console.log(result[i].continents[0]);
    console.log(result[i].regions);
        console.log(result[i].subregion);
        console.log(result[i].population);
        
}
}
