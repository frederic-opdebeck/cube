
// questions.question1.suite(['R1']);

const questions = {
    'q1':{
            'question': 'Habitez-vous vous en France ?', // Do you leave
            'reponses': { 'R1': 'Oui', 'R2': 'Non'},
            'img' : 'img_1.jgp',
            'type': 'button',
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
            'img' : 'img_4.jgp',
            'type': 'button',
            'suite': function (rep){
                    return writequestion('q4');
            }
        },
    'q3':{
            'question': 'Fin du questionnaire', // Is this the property you're looking for ?
            'reponses': null,
            'img' : 'img_2.jgp',
            'type': null,
            'suite': null
        },
    'q4':{
            'question': 'Voulez-vous : une baignoire ou une cuisine ?', // 'Do you want a Kitchen or Bathroom?',
            'reponses': { 'R1': 'Une baignoire', 'R2': 'Une cuisine'},
            'img' : 'img_5.jgp',
            'type': 'button',
            'suite':function (rep){
                    return writequestion('q5');
            }
        },
    'q5':{
            'question': 'Quelle est votre surface préférée ?', 
            'reponses': { 'R1': 'numbre_m2'},
            'img' : null,
            'type': 'number',
            'suite':function (rep){
                    return writequestion('q6');
            }
    },
    'q6':{
            'question': 'Avez-vous au moins une construction sur votre terrain ?', // Do you have any Construction in your Backyard? (Image 6)
            'reponses': { 'R1': 'Oui', 'R2': 'Non'},
            'img' : 'img_6',
            'type': 'button',
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
        'img' : 'img_7',
        'type': 'button',
        'suite':function (rep){
                return writequestion('q8');   
        }
    },
    'q8':{
        'question': 'Quelle type de consctruction aimez-vous le plus ?', // Which look do you like most? (Image 11-12-13)
        'reponses': { 'R1': 'img_11 en bg', 'R2': 'img_12 en bg', 'R3' :'img_13 en bg'},
        'img' : 'img_11.jpg-img_12.jpg-img_13.jpg',
        'type': 'button',
        'suite':function (rep){
            return writequestion('q9');   
    }
        // fonction pour Récapituler de toutes les q et r associées + envoie d"un mail et proposer envoie de mail telechargement de la config'
    },
    'q9':{
        'question': 'Voulez-vous sauvegarder votre rapport ?', // Which look do you like most? (Image 11-12-13)
        'reponses': { 'R1': 'oui', 'R2': 'non'},
        'img' : 'img_11.jpg-img_12.jpg-img_13.jpg',
        'type': 'button',
        'suite':function (rep){
            return writequestion('q10');   
    }
        // fonction qui enoive un mail de récap au client potentiel
    },
    'q10':{
        'question': 'Achetez-vous votre CUBE ?', // Which look do you like most? (Image 11-12-13)
        'reponses': { 'R1': 'oui', 'R2': 'non'},
        'img' : 'img_11.jpg-img_12.jpg-img_13.jpg',
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
                console.log(r.id);
                r.textContent = questions[q].reponses[key];
                document.getElementById('container').appendChild(r);
                r.addEventListener("click", function(){questions[q].suite(r.id)});
                nbr++
        }
    }
} 
};
writequestion('q1');



/*
const questions =
    {
        'question' : "Enter your home Address ",
        'reponse' : {
                        'R1' : "Complément 1",
                        'R2' : "Complément 2",
                        'R3' : "32",
                        'R4' : "avenue Marcel Dassault",
                        'R5' : "complement 1",
                        'R6' : "37200",
                        'R7' : "TOURS",
                    },
        'img' : 'img_1.jpg',
        'suite' :   
            { 
                'S1' :
                    {
                        'question'  : "Is the address is outside france ?",
                        'reponse'   :   yesNo,
                        'img' : 'img_2.jpg',
                        'suite' :   
                            {
                                'S1' :
                                    {
                                        'question' : "Fin du questionnaire", 
                                        'reponse' :  null,
                                        'img' : 'img_10.jpg',
                                        'suite' : null
                                    },
                                'S2' :
                                    {
                                        'question' : "Is the property you're looking for ?", 
                                        'reponse' :  yesNo,
                                        'img' : 'img_2.jpg',
                                        'suite' :
                                            {
                                                'S1' :
                                                {
                                                    'question' : "What will be using your cube ?", 
                                                    'reponse' : {
                                                                    'R1' : "bureau",
                                                                    'R2' : "habitation",
                                                                    'R3' : "garage",
                                                                    'R4' : "grange",
                                                                    'R5' : "autre1",
                                                                    'R6' : "autre2"
                                                                },
                                                    'img' : 'img_4.jpg',
                                                    'suite' :
                                                        { Do you want a Kitchen or Bathroom? (Image 5)
                                                            'S1' :
                                                            {
                                                                'question' : "Do you want a Kitchen or Bathroom ?", 
                                                                'reponse' : yesNo,
                                                                'img' : 'img_4.jpg',
                                                                'suite' :
                                                                    { Do you want a Kitchen or Bathroom? (Image 5)
            ==================================================================================================================                                                                    
                                                                    }
                                                            }                                                          
                                                        }
                                                },
                                                'S2' :
                                                {
                                                    'question' : "Fin du questionnaire", 
                                                    'reponse' :  null,
                                                    'img' : 'img_3.jpg',
                                                    'suite' : null
                                                }
                                            }
                                    }
                            }
                    }
            }
    }
 4       {
            'question' : 'Vas-tu aller voir le docteur ?', 
            'reponse' :  {'R1' :'oui','R2' : 'non'},
            'id' : 'gflig',
            'path' : 'Q1>S1>Q1>R1'
        },
 5       {
            'question' : 'Vas-tu ale ton jogging ?', 
            'reponse' :  {'R1' :'oui','R2' : 'non'},
            'id' : 'uyft',
            'path' : 'Q1>S1>Q1>R2'
        }
    ]
const modele_questions = 
// deux premieres questions path = qn>ri>qn+1->ri+1
    [{
            'question' : 'tu vas bien ?',
            'reponse' :  {'R1' :'oui','R2' : 'non', etc, 'R-n' : 'nnn'},
            'id' : '02082034',
            'path' : 'Q0'
        },
        {
            'question' : 'Vas-tu aller faire ton jogging ?', 
            'reponse' :  {'R1' :'oui','R2' : 'non', etc, 'R3' : 'Je ne sais pas'},
            'id' : 'uyft',
            'path' : 'Q0>R1>Q1'
        },
        {
            'question' : 'Vas-tu aller voir le docteur ?', 
            'reponse' :  {'R1' :'oui','R2' : 'non'},
            'id' : 'gflig',
            'path' : 'Q0>R2>Q2'
        },
        {etc},
        {
            'question' : 'Vas-tu ale ton jogging ?', 
            'reponse' :  {'R1' :'oui','R2' : 'non'},
            'id' : 'uyft',
            'path' : 'Q0>R-n>Q-n'
        }
    ]
    */
