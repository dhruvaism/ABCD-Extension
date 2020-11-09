 
console.log("Sarathi Slot Booking go...");



//find appointment date slot
var allDates = document.getElementsByTagName("td");
var firstDate = -1;
if(allDates){
    for(j=0;j<allDates.length;j++){
        if(allDates[j].style.color ===  "green"){
            firstDate = j;
            break;
        }
    }
}

var t = document.getElementsByName("timeForDisp");
if(firstDate!=-1 && t.length==0){
    var a = allDates[firstDate].getElementsByTagName("a");
    if(a){
        console.log(a[0].href);  
        window.location.assign(a[0].href);
        
    }
}

if(t.length>0){     
var loc = window.location.href;
var len = loc.length-1;
while(len>=0){
    if(loc[len]=="/")
      break;
    len--;  
    //console.log(loc[len]);
}
var url = "";
for(var i=0;i<len;i++){
    url+=loc[i];
}

var slotDate="";
var slotTime="";
var slotSeat="";
var date = document.getElementById("seldt");
slotDate = date.innerText;
var time = document.getElementsByName("timeForDisp");
var id = time[0].id;
for(i=0;i<11;i++){
 slotTime+=id[i];
}
slotSeat = time[0].value;

// console.log(slotDate);
// console.log(slotTime);
// console.log(slotSeat);
var xhr = new XMLHttpRequest();
xhr.open('POST',url+"/bookllnew.do?timefordisp="+slotTime+"&seldate="+slotDate,true);
xhr.setRequestHeader( 'Access-Control-Allow-Origin', '*');

var formData = new FormData();
formData.append('timeForDisp',slotSeat);
formData.append('save','BOOKSLOT');
xhr.send(formData);
xhr.onreadystatechange = processRequest;

function processRequest(e){
    window.location.assign(url+"/savellslotdet.do");
 }
 

} 
    
  





