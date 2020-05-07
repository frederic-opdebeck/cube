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
        labelQuestion.textContent = "Ecrivez votre question: ";

        divQuestion.setAttribute('class', 'divQuestion');

        inputText.setAttribute('type', 'text');
        inputText.setAttribute('class', 'question');
        inputText.setAttribute('name', 'question');
        inputText.setAttribute('placeholder', 'Votre question');
        inputText.setAttribute('id','question');

        this.formReponse();
        
    }

    formReponse() {
        let form = document.getElementById('formQuestion');

        let button = document.createElement('button');
        let divReponse = document.createElement('div');
        let inputSubmit = document.createElement('input');
        let pReponse = document.createElement('p');
        let firstInput = document.createElement('input');
        let divInputReponse = document.createElement('div');
        
        divReponse.appendChild(pReponse);
        divReponse.appendChild(divInputReponse);
        divInputReponse.appendChild(button);
        form.appendChild(divReponse);
        divInputReponse.appendChild(firstInput);
        form.appendChild(inputSubmit);

        divReponse.setAttribute('id', 'divReponse');
        divInputReponse.setAttribute('id', 'divInputReponse');

        pReponse.setAttribute('class', 'pReponse');
        pReponse.textContent = "Ecrivez vos réponses: ";

        button.textContent = 'Ajouter une réponse';
        button.setAttribute('name', 'reponseSubmit');
        button.setAttribute('id', 'buttonReponse');

        inputSubmit.setAttribute('type', 'submit');
        inputSubmit.setAttribute('value', 'Ajouter le bloc');
        inputSubmit.setAttribute('id', 'questionSubmit');

        firstInput.setAttribute('class', 'reponse');
        firstInput.setAttribute('type', 'text');
        firstInput.setAttribute('name', 'reponse0');
        firstInput.setAttribute('placeholder', 'Votre réponse');

        let numeroReponse = 1;
        button.addEventListener('click', (e) =>{
            e.preventDefault();
            if(numeroReponse<3) {
                this.addInput(numeroReponse);
            }
            else {
                alert('Vous ne pouvez pas ajouter plus de 3 réponses');
            }
            numeroReponse = numeroReponse + 1;
        });
        
    }
    addInput(numeroReponse) {
        let inputReponse =  document.createElement('input');
        let divInputReponse = document.getElementById('divInputReponse');

        inputReponse.setAttribute('type', 'text');
        inputReponse.setAttribute('name', 'reponse'+numeroReponse);
        inputReponse.setAttribute('class', 'reponse');
        inputReponse.setAttribute('placeholder', 'Votre réponse');
        
        divInputReponse.appendChild(inputReponse);
    }
}

let blocQuestion = new BlocQuestion();
