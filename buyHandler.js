var fName = "";
var lName = "";
var email = "";
var phone = "";
var address = "";
var country = "";
var city = "";
var zip = "";

var amount = "";
var totalPrice = "";


var emailSent = "?";

function sendMail(fullText){
     var templateParams = {
        message: fullText,
      };
      
      emailjs.send('service_9gatelz', 'template_h4ws01g', templateParams).then(
        (response) => {
          emailSent = "yes";
          console.log('SUCCESS!', response.status, response.text);          
        },
        (error) => {
          emailSent = "no";
          console.log('FAILED...', error);          
        },
      );
}

function checkEmail(){

  
    for(var i = 0; i < 15; i++){
        setTimeout(function(){
            if (emailSent === "yes") {
                $("#loading").addClass("gone");
                $("#success").removeClass("gone");
                return;
            }
            else if (emailSent === "no") {
                $("#loading").addClass("gone");
                $("#fail").removeClass("gone");
                return;
            }
    }, 2000);
     }
  

  
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

     

     checkEmail();

     
     
    

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



$("#btn-add").click(function(){
  amount = Number($("#amount").text());
  amount = amount + 1;
  $("#amount").text(amount);
  totalPrice = 40 * amount;
  $("#total-price").text(totalPrice);
  $("#bill-amount").text(amount);
});

$("#btn-subb").click(function(){
  amount = Number($("#amount").text());
  if(amount > 1){
    amount = amount - 1;
  $("#amount").text(amount);
  }
  totalPrice = 40 * amount;
  $("#total-price").text(totalPrice);
  $("#bill-amount").text(amount);
});
