// console.log(Math.random() * 20)

// var names = ["jetty", "megan", "jamie", "nick", "edwin"]

// var pickName = names[Math.floor(Math.random() * names.length)]
// console.log (pickName)

// var today = new Date()
// today.getFullYear()

// setTimeout(function(){console.log(today.getFullYear()); }, 2000);
// }

var el = document.getElementById('body')
var today = new Date()
function domListenerEvent() {

el.textContent = today.getFullYear()
}

el.addEventListener('click', domListenerEvent(), false)
