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
                    th2.textContent = r[i].laReponse
    }

}
let recap = [];
const questions = {
    'q0':{
        'question': 'Commencer la création du cube?', // Do you leave
        'reponses': { 'R1': 'Commencer'},
        'img' : ['q0_0.jgp'],
        'type': 'radio',
        'suite':function (rep){
                return writequestion('q1');
        }
    },
    'q1':{
            'question': 'Habitez-vous vous en France ?', // Do you leave
            'reponses': { 'R1': 'Oui', 'R2': 'Non'},
            'img' : ['q1_0.jgp'],
            'type': 'radio',
            'suite':function (rep){
                if (rep.includes('R1')){
                    return writequestion('q2');
                } else {
                    return writequestion('q3');
                }
            }
        },
    'q2':{
            'question': 'A quoi servira votre CUBE ?', // What will you be using your Cube for ?
            'reponses': { 'R1': '1','R2': '2','R3': '3','R4': '4','R5': '5','R6': '6' },
            'img' : ['q2_0.jgp'],
            'type': 'radio',
            'suite': function (rep){
                    return writequestion('q4');
            }
        },
    'q3':{
            'question': 'Fin du questionnaire', // Is this the property you're looking for ?
            'reponses': null,
            'img' : ['q3_0.jgp'],
            'type': null,
            'suite': null
        },
    'q4':{
            'question': 'Voulez-vous : une baignoire ou une cuisine ?', // 'Do you want a Kitchen or Bathroom?',
            'reponses': { 'R1': 'Une baignoire', 'R2': 'Une cuisine'},
            'img' : ['q4_0.jgp'],
            'type': 'radio',
            'suite':function (rep){
                    return writequestion('q5');
            }
        },
    'q5':{
            'question': 'Quelle est votre surface préférée ?', 
            'reponses': { 'R1' : 'm2'},
            'img' : null,
            'type': 'number',
            'suite':function (rep){
                    return writequestion('q6');
            }
    },
    'q6':{
            'question': 'Avez-vous au moins une construction sur votre terrain ?', // Do you have any Construction in your Backyard? (Image 6)
            'reponses': { 'R1': 'Oui', 'R2': 'Non'},
            'img' : ['q6_0'],
            'type': 'radio',
            'suite':function (rep){
                if (rep.includes('R1')){
                    return writequestion('q7');
                } else {
                    return writequestion('q8');
                }
            }
    },
    'q7':{
        'question': 'Voulez-vous détruire cette construction ?', // Would you like to remove this structure? (Image 7)
        'reponses': { 'R1': 'Oui', 'R2': 'Non'},
        'img' : ['q7_0'],
        'type': 'radio',
        'suite':function (rep){
                return writequestion('q8');   
        }
    },
    'q8':{
        'question': 'Quelle type de consctruction aimez-vous le plus ?', // Which look do you like most? (Image 11-12-13)
        'reponses': { 'R1': 'img_11 en bg', 'R2': 'img_12 en bg', 'R3' :'img_13 en bg'},
        'img' : ['q8_0.jpg','q8_1.jpg','q8_2.jpg'],
        'type': 'radio',
        'suite':function (rep){
            printResults(recap);
            return writequestion('q9');   
        }
        // fonction pour Récapituler de toutes les q et r associées + envoie d"un mail et proposer envoie de mail telechargement de la config'
    },
    'q9':{
        'question': 'Voulez-vous sauvegarder votre rapport ?', // Which look do you like most? (Image 11-12-13)
        'reponses': { 'R1': 'oui', 'R2': 'non'},
        'img' : ['q9_0.jpg'],
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
        'question': "Voulez-vous nous l'envoyer par email ?", // 
        'reponses': { 'R1': 'oui', 'R2': 'non'},
        'img' : ['q9bis_0.jpg'],
        'type': 'radio',
        'suite':function (rep){
            return writequestion('q10');   
        }
    },
    'q10':{
        'question': 'Achetez-vous votre CUBE ?', // Which look do you like most? (Image 11-12-13)
        'reponses': { 'R1': 'oui', 'R2': 'non'},
        'img' : ['q10_0.jpg','q10_1.jpg'],
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
        'question': 'envoie vers une page de paiement', // Which look do you like most? (Image 11-12-13)
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
    let quest = document.getElementById("question");
    quest.textContent = questions[q].question;
    let nbr = 1
    if(document.querySelectorAll('.buttonR')) {
        document.querySelectorAll(".buttonR").forEach(e => e.parentNode.removeChild(e));
        }  
    for (const key in questions[q].reponses) {
        if (questions[q].reponses.hasOwnProperty(key)) {
                let r = document.createElement("button");

                r.setAttribute('id','R' + nbr)
                r.setAttribute('class', 'buttonR')
                r.textContent = questions[q].reponses[key];
                document.getElementById('questionReponses').appendChild(r);

                r.addEventListener("click", function(){   
                    recap.push({ 'laQuestion' : questions[q].question , 'laReponse' : questions[q].reponses[r.id]});
                    console.log(recap)
                    questions[q].suite(r.id)
                });
                nbr++
        }
    }
} 
};

writequestion('q1');