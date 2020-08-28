
class LoadMainController extends Stimulus.Controller {
  loadMainData() {
    var main = document.getElementById("main")
    var data

    setTimeout(() => { 
      var URL = window.location.href
      var page = URL.split("#")
      page = page[1]      


      var ourRequest = new XMLHttpRequest()
      var path = "https://shubham1010.github.io/jsonfiles/temp/" + page + ".json"
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
        data = JSON.parse(ourRequest.responseText)
        main.innerHTML += `<h2> ${data[0].data} </h2>`

      }
      
      ourRequest.send()

    }, 0.0001);
  }

}

const application = Stimulus.Application.start()
application.register("load-main", LoadMainController)
