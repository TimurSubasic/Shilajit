var fName = "";
var lName = "";
var email = "";
var phone = "";
var address = "";
var country = "";
var city = "";
var zip = "";
var check = false;

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


$("#buy-btn").click(function(){

    fName = $("#firstName").val();
    lName = $("#lastName").val();
    email = $("#email").val();
    phone = $("#phone").val();
    address = $("#address").val();
    country = $("#country").find(":selected").text();
    city = $("#city").find(":selected").text();
    zip = $("#zip").val();


    

    var fullText = "Ime: "+fName+"\n Prezime: "+lName+"\n Email: "+email+"\n Broj telefona: "+phone+"\n Adresa: "+address+"\n Država: "+country+"\n Grad: "+city+"\n Poštanski broj: "+zip+"\n Količina Shilajita 25g: "+amount25+"\n Količina Shilajita 50g: "+amount50;

   
     
        $("#checkout").addClass("gone");
        $("#loading").removeClass("gone");
     
        
     sendMail(fullText);



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