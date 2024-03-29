

$("#btn-one").click(function(){
    if($("#btn-one").text() == "Šta je Shilajit?"){
        $("#para-info").text("Shilajit je prirodni supstrat koji se sastoji od slojeva organskog materijala i minerala, kompresovanih kroz stoljeća u stijenama visokih planinskih lanaca poput Himalaja. Ovaj tamni, smolasti materijal poznat je po svojoj bogatoj koncentraciji fulvinske kiseline i više od 85 minerala u jonskom obliku, što ga čini izuzetno nutritivno bogatim.");
        $("#btn-one").text("Beneficije");
        $("#btn-two").text("Zašto");
        $("#hero-naslov").text("Šta je Shilajit");
        $("#hero img").attr("src", "images/Shila-Smola.png");
    }
    else{
        $("#para-info").text("Tradicionalno se cijeni u ayurvedskoj medicini zbog svojih adaptogenih svojstava, sposobnosti poboljšanja energije, vitalnosti i fizičkog oporavka, kao i podrške za mentalne funkcije. Shilajit se koristi i za unapređenje općeg zdravlja, jačanje imunološkog sistema, poboljšanje seksualnog zdravlja, te kao sredstvo za balansiranje šećera u krvi i smanjenje upalnih procesa u tijelu.");
        $("#btn-one").text("Šta je Shilajit?");
        $("#btn-two").text("Zašto");
        $("#hero-naslov").text("Benificije Shilajita");
        $("#hero img").attr("src", "images/Shila-Kamen.png");
    }
});


$("#btn-two").click(function(){
    if($("#btn-two").text() == "Zašto"){
        $("#para-info").text("Obzirom da je potentan i moćan, čisti shilajit će biti vaša prva doza za bolji i zdraviji način života. Forma smole je najčišća forma shilajita i dolazi sa visokih stijena Himalaja. Ne sadrži nikakve hemikalije niti dodatne sastojke.");
        $("#btn-one").text("Šta je Shilajit?");
        $("#btn-two").text("Beneficije");
        $("#hero-naslov").text("Zašto čisti shilajit");
        $("#hero img").attr("src", "images/Shila-Upotreba.png");
    }
    else{
        $("#para-info").text("Tradicionalno se cijeni u ayurvedskoj medicini zbog svojih adaptogenih svojstava, sposobnosti poboljšanja energije, vitalnosti i fizičkog oporavka, kao i podrške za mentalne funkcije. Shilajit se koristi i za unapređenje općeg zdravlja, jačanje imunološkog sistema, poboljšanje seksualnog zdravlja, te kao sredstvo za balansiranje šećera u krvi i smanjenje upalnih procesa u tijelu.");
        $("#btn-one").text("Šta je Shilajit?");
        $("#btn-two").text("Zašto");
        $("#hero-naslov").text("Benificije Shilajita");
        $("#hero img").attr("src", "images/Shila-Kamen.png");
    }
});



    
$("#btn-buy").click(function(){        
    window.location.href = "#";
});
 