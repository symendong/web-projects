

var myButton = document.querySelector('button');
if (myButton.textContent == "Change user"){
    //alert('Yay, I am Change User'); 
}else{
    alert('Yay, I am not Change User'); 
}
myButton.onclick = function() {
    alert('Ouch! Stop poking me!');
}

