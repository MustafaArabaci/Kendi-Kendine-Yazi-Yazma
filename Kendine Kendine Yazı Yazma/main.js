const content = document.getElementById('content')
const speedEl = document.getElementById('speed')
const text = "Merhaba Ben Mustafa Full-Stack Junior Developerım"
let idx = 1
let speed = 300/ speedEl.value

writeText()


function writeText(){
   content.innerText = text.slice(0, idx)
   idx++

   if(idx > text.length){
      idx = 1
   }
   setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => (speed = 300 / e.target.value))