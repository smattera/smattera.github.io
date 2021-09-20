let events = document.querySelectorAll('.carousel-event .carousel-event-item')

events.forEach((elem) => {
    const minPerSlide = 4
    let nextEvent = elem.nextElementSibling
    for (var j=1; j<minPerSlide; i++) {
        if (!nextEvent) {
            // wrap carousel by using first child
        	nextEvent = events[0]
      	}
        let cloneEventChild = nextEvent.cloneNode(true)
        elem.appendChild(cloneEventChild.children[0])
        nextEvent = nextEvent.nextElementSibling
    }
})
