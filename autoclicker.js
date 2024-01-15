/*
1337 Cookie Clicker AutoClicker v0.1
author: 1337 Cheats
description: A simple yet effective open source Cookie Clicker autoclicker by 1337 Cheats, this amazingly fast Cookie Clicker utility runs entirely in the browser! This utility is one of the best cookie clicker autoclickers!
*/
cps = parseInt(prompt("Cookie Clicker AutoClicker by 1337 Cheats!\nPress F2 to stop clicking!\nEnter CPS"));
var clickInterval = setInterval(function() {
    document.getElementById('bigCookie').click();
}, cps / 1000);
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 113) {
        alert("[+] 1337 Clicker - Clicking Stopped!");
        clearInterval(clickInterval);
    }
});
