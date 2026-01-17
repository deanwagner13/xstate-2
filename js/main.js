import { createActor } from 'https://unpkg.com/xstate@5.25.1/dist/xstate.esm.js';
import { gameStateMachine } from '../statemachines/gameStateMachine.js';
import { loadContent, addPageEventListeners } from './pageNav.js';

const gameActor = createActor(gameStateMachine);

addPageEventListeners(gameActor);

gameActor.subscribe((state) => {
  loadContent(state.value, gameActor);
});

// Initial load
gameActor.start();
