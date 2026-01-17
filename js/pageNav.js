
export async function loadContent(page, gameActor) {
  const content = document.getElementById('content');
  const path = `pages/${page}.html`;
  const response = await fetch(path);
  content.innerHTML = await response.text();
}

export function addPageEventListeners(gameActor) {
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
