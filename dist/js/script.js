/**
 * Created by пк on 21.10.2020.
 */
'use strict';

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calcl from './modules/calcl';
import forms from './modules/forms';
import slider from './modules/sliders';
import {openModel} from './modules/modal';

window.addEventListener('DOMContentLoaded', () =>   {

    const modalTimerId = setTimeout(() => openModel('.modal', modalTimerId), 300000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2021-01-01');
    cards();
    calcl();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});






