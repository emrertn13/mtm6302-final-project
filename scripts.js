// PSOUDO CODE 
// Display the current time on the page 
// Add a button to expend time info such as date information 
// Create a button for additional settings 
//    Settings can be Change text color & adding substracting seconds 
    //   Add three color options
    //   make a select for seconds on & off 


// DATA 
const $container = document.getElementById('container')
const $settingsDisplay = document.getElementById('settings-display')
const $timeDisplay = document.getElementById('time-display')
const $additionalDisplay = document.getElementById('additional-display')

const $colorSettings = document.getElementById('color-settings')
const $secondSettings = document.getElementById('second-settings')

const $dateContainer = document.getElementById('date-container')
const $weekContainer = document.getElementById('week-container')


const $secondsOptions = document.getElementById('seconds-options')

const $colorOptions = document.getElementById('color-options')

const $timeContent = document.getElementById('time-content')
const $forSeconds = document.getElementById('for-seconds')
const $fullDate = document.getElementById('full-date')
const $dayOfWeek = document.getElementById('day-of-week')
const $fullDateInfo = document.getElementById('full-date-info')
const $dayOfWeekInfo = document.getElementById('day-week-info')

const $settingsButton = document.getElementById('settings-button')
const $settingsClose = document.getElementById('settings-close')
const $additionalButton = document.getElementById('additional-button')
const $infoClose = document.getElementById('info-close')

// CODE 
fetch('https://api.nasa.gov/planetary/apod?api_key=oLqSjn3VbbJDsQVqE8JXRpnjsh2dmaaFDXFjskHN&thumbs=True')
    .then(function(response) {
        return response.json()
    })
    .then(function(imageData) {
        console.log(imageData)

        if(imageData.media_type === 'video')  {
            document.querySelector('img').setAttribute('src', imageData.thumbnail_url)
        }
        else {
            document.querySelector('img').setAttribute('src', imageData.url)
        }
    })

$settingsButton.addEventListener('click', function() {
    $settingsDisplay.setAttribute('style', 'display: inline-block')
    $settingsButton.setAttribute('style', 'display: none')
})
$settingsClose.addEventListener('click', function() {
    $settingsDisplay.setAttribute('style', 'display: none')
    $settingsButton.setAttribute('style', 'display: inline-block')
})

$additionalButton.addEventListener('click', function() {
    $additionalDisplay.setAttribute('style', 'display: inline-block')
    $additionalButton.setAttribute('style', 'display: none')
})
$infoClose.addEventListener('click', function() {
    $additionalDisplay.setAttribute('style', 'display: none')
    $additionalButton.setAttribute('style', 'display: inline-block')
})

$colorOptions.addEventListener('change', function() {
    localStorage.setItem('Selected Color', parseInt($colorOptions.value))
    if(parseInt($colorOptions.value) == 1) {
        $timeContent.setAttribute('style', 'color: white')
        $forSeconds.setAttribute('style', 'color: white')
    }
    if(localStorage.getItem('Selected Color') == 2) {
        $timeContent.setAttribute('style', 'color: green')
        $forSeconds.setAttribute('style', 'color: green')
    }
    if(localStorage.getItem('Selected Color') == 3) {
        $timeContent.setAttribute('style', 'color: yellow')
        $forSeconds.setAttribute('style', 'color: yellow')
    }
})

if(localStorage.getItem('Selected Color') == undefined) {
    $timeContent.setAttribute('style', 'color: red')
    $forSeconds.setAttribute('style', 'color: red')
}
if(localStorage.getItem('Selected Color') == 1) {
    $timeContent.setAttribute('style', 'color: white')
    $forSeconds.setAttribute('style', 'color: white')
}
if(localStorage.getItem('Selected Color') == 2) {
    $timeContent.setAttribute('style', 'color: green')
    $forSeconds.setAttribute('style', 'color: green')
}
if(localStorage.getItem('Selected Color') == 3) {
    $timeContent.setAttribute('style', 'color: yellow')
    $forSeconds.setAttribute('style', 'color: yellow')
}



// RUN 
setInterval(function() {
    const currentTime = new Date()
    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const seconds = currentTime.getSeconds()
    const miliseconds = currentTime.getMilliseconds()
    const day = currentTime.getDay()

    $timeContent.textContent = hours + ":" + minutes
    $fullDateInfo.textContent = hours + ":" + minutes + ":" + seconds + ":" + miliseconds
    if(day === 0) {
        $dayOfWeekInfo.textContent = "Sunday"
    }
    if(day === 1) {
        $dayOfWeekInfo.textContent = "Monday"
    }
    if(day === 2) {
        $dayOfWeekInfo.textContent = "Tuesday"
    }
    if(day === 3) {
        $dayOfWeekInfo.textContent = "Wednesday"
    }
    if(day === 4) {
        $dayOfWeekInfo.textContent = "Thursday"
    }
    if(day === 5) {
        $dayOfWeekInfo.textContent = "Friday"
    }
    if(day === 6) {
        $dayOfWeekInfo.textContent = "Saturday"
    }

    $secondsOptions.addEventListener('change', function() {
        localStorage.setItem('Seconds', parseInt($secondsOptions.value))
        if(parseInt($secondsOptions.value) == 4) {
            $forSeconds.textContent = seconds
        }
        if(parseInt($secondsOptions.value) == 5) {
            $forSeconds.textContent = ''
        }
    })
    if(localStorage.getItem('Seconds') == undefined) {
        $forSeconds.textContent = ''
    }
    if(localStorage.getItem('Seconds') == 4) {
        $forSeconds.textContent = seconds
    }
    if(localStorage.getItem('Seconds') == 5) {
        $forSeconds.textContent = ''
    }
})