updateCountdown = () => {
    // releas edate is May 12, 2023
    const releaseDateUTC = 1683896400000;
    const nowDateUTC = new Date().getTime();
    const daysLeftUntilRelease =
        ((releaseDateUTC - nowDateUTC) / 1000 / 60 / 60 / 24)
            .toString()
            .split(".")[0];

    document.getElementsByTagName("title")[0].innerHTML = daysLeftUntilRelease + " days left";
    document.getElementById("daysCount").innerHTML = daysLeftUntilRelease + " DAYS";
}

init = () => {
    updateCountdown()
    setInterval(updateCountdown, (1000 * 60))
}

window.onload = init;