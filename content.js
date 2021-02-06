//getting base url
var loc = window.location.href;
if(loc.includes("sarathi.parivahan.gov.in")){
   console.log("abc...");
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

if(loc.includes("sarathi.parivahan.gov.in/slots/sendSMS.do")){
    var sub = undefined;
    sub = document.getElementById("dispappldetform_PROCEEDTOBOOK");
    if(sub != undefined){
        sub.click();
    }
}


// function bookslot(){

// var form = document.createElement("form");
// form.setAttribute("method","post");
// form.setAttribute("action",url+"/proceedBookslot.do");

// var input = document.createElement("input");
// input.setAttribute("type","text");
// input.setAttribute("name","method:proceedBookslot");
// input.setAttribute("value","PROCEED TO BOOK");
// form.appendChild(input);
// document.body.appendChild(form);
// form.submit();
// console.log(form);
// } 

// function verify(){

// // __checkbox_email: email
// // smsCode: 8545
// // method:submitSecurityCode: SUBMIT

// var xhr = new XMLHttpRequest();
// xhr.open('POST',"https://sarathi.parivahan.gov.in/slots/sendSMS.do",true);
// xhr.setRequestHeader( 'Access-Control-Allow-Origin', '*');

// var formData = new FormData();
// formData.append('__checkbox_email','email');
// formData.append('smsCode','006198');
// formData.append('method:submitSecurityCode','SUBMIT');
// xhr.send(formData);

// }

// var sub = undefined;
// var form = undefined;
// sub = document.getElementById("securityForm__submitSecurityCode");
// if(sub!=undefined){
// setTimeout(function() { 
//     verify();    
//     bookslot(); 
// }, 5000);


// }


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

var last = window.location.href;
if(last.includes("proceedBookslot.do")){
   if(firstDate==-1){
       bookslot();
   }
}




var t = document.getElementsByName("timeForDisp");

if(firstDate!=-1 && t.length==0){
   var a = allDates[firstDate].getElementsByTagName("a");
   if(a){
       console.log(a[0].href);  
       window.location.assign(a[0].href); //fetch slot
       
   }
}

if(t.length>0 && firstDate!=-1){     

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

if(last.includes("savellslotdet.do")){
   var d = undefined;  
   d = document.getElementById("backForm");
   if(d!=undefined){
       window.location.assign(last);
   }
 }

}
