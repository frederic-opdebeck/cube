window.addEventListener('DOMContentLoaded',()=>{
    let chargement = document.getElementById('chargement');
    let img = document.createElement('img');
    img.setAttribute('src', 'https://www.gif-maniac.com/gifs/51/50646.gif');
    img.setAttribute('id', 'imgChargement');
    chargement.appendChild(img);
});
function printResults(r){
    const resume = document.querySelector('.recap')
    h2 = document.createElement('h2')
    resume.appendChild(h2)
        h2.textContent = 'Résumé du questionnaire'
    const table = document.querySelector('.recapListe')
    for (let i=0;i<r.length;i++){
        tr = document.createElement('tr')
        table.appendChild(tr)
            th1 = document.createElement('th')
            tr.appendChild(th1)
            th1.textContent = r[i].laQuestion
            th2 = document.createElement('th')
            tr.appendChild(th2)
            if(i===0) {
                th2.textContent = r[i].adresse
            }
            else {
                th2.textContent = r[i].laReponse
            }
            
    }
}
let arrayJson;
function ajaxQuestion(id){
    let idQ = id.split('q');
    let finalId = parseInt(idQ[1]) +1;
    let dataQ;
    $.ajax({
        url: "ajaxQuestionReponse.php",
        type: "POST",
        async: false, // Mode synchrone
        data: ({
            id_question: finalId
        }),
        complete: function(data){
            dataQ = data;
            return dataQ;
        }
    });
    arrayJson = JSON.parse(dataQ.responseText);
    return arrayJson;
}
let recap = [];
const questions = {
    'q0':{
        'question': ajaxQuestion('q0')[0].question, // Do you leave
        'reponses': { 'R1': arrayJson[0].reponse[0]},

        'img' : [arrayJson[0].nom[0]],
        'type': 'radio',
        'carte' : function() {Gp.Services.getConfig({
            apiKey: "jhyvi0fgmnuxvfv0zjzorvdn",
            onSuccess: go
          })},
        'suite':function (rep){
                return writequestion('q1');
        },
        "adresse": function() {
            if(document.querySelector("input[placeholder='Rechercher un lieu, une adresse']")) {
                return document.querySelector("input[placeholder='Rechercher un lieu, une adresse']").value;
            }
        }
    },
    'q1':{
            'question': ajaxQuestion('q1')[0].question, // Do you leave
            'reponses': { 'R1': arrayJson[0].reponse[0], 'R2': arrayJson[0].reponse[1]},
            'img' : ['q1_0.jgp'],
            'type': 'radio',
            'suite':function (rep){
                if (rep.includes('R1')){
                    return writequestion('q2');
                } else {
                    return writequestion('q0');
                }
            }
        },
    'q2':{
            'question': ajaxQuestion('q2')[0].question, // What will you be using your Cube for ?
            'reponses': { 'R1': arrayJson[0].reponse[0],'R2': arrayJson[0].reponse[1],'R3': arrayJson[0].reponse[2],'R4': arrayJson[0].reponse[3],'R5': arrayJson[0].reponse[4],'R6': arrayJson[0].reponse[5] },
            'img': [arrayJson[0].nom[0]],
            'type': 'radio',
            'suite': function (rep){
                    return writequestion('q4');
            }
        },
    'q3':{
            'question': ajaxQuestion('q3')[0].question, // Is this the property you're looking for ?
            'reponses': { 'R1': arrayJson[0].reponse[0]},
            'img' : [arrayJson[0].nom[0]],
            'type': null,
            'suite': null
        },
    'q4':{
            'question': ajaxQuestion('q4')[0].question, // 'Do you want a Kitchen or Bathroom?',
            'reponses': { 'R1': arrayJson[0].reponse[0], 'R2': arrayJson[0].reponse[1], 'R3': arrayJson[0].reponse[2]},
            'img' : [arrayJson[0].nom[0]],
            'type': 'radio',
            'suite':function (rep){
                    return writequestion('q5');
            }
        },
    'q5':{
            'question': ajaxQuestion('q5')[0].question, 
            'reponses': { 'R1' : arrayJson[0].reponse[0], 'R2' : arrayJson[0].reponse[1]},
            'img' : null,
            'type': 'number',
            'suite':function (rep){
                if (rep.includes('R1')){
                    return writequestion('q6');
                } else {
                    return writequestion('q8');
                }
            }
    },

    // PENSER A DEMANDER SI IL Y A PLUSIEURS STRUCTURE SUR LE TERRAIN 

    'q6':{
            'question': ajaxQuestion('q6')[0].question, // Do you have any Construction in your Backyard? (Image 6)
            'reponses': { 'R1': arrayJson[0].reponse[0], 'R2': arrayJson[0].reponse[1], 'R3' : arrayJson[0].reponse[2], 'R4' : arrayJson[0].reponse[3]},
            'img' : [arrayJson[0].nom[0]],
            'type': 'radio',
            'suite':function (rep){
                    return writequestion('q7');
                }
    },
    'q7':{
        'question': ajaxQuestion('q7')[0].question, // Would you like to remove this structure? (Image 7)
        'reponses': { 'R1': arrayJson[0].reponse[0], 'R2': arrayJson[0].reponse[1]},
        'img' : [arrayJson[0].nom[0]],
        'type': 'radio',
        'suite':function (rep){
                return writequestion('q8');   
        }
    },
    'q8':{
        'question': ajaxQuestion('q8')[0].question, // Which look do you like most? (Image 11-12-13)
        'reponses': { 'R1': arrayJson[0].reponse[0], 'R2': arrayJson[0].reponse[1], 'R3': arrayJson[0].reponse[2]},
        'img' : [arrayJson[0].nom[0],arrayJson[0].nom[1],arrayJson[0].nom[2]],
        'type': 'radio',
        'suite':function (rep){
            printResults(recap);
            return writequestion('q9');   
        }
        // fonction pour Récapituler de toutes les q et r associées + envoie d"un mail et proposer envoie de mail telechargement de la config'
    },
    'q9':{
        'question': ajaxQuestion('q9')[0].question, // Which look do you like most? (Image 11-12-13)
        'reponses': { 'R1': arrayJson[0].reponse[0], 'R2': arrayJson[0].reponse[1]},
        'img' : [arrayJson[0].nom[0]],
        'type': 'radio',
        'suite':function (rep){
            var xhr = new XMLHttpRequest();
            xhr.open('POST', './json.php');
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send('json=' + JSON.stringify(recap));
            return writequestion('q9bis');   
        }
        // fonction qui enoive un mail de récap au client potentiel
    },
    'q9bis':{
        'question': ajaxQuestion('q10')[0].question, // 
        'reponses': { 'R1': arrayJson[0].reponse[0], 'R2': arrayJson[0].reponse[1]},
        'img' : [arrayJson[0].nom[0]],
        'type': 'radio',
        'suite':function (rep){
            return writequestion('q10');   
        }
    },
    'q10':{
        'question': ajaxQuestion('q11')[0].question, // Which look do you like most? (Image 11-12-13)
        'reponses': { 'R1': arrayJson[0].reponse[0], 'R2': arrayJson[0].reponse[1]},
        'img' : [arrayJson[0].nom[0],arrayJson[0].nom[1]],
        'type': 'button',
        'suite':function (rep){
            if (rep.includes('R1')){
                return writequestion('q11');
            } else {
                return writequestion('q3');
            }
        }
    },
    'q11':{
        'question': ajaxQuestion('q12')[0].question, // Which look do you like most? (Image 11-12-13)
        'reponses': null,
        'img' : null,
        'type': 'button',
        'suite': null,
    }
}

function writequestion(q){
    if( questions[q].suite === null)
    {
        let quest = document.getElementById("question");
        quest.textContent = questions[q].question;
        if(document.querySelectorAll('.buttonR')) {
            document.querySelectorAll(".buttonR").forEach(e => e.parentNode.removeChild(e));
            }
    }else{
        if(q==='q0') {
            questions[q].carte();
        }
        else {
            let map = document.getElementById('mapid');
            map.style.display = "none";
        }
    let quest = document.getElementById("question");
    quest.textContent = questions[q].question;
    let nbr = 1
    if(document.querySelectorAll('.buttonR')) {
        document.querySelectorAll(".buttonR").forEach(e => e.parentNode.removeChild(e));
        }  
    for (const key in questions[q].reponses) {
        if (questions[q].reponses.hasOwnProperty(key)) {
                let r = document.createElement("button");
                let myClass = document.getElementById('questionReponses').classList;
                r.setAttribute('id','R' + nbr)
                r.setAttribute('class', 'buttonR');
                if(q==='q0') {
                    window.onload = function(){
                        let rechercheInput = document.querySelector("input[placeholder='Rechercher un lieu, une adresse']");
                        console.log(rechercheInput)
                        if(rechercheInput.value === '') {
                            r.style.pointerEvents = 'none';
                        }
                        rechercheInput.addEventListener('change', () => {
                            if(rechercheInput.value!=='') {
                                r.style.pointerEvents = 'auto';
                                r.style.cursor = 'pointer';
                            }
                            else {
                                r.style.pointerEvents = 'none';
                            }
                        });
                    };
                }
                r.textContent = questions[q].reponses[key];
                document.getElementById('questionReponses').classList.replace(myClass, q);
                document.getElementById('questionReponses').appendChild(r);
                r.addEventListener("click", function(){
                    if(q!=='q0') {   
                    recap.push({ 'laQuestion' : questions[q].question , 'laReponse' : questions[q].reponses[r.id]});
                    }
                    else {
                        recap.push({ 'laQuestion' : questions[q].question , 'adresse' : questions[q].adresse()});
                    }
                    if(q=='q9') {
                        //connection si pas connecté
                    }
                    console.log(recap)
                    questions[q].suite(r.id)
                });
                nbr++
        }
    }
} 
};

writequestion('q0');
if (typeof(Number.prototype.toRad) === "undefined") {
    Number.prototype.toRad = function() {
      return this * Math.PI / 180;
    }
  }
function getTileURL(lat, lon, zoom) {
    var xtile = parseInt(Math.floor( (lon + 180) / 360 * (1<<zoom) ));
    var ytile = parseInt(Math.floor( (1 - Math.log(Math.tan(lat.toRad()) + 1 / Math.cos(lat.toRad())) / Math.PI) / 2 * (1<<zoom) ));
    return "" + zoom + "/" + xtile + "/" + ytile;
}
function go() {
    map = L.map("mapid",{crs : L.CRS.EPSG4326,minZoom: 10, maxZoom:18}).setView([48.845, 2.424], 10);
    L.geoportalLayer.WMS({
      layer: "OI.OrthoimageCoverage",
    }, { // leafletParams
      opacity: 0.7,
    }).addTo(map);
    var searchCtrl = L.geoportalControl.SearchEngine({'zoomTo':18, 'displayAdvancedSearch':false, 'collapsed':false});
    map.addControl(searchCtrl);
    
    L.geoportalLayer.WMS({
      layer: "BU.Building"
    },{
        // on surcharche le style car les styles par defaut pour le WMS INSPIRE vecteur
        // ne sont pas bien renseignes dans l'autoconf (en cours de correction)
        styles : "inspire_common:DEFAULT",
        transparent : true,
    }).on('load', () => {
        if(document.getElementById('imgChargement')){
            let img = document.getElementById('imgChargement');
            img.remove();

        }
       }).addTo(map);
    map.on('click', (e) => {
        
        console.log(getTileURL(e.latlng.lat, e.latlng.lng, map.getZoom()));
    })
    
  }
  