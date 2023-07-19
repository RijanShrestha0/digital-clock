const body = document.querySelector("body")
body.style.cssText=`
margin: 0;
background: #222;
color: #fff;
font-family: 'Courier New', Courier, monospace;

`

// theme

const div = document.createElement("div")
const dark_mode = document.createElement("a")
dark_mode.textContent="Dark"
div.appendChild(dark_mode)
div.style.display="flex"
div.style.justifyContent="right"
div.style.margin="50px"
dark_mode.style.cssText=`
margin-right: 2vw;
cursor: pointer;
`

dark_mode.addEventListener("click", function(){
    body.style.backgroundColor=`#222`
    body.style.color=`#fff`
})

const light_mode = document.createElement("a")
light_mode.textContent="Light"
body.appendChild(div)
div.appendChild(light_mode)

light_mode.style.cssText=`
cursor: pointer;
`

light_mode.addEventListener("click", function(){
    body.style.backgroundColor=`#fff`
    body.style.color=`#222`
})


// display

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

// Show Timing

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


// logic for clock

setInterval(() => {
    
    let currenttime = new Date();

    time_hour.innerHTML = (currenttime.getHours() <10?"0":"") + currenttime.getHours();
    time_minutes.innerHTML = (currenttime.getMinutes() <10?"0":"") + currenttime.getMinutes();
    time_second.innerHTML = (currenttime.getSeconds() <10?"0":"") + currenttime.getSeconds();

}, 1000);
