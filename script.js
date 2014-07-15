//var when = require('when');
var rest = require('rest');
var mime = require('rest/interceptor/mime');
var entity = require('rest/interceptor/entity');

var translated = false
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function addListeners(e) {  
  if(document.getElementsByClassName("translated-ltr").length > 0){
    document.body.removeEventListener('DOMSubtreeModified', addListeners, true);
    var language = google.translate.TranslateElement().e
    document.body.className += " translated-content";
    document.querySelector(".goog-te-combo").addEventListener('change', function(e){
      var currentLanguage = google.translate.TranslateElement().e
      location.hash = "googletrans("+ currentLanguage +")";
//      logEvent(currentLanguage);
    }, true);
//        logEvent(language);   
  }

}

document.body.addEventListener('DOMSubtreeModified', addListeners, true);

function logEvent(language){
  console.log("loggingEvent")
  var restData = {
    path: 'http://localhost:5000/log',
    params: {
       language: language,
       url: location.href,
       user_agent_language: navigator.language  
    }
  }
  
  client = rest
          .chain(mime, { mime: 'application/json' })
          .chain(entity);
          
  client(restData)
      .done(function(status) {
          console.log(status);
      });
}