var fName = "";
var lName = "";
var email = "";
var phone = "";
var address = "";
var country = "";
var city = "";
var zip = "";
var userMessage = "";

var fNameOk = 0;
var lNameOk = 0;
var emailOk = 0;
var addressOk = 0;
var cityOk = 0;
var zipOk = 0;
var billOk = 0;

var amount25 = "0";
var amount50 = "0";
var totalPrice = "0";


function sendMail(fullText){
     var templateParams = {
        message: fullText,
      };
      
      emailjs.send('service_9gatelz', 'template_h4ws01g', templateParams).then(
        (response) => {
          $("#loading").addClass("gone");
          $("#success").removeClass("gone");
          console.log('SUCCESS!', response.status, response.text);          
        },
        (error) => {
          $("#loading").addClass("gone");
          $("#fail").removeClass("gone");
          console.log('FAILED...', error);          
        },
      );
}

function checkMail(){

  if(email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
    emailOk = 1;
  }
  else{
      $("#email").attr("placeholder", "Unesite validan E-Mail");
      $("#email").addClass("mistake");
      $("#email").val("");
  }
}

function hasNumber(string) {
  // Define the regular expression pattern to match any digit
  var pattern = /\d/;
  // Use test() method to check if the pattern exists in the string
  return pattern.test(string);
}

function checkZip(text) {
  // Define the regular expression pattern to match any alphabetic character
  var pattern = /[a-zA-Z]/;
  // Use test() method to check if the pattern exists in the string
  if(pattern.test(text)){
    return true;
  }
  else{
    if( text.length == 5 ){
      return false;
    }
    else{
      return true;
    }
  }
}


function checkBuy(){

    if(fName === ""){
      $("#firstName").attr("placeholder", "Unesite ime");
      $("#firstName").addClass("mistake");
    }
    else{
      if(hasNumber(fName)){
        $("#firstName").attr("placeholder", "Unesite validno ime");
        $("#firstName").addClass("mistake");
        $("#firstName").val("");
      }
      else{
        fNameOk = 1;
      }
      
    }
    if(lName === ""){
      $("#lastName").attr("placeholder", "Unesite prezime");
      $("#lastName").addClass("mistake");
    }
    else{
      if(hasNumber(lName)){
        $("#lastName").attr("placeholder", "Unesite validno prezime");
        $("#lastName").addClass("mistake");
        $("#lastName").val("");
      }
      else{
        lNameOk = 1;
      }
      
    }


    if(email === ""){
      $("#email").attr("placeholder", "Unesite E-Mail");
      $("#email").addClass("mistake");
    }
    else {    
      checkMail();
    }

    if(address === ""){
      $("#address").attr("placeholder", "Unesite agresu stanovanja");
      $("#address").addClass("mistake");
    }
    else{
      addressOk = 1;
    }
    
    if(zip === ""){
      $("#zip").attr("placeholder", "Unesite poštanski broj");
      $("#zip").addClass("mistake");
    }
    else{
      if(checkZip(zip)){
        $("#zip").attr("placeholder", "Potreban je ispravan broj");
        $("#zip").addClass("mistake");
        $("#zip").val("");
      }
      else{
        zipOk = 1;
      }     
    }

    if($("#bill-amount").text() === "0"){
     $("#buy-modal").modal("show");
    }
    else{
      billOk = 1;
    }

    if(city === "Izaberite..."){
      $("#city").addClass("red-text");
    }
    else{
      cityOk = 1;
    }

    return fNameOk+lNameOk+emailOk+addressOk+zipOk+billOk+cityOk;


  
    
      

}

$("#city").on("change", function(){
  $("#city").removeClass("red-text");
});



$("#buy-btn").click(function(){

    fName = $("#firstName").val();
    lName = $("#lastName").val();
    email = $("#email").val();
    phone = $("#phone").val();
    address = $("#address").val();
    country = $("#country").find(":selected").text();
    city = $("#city").find(":selected").text();
    zip = $("#zip").val();
    userMessage = $("#message").val();


    if (checkBuy() == 7){
      var fullText = "Ime: "+fName+"\n Prezime: "+lName+"\n Email: "+email+"\n Broj telefona: "+phone+"\n Adresa: "+address+"\n Država: "+country+"\n Grad: "+city+"\n Poštanski broj: "+zip+"\n Količina Shilajita 25g: "+amount25+"\n Količina Shilajita 50g: "+amount50+"\n \n Poruka: \n"+userMessage;

   
     
        $("#checkout").addClass("gone");
        $("#loading").removeClass("gone");
     
        
     sendMail(fullText);
    }
    
    else {
      fNameOk = 0;
      lNameOk = 0;
      emailOk = 0;
      addressOk = 0;
      cityOk = 0;
      zipOk = 0;
      billOk = 0;

      $("#buy-btn").addClass("btn-danger");
      $("#buy-btn").text("Unesite Podatke");

      setTimeout(function(){
        $("#buy-btn").removeClass("btn-danger");
        $("#buy-btn").text("Naručite");
      },2750);

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


function getTotal(){

  return totalPrice = (Number(amount25) * 90) + (Number(amount50) * 150);

}


$("#btn-add-25").click(function(){
  amount25 = Number($("#amount-25").text());
  amount25 = amount25 + 1;
  $("#amount-25").text(amount25);
  totalPrice = getTotal();
  $("#total-price").text(totalPrice);
  $("#bill-amount").text(Number(amount50)+ Number(amount25));
});

$("#btn-subb-25").click(function(){
  amount25 = Number($("#amount-25").text());
  if(amount25 > 0){
    amount25 = amount25 - 1;
  $("#amount-25").text(amount25);
  }
  totalPrice = getTotal();
  $("#total-price").text(totalPrice);
  $("#bill-amount").text(Number(amount50)+ Number(amount25));
});


$("#btn-add-50").click(function(){
  amount50 = Number($("#amount-50").text());
  amount50 = amount50 + 1;
  $("#amount-50").text(amount50);
  totalPrice = getTotal();
  $("#total-price").text(totalPrice);
  $("#bill-amount").text(Number(amount50)+ Number(amount25));
});

$("#btn-subb-50").click(function(){
  amount50 = Number($("#amount-50").text());
  if(amount50 > 0){
    amount50 = amount50 - 1;
  $("#amount-50").text(amount50);
  }
  totalPrice = getTotal();
  $("#total-price").text(totalPrice);
  $("#bill-amount").text(Number(amount50)+ Number(amount25));
});


$(document).ready(function(){
  $("#back-to-buy").click(function() {
    $('html, body').animate({
        scrollTop: $("#scrollSpyBill").offset().top
    }, 700); // Change the duration as needed
  });
});