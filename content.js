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
if(firstDate!=-1){
    var a = allDates[firstDate].getElementsByTagName("a");
    if(a){
        console.log(a[0].href);
        window.location = a[0].href;
    }
}

//first appointment time slot
var firstTime = -1;
//finding first appointment date
var allInputRadio = document.getElementsByTagName('input');
if(allInputRadio){
   for (i = 0; i < allInputRadio.length; i++) {
        if (allInputRadio[i].type == 'radio') {
            firstTime = i;
            break;
        }
    }
}

if(firstTime!=-1){
    //for auto select appointment date
    allInputRadio[firstTime].click();
    //for auto book slot
    var bookSlot = document.getElementById('slotbtn');
    if(bookSlot){
       bookSlot.click();
    }
}

//for auto final submit
var finalForm = document.getElementById('llslotprev');
if(finalForm){
   finalForm.submit();
}

 //https://sarathi.parivahan.gov.in/slotscov12/fetchslotdet.do?date=19-08-2020
///slotscov12/savellslotdet.do