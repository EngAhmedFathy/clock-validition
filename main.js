function showtime() {
    var date = new Date();
    var hourss = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var TimeZone = "PM";

    hourss = (hourss < 10) ? "0" + hourss : hourss;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    if (hourss > 12) {
        hourss = hourss - 12 ;
        TimeZone = "AM";
    }

    if (hourss === 0){
        hourss = 12 ;
    }





    var Time = hourss +":" + minute +":" + second +":" + TimeZone;
    document.getElementById("bigclock").innerHTML = Time;

    setTimeout(showtime , 1000) 
}
showtime();

// ---------------------------------------------------------

function formvalidate(){
    var username = document.getElementById ("username").value;
    var email = document.getElementById ("email").value;
    var tel = document.getElementById ("phone").value;
    var error = document.getElementById ("error");
    var text = "";

    if(username.length < 4){
                text = "please enter valid username";
                error.innerHTML = text;
                return false;
        
    }
     else if (email.indexOf("@")== -1 ){
                text = "please enter valid email";
                error.innerHTML = text;
                return false;    
    }

    else if (email.length <  12 ){
        text = "please enter valid email";
        error.innerHTML = text;
        return false;    
}


    else if (isNaN(tel) || tel.length != 11 ){
                text = "please enter valid phone";
                error.innerHTML = text;
                return false; 
    }

    else {
                alert ("Done");
                return true ;
    }




}




















