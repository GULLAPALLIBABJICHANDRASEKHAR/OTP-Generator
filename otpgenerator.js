// To Generate OTP
function otp_text() {

    // To generate otp in within range
    let  digits = '1234567890' ;

    // To store the otp
    let otp = "";

    for(let i=0; i<6; i++){
        let rand = Math.floor(Math.random()*digits.length);
        otp = otp + digits[rand];
    }
    // To print the otp in html
    document.getElementsByClassName("otp-place")[0].innerHTML=otp;
}

// OTP Validation Function
// OTP Validation Function
function validate() {
    // OTP Entered input Field
    let otp_value = document.getElementById("otp-text").value;
    // OTP Generated Field
    let otp_main = document.getElementsByClassName("otp-place")[0].innerHTML;
    // Message Element
    let message = document.getElementById("validation-message");

    // Main Validation
    if (otp_value==""){
        message.innerHTML = "Please Enter the OTP First";
        message.style.color = "red";
    }
    else if (otp_value !== otp_main) {
        message.innerHTML = "Invalid OTP Entered";
        message.style.color = "red";
    } else {
        message.innerHTML = "Your OTP is Validated Successfully";
        message.style.color = "green";
    }
}
