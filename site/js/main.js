

var ourDemoRequest = new XMLHttpRequest();
ourDemoRequest.open('GET','https://raw.githubusercontent.com/sagarmunjal/upwork_emailtemplating/master/site/sections.json');
ourDemoRequest.onload = function(){
  if(ourDemoRequest.status >= 200 && ourDemoRequest.status < 400){
    var data = JSON.parse(ourDemoRequest.responseText);
    console.log(data);
    createHTML2(data);
  }else{
    console.log("we have connected to the server, but it returned an error");
  }
};

ourDemoRequest.onerror = function(){
  console.log("connection error");
}

ourDemoRequest.send();

function createHTML2(jsonemaildata){
  var rawTemplate = document.getElementById("emailTemplate").innerHTML;
  var compiledTemplate = Handlebars.compile(rawTemplate);
  var ourGeneratedHTML = compiledTemplate(jsonemaildata);

  var emailContainer = document.getElementById("email-container");
  emailContainer.innerHTML = ourGeneratedHTML;
}


Handlebars.registerHelper('ifEqual', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});
