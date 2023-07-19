const body = document.querySelector("body")
body.style.cssText=`
margin: 0;
background: #222;
color: #fff;
font-family: 'Courier New', Courier, monospace;

`

const time = document.createElement("div")
time.setAttribute("id", "time")
body.appendChild(time)
time.style.cssText=`
display: flex;
justify-content: center;
margin: 350px 0;
font-size: 85px;
font-weight: bold;

`

const time_hour = document.createElement("div")
time_hour.setAttribute("style", "display: inline-block")
time_hour.setAttribute("id", "hour")
time.appendChild(time_hour)

const dots = document.createElement("a")
dots.textContent=":"
dots.setAttribute("style", "font-weight:bolder;")
time.appendChild(dots)

const time_minutes = document.createElement("div")
time_minutes.setAttribute("id", "minutes")
time_minutes.setAttribute("style", "display: inline-block")
time.appendChild(time_minutes)

const dot = document.createElement("a")
dot.textContent=":"
dot.setAttribute("style", "font-weight:bolder;")
time.appendChild(dot)

const time_second = document.createElement("div")
time_second.setAttribute("id", "second")
time_second.setAttribute("style", "display: inline-block")
time.appendChild(time_second)


setInterval(() => {
    
    let currenttime = new Date();

    time_hour.innerHTML = (currenttime.getHours() <10?"0":"") + currenttime.getHours();
    time_minutes.innerHTML = (currenttime.getMinutes() <10?"0":"") + currenttime.getMinutes();
    time_second.innerHTML = (currenttime.getSeconds() <10?"0":"") + currenttime.getSeconds();

}, 1000);
