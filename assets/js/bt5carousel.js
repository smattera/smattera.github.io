let items = document.querySelectorAll('.carousel-sponsor .carousel-sponsor-item')

items.forEach((el) => {
    const minPerSlide = 4
    let nextSponsor = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!nextSponsor) {
            // wrap carousel by using first child
        	nextSponsor = items[0]
      	}
        let cloneSponsorChild = next.cloneNode(true)
        el.appendChild(cloneSponsorChild.children[0])
        nextSponsor = nextSponsor.nextElementSibling
    }
})

let itemsEvent = document.querySelectorAll('.carousel-event .carousel-event-item')

itemsEvent.forEach((elEvent) => {
    const minPerSlide = 4
    let nextEvent = elEvent.nextElementSibling
    for (var j=1; j<minPerSlide; j++) {
        if (!nextEvent) {
            // wrap carousel by using first child
        	nextEvent = itemsEvent[0]
      	}
        let cloneEventChild = nextEvent.cloneNode(true)
        elEvent.appendChild(cloneEventChild.children[0])
        nextEvent = nextEvent.nextElementSibling
    }
})