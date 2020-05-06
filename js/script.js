class BlocReponse {
    constructor(textBoutton) {
        this.textBoutton = textBoutton;
        this.formReponse();
    }

    formReponse() {
        

        let form = document.getElementById('formQuestion');

        let button = document.createElement('button');
        let divReponse = document.createElement('div');
        let inputSubmit = document.createElement('input');

        form.appendChild(button);
        form.appendChild(divReponse);
        form.appendChild(inputSubmit);

        divReponse.setAttribute('id', 'divReponse');

        button.textContent = this.textBoutton;
        button.setAttribute('name', 'reponseSubmit');
        button.setAttribute('id', 'buttonReponse');

        inputSubmit.setAttribute('type', 'submit');
        inputSubmit.setAttribute('value', 'Ajouter le bloc');
        inputSubmit.setAttribute('id', 'questionSubmit');

        let numeroReponse = 1;
        button.addEventListener('click', (e) =>{
            e.preventDefault();
            this.addInput(numeroReponse);
            numeroReponse = numeroReponse + 1;
        });
        
    }
    addInput(numeroReponse) {
        let inputReponse =  document.createElement('input');
        let divReponse = document.getElementById('divReponse');

        inputReponse.setAttribute('type', 'text');
        inputReponse.setAttribute('name', 'reponse'+numeroReponse);
        inputReponse.setAttribute('class', 'reponse');
        
        divReponse.appendChild(inputReponse);
    }
}

class BlocQuestion {
    constructor() {
        this.formQuestion();
    }

    formQuestion() {

        let form = document.createElement('form');
        let labelQuestion = document.createElement('label');
        let inputText = document.createElement('input');
        let div = document.getElementById('addBloc');
        let divQuestion = document.createElement('div');
        

        
        div.appendChild(form);
        form.appendChild(divQuestion);
        divQuestion.appendChild(labelQuestion);
        divQuestion.appendChild(inputText);
        

        form.setAttribute('class', 'formQuestion');
        form.setAttribute('method', 'POST');
        form.setAttribute('id','formQuestion');

        labelQuestion.setAttribute('id', 'labelQuestion');
        labelQuestion.setAttribute('for', 'question');

        divQuestion.setAttribute('class', 'divQuestion');

        inputText.setAttribute('type', 'text');
        inputText.setAttribute('class', 'question');
        inputText.setAttribute('name', 'question');
        inputText.setAttribute('value', 'question?');
        inputText.setAttribute('id','question');

        
        this.formReponse();
        
    }

    formReponse() {
        let formReponse = new BlocReponse('Ajouter une réponse');
    }
}

let blocQuestion = new BlocQuestion();
