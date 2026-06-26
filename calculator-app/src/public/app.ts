const expressionInput = document.querySelector<HTMLInputElement>('#expression');
const messageElement = document.querySelector<HTMLParagraphElement>('#message');
const calculateButton = document.querySelector<HTMLButtonElement>('#calculate');
const clearButton = document.querySelector<HTMLButtonElement>('#clear');
const buttons = document.querySelectorAll<HTMLButtonElement>('.button-grid button[data-value]');

function updateDisplay(value: string) {
  if (!expressionInput) return;
  expressionInput.value = value;
}

function appendValue(value: string) {
  if (!expressionInput) return;
  expressionInput.value += value;
}

function showMessage(message: string, isError = false) {
  if (!messageElement) return;
  messageElement.textContent = message;
  messageElement.style.color = isError ? '#b91c1c' : '#2563eb';
}

async function calculate() {
  if (!expressionInput) return;

  const expression = expressionInput.value.trim();
  if (!expression) {
    showMessage('Enter a calculation first.', true);
    return;
  }

  try {
    const response = await fetch('/api/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ expression })
    });

    const payload = await response.json();

    if (!response.ok) {
      showMessage(payload.error || 'Unable to calculate expression.', true);
      return;
    }

    updateDisplay(String(payload.result));
    showMessage('Calculation complete.');
  } catch (error) {
    showMessage('Unable to contact the server.', true);
  }
}

buttons.forEach((button) => {
  button.addEventListener('click', () => appendValue(button.dataset.value ?? ''));
});

calculateButton?.addEventListener('click', () => calculate());
clearButton?.addEventListener('click', () => {
  updateDisplay('');
  showMessage('');
});

window.addEventListener('keydown', (event) => {
  const key = event.key;
  const validKeys = '0123456789.+-*/()';

  if (validKeys.includes(key)) {
    event.preventDefault();
    appendValue(key);
    showMessage('');
  }

  if (key === 'Enter') {
    event.preventDefault();
    calculate();
  }

  if (key === 'Backspace') {
    event.preventDefault();
    if (!expressionInput) return;
    expressionInput.value = expressionInput.value.slice(0, -1);
  }

  if (key.toLowerCase() === 'c') {
    event.preventDefault();
    updateDisplay('');
    showMessage('');
  }
});
