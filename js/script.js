class BlocReponse {
    constructor(nb_reponse, textBoutton) {
        this.nb_reponse = nb_reponse;
        this.textBoutton = textBoutton;
        this.formReponse(this.nb_reponse, this.textBoutton);
    }

    formReponse(nb_reponse, textBoutton) {
        

        let form = document.createElement('form');
        document.body.appendChild(form);

        let inputReponse = [];

        for(let i = 0; i<nb_reponse;i++) {

            inputReponse[i] = document.createElement('input');

            inputReponse[i].setAttribute('type', 'text');
            inputReponse[i].setAttribute('name', 'r'+i);

            form.appendChild(inputReponse[i]);

        }
        
        let inputSubmit = document.createElement('input');

        form.appendChild(inputSubmit);

        form.setAttribute('class', 'formReponse');
        form.setAttribute('method', 'POST');

        inputSubmit.setAttribute('type', 'submit');
        inputSubmit.setAttribute('value', textBoutton);
        inputSubmit.setAttribute('name', 'reponseSubmit');
        
    }
}

class BlocQuestion {
    constructor(numQ, textBoutton) {
        this.numQ = numQ;
        this.textBoutton = textBoutton;
        this.formQuestion(this.numQ, this.textBoutton);
    }

    formQuestion(numQ, textBoutton) {

        let form = document.createElement('form');
        let inputText = document.createElement('input');
        let inputNumber = document.createElement('input');
        let inputSubmit = document.createElement('input');

        document.body.appendChild(form);
        form.appendChild(inputText);
        form.appendChild(inputNumber);
        form.appendChild(inputSubmit);

        form.setAttribute('class', 'formQuestion');
        form.setAttribute('method', 'POST');

        inputText.setAttribute('type', 'text');
        inputText.setAttribute('name', 'q'+numQ);
        inputText.setAttribute('value', 'question?');

        inputNumber.setAttribute('type', 'number');
        inputNumber.setAttribute('id', 'nb_reponse');
        inputNumber.setAttribute('value', 1);

        inputSubmit.setAttribute('type', 'submit');
        inputSubmit.setAttribute('value', textBoutton);
        inputSubmit.setAttribute('id', 'questionSubmit');
        this.formReponse();
        
    }

    formReponse() {
        
        let submit = document.getElementById('questionSubmit');
        let inputNumber = document.getElementById('nb_reponse');
        submit.addEventListener('click', (e) => {
            e.preventDefault();
            let formReponse = new BlocReponse(inputNumber.value, 'Envoyer ma réponse');
        });
        
    }
}

let blocQuestion = new BlocQuestion(1, 'Envoyer ma question');




