const FORM = document.createElement('form');
const FIELDSET = document.createElement('fieldset');
const LEGEND = document.createElement('legend');
const INPUT_NAME = document.createElement('input');
const INPUT_PASSWORD = document.createElement('input');
const LABEL_NAME = document.createElement('label');
const LABEL_PASSWORD = document.createElement('label');
const NAME_CONTAINER = document.createElement('div');
const PASSWORD_CONTAINER = document.createElement('div');
const BUTTON = document.createElement('button');

FORM.className = 'form';
FIELDSET.className = 'fieldset';
PASSWORD_CONTAINER.className = 'container';
NAME_CONTAINER.className = 'container';

LEGEND.innerText = 'legend';
LABEL_NAME.innerText = 'name';
LABEL_PASSWORD.innerText = 'password';
BUTTON.innerText = 'ok';


document.body.append(FORM);
FORM.append(FIELDSET);
FIELDSET.append(LEGEND);
FIELDSET.append(NAME_CONTAINER);
NAME_CONTAINER.append(INPUT_NAME);
NAME_CONTAINER.append(LABEL_NAME);
FIELDSET.append(PASSWORD_CONTAINER);
PASSWORD_CONTAINER.append(INPUT_PASSWORD);
PASSWORD_CONTAINER.append(LABEL_PASSWORD);
FIELDSET.append(BUTTON);