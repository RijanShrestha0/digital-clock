const body = document.querySelector("body")
body.style.cssText=`
margin: 0;
background: #222;
color: #fff;
font-family: monospace;
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
text-align:center;
margin: 30vh 0 0 0;
font-size: 100px;
font-weight: bold;

`

// Show Timing

const time_hour = document.createElement("div")
time_hour.setAttribute("style", "display: inline-block")
time_hour.setAttribute("id", "hour")
time.appendChild(time_hour)

const dots = document.createElement("a")
dots.setAttribute("style", "font-weight:bolder;")
time.appendChild(dots)

const time_minutes = document.createElement("div")
time_minutes.setAttribute("id", "minutes")
time_minutes.setAttribute("style", "display: inline-block")
time.appendChild(time_minutes)

const time_second = document.createElement("div")
time_second.setAttribute("id", "second")
time_second.setAttribute("style", "display: inline-block")
time.appendChild(time_second)

const time_milli = document.createElement("div")
time_milli.setAttribute("id", "second")
time_milli.setAttribute("style", "display: inline-block")
time.appendChild(time_milli)

const time_time = document.createElement("div")
time_time.setAttribute("id", "day")
time_time.setAttribute("style", "display:block;")
time.appendChild(time_time)

const date = document.createElement("div")
body.append(date)
const time_date = document.createElement("a")
time_date.setAttribute("id", "date")
date.appendChild(time_date)
const time_month = document.createElement("a")
time_month.setAttribute("id", "month")
date.appendChild(time_month)
const time_year = document.createElement("a")
time_year.setAttribute("id", "year")
date.appendChild(time_year)

date.style.cssText=`
text-align: center;
font-size: 30px;
margin-left: -150px;
`

const day =document.createElement("div")
body.append(day)
const time_day = document.createElement("a")
day.appendChild(time_day)


// logic for clock

setInterval(() => {
    
    let currenttime = new Date();
    time_hour.innerHTML = (currenttime.getHours() <=9? "0":"") + currenttime.getHours() + ':'
    time_minutes.innerHTML = (currenttime.getMinutes() <=9? "0":"") + currenttime.getMinutes() + ':' 
    time_second.innerHTML = (currenttime.getSeconds() <10?"0":"") + currenttime.getSeconds() + ':'
    time_milli.innerHTML = (currenttime.getMilliseconds() <100? "0":"") + currenttime.getMilliseconds();

let todaysdate = new Date();
time_date.innerHTML = (todaysdate.getDate()) + "/"
time_month.innerHTML = (todaysdate.getMonth()) + "/"
time_year.innerHTML = (todaysdate.getFullYear())

}, 150);   

let todaysday = new Date();

let baar = todaysday.getDay();

switch (baar) {
    case 0:
        baar = "(Sunday)";
        break;

    case 1:
        baar = "(Monday)";
        break;
    case 2:
       baar = "(Tuesday)";
        break;
    case 3:
        baar = "(Wednesday)";
        break;
    case 4:
        baar = "(Thursday)";
        break;
    case 5:
        baar = "(Friday)";
        break;
    case 6:
        baar = "(Saturday)";
    }
    
    time_day.innerHTML = baar;
    time_day.style.cssText=`
    display: flex;
    justify-content: center;
    margin-left: 150px;
    margin-top: -34px;
    font-size: 25px
    `
