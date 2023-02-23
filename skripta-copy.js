$(document).ready(function(){
    $(".error").hide();
    $("#mailError").hide();
    var curruser; 
    var users = [];
    var names = [];
    var surnames = [];
    var genders = [];
    var logged = false;
    var ime; 
    var email; 
    var datum;
    var telefon;
    var prezime;
    var opis;
    var i;
    var sati = [];
    var dani = [];
    var termini = [];
    var mails = [];
    var passwords = [];
    localStorage.setItem("choice", JSON.stringify(1));
    localStorage.setItem("sort", JSON.stringify(1))

    $(".yogash1").show();
    $(".pilatsh1").hide();
    $(".kardiosh1").hide();
    $(".coresh1").hide();
    $(".yogash2").hide();
    $(".pilatsh2").hide();
    $(".kardiosh2").hide();
    $(".coresh2").hide();
    $(".yogash3").hide();
    $(".pilatsh3").hide();
    $(".kardiosh3").hide();
    $(".coresh3").hide();

    $(".namesort").click(function(){
        $("#gradesorted").hide();
        $("#weightsorted").hide();
        $("#namesorted").show();
        localStorage.setItem("sort", JSON.stringify(1));
        switch(JSON.parse(localStorage.getItem("choice"))){
            case 1:$(".yogash1").show();
            $(".pilatsh1").hide();
            $(".kardiosh1").hide();
            $(".coresh1").hide(); break;
            case 2:$(".yogash1").hide();
            $(".pilatsh1").show();
            $(".kardiosh1").hide();
            $(".coresh1").hide(); break;
            case 3: $(".yogash1").hide();
            $(".pilatsh1").hide();
            $(".kardiosh1").show();
            $(".coresh1").hide(); break;
            case 4:$(".yogash1").hide();
            $(".pilatsh1").hide();
            $(".kardiosh1").hide();
            $(".coresh1").show(); break;
        }
    })

    $(".weightsort").click(function(){
        localStorage.setItem("sort", JSON.stringify(2));
        $("#gradesorted").hide();
        $("#namesorted").hide();
        $("#weightsorted").show();
        switch(JSON.parse(localStorage.getItem("choice"))){
            case 1:$(".yogash2").show();
            $(".pilatsh2").hide();
            $(".kardiosh2").hide();
            $(".coresh2").hide(); break;
            case 2:$(".yogash2").hide();
            $(".pilatsh2").show();
            $(".kardiosh2").hide();
            $(".coresh2").hide(); break;
            case 3: $(".yogash2").hide();
            $(".pilatsh2").hide();
            $(".kardiosh2").show();
            $(".coresh2").hide(); break;
            case 4:$(".yogash2").hide();
            $(".pilatsh2").hide();
            $(".kardiosh2").hide();
            $(".coresh2").show(); break;
        }
    })

    $(".gradesort").click(function(){
        $("#gradesorted").show();
        $("#namesorted").hide();
        $("#weightsorted").hide();
        localStorage.setItem("sort", JSON.stringify(3));
        switch(JSON.parse(localStorage.getItem("choice"))){
            case 1:$(".yogash3").show();
            $(".pilatsh3").hide();
            $(".kardiosh3").hide();
            $(".coresh3").hide(); break;
            case 2:$(".yogash3").hide();
            $(".pilatsh3").show();
            $(".kardiosh3").hide();
            $(".coresh3").hide(); break;
            case 3: $(".yogash3").hide();
            $(".pilatsh3").hide();
            $(".kardiosh3").show();
            $(".coresh3").hide(); break;
            case 4:$(".yogash3").hide();
            $(".pilatsh3").hide();
            $(".kardiosh3").hide();
            $(".coresh3").show(); break;
        }
    })

    $("#yogach").click(function(){
        localStorage.setItem("choice", JSON.stringify(1));
        switch(JSON.parse(localStorage.getItem("sort"))){
        case 1:$(".yogash1").show();
        $(".pilatsh1").hide();
        $(".kardiosh1").hide();
        $(".coresh1").hide(); break;
        case 2:$(".yogash2").show();
        $(".pilatsh2").hide();
        $(".kardiosh2").hide();
        $(".coresh2").hide(); break;
        case 3:$(".yogash3").show();
        $(".pilatsh3").hide();
        $(".kardiosh3").hide();
        $(".coresh3").hide(); break;
        }
    })
    $("#pilatch").click(function(){
        localStorage.setItem("choice", JSON.stringify(2));
        switch(JSON.parse(localStorage.getItem("sort"))){
        case 1:$(".yogash1").hide();
        $(".pilatsh1").show();
        $(".kardiosh1").hide();
        $(".coresh1").hide(); break;
        case 2:$(".yogash2").hide();
        $(".pilatsh2").show();
        $(".kardiosh2").hide();
        $(".coresh2").hide(); break;
        case 3:$(".yogash3").hide();
        $(".pilatsh3").show();
        $(".kardiosh3").hide();
        $(".coresh3").hide(); break;
        }
    })
    $("#cardioch").click(function(){
        localStorage.setItem("choice", JSON.stringify(3));
        switch(JSON.parse(localStorage.getItem("sort"))){
            case 1:$(".yogash1").hide();
            $(".pilatsh1").hide();
            $(".kardiosh1").show();
            $(".coresh1").hide(); break;
            case 2:$(".yogash2").hide();
            $(".pilatsh2").hide();
            $(".kardiosh2").show();
            $(".coresh2").hide(); break;
            case 3:$(".yogash3").hide();
            $(".pilatsh3").hide();
            $(".kardiosh3").show();
            $(".coresh3").hide(); break;
            }
    })
    $("#corech").click(function(){
        localStorage.setItem("choice", JSON.stringify(4))
        switch(JSON.parse(localStorage.getItem("sort"))){
            case 1:$(".yogash1").hide();
            $(".pilatsh1").hide();
            $(".kardiosh1").hide();
            $(".coresh1").show(); break;
            case 2:$(".yogash2").hide();
            $(".pilatsh2").hide();
            $(".kardiosh2").hide();
            $(".coresh2").show(); break;
            case 3:$(".yogash3").hide();
            $(".pilatsh3").hide();
            $(".kardiosh3").hide();
            $(".coresh3").show(); break;
            }
    });
    
    $("#kom").click(function(){
        let value = $(".mr-3").val();
        let kom = document.getElementById("collapse-1");
        kom.innerHTML+="<div class='commented-section mt-2'>"
        kom.innerHTML+="<div class='d-flex flex-row align-items-center commented-user'>"
        kom.innerHTML+="<h5 class='mr-2'>" + localStorage.getItem("curruserName")+"</h5><span class='dot mb-1'></span><span class='mb-1 ml-2'>Just Now</span>";
        kom.innerHTML+="</div><div class='comment-text-sm'><span>" + value + "</span></div></div>";
    })
    $(".zaktren").click(function(){
        if(JSON.parse(localStorage.getItem("logged"))){
            tsati = [localStorage.getItem("sati")];
            if(tsati!=null)
                sati = tsati;
            tdani = [localStorage.getItem("dani")];
            if(tdani!=null)
                dani = tdani;
            ttermini = [localStorage.getItem("termini")];
            if(ttermini!=null)
                termini = ttermini;
            let index1;
            let index2;
            let sat;
            let dan;
            let termin = $(".termin").html();
            index1 = $(this).closest('tr').index();
            index2 = $(this).closest('td').index();
            switch(index1){
                case 0: sat = "08:00-10:00"; break;
                case 1: sat = "10:00 - 12:00"; break;
                case 2: sat = "12:00 - 14:00"; break;
                case 3: sat = "14:00 - 16:00"; break;
                case 4: sat = "16:00 - 18:00"; break;
                case 5: sat = "18:00 - 20:00"; break;
                case 6: sat = "20:00 - 22:00"; break;
            }
            switch(index2){
                case 1: dan = "Ponedeljak"; break;
                case 2: dan = "Utorak"; break;
                case 3: dan = "Srijeda"; break;
                case 4: dan = "Cetvrtak"; break;
                case 5: dan = "Petak"; break; 
                case 6: dan = "Subota"; break;
            }
            sati.push(sat);
            dani.push(dan);
            termini.push(termin);
            localStorage.setItem("termini", termini);
            localStorage.setItem("sati", sati);
            localStorage.setItem("dani", dani);
        }
        else{
            alert("You can't reserve a date without logging in!");
        }
    })

    $(".logged").click(function(){
        logged = true;
    })
    $("#hayo #hayo3 #hayo2").click(function(){
        window.open("week-hatha - Copy.html");
    })
    $("#clpil #clpil3 #clpil2").click(function(){
        window.open("week-classical - Copy.html");
    })
    $("#repil #repil2 #repil3").click(function(){
        window.open("week-reformer - Copy.html");
    })
    $("#yinyo #yinyo2 #yinyo3").click(function(){
        window.open("week-yin - Copy.html");
    })
    $("#cardbo #cardbo2 #cardbo3").click(function(){
        window.open("week-cardio-box - Copy.html");
    })
    $("#poyo #poyo2 #poyo3").click(function(){
        window.open("week-power - Copy.html");
    })
    $("#hiit #hiit2 #hiit3").click(function(){
        window.open("week-hiit - Copy.html");
    })
    $("#stopil #stopil2 #stopil3").click(function(){
        window.open("week-stott - Copy.html");
    })
    $("#zu #zu2 #zu3").click(function(){
        window.open("week-zumba - Copy.html");
    })
    $("#co #co2 #co3").click(function(){
        window.open("week-core - Copy.html");
    })
    $("#lico #lico2 #lico3").click(function(){
        window.open("week-light - Copy.html");
    })
    $("#poco #poco2 #poco3").click(function(){
        window.open("week-powerc - Copy.html");
    })
    $("#signn").click(function(){
        let passed = true;
        let passwordRegExp = [/\S{8,}/, /[A-Z]/, /\d/];
        passwordRegExp.forEach(element => {
            if (!element.test(document.getElementById("inputPassword2").value)) {
                passed = false;
            }
        });
        if (!passed) {
            $("#passwordError").show();
        }
        else {
            $("#passwordError").hide();
        }
        let mailRegExp = /^\w+@\w+([\.-]\w+)*(\.\w{2,3})+$/;
        // let mailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!mailRegExp.test(document.getElementById("inputEmail2").value)) {
            $("#mailError").show();
            passed = false;
        }
        else {
            $("#mailError").hide();
        }
        let userRegExp = /^\w+$/;
        // let mailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!userRegExp.test(document.getElementById("inputUser").value)) {
            $("#userError").show();
            passed = false;
        }
        else {
            $("#userError").hide();
        }

        if(document.getElementById("inputConfirmPassword").value!=document.getElementById("inputPassword2").value){
            $("#passwordConfirmError").show();
            passed = false;
        }
        else{
            $("#passwordConfirmError").hide();
        }
        let pom1 = $('#customCheck1').is(':checked');
        let pom2 = $("#customCheck2").is(":checked");
        if(pom1==pom2){
            passed = false;
            if(pom1==true && pom2==true){
                $("#checkError").show();
            $("#checkError2").hide();
            }
            else{
                $("#checkError2").show();
                $("#checkError").hide();
            }
        }
        else{
            $("#checkError").hide();
            $("#checkError2").hide();
        }
        if (passed == true) {

            let tmails = [localStorage.getItem("mails")];
            let tpasswords = [localStorage.getItem("passwords")];
            let tusers = [localStorage.getItem("users")];
            let tgenders = [localStorage.getItem("genders")];
            let tnames = [localStorage.getItem("names")];
            let tsurnames = [localStorage.getItem("surnames")];
            if(tmails!=null)
                mails = tmails
            mails.push(document.getElementById("inputEmail2").value);
            if(tusers!=null)
                users = tusers
            users.push(document.getElementById("inputUser").value);
            if(tpasswords!=null)
                passwords = tpasswords
            passwords.push(document.getElementById("inputPassword2").value);
            if(tgenders!=null)
                genders=tgenders;
            if(pom1)
                genders.push("musko");
            else
                genders.push("zensko");
            if(tnames!=null)
                names = tnames
            names.push(document.getElementById("inputName").value);
            if(tsurnames!=null)
                surnames = tsurnames
            surnames.push(document.getElementById("inputSurname").value);
            localStorage.setItem("mails", mails);
            localStorage.setItem("passwords", passwords);
            localStorage.setItem("names", names);
            localStorage.setItem("genders", genders);
            localStorage.setItem("surnames", surnames);
            localStorage.setItem("users", users);
            window.open("log-in - Copy.html", "_self");
            
        }
        return false;
    })
    $("loglog").click(function(){
        window.open("log-in - Copy.html", "_self");
    })

    $("#logout").click(function(){
        logged = false;
        localStorage.setItem("logged", JSON.stringify(logged));
        window.open("fitness-home - Copy.html", "_self");
    })
    $("#logg").click(function(){
        let passed = true;
        let passwordRegExp = [/\S{8,}/, /[A-Z]/, /\d/];
        passwordRegExp.forEach(element => {
            if (!element.test(document.getElementById("inputPassword").value)) {
                passed = false;
            }
        });
        if (!passed) {
            $("#passwordError").show();
        }
        else {
            $("#passwordError").hide();
        }
        let mailRegExp = /^\w+@\w+([\.-]\w+)*(\.\w{2,3})+$/;
        // let mailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!mailRegExp.test(document.getElementById("inputEmail").value)) {
            $("#mailError").show();
            passed = false;
        }
        else {
            $("#mailError").hide();
            passed = true;
        }
        if (passed == true){
            passed = false;
            let passed2 = false;
            var t;
            var s;
            var pom;
            mails = localStorage.getItem("mails");
            passwords = localStorage.getItem("passwords");
            pom1 = mails.split(",");
            for(let i = 0; i<pom1.length;i++){
                if(document.getElementById("inputEmail").value == pom1[i]){
                    passed = true;
                    t = i;
                    break;
                }
            }
            pom = passwords.split(",");
            for(let i = 0; i<pom.length;i++){
                if(document.getElementById("inputPassword").value == pom[i]){
                    passed2 = true;
                    s = i;
                    break;
                }
            }
            if(passed == true && passed2==true && t==s){
            curruser = pom1[t];
            localStorage.setItem("curruser", curruser);
            logged = true;
            localStorage.setItem("logged", JSON.stringify(logged));
            window.open("moj-nalog - Copy.html", "_self");
            }
            else{
                $("#logError").show();
                logged = false;
            }
        }
            return false;
    })

    

    $("#zakazi").click(function(){
        let passed = true;
        let datumRegExp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        let mailRegExp = /^\w+@\w+([\.-]\w+)*(\.\w{2,3})+$/;
        let mobileRegExp = /^(\d{10}|\d{3}-\d{3}-\d{4}|\(\d{3}\)\d{3}-\d{4}|\(\d{3}\)\d{3}-\d{3}|\d{10}|\d{3}-\d{3}-\d{3})$/;
        if (!mailRegExp.test(document.getElementById("mail").value)) {
            $("#mailError").show();
            passed = false;
        }
        else {
            $("#mailError").hide();
        }
        if (!datumRegExp.test(document.getElementById("datum").value)) {
            $("#datError").show();
            passed = false;
        }
        else {
            $("#datError").hide();
        }
        if (!mobileRegExp.test(document.getElementById("telefon").value)) {
            $("#telError").show();
            passed = false;
        }
        else {
            $("#telError").hide();
        }
        if(passed){
            ime = $("#ime").val();
            localStorage.setItem("ime", ime);
            email = $("#mail").val();
            localStorage.setItem("email", email);
            datum = $("#datum").val();
            localStorage.setItem("datum", datum);
            telefon = $("#telefon").val();
            localStorage.setItem("tel", telefon);
            prezime = $("#prezime").val();
            localStorage.setItem("prezime", prezime);
            opis = $("#opis").val();
            localStorage.setItem("opis", opis);
            i = 1;
            localStorage.setItem("iter", i);
            window.open("forma - Copy.html");
        }
        return false;
        
    })

    $("#zakazi2").click(function(){
        let passed = true;
        let datumRegExp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        let mailRegExp = /^\w+@\w+([\.-]\w+)*(\.\w{2,3})+$/;
        let mobileRegExp = /^(\d{10}|\d{3}-\d{3}-\d{4}|\(\d{3}\)\d{3}-\d{4}|\(\d{3}\)\d{3}-\d{3}|\d{10}|\d{3}-\d{3}-\d{3})$/;
        if (!mailRegExp.test(document.getElementById("mail2").value)) {
            $("#mailError2").show();
            passed = false;
        }
        else {
            $("#mailError2").hide();
        }
        if (!datumRegExp.test(document.getElementById("datum2").value)) {
            $("#datError2").show();
            passed = false;
        }
        else {
            $("#datError2").hide();
        }
        if (!mobileRegExp.test(document.getElementById("telefon2").value)) {
            $("#telError2").show();
            passed = false;
        }
        else {
            $("#telError2").hide();
        }
        if(passed){
            ime = $("#ime2").val();
            localStorage.setItem("ime", ime);
            email = $("#mail2").val();
            localStorage.setItem("email", email);
            datum = $("#datum2").val();
            localStorage.setItem("datum", datum);
            telefon = $("#telefon2").val();
            localStorage.setItem("tel", telefon);
            prezime = $("#prezime2").val();
            localStorage.setItem("prezime", prezime);
            opis = $("#opis2").val();
            localStorage.setItem("opis", opis);
            i = 2;
            localStorage.setItem("iter", i);
            window.open("forma2 - Copy.html");
        }
        
    })

    $("#pocetna").click(function(){
        window.open("fitness-home - Copy.html", "_self");
    })
    $("#zakazivanje").click(function(){
        window.open("fitness-booking - Copy.html", "_self");
    })
    $("#signup").click(function(){
        window.open("signup - Copy.html", "_self");
    })
    $("#loglog").click(function(){
        window.open("log-in - Copy.html", "_self");
    })
    $("#about").click(function(){
        window.open("fitness-about - Copy.html", "_self");
    })
    $("#treninzi").click(function(){
        window.open("fitness-training - Copy.html", "_self");
    })
    $("#masnutr").click(function(){
        window.open("fitness-masnutr - Copy.html", "_self");
    })
    $("#acc").click(function(){
        let t = JSON.parse(localStorage.getItem("logged"));
        if(JSON.parse(localStorage.getItem("logged"))==true){
            window.open("moj-nalog - Copy.html", "_self");
        }
        else
            window.open("log-in - Copy.html", "_self");
    })
    



})


function pogledaj(element) {
    element.setAttribute('src', 'image6enhover.png');
}
  
function nePogledaj(element) {
    element.setAttribute('src', 'image6en.jpg');
}

function hover(element) {
    element.setAttribute('src', 'logo hover.png');
}
  
function unhover(element) {
    element.setAttribute('src', 'logo.png');
}
function uclaniSe(element) {
    element.setAttribute('src', 'images4enhover.png');
}
  
function neUclaniSe(element) {
    element.setAttribute('src', 'images5.jpg');
}

//skripta treninzi

function yoga(element) {
    element.setAttribute('src', 'yoga hover.png');
}
  
function neyoga(element) {
    element.setAttribute('src', 'yoga.jpg');
}
function pilates(element) {
    element.setAttribute('src', 'pilates hover.png');
}
  
function nepilates(element) {
    element.setAttribute('src', 'pilates.png');
}

function core(element) {
    element.setAttribute('src', 'core hover.png');
}
  
function necore(element) {
    element.setAttribute('src', 'core.png');
}
function cardio(element) {
    element.setAttribute('src', 'cardio hover.png');
}
  
function necardio(element) {
    element.setAttribute('src', 'cardio.jpg');
}

function print(){
    if (localStorage.getItem("iter")==1)
    document.getElementById("pdf").innerHTML = "</br> <p> Name:" + localStorage.getItem("ime") + "</p><p>Surname: "+ localStorage.getItem("prezime") + "</p><p>E-mail:" + localStorage.getItem("email") + "</p><p>Date:" + localStorage.getItem("datum")+ "</p><p>Phone number:" + localStorage.getItem("tel") + "<p></p>Problem description:" + localStorage.getItem("opis") + "</p>";
    else
    document.getElementById("pdf2").innerHTML = "</br> <p> Name:" + localStorage.getItem("ime") + "</p><p>Surname: "+ localStorage.getItem("prezime") + "</p><p>E-mail:" + localStorage.getItem("email") + "</p><p>Date:" + localStorage.getItem("datum")+ "</p><p>Phone number:" + localStorage.getItem("tel") + "<p></p>Problem description:" + localStorage.getItem("opis") + "</p>";

    var doc = new jsPDF()
    if(localStorage.getItem("iter") == 1)
        var source = document.getElementById("pdf");
    else
        var source = document.getElementById("pdf2");

    var elementHandler = {
        '#ignorePDF': function (element, renderer) {
            return true;
        }
        };
    doc.fromHTML(
        source,
        15,
        0.5,
        {
            'width': 180,'elementHandlers': elementHandler
        });
    doc.save('confirmation.pdf');
    if(source.innerHTML!=null)
    source.innerHTML = " ";
    localStorage.removeItem("ime");
    localStorage.removeItem("prezime");
    localStorage.removeItem("tel");
    localStorage.removeItem("datum");
    localStorage.removeItem("email");
    localStorage.removeItem("opis");
    localStorage.removeItem("iter");
    window.close();
}

function acc(){
    let i = 0;
    let curr = localStorage.getItem("curruser");
    let mails = localStorage.getItem("mails").split(",");
    while(curr!=mails[i]){
        i++;
    }
    let names = localStorage.getItem("names").split(",");
    let surnames = localStorage.getItem("surnames").split(",");
    let genders = localStorage.getItem("genders").split(",");
    let users = localStorage.getItem("users").split(",");
    let name = names[i];
    let surname = surnames[i];
    let gender = genders[i];
    let user = users[i];
    localStorage.setItem("curruserName", user);
    let mail = mails[i];
    $("#mygender").html(gender);
    $("#myname").html(name +"&nbsp;" +  surname +"&nbsp@"+ user);
    $("#mymail").html(mail);
    let termini = [];
    termini = localStorage.getItem("termini").split(",");
    let sati = [];
    sati = localStorage.getItem("sati").split(",");
    let dani = [];
    dani = localStorage.getItem("dani").split(",");
    $("#zakazano").html(" ");
    for(let i = 1; i<termini.length; i++){
        $("#zakazano").append("<tr><td>"+termini[i]+"</td><td> &nbsp;"+dani[i]+"</td><td> &nbsp;"+sati[i]+"</td></tr>")
    }
}