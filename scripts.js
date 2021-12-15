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


const $colorOptions = document.getElementById('color-options')
const $colorWhite = document.getElementById('color-white')
const $colorGreen = document.getElementById('color-green')
const $colorYellow = document.getElementById('color-yellow')

const $turnOn = document.getElementById('turn-on')
const $turnOff = document.getElementById('turn-off')

const $timeContent = document.getElementById('time-content')
const $fullDate = document.getElementById('full-date')
const $dayOfWeek = document.getElementById('day-of-week')
const $fullDateInfo = document.getElementById('full-date-info')
const $dayOfWeekInfo = document.getElementById('day-week-info')

const $settingsButton = document.getElementById('settings-button')
const $additionalButton = document.getElementById('additional-button')

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

// RUN 