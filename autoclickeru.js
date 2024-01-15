/*
1337 AutoClicker Universal v0.1
author: 1337 Cheats
description: A simple yet effective open source autoclicker by 1337 Cheats, this amazingly fast clicker utility runs entirely in the browser! This utility is one of the best browser based autoclickers!
*/
let cps = parseInt(prompt("Cookie Clicker AutoClicker by 1337 Cheats!\nPress F2 to stop clicking!\nEnter CPS"));
let clickingItem = prompt("1337 AutoClicker Universal\nEnter the id of the item to click");
var clickInterval = setInterval(function() {
    document.getElementById(clickingItem).click();
}, cps / 1000);
document.addEventListener("keydown", function(event) {
    if (event.keyCode === 113) {
        alert("[+] 1337 Clicker Universal - Clicking Stopped!");
        clearInterval(clickInterval);
    }
});
