// Avant propos :
            const modele_d_une_brique =
                [
                    {
                        'question' : "une question",
                        'reponse'  : {'R1' : "toutes les réponses"},
                        'img' : 'nom_image.jpg',
                        'suite' : 
                            {
                                'S1' : 'rebelote',
                                'S2' : 'rebelote',
                                'Sn' : 'rebelote'
                            }
                    }
                ]
// AVEC rebelote définie tel que :
            const rebelote =
                [
                    {
                        'question' : "une question",
                        'reponse'  : {'R1' : "toutes les réponses"},
                        'img' : 'nom_image.jpg',
                        'suite' : 
                            {
                                'S1' : 'rebelote',
                                'S2' : 'rebelote',
                                'Sn' : 'rebelote'
                            }
                    }
                ]
// Tableau associatif récursif : le vrai (suite de gauche à droite)

const yesNo = {'R1' : "Yes", 'R2' : "No"}

const questions =
[
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
                                                                    'R1' : "cuisine",
                                                                    'R2' : "eau",
                                                                    'R3' : "elec",
                                                                    'R4' : "SdB",
                                                                    'R5' : "complement ",
                                                                    'R6' : "autre"
                                                                },
                                                    'img' : 'img_4.jpg',
                                                    'suite' :
                                                        {
                                                                    
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
]
        


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