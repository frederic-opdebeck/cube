class BlocReponse {
    constructor(textBoutton) {
        this.textBoutton = textBoutton;
        this.formReponse(this.textBoutton);
    }

    formReponse(textBoutton) {
        

        let form = document.createElement('form');
        document.body.appendChild(form);

        let inputSubmit = document.createElement('input');

        form.appendChild(inputSubmit);

        form.setAttribute('class', 'formReponse');
        form.setAttribute('method', 'POST');
        form.setAttribute('id', 'formReponse')

        inputSubmit.setAttribute('type', 'submit');
        inputSubmit.setAttribute('value', this.textBoutton);
        inputSubmit.setAttribute('name', 'reponseSubmit');

        inputSubmit.addEventListener('click', (e) =>{
            e.preventDefault();
            this.addInput();
        });
        
    }
    addInput() {
        let inputReponse =  document.createElement('input');
        let form = document.getElementById('formReponse');

        inputReponse.setAttribute('type', 'text');
        inputReponse.setAttribute('name', 'r');
        
        form.appendChild(inputReponse);
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
        let inputSubmit = document.createElement('input');

        document.body.appendChild(form);
        form.appendChild(inputText);
        form.appendChild(inputSubmit);

        form.setAttribute('class', 'formQuestion');
        form.setAttribute('method', 'POST');

        inputText.setAttribute('type', 'text');
        inputText.setAttribute('name', 'q'+numQ);
        inputText.setAttribute('value', 'question?');

        inputSubmit.setAttribute('type', 'submit');
        inputSubmit.setAttribute('value', textBoutton);
        inputSubmit.setAttribute('id', 'questionSubmit');
        this.formReponse();
        
    }

    formReponse() {
        
        let submit = document.getElementById('questionSubmit');
        submit.addEventListener('click', (e) => {
            e.preventDefault();
            let formReponse = new BlocReponse('Ajouter une réponse');
        });
        
    }
}

let blocQuestion = new BlocQuestion(1, 'Envoyer ma question');








