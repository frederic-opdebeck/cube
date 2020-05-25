const questions = 
// questions path = qn>ri>qn+1>ri+1
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