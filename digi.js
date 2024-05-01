function updateClock(){
    let read = new Date();
    let h = read.getHours();
    let m = read.getMinutes();
    let $ = read.getSeconds();
    let sum = "AM";

        if(h > 12){
            h = h - 12;
            sum = "PM";
        }

        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        $ = $ < 10 ? "0" + $ : $;

    document.getElementById("hour").innerHTML = h;
    document.getElementById("minute").innerHTML = m;
    document.getElementById("seconds").innerHTML = $;
    document.getElementById("ampm").innerHTML = sum;

    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock();