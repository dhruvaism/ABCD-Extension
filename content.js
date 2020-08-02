console.log("Sarathi Slot Booking go...");

//first appointment date
var firstIndex = -1;

//finding first appointment date
var allInputRadio = document.getElementsByTagName('input');
if(allInputRadio){
   for (i = 0; i < allInputRadio.length; i++) {
        if (allInputRadio[i].type == 'radio') {
            firstIndex = i;
            break;
        }
    }
}

if(firstIndex!=-1){
    //for auto select appointment date
    allInputRadio[firstIndex].click();
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



 