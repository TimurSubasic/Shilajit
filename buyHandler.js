var fName = "";
var lName = "";
var email = "";
var phone = "";
var address = "";
var country = "";
var city = "";
var zip = "";


var emailSent = "?";

function sendMail(fullText){
     var templateParams = {
        message: fullText,
      };
      
      emailjs.send('service_9gatelz', 'template_h4ws01g', templateParams).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          emailSent = "yes";
        },
        (error) => {
          console.log('FAILED...', error);
          emailSent = "no";
        },
      );
}


$("#buy-btn").click(function(){

    fName = $("#firstName").val();
    lName = $("#lastName").val();
    email = $("#email").val();
    phone = $("#phone").val();
    address = $("#address").val();
    country = $("#country").find(":selected").text();
    city = $("#city").find(":selected").text();
    zip = $("#zip").val();


    

    var fullText = "Ime: "+fName+"\n Prezime: "+lName+"\n Email: "+email+"\n Broj telefona: "+phone+"\n Adresa: "+address+"\n Država: "+country+"\n Grad: "+city+"\n Poštanski broj: "+zip;

   
     sendMail(fullText);

     if (emailSent === "?") {
        $("#checkout").addClass("gone");
        $("#loading").removeClass("gone");
     }


    

     
     for(var i = 0; i < 10; i++){
        setTimeout(function(){
            if (emailSent === "yes") {
                $("#loading").addClass("gone");
                $("#success").removeClass("gone");
            }
            else if (emailSent === "no") {
                $("#loading").addClass("gone");
                $("#fail").removeClass("gone");
            }
    }, 2000);
     }

     

     
     

});


$("#contact-fail").click(function(){        
    window.location.href = "contact.html";
});

$("#home-fail").click(function(){        
    window.location.href = "index.html";
});

$("#contact-success").click(function(){        
    window.location.href = "contact.html";
});

$("#home-success").click(function(){        
    window.location.href = "index.html";
});