    const selectmenu = document.querySelectorAll("select");
    const h2 = document.querySelectorAll("h2")
    const setAlarmbtn = document.getElementById("btn1")
    const showP= document.querySelectorAll("p")
    const ul= document.getElementById("ul")
    // let alarmtime;
   let alarms=[]
    const ringtone = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    for (let i = 23; i >=0; i--) {
        i=i<10?"0"+i:i
        let option = `<option value="${i}">${i}</option>`
        selectmenu[0].firstElementChild.insertAdjacentHTML("afterend",option)
    }
    for (let i = 60; i >0; i--) {
        i=i<10?"0"+i:i
        let option = `<option value="${i}">${i}</option>`
        selectmenu[1].firstElementChild.insertAdjacentHTML("afterend",option)
    }
    for (let i = 60; i >0; i--) {
        i=i<10?"0"+i:i
        let option = `<option value="${i}">${i}</option>`
        selectmenu[2].firstElementChild.insertAdjacentHTML("afterend",option)
    }
    setInterval(()=>{
        let a= new Date()
        let hours = a.getHours()
        let minutes = a.getMinutes()
        let seconds = a.getSeconds()
        hours= hours<10?"0"+hours:hours
        minutes= minutes<10?"0"+minutes:minutes
        seconds= seconds<10?"0"+seconds:seconds
        h2[0].innerText=`${hours}:${minutes}:${seconds}`;
        alarms.forEach(alarm=>{
            if(alarm==`${hours}:${minutes}:${seconds}`){
                ringtone.play()
                ringtone.loop=true
            }
        })
    },1000)
    function setalarm(){
        let time = `${selectmenu[0].value}:${selectmenu[1].value}:${selectmenu[2].value}`
        // console.log(time)
        if(time.includes("hour")||time.includes("minute")||time.includes("second")){
            alert("Please,Select a valid alarm to set")
        }
        alarms.push(time);
        let li = document.createElement("li");
        li.innerHTML+=`Alarm set for ${time}`
        let clear = document.createElement("button");
        clear.classList.add("my-button")
        clear.innerText= "X"
        function clearAlarm(){
            alarms=alarms.filter(alarm=>{
              return alarm!==time
            }) ;
            console.log(alarms)
            ringtone.pause()
            ringtone.currentTime=0
            li.remove()
        }
        clear.addEventListener('click',clearAlarm)
        ul.appendChild(li)
        li.appendChild(clear)
    }
    setAlarmbtn.addEventListener('click',setalarm)
