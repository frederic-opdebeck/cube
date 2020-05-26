const questions = {
    'q1':{
            'question': 'Habitez-vous vous en France ?', // Do you leave
            'reponses': { 'R1': 'Oui', 'R2': 'Non'},
            'img' : 'img_1.jgp',
            'type': 'button',
            'suite':function(rep) {
                if (rep === 'R1') {
                    return questions.q2;
                }
            }
        },
    'q2':{
            'question': 'A quoi servira votre CUBE ?', // What will you be using your Cube for ?
            'reponses': { 'R1': '1','R2': '2','R3': '3','R4': '4','R5': '5','R6': '6' },
            'img' : 'img_4.jgp',
            'type': 'button',
            'suite': function(rep) {
                if (rep === 'R1') {
                    return questions.q4;
                }
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
            'suite':function(rep) {
                if (rep === 'R1') {
                    return questions.q5;
                }
            }
        },
    'q5':{
            'question': 'Quelle est votre surface préférée ?', 
            'reponses': { 'R1': 'numbre_m2'},
            'img' : null,
            'type': 'number',
            'suite':function(rep) {
                if (rep === 'R1') {
                    return questions.q6;
                }
            }
    },
    'q6':{
            'question': 'Avez-vous au moins une construction sur votre terrain ?', // Do you have any Construction in your Backyard? (Image 6)
            'reponses': { 'R1': 'Oui', 'R2': 'Non'},
            'img' : 'img_6',
            'type': 'button',
            'suite':function(rep) {
                if (rep === 'R1') {
                    return questions.q7;
                }
            }
    },
    'q7':{
        'question': 'Voulez-vous détruire cette construction ?', // Would you like to remove this structure? (Image 7)
        'reponses': { 'R1': 'Oui', 'R2': 'Non'},
        'img' : 'img_7',
        'type': 'button',
        'suite':function(rep) {
            if (rep === 'R1') {
                return questions.q9;
            }
        }
    },
    'q8':{
        'question': 'Quelle type de consctruction vous aimez le plus ?', // Which look do you like most? (Image 11-12-13)
        'reponses': { 'R1': 'img_11 en bg', 'R2': 'img_12 en bg', 'R3' :'img_13 en bg'},
        'img' : 'img_6',
        'type': 'button',
        'suite':function(rep) {
            if (rep === 'R1') {
                return questions.q9;
            }
        }
    }
   

}
