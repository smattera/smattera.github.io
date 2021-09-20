let events = document.querySelectorAll('.carousel-event .carousel-event-item')

events.forEach((el) => {
    const minPerSlide = 4
    let nextEvent = el.nextElementSibling
    for (var j=1; j<minPerSlide; i++) {
        if (!nextEvent) {
            // wrap carousel by using first child
        	nextEvent = events[0]
      	}
        let cloneEventChild = nextEvent.cloneNode(true)
        el.appendChild(cloneEventChild.children[0])
        nextEvent = nextEvent.nextElementSibling
    }
})
