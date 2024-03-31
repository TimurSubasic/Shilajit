var fName = "";
var lName = "";
var email = "";
var phone = "";
var address = "";
var country = "";
var city = "";
var zip = "";


function sendMail(fullText){
     var templateParams = {
        message: fullText,
      };
      
      emailjs.send('service_9gatelz', 'template_h4ws01g', templateParams).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
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


    

    var fullText = "Ime: "+fName+"\n Prezime: "+lName+"\n Email: "+email+"\n Broj telefona: "+phone+"\n Adresa: "+address+"\n Država: "+country+"\n Grad: "+city+"\n Poštanski broj: "+zip;



    console.log(fullText);
   
     sendMail(fullText);

});


