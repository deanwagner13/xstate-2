import { createActor } from 'https://unpkg.com/xstate@5.25.1/dist/xstate.esm.js';
import { gameStateMachine } from '../statemachines/gameStateMachine.js';

const content = document.getElementById('content');

const gameActor = createActor(gameStateMachine);

gameActor.subscribe((state) => {
  loadContent(state.value);
});

async function loadContent(page) {
  const path = `pages/${page}.html`;
  const response = await fetch(path);
  content.innerHTML = await response.text();
  addEventListeners();
}

function addEventListeners() {
  const registerButton = document.querySelector('#register-button');
  if (registerButton) {
    registerButton.addEventListener('click', () => {
      gameActor.send({ type: 'REGISTER' });
    });
  }

  const inviteButton = document.querySelector('#invite-button');
  if (inviteButton) {
    inviteButton.addEventListener('click', () => {
      gameActor.send({ type: 'INVITE' });
    });
  }

  const acceptButton = document.querySelector('#accept-button');
  if (acceptButton) {
    acceptButton.addEventListener('click', () => {
      gameActor.send({ type: 'ACCEPT' });
    });
  }
}

// Initial load
gameActor.start();
