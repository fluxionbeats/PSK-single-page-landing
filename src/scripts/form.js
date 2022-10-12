const callFormElement = document.querySelector('#call-form');
const formWrapperElement = document.querySelector('.call-form__wrapper');
const inputNameElement = callFormElement.querySelector('input#name');
const inputTelElement = callFormElement.querySelector('input#tel');
const NAME_RE = /^[A-Za-zА-Яа-яЁё]{1,19}$/;
const PHONE_RE = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

const pristine = new Pristine(callFormElement, {
  // class of the parent element where the error/success class is added
  classTo: 'call-form__item',
  errorClass: 'has-danger',
  successClass: 'has-success',
  // class of the parent element where error text element is appended
  errorTextParent: 'call-form__item',
  // type of element to create for the error text
  errorTextTag: 'p',
  // class of the error text element
  errorTextClass: 'text-help',
});

const validateName = (name) => {
  if (name.length === 0) {
    return false;
  }
  return NAME_RE.test(name);
};

const validatePhone = (phone) => {
  return PHONE_RE.test(phone);
};

pristine.addValidator(inputNameElement, validateName, 'Неверный формат имени.');
pristine.addValidator(inputTelElement, validatePhone, 'Неверный формат телефона.');

callFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    formWrapperElement.classList.add('form--blocked');
    fetch("mail.php", {
      method: 'POST',
      body: new FormData(callFormElement),
    }).then((response) => {
      if (response.ok) {
        alert('Форма успешно отправлена! С вами свяжется наш менеджер.');
        callFormElement.reset();
      }
      else {
        throw new Error(`Response answered with status ${response.status}`);
      }
    }).catch((e) => {
        alert(`Ошибка отправки формы!${e}`);
      })
      .finally(() => {
        formWrapperElement.classList.remove('form--blocked');
      });
  }
});
