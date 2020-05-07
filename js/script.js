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
        let labelReponseToAssign = document.createElement('label');
        let labelQuestionToAssign = document.createElement('label');
        let selectReponseToAssign = document.createElement('select');
        let optionSelectReponseToAssign1 = document.createElement('option');
        let optionSelectReponseToAssign2 = document.createElement('option');
        let optionSelectReponseToAssign3 = document.createElement('option');
        let selectQuestionToAssign = document.createElement('select');
        let optionSelectQuestionToAssign1 = document.createElement('option');
        let optionSelectQuestionToAssign2 = document.createElement('option');
        let optionSelectQuestionToAssign3 = document.createElement('option');
        let divToAssign = document.createElement('div');
        
        div.appendChild(form);
        form.appendChild(divQuestion);
        divQuestion.appendChild(labelQuestion);
        divQuestion.appendChild(inputText);
        divQuestion.appendChild(divToAssign);
        divToAssign.appendChild(labelReponseToAssign);
        divToAssign.appendChild(selectReponseToAssign);
        divToAssign.appendChild(labelQuestionToAssign);
        divToAssign.appendChild(selectQuestionToAssign);
        selectReponseToAssign.appendChild(optionSelectReponseToAssign1);
        selectReponseToAssign.appendChild(optionSelectReponseToAssign2);
        selectReponseToAssign.appendChild(optionSelectReponseToAssign3);
        selectQuestionToAssign.appendChild(optionSelectQuestionToAssign1);
        selectQuestionToAssign.appendChild(optionSelectQuestionToAssign2);
        selectQuestionToAssign.appendChild(optionSelectQuestionToAssign3);
        
        form.setAttribute('class', 'formQuestion');
        form.setAttribute('method', 'POST');
        form.setAttribute('id','formQuestion');

        labelReponseToAssign.setAttribute('for', 'selectReponseToAssign');
        labelReponseToAssign.textContent = "Cette question sera associé à la réponse:";

        selectReponseToAssign.setAttribute('id', 'selectReponseToAssign');

        optionSelectReponseToAssign1.setAttribute('value', 'elementPrincipal1');
        optionSelectReponseToAssign1.textContent = 'Rien (première question)';

        //boucle d'options
        optionSelectReponseToAssign2.setAttribute('value', 'réponse2');
        optionSelectReponseToAssign2.textContent= 'réponse2 (exemple)';

        optionSelectReponseToAssign3.setAttribute('value', 'réponse3');
        optionSelectReponseToAssign3.textContent= 'réponse3 (exemple)';
        //End boucle d'options

        labelQuestionToAssign.setAttribute('for', 'selectQuestionToAssign');
        labelQuestionToAssign.textContent = "de la question:";

        selectQuestionToAssign.setAttribute('id', 'selectQuestionToAssign');

        optionSelectQuestionToAssign1.setAttribute('value', 'elementPrincipal2');
        optionSelectQuestionToAssign1.textContent = 'Rien (première question)';

        //boucle d'options
        optionSelectQuestionToAssign2.setAttribute('value', 'question2');
        optionSelectQuestionToAssign2.textContent= 'question2 (exemple)';

        optionSelectQuestionToAssign3.setAttribute('value', 'question3');
        optionSelectQuestionToAssign3.textContent= 'question3 (exemple)';
        //End boucle d'options

        divToAssign.setAttribute('id', 'divToAssign');

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
        divButtonReponse.appendChild(buttonReponse);
        divButtonReponse.appendChild(buttonRemove);
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
