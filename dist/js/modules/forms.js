/**
 * Created by пк on 19.11.2020.
 */
import {closeModel, openModel} from './modal';
import {postData} from '../services/services';

function forms(formSelector ,modalTimerId) {
    //Forms

    const forms =document.querySelectorAll(formSelector);

    const message = {
        loading: 'img/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжимся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item)
    });



    //async/await -

    function bindPostData (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();//отменяет стандартное поведение браузера

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText =`
            display: block;
            margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);//вставляет элемент после формы

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();//очистка формы
            });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModel('.modal', modalTimerId);

        const thankModal = document.createElement('div');
        thankModal.classList.add('modal__dialog');
        thankModal.innerHTML = `
        <div class="modal__content">
             <div class="modal__close" data-close>&times;</div>
             <div class="modal__title">${message}</div>
        </div>
        `;

        document.querySelector('.modal').append(thankModal);
        setTimeout(() => {
            thankModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModel('.modal');
        }, 4000);
    }

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(res => console.log(res));

}

export default forms;

//npm i json-server --save-dev
//npx json-server db.json