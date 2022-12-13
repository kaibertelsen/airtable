src="https://cdn.jsdelivr.net/gh/kaibertelsen/airtable/config-03.js"

function airtable(baseID,tableIOd,type,indata,funckid,description){
var url = "https://api.airtable.com/v0/"+baseID+"/"+tableIOd;

if(type=="DELETE"){
url = url+"/"+indata;
}else if(type=="GET"){
  if (description == "retrieve"){
// hente informasjon basert på Item ID.
url = url+"/"+indata;
}else if(description =="view"){
// hente informasjon basert på view.
url = url+"?maxRecords=100&view="+indata;
}else{
//hente alle i tabellen


}
}
var xhr = new XMLHttpRequest();
xhr.open(type, url);
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", config.MY_KEY;);
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
    
      airtablereturn (xhr.status,xhr.responseText,funckid);
   }};

var data = [];

if(type =="PATCH"){
  //slik skal input være
/*`{
      "id": "recJnWPOfM2k85k1W",
      "fields": {
        "Webside": "www.sportspakke.no",
        "Type skjema": "webflow",
        "Tid": "2023-10-28T07:18:12.602Z"
      }
    }`
    */
data = `{
"records": [`+indata+`]}`;
}else if(type =="POST"){
//slik skal input være
/*`{
      "fields": {
        "Webside": "www.sportspakke.no",
        "Type skjema": "webflow",
        "Tid": "2023-10-28T07:18:12.602Z"
      }
    }`
    */
data = `{
"records": [`+indata+`]}`;
}else if (type == "GET"){

}
xhr.send();
}
