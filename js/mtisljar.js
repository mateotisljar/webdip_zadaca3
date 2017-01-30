var forma = document.forms[0];
var span = document.getElementsByTagName('span');

var provjera = true;

function prikaziPoruku(id, poruka, element) {
    document.getElementById(element).className = 'neispravno';
    span[id].innerHTML = poruka;
    span[id].className = '';
}
function uspjesno(id, element) {
    document.getElementById(element).className = 'ispravno';
    span[id].innerHTML = "";
    span[id].className = '';
}

forma.addEventListener('submit', function (e) {
    var unosi = document.getElementsByTagName('input');
    provjera = true;
    for (var i = 0; i < unosi.length; i++) {
        if (unosi[i].value === "" || unosi[i].value === null) {
            provjera = false;
            var span = document.createElement('span');
            span.innerHTML = "Niste ispunili sva polja.";
            span.id = 'greska';
            document.getElementById('greska').appendChild(span);
            break;
        }
    }
    if (!provjera) {
        e.preventDefault();
    }
});

if (forma.name === "form1") {
    document.getElementById('korisnicko_ime').addEventListener("keyup", function () {
        var kor_ime = forma.korisnicko_ime.value;
        var slovo = kor_ime.substring(0, 1);
        var tip = document.getElementById('korisnicko_ime').type;
        span[0].innerHTML = "";
        span[0].className = '';
        var sve = true;
        if (tip != "text") {
            prikaziPoruku(0, " Nije tipa text.", 'korisnicko_ime');
            sve = false;
        } else {
            if (kor_ime.length !== 0) {
                if (kor_ime.length < 10) {
                    prikaziPoruku(0, " Upišite barem 10 znakova.", 'korisnicko_ime');
                    sve = false;
                }
                if (slovo === slovo.toUpperCase() || !isNaN(slovo)) {
                    prikaziPoruku(0, "Prvo slovo mora biti malo.", 'korisnicko_ime');
                    sve = false;
                }


            } else {
                prikaziPoruku(0, " Upišite korisničko ime.", 'korisnicko_ime');
                sve = false;
            }
        }
        if (sve) {
            uspjesno(0, 'korisnicko_ime');
            provjera = true;
        } else {
            provjera = false;
        }
    });
    document.getElementById('password').addEventListener("keyup", function () {
        var lozinka = forma.password.value;
        var tip = document.getElementById('password').type;
        span[1].innerHTML = "";
        span[1].className = '';
        var sve = true;
        if (tip != "password") {
            prikaziPoruku(1, " Nije tipa password.", 'password');
            sve = false;
        } else {
            if (lozinka.length !== 0) {
                if (lozinka.length < 8) {
                    prikaziPoruku(1, " Upišite barem 8 znakova.", 'password');
                    sve = false;
                }
            } else {
                prikaziPoruku(1, " Upišite lozinku.", 'password');
                sve = false;
            }
        }
        if (sve) {
            uspjesno(1, 'password');
            provjera = true;
        } else {
            provjera = false;
        }
    });
    document.getElementById('password2').addEventListener("keyup", function () {
        var lozinka = forma.password.value;
        var lozinka2 = forma.password2.value;
        span[2].innerHTML = "";
        span[2].className = '';
        var sve = true;
        if (lozinka2.length !== 0) {
            if (lozinka !== lozinka2) {
                prikaziPoruku(2, " Lozinke nisu jednake.", 'password2');
                sve = false;
            }
        } else {
            prikaziPoruku(2, " Upišite lozinku.", 'password2');
            sve = false;
        }
        if (sve) {
            uspjesno(2, 'password2');
            provjera = true;
        } else {
            provjera = false;
        }
    });
    document.getElementById('rodjendan_dan').addEventListener("blur", function () {
        var dan = document.getElementById('rodjendan_dan').value;
        var tip = document.getElementById('rodjendan_dan').type;
        var sve = true;
        span[3].innerHTML = "";
        span[3].className = '';
        if (tip != "number") {
            prikaziPoruku(3, " Nije tipa number.", 'rodjendan_dan');
            sve = false;
        } else {
            if (dan < 1) {
                prikaziPoruku(3, " Ne može biti negativan broj.", 'rodjendan_dan');
                sve = false;
            }
        }
        if (sve) {
            uspjesno(3, 'rodjendan_dan');
            provjera = true;
        } else {
            provjera = false;
        }
    });
    document.getElementById('rodjendan_godina').addEventListener("blur", function () {
        var godina = forma.rodjendan_godina.value;
        var tip = document.getElementById('rodjendan_godina').type;
        var sve = true;
        span[5].innerHTML = "";
        span[5].className = '';
        if (tip != "number") {
            prikaziPoruku(5, " Nije tipa number.", 'rodjendan_godina');
            sve = false;
        } else {
            if (godina.length !== 0) {
                if (godina < 1930 || godina > 2015) {
                    prikaziPoruku(5, " Mora biti između 1930 i 2015.", 'rodjendan_godina');
                    sve = false;
                }
            } else {
                prikaziPoruku(5, " Upišite godinu.", 'rodjendan_godina');
                sve = false;
            }
        }
        if (sve) {
            uspjesno(5, 'rodjendan_godina');
            provjera = true;
        } else {
            provjera = false;
        }
    });
    document.getElementById('rodjendan_mjesec').addEventListener("blur", function () {
        var tip = document.getElementById('rodjendan_mjesec2').tagName;
        var mjesec = forma.rodjendan_mjesec.value;
        var sve = true;
        span[4].innerHTML = "";
        span[4].className = '';
        if (mjesec.length === 0) {
            prikaziPoruku(4, " Odaberite mjesec.", 'rodjendan_mjesec');
            sve = false;
        }
        if (tip != "DATALIST") {
            prikaziPoruku(4, " Nije tipa datalist.", 'rodjendan_mjesec');
            sve = false;
        }
        if (sve) {
            uspjesno(4, 'rodjendan_mjesec');
            provjera = true;
        } else {
            provjera = false;
        }
    });
    document.getElementById('mobilni_telefon').addEventListener("blur", function () {
        var telefon = forma.mobilni_telefon.value;
        var tip = document.getElementById('mobilni_telefon').type;
        var sve = true;
        span[6].innerHTML = "";
        span[6].className = '';
        if (tip != "tel") {
            prikaziPoruku(6, " Nije tipa tel.", 'mobilni_telefon');
            sve = false;
        } else {
            if (telefon.length !== 0) {
                var prvi = telefon.substring(0, 3);
                var drugi = telefon.substring(4);
                if (telefon.charAt(3) !== " " || telefon.length > 11 || telefon.length < 10 || isNaN(prvi) || isNaN(drugi)) {
                    prikaziPoruku(6, " Format broja: xxx xxxxxxx", 'mobilni_telefon');
                    sve = false;
                }
            } else {
                prikaziPoruku(6, " Upišite telefon.", 'mobilni_telefon');
                sve = false;
            }
        }
        if (sve) {
            uspjesno(6, 'mobilni_telefon');
            provjera = true;
        } else {
            provjera = false;
        }
    });
    document.getElementById('email').addEventListener("blur", function () {
        var email = forma.email.value;
        var tip = document.getElementById('email').type;
        var sve = true;
        span[7].innerHTML = "";
        span[7].className = '';
        if (tip != "email") {
            prikaziPoruku(7, " Nije tipa email.", 'email');
            sve = false;
        } else {
            var atpos = email.indexOf("@");
            var dotpos = email.lastIndexOf(".");
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
                prikaziPoruku(7, " Krivi format emaila.", 'email');
                sve = false;
            }
        }
        if (sve) {
            uspjesno(7, 'email');
            provjera = true;
        } else {
            provjera = false;
        }
    });
    document.getElementById('lokacija').addEventListener("blur", function () {
        var lokacija = forma.lokacija.value;
        var tip = document.getElementById('lokacija').type;
        var sve = true;
        span[8].innerHTML = "";
        span[8].className = '';
        if (tip != "textarea") {
            prikaziPoruku(8, " Nije tipa textarea.", 'lokacija');
            sve = false;
        } else {
            var tocka = lokacija.indexOf(";");
            var prvi = lokacija.substring(0, tocka);
            var drugi = lokacija.substring(tocka + 2);
            if (isNaN(prvi) || isNaN(drugi) || lokacija.charAt(tocka + 1) !== " ") {
                prikaziPoruku(8, " Format lokacije: latitude; longitude", 'lokacija');
                sve = false;
            }
        }
        if (sve) {
            uspjesno(8, 'lokacija');
            provjera = true;
        } else {
            provjera = false;
        }
    });
} else {
    document.getElementById('korisnicko_ime').addEventListener("keyup", function () {
        var kor_ime = forma.korisnicko_ime.value;
        var slovo = kor_ime.substring(0, 1);
        var tip = document.getElementById('korisnicko_ime').type;
        span[0].innerHTML = "";
        span[0].className = '';
        var sve = true;
        if (tip != "text") {
            prikaziPoruku(0, " Nije tipa text.", 'korisnicko_ime');
            sve = false;
        } else {
            if (kor_ime.length !== 0) {
                if (kor_ime.length < 10) {
                    prikaziPoruku(0, " Upišite barem 10 znakova.", 'korisnicko_ime');
                    sve = false;
                }
                if (slovo === slovo.toUpperCase() || !isNaN(slovo)) {
                    prikaziPoruku(0, "Prvo slovo mora biti malo.", 'korisnicko_ime');
                    sve = false;
                }


            } else {
                prikaziPoruku(0, " Upišite korisničko ime.", 'korisnicko_ime');
                sve = false;
            }
        }
        if (sve) {
            uspjesno(0, 'korisnicko_ime');
            provjera = true;
        } else {
            provjera = false;
        }
    });
    document.getElementById('lozinka').addEventListener("keyup", function () {
        var lozinka = forma.lozinka.value;
        var tip = document.getElementById('lozinka').type;
        span[1].innerHTML = "";
        span[1].className = '';
        var sve = true;
        if (tip != "password") {
            prikaziPoruku(1, " Nije tipa password.", 'lozinka');
            sve = false;
        } else {
            if (lozinka.length !== 0) {
                if (lozinka.length < 8) {
                    prikaziPoruku(1, " Upišite barem 8 znakova.", 'lozinka');
                    sve = false;
                }
            } else {
                prikaziPoruku(1, " Upišite lozinku.", 'lozinka');
                sve = false;
            }
        }
        if (sve) {
            uspjesno(1, 'lozinka');
            provjera = true;
        } else {
            provjera = false;
        }
    });
}