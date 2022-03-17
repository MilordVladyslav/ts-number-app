import NumInfo from './types/NumInfo'

const API_URL = '/numInfo';

const numEl = document.getElementById('num') as HTMLInputElement;
const submitEl = document.getElementById('num-form') as HTMLFormElement;
const answerEl = document.getElementById('answer');

submitEl.addEventListener('submit', fetchCalculation);

async function fetchCalculation(e: Event) {
  e.preventDefault();

  const url = `${API_URL}/${numEl.value}`;

  const response = await fetch(url);
  const numInfo: NumInfo = await response.json();
  const numInfoEl = createNumInfoEl(numInfo);

  answerEl.innerHTML = '';
  answerEl.appendChild(numInfoEl);
}

function createNumInfoEl(numInfo: NumInfo): HTMLElement {
  const rootEl = document.createElement('div');

  const numDigitsEl = document.createElement('div');
  const isEvenEl = document.createElement('div');
  const isPrimeEl = document.createElement('div');

  rootEl.appendChild(numDigitsEl);
  rootEl.appendChild(isEvenEl);
  rootEl.appendChild(isPrimeEl);

  numDigitsEl.innerText = `Number of digits: ${numInfo.numDigits}`;
  isEvenEl.innerText = `Is Even: ${numInfo.isEven}`;
  isPrimeEl.innerText = `Is Prime: ${numInfo.isPrime}`;

  return rootEl;
}