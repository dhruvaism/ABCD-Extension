console.log("Sarathi Slot Booking go...");

var firstIndex = -1;
var allInputRadio = document.getElementsByTagName('input');
for (i = 0; i < allInputRadio.length; i++) {
    if (allInputRadio[i].type == 'radio') {
        firstIndex = i;
        break;
    }

}
if(firstIndex!=-1){
    allInputRadio[firstIndex].click();
    var obj1 = document.getElementById('slotbtn');
    obj1.click();
    // var obj2 = document.getElementById('slotcnfrmbtn');
    // obj2.click();
    // console.log(obj1);
    // console.log(obj2);
}

 