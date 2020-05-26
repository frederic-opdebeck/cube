const questions = {
    'q1':{
            'question': 'Habitez-vous vous en France ?', // Do you leave
            'reponses': { 'R1': 'Oui', 'R2': 'Non'},
            'img' : 'img_1.jgp',
            'type': 'button',
            'suite':function(rep) {
                if (rep === 'R1') {
                    return questions.q2.question;
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
                    return questions.q4.question;
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
                    return questions.q5.question;
                }
            }
        },
    'q5':{
            'question': 'Voulez-vous : une baignoire ou une cuisine ?', // 'Do you want a Kitchen or Bathroom?',
            'reponses': { 'R1': 'Une baignoire', 'R2': 'Une cuisine'},
            'img' : 'img_5.jgp',
            'type': 'button',
            'suite':function(rep) {
                if (rep === 'R1') {
                    return questions.q4.question;
                }
            }
    },
}