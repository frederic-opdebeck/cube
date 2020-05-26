function suite(rep){
    if (rep.includes('R1') || rep.includes('R3')) {
        return 'question2';
    } else if (rep.includes('R2')) {
        return 'questions.q3';
    }
}
// questions.question1.suite(['R1']);

const questions = {
    'q1':{
            'question': 'Habitez-vous vous en France ?', // Do you leave
            'reponses': { 'R1': 'Oui', 'R2': 'Non'},
            'img' : 'img_1.jgp',
            'type': 'button',
            'suite': questions.q2
        },
    'q2':{
        'question': 'A quoi servira votre CUBE ?', // Is this the property you're looking for ?
        'reponses': { 'R1': 'Oui','R2': 'Non'},
        'img' : 'img_2.jgp',
        'type': 'button',
        'suite': questions.q4
        },
    'q3':{
        'question': 'Fin du questionnaire', // Is this the property you're looking for ?
        'reponses': null,
        'img' : 'img_2.jgp',
        'type': null,
        'suite': null
        },


ques
tions.question1.suite(['R1']);




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