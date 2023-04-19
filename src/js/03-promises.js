function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const form = document.querySelector('form');
const inputAmount = form.querySelector('[name="amount"]');
const inputDelay = form.querySelector('[name="delay"]');
const inputStep = form.querySelector('[name="step"]');

form.addEventListener('submit', event => {
  event.preventDefault();

  const amount = parseInt(inputAmount.value);
  const delay = parseInt(inputDelay.value);
  const step = parseInt(inputStep.value);

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay + (i - 1) * step)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});