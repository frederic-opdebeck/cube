Enregistrement  -  1iere question :

tab = 
[
    ['question' => 'tu vas bien ?'
    ,
    'reponse' =>  ['oui','non'],
    'id' => '02082034',
    'path' => 'Q0'
    ],

    ['question' => 'Vas-tu aller faire ton jogging ?', 
    'reponse' =>  ['oui','non','je sais pas'],
    'id' => 'uyft',
     'path' => 'Q0>R1>Q1'
    ],

    ['question' => 'Vas-tu aller voir le docteur ?', 
    'reponse' =>  ['oui','non'],
    'id' => 'gflig',
     'path' => 'Q0>R2>Q2'
    ]
]

Lecture  -  1iere question :

 tab [0] = ['question' => 'tu vas bien ?', 'reponse' =>  ['oui','non','je sais pas']]

 tab[0]['question'] = 'tu vas bien ?'
 tab[0]['reponse']  = ['oui','non','je sais pas']
 tab[0]['reponse'] [0] = 'oui'
 tab[0]['reponse'] [1] = 'non'
 tab[0]['reponse'] [2] = 'je sais pas'


 Q1>R1>Q2

 Q1>R2>Q3

 Q1>R3>Q4
