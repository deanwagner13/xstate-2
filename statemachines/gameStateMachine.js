import { createMachine } from 'https://unpkg.com/xstate@5.25.1/dist/xstate.esm.js';

export const gameStateMachine = createMachine({
  id: 'game',
  initial: 'Game_Registration',
  states: {
    Game_Registration: {
      on: { REGISTER: 'Player_Invitation' },
    },
    Player_Invitation: {
      on: { INVITE: 'Player_Acceptance' },
    },
    Player_Acceptance: {
      on: { ACCEPT: 'Game_Page' },
    },
    Game_Page: {},
  },
});
