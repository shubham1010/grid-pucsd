
class LoadMainController extends Stimulus.Controller {
  connect () {
 
    // default load about's data
    var main = document.getElementById("main")
    var ourRequest = new XMLHttpRequest()
    ourRequest.overrideMimeType("text/html");
    var path = "https://shubham1010.github.io/jsonfiles/final/about.html"

    ourRequest.open('GET', path)


    ourRequest.onload = ()=> {
      var data = ourRequest.responseText
      main.innerHTML += data

    }
  
    ourRequest.send()

  }

  loadMainData() {
    var main = document.getElementById("main")
    var data

    setTimeout(() => { 
      var URL = window.location.href
      var page = URL.split("#")
      page = page[1]      


      var ourRequest = new XMLHttpRequest()
      ourRequest.overrideMimeType("text/html");
      var path = "https://shubham1010.github.io/jsonfiles/final/" + page + ".html"
      var a = document.querySelectorAll("a")
      for (var i=0; i<a.length; i++) {
        if(a[i].className == "active") {
          a[i].classList.remove("active")
        }
        if(a[i].getAttribute("href").substring(1)==page) {
          a[i].classList.add("active")          
        }
      }


      ourRequest.open('GET', path)
    
      
      main.innerHTML = ""

      ourRequest.onload = ()=> {
        data = ourRequest.responseText
        main.innerHTML += data

      }
      
      ourRequest.send()
      window.scrollBy(0,-50)

    }, 0.0001);
  }

}

const application = Stimulus.Application.start()
application.register("load-main", LoadMainController)
