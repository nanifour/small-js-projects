
const panels = document.querySelectorAll('.panel')

//pass function as an argument
panels.forEach(panel => {

        //event listenner so that when we click it something happens
    panel.addEventListener('click', () => {
        //before putting an active class on another, remove the other actives
        removeActiveClasses()
        panel.classList.add('active')
    })

})

//remove active class
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

