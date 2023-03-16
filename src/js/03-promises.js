import Notiflix from 'notiflix';

const refs = {
  promisesForm: document.querySelector('.form'),
  firstDelayInput: document.querySelector('[name = delay]'),
  delayStepInput: document.querySelector('[name = step] '),
  amountInput: document.querySelector('[name = amount] '),
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function promisesFormSbmt(evt) {
  evt.preventDefault();
  for (let i = 0; i < Number(refs.amountInput.value); i += 1) {
    createPromise(
      i + 1,
      Number(refs.firstDelayInput.value) + Number(refs.delayStepInput.value) * i
    )
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

refs.promisesForm.addEventListener('submit', promisesFormSbmt);
