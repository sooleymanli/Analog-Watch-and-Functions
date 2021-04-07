const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');
const dighours = document.querySelector('.digital-hours')
const digmin = document.querySelector('.digital-minute')
const digsec = document.querySelector('.digital-sec')
const digweek = document.querySelector('.week')
const digday = document.querySelector('.day')
let digitalBackground = document.querySelector(".digital")
let digitalAlarmBackground = document.querySelector(".digital-alarm")
let digalarm = document.querySelector('.alarm-time')
let nightBtn = document.querySelector('.night')
let clockBody = document.querySelector('.clock')
let alarmBtn = document.querySelector('.alarm')
let alarmBody = document.querySelector('.alarm-form-body')
let alarMainBody = document.querySelector('.alarm-body')
let alarmIcon = document.querySelector('.alarm-icon')
let closeBtn = document.querySelector('.close')
let alarmTime = document.querySelector('#times')
let applyBtn = document.querySelector('.apply')
let alarmStop = document.querySelector('.alarm-stop')
let audio = document.querySelector('#audio')
let audioSeconds = document.querySelector('#audio-seconds')
let obj = document.body.style
let alarmReset = document.querySelector("#alarmReset")
let secondBackPopupBody = document.querySelector('.timeout-body')
let secondclosePopupBtn = document.querySelector('.timeout-close')
let secondBackBtn = document.querySelector('.secundametr')
let secondBackStartBtn = document.querySelector(".apply-timeout")
let secondBackInputValue = document.querySelector("#secondbackvalue")
let secondBackResultNumber = document.querySelector('#total')
let stopSecundBackBtn = document.querySelector("#stopSecundBack")
let playSound = document.querySelector(".fa-play")
let pauseSound = document.querySelector(".fa-pause")
let alertSound = document.querySelector(".alert-sound")
let alertTime = document.querySelector(".alert-time")
let alertTimeBack = document.querySelector(".alert-time-back")
let alarmSoundValue = document.querySelector("#audioselect")
let timerPopupShowBtn = document.querySelector(".secun")
let timerBody = document.querySelector(".timer-body")
let timerMainBody = document.querySelector(".timer-main-body")
let timerClose = document.querySelector(".timer-close")
let timerStart = document.querySelector(".apply-timer")
let timerAddBtn = document.querySelector(".apply-timer-add")
let timerStopBtn = document.querySelector("#stoptimer")
let timerImg = document.querySelector(".clock-timer ")
let timerList = document.querySelector(".timer-for-list")
let listReset = document.querySelector("#resetList")
let timerLitsKomponent = []
let newUl, mainUl, toStringText, i, sct, mns, saniye, millisaniye, timerMilliSecund, timerMinute, timerSecunds, timerTotal, digHh, digMm, digSs, digWk, digDy, newHours, newMinute, newSecundss, newTime, digDay, secundBackProcess, timerStartProces



// Working principle 
setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    digDay = new Date();

    digHh = digDay.getHours()
    digMm = digDay.getMinutes()
    digSs = digDay.getSeconds()
    digWk = digDay.getDay()
    digDy = digDay.getDate()
    if (digHh <= 6 && digHh >= 21) {
        obj.cssText = "background-color:black";
        clockBody.style.backgroundColor = "green";
        nightBtn.innerHTML = '<i class="fas fa-sun"></i>'
    }

    if (digWk == 0) {
        digWk = "Bazar"
    }
    if (digWk == 1) {
        digWk = "B.ertəsi"
    }
    if (digWk == 2) {
        digWk = "Ç.axşamı"
    }

    if (digWk == 3) {
        digWk = "Çərşənbə"
    }

    if (digWk == 4) {
        digWk = "C.axşamı"
    }

    if (digWk == 5) {
        digWk = "Cümə"
    }

    if (digWk == 6) {
        digWk = "Şənbə"
    }



    if (digHh < 10) {
        digHh = `0${digHh}`
    }
    if (digMm < 10) {
        digMm = `0${digMm}`
    }
    if (digSs < 10) {
        digSs = `0${digSs}`
    }
    dighours.innerHTML = digHh + ":" + digMm;
    digsec.innerHTML = digSs;
    digweek.innerHTML = digWk;
    digday.innerHTML = digDy




})

// Night Mode
nightBtn.addEventListener("click", () => {
    if (obj.cssText == "") {
        obj.cssText = "background-color:black";
        clockBody.style.backgroundColor = "green";
        digitalAlarmBackground.style.backgroundColor = "black"
        digitalAlarmBackground.style.color = "white"
        digitalBackground.style.backgroundColor = "black"
        digitalBackground.style.color = "white"
        digweek.style.color = "white"
        nightBtn.innerHTML = '<i class="fas fa-sun"></i>'
    }

    else if (document.body.style.backgroundColor == "black") {
        document.body.style.backgroundColor = "white";
        clockBody.style.backgroundColor = "white";
        nightBtn.innerHTML = '<i class="fas fa-moon"></i>'
        digitalAlarmBackground.style.backgroundColor = ""
        digitalAlarmBackground.style.color = ""
        digitalBackground.style.backgroundColor = ""
        digitalBackground.style.color = ""
        digweek.style.color = ""
    }

    else if (document.body.style.backgroundColor == "white") {
        document.body.style.backgroundColor = "black";
        clockBody.style.backgroundColor = "green";
        nightBtn.innerHTML = '<i class="fas fa-sun"></i>'
        digitalAlarmBackground.style.backgroundColor = "black"
        digitalAlarmBackground.style.color = "white"
        digitalBackground.style.backgroundColor = "black"
        digitalBackground.style.color = "white"
        digweek.style.color = "white"
    }

})

// Click to Alarm Button
alarmBtn.addEventListener("click", () => {
    alarmBody.style.visibility = "visible"
    alarMainBody.style.animation = "fadeIn ease 2s;"
    audioSeconds.pause()
    audioSeconds.currentTime = 0

})

// Click to Alarm Close Button
closeBtn.addEventListener("click", () => {
    alarmBody.style.visibility = "hidden"
    alarMainBody.style.animation = "slideup ease 2s;"

})

// Choose Alarm Audio
alarmSoundValue.addEventListener("change", () => {
    audio.src = `audio/${alarmSoundValue.value}.WAV`
})

// Click to Play Button for Alarm Audio
playSound.addEventListener("click", () => {
    if (alarmSoundValue.value == "") {
        alertSound.innerHTML = "* Səs faylı seçin.."
    }


    audio.play()

})

// Click to Stop Button for Alarm Audio
pauseSound.addEventListener("click", () => {
    audio.pause()
    audio.currentTime = 0
})

// Alarm is Ready
applyBtn.addEventListener("click", () => {
    if (alarmTime.value == "") {
        alertTime.innerHTML = "* Zaman seçin.."
    }
    else if (alarmSoundValue.value == "") {
        alertSound.innerHTML = "* Səs faylı seçin.."
    }
    else {
        alertTime.innerHTML = ""
        alertSound.innerHTML = ""
        alarmTime.disabled = true
        alarmSoundValue.disabled = true
        alarmTimeBir = alarmTime.value
        newHours = alarmTimeBir.slice(0, 2);
        newMinute = alarmTimeBir.slice(3, 5)
        newTime = new Date()
        newTime.setHours(newHours)
        newTime.setMinutes(newMinute)

        let alarmHrs = newTime.getHours()
        let alarmMin = newTime.getMinutes()


        if (alarmHrs < 10) {
            alarmHrs = `0${alarmHrs}`
        }
        if (alarmMin < 10) {
            alarmMin = `0${alarmMin}`
        }
        digalarm.innerHTML = alarmIcon.innerHTML + " " + alarmHrs + ":" + alarmMin
        alarmBody.style.visibility = "hidden"
        alarmIcon.style.color = "darkorange"

        if (alarmHrs == "00" && alarmMin == "00") {
            alarmIcon.style.color = "black"
            alarmTime.disabled = false
            alarmSoundValue.disabled = false

        }
    }

})

// Click to Reset Button for Alarm
alarmReset.addEventListener("click", () => {
    alarmTime.value = ""
    alarmSoundValue.value = 'header'
    alarmTime.disabled = false
    alarmSoundValue.disabled = false

})

// Alarm Working principle 
setInterval(() => {
    if (digHh == newHours && digMm == newMinute && digSs == 1) {
        audio.loop = true;
        audio.play()
        alarmStop.style.display = "block"
        document.body.className = "body-animation"
    }
}, 1000)

// Click to Alarm Stop Button
alarmStop.addEventListener("click", () => {
    digalarm.innerHTML = alarmIcon.innerHTML + " " + "00:00"
    alarmIcon.style.color = "black"

    audio.currentTime = 0
    audio.pause()
    audio.currentTime = 0
    document.body.className = ""

    alarmStop.style.display = "none"


})

// Click to Secundamer Button 
secondBackBtn.addEventListener("click", () => {
    secondBackPopupBody.style.visibility = "visible"
})

// Click to Secundamer Close Button 
secondclosePopupBtn.addEventListener("click", () => {
    secondBackPopupBody.style.visibility = "hidden"
})

// Choose Secundamer Time
secondBackInputValue.addEventListener("change", () => {
    let secondBackInputValueTwo = secondBackInputValue.value
    secondBackResultNumber.innerHTML = secondBackInputValueTwo
})

// Start Secundamer
secondBackStartBtn.addEventListener("click", () => {
    if (secondBackInputValue.value == "") {
        alertTimeBack.innerHTML = "* Zaman seçin.."
    }
    else if (secondBackInputValue.value !== "") {
        alertTimeBack.innerHTML = ""

        secondBackInputValue.disabled = true
        audioSeconds.loop = true;
        audioSeconds.play()

        newMinutess = secondBackResultNumber.innerHTML.slice(0, 2);
        newSecundss = secondBackResultNumber.innerHTML.slice(3, 5)

        secundBackProcess = setInterval(() => {
            if (newSecundss == 0) {
                newMinutess = newMinutess - 1
                newSecundss = 59
            }

            else if (newSecundss > 10) {
                newSecundss = newSecundss - 1

            }
            else if (newSecundss <= 10) {
                newSecundss = `0${newSecundss - 1}`
            }

            secondBackResultNumber.innerHTML = `${newMinutess}:${newSecundss}`
        }, 1000)







    }
})


// Secundamer Finish
setInterval(() => {
    if (newSecundss == 0 && newMinutess == 0) {
        audioSeconds.pause()
        clearInterval(secundBackProcess)
    }

}, 1000)


// Click to Secundamer Stop Button
stopSecundBackBtn.addEventListener("click", () => {

    secondBackInputValue.disabled = false
    secondBackResultNumber.innerHTML = ""
    secondBackInputValue.value = ""
    clearInterval(secundBackProcess)
    audioSeconds.pause()
    audioSeconds.currentTime = 0;
});


// Click to Timer Button 
timerPopupShowBtn.addEventListener("click", () => {
    timerBody.style.visibility = "visible"
    timerImg.style.visibility = "visible"

})

// Click to Timer Close Button 
timerClose.addEventListener("click", () => {
    timerBody.style.visibility = "hidden"
    timerImg.style.visibility = "hidden"


})

// Click to Start Timer Button
timerStart.addEventListener("click", () => {
    timerTotal = document.querySelector("#total-timer")
    timerSecunds = 00
    timerMinute = 00
    timerMilliSecund = 00


    timerStartProces = setInterval(() => {
        timerMilliSecund++


        if (timerMilliSecund < 10) {
            timerMilliSecund = `0${timerMilliSecund}`
        }

        if (timerMilliSecund >= 10) {
            timerMilliSecund = `${timerMilliSecund}`
        }

        timerTotal.innerHTML = `${timerMinute}:${timerSecunds}:${timerMilliSecund}`

        if (timerMilliSecund == 60) {
            timerSecunds++
            timerMilliSecund = 0

            if (timerSecunds < 10) {
                timerSecunds = `0${timerSecunds}`
            }
            if (timerSecunds >= 10) {
                timerSecunds = `${timerSecunds}`

            }
        }


        if (timerSecunds == 60) {
            timerMinute++
            timerSecunds = 0

            if (timerMinute < 10) {
                timerMinute = `0${timerMinute}`
            }
            if (timerMinute >= 10) {
                timerMinute = `${timerMinute}`

            }
        }


        millisaniye = timerMilliSecund * 6;
        saniye = timerSecunds * 6;

        mns = document.querySelector("#mnt")
        sct = document.querySelector("#sct")
        mns.style.transform = `rotateZ(${saniye}deg)`;
        sct.style.transform = `rotateZ(${millisaniye}deg) translateX(-50%)`;



    }, 1000 / 60)

    if (timerMilliSecund == 0) { timerMilliSecund = `0${timerMilliSecund}` }
    if (timerSecunds == 0) { timerSecunds = `0${timerSecunds}` }
    if (timerMinute == 0) { timerMinute = `0${timerMinute}` }
    timerTotal.innerHTML = `${timerMinute} : ${timerSecunds} : ${timerMilliSecund}`


    mainUl = document.querySelector("#ul")
    newUl = document.createElement("ul")
    newUl.className = 'ul'
    mainUl.appendChild(newUl)

})


// Click to Stop Timer Button
timerStopBtn.addEventListener("click", () => {
    clearInterval(timerStartProces);
    timerMinute = 0
    timerSecunds = 0
    timerMilliSecund = 0
    timerTotal.innerHTML = `00:00:00`
    mns.style.transform = `rotateZ(${0}deg)`;
    sct.style.transform = `rotateZ(${0}deg) translateX(-50%)`;
    listReset.style.display = "block"


})


// Add to List Time of Timer
timerAddBtn.addEventListener("click", () => {
    timerMainBody.style.width = "80%"
    timerList.style.display = "block"
    toStringText = timerTotal.innerHTML.toString()
    timerLitsKomponent.push(toStringText)





    let newLi = document.createElement("li")
    let ul = document.querySelector(".ul")
    newLi.innerHTML = timerLitsKomponent[timerLitsKomponent.length - 1]
    ul.appendChild(newLi)

})

// Click to Timer List Reset Button
listReset.addEventListener("click", () => {
    timerLitsKomponent = []
    newUl.parentNode.removeChild(newUl)
    timerMainBody.style.width = "600px"
    listReset.style.display = "none"
    timerList.style.display = "none"
})


