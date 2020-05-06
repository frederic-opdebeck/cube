class BlocReponse {
    constructor(textBoutton) {
        this.textBoutton = textBoutton;
        this.formReponse();
    }

    formReponse() {
        

        let form = document.getElementById('formQuestion');

        let inputSubmit = document.createElement('input');

        form.appendChild(inputSubmit);

        form.setAttribute('class', 'formReponse');
        form.setAttribute('method', 'POST');
        form.setAttribute('id', 'formReponse')

        inputSubmit.setAttribute('type', 'submit');
        inputSubmit.setAttribute('value', this.textBoutton);
        inputSubmit.setAttribute('name', 'reponseSubmit');

        let numeroReponse = 1;
        inputSubmit.addEventListener('click', (e) =>{
            e.preventDefault();
            this.addInput(numeroReponse);
            numeroReponse = numeroReponse + 1;
        });
        
    }
    addInput(numeroReponse) {
        let inputReponse =  document.createElement('input');
        let form = document.getElementById('formReponse');

        inputReponse.setAttribute('type', 'text');
        inputReponse.setAttribute('name', 'reponse'+numeroReponse);
        inputReponse.setAttribute('class', 'reponse');
        
        form.appendChild(inputReponse);
    }
}

class BlocQuestion {
    constructor(textBoutton) {
        this.textBoutton = textBoutton;
        this.formQuestion(this.numQ, this.textBoutton);
    }

    formQuestion(numQ, textBoutton) {

        let form = document.createElement('form');
        let inputText = document.createElement('input');
        let inputSubmit = document.createElement('input');
        let div = document.getElementById('addBloc');

        div.appendChild(form);
        form.appendChild(inputText);
        form.appendChild(inputSubmit);

        form.setAttribute('class', 'formQuestion');
        form.setAttribute('method', 'POST');
        form.setAttribute('id','formQuestion');

        inputText.setAttribute('type', 'text');
        inputText.setAttribute('class', 'question');
        inputText.setAttribute('name', 'question');
        inputText.setAttribute('value', 'question?');

        inputSubmit.setAttribute('type', 'submit');
        inputSubmit.setAttribute('value', textBoutton);
        inputSubmit.setAttribute('id', 'questionSubmit');
        this.formReponse();
        
    }

    formReponse() {
        let formReponse = new BlocReponse('Ajouter une réponse');
    }
}

let blocQuestion = new BlocQuestion('Envoyer ma question');
