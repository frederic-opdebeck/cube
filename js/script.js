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

        let buttonReponse = document.createElement('button');
        let buttonRemove = document.createElement('button');
        let divReponse = document.createElement('div');
        let inputSubmit = document.createElement('input');
        let pReponse = document.createElement('p');
        let firstInput = document.createElement('input');
        let divInputReponse = document.createElement('div');
        let divButtonReponse = document.createElement('div');
        
        divReponse.appendChild(pReponse);
        divReponse.appendChild(divInputReponse);
        divReponse.appendChild(divButtonReponse);
        divButtonReponse.appendChild(buttonRemove);
        divButtonReponse.appendChild(buttonReponse);
        form.appendChild(divReponse);
        divInputReponse.appendChild(firstInput);
        form.appendChild(inputSubmit);

        divReponse.setAttribute('id', 'divReponse');
        divInputReponse.setAttribute('id', 'divInputReponse');

        pReponse.setAttribute('class', 'pReponse');
        pReponse.textContent = "Ecrivez vos réponses: ";

        divButtonReponse.setAttribute('class', 'divButtonreponse');

        buttonReponse.textContent = 'Ajouter une réponse';
        buttonReponse.setAttribute('name', 'reponseSubmit');
        buttonReponse.setAttribute('id', 'buttonReponse');

        buttonRemove.textContent = 'Retirer une réponse';
        buttonRemove.setAttribute('name','buttonRemove');
        buttonRemove.setAttribute('id', 'buttonRemove');

        inputSubmit.setAttribute('type', 'submit');
        inputSubmit.setAttribute('value', 'Ajouter le bloc');
        inputSubmit.setAttribute('id', 'questionSubmit');

        firstInput.setAttribute('class', 'reponse');
        firstInput.setAttribute('type', 'text');
        firstInput.setAttribute('name', 'reponse0');
        firstInput.setAttribute('placeholder', 'Votre réponse');

        let numeroReponse = 1;

        buttonReponse.addEventListener('click', (e) =>{
            e.preventDefault();
            if(numeroReponse<3) {
                this.addInput(numeroReponse);
                numeroReponse = numeroReponse + 1;
            }
            else {
                alert('Vous ne pouvez pas ajouter plus de 3 réponses');
                numeroReponse = 3;
            }
            
        });
        buttonRemove.addEventListener('click', (e)=>{
            e.preventDefault();
            if(numeroReponse!==1) {
                numeroReponse = numeroReponse - 1;
                let inputReponse = document.getElementById('reponse'+numeroReponse);
                inputReponse.remove();
            }
            else {
                alert('Aucune réponse à retirer');
            }
        });
    }
    addInput(numeroReponse) {
        let inputReponse =  document.createElement('input');
        let divInputReponse = document.getElementById('divInputReponse');

        inputReponse.setAttribute('type', 'text');
        inputReponse.setAttribute('name', 'reponse'+numeroReponse);
        inputReponse.setAttribute('class', 'reponse');
        inputReponse.setAttribute('placeholder', 'Votre réponse');
        inputReponse.setAttribute('id', 'reponse'+numeroReponse);
        
        divInputReponse.appendChild(inputReponse);
    }
    removeInput() {

    }
}

let blocQuestion = new BlocQuestion();
