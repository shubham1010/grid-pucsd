class ToggleAboutController extends Stimulus.Controller {
  toggleElement() {

    setTimeout(() => {
      var URL = window.location.href
      var page = URL.split('#')
      page = page[1]

      var displayLink = document.getElementById(page)
      var about = document.querySelector(".about") 
      var allDivs = about.querySelectorAll("div")
      var allRefs = about.querySelectorAll("a")

      if (displayLink.style.display=="block") {
        displayLink.style.display="none"
        for(var i=0; i<allRefs.length; i++) {
          if (allRefs[i].getAttribute("href") == ('#'+page)) {
            var setDownArrow = allRefs[i].querySelector("i")
            setDownArrow.setAttribute("class", "fa fa-chevron-down")
          }
        }

      }
      else {
        displayLink.style.display="block"
        for(var i=0; i<allRefs.length; i++) {
          if (allRefs[i].getAttribute("href") === ('#'+page)) {    
            var setUpArrow = allRefs[i].querySelector("i")
            setUpArrow.setAttribute("class", "fa fa-chevron-up")
          }
        }
      }
      var id

      for(var i=0; i<allDivs.length; i++) {
        if (allDivs[i].getAttribute("id") != page && allDivs[i].style.display=="block") {
          allDivs[i].style.display = "none"
          id = allDivs[i].getAttribute("id")
        }
      }

      for(var i=0; i<allRefs.length; i++) {
        if (allRefs[i].getAttribute("href") === ('#'+id)) {
          allRefs[i].querySelector("i").setAttribute("class", "fa fa-chevron-down")
        }
      }

      window.scrollBy(0,-500)
      
    }, 0.0001)
  }
}

//const application = Stimulus.Application.start()
application.register("about-toggle", ToggleAboutController)
