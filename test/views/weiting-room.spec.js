/**
* @jest-environment jsdom
*/
// import { navigateTo } from '../../src/lib/navigator.js';
import { waitForAuthLoad, userState } from '../../src/lib/firebase.js';
import waitingRoom from '../../src/views/waiting-room.js';

jest.mock('../../src/lib/firebase.js');

describe('Vista waitingRoom', () => {
  beforeEach(() => {
    // rendereza vista HTML
    document.body.innerHTML = waitingRoom.render();
    // iniciar listener de la vista
    waitingRoom.afterRender();
  });

  describe('despues del afterRender', () => {
    it('mostra en vista email del usuario', (done) => {
      const email = document.getElementById('email');
      waitForAuthLoad.mockReturnValueOnce(Promise.resolve({}));
      userState.mockReturnValueOnce({ email: 'hgsffdfsh' });
      setTimeout(() => {
        expect(email.innerHTML).toBe('hgsffdfsh');
        done();
      }, 50);
    });

    // eslint-disable-next-line max-len
    // it('al hacer click en el boton continuar, para emailVerified === true navegar al muro principal ', (done) => {
    //   const email = document.getElementById('email');

    //   waitForAuthLoad.mockReturnValueOnce(Promise.resolve({}));
    //   userState.mockReturnValueOnce({ emailVerified: true });

    //   document.getElementById('button-go').click();

    //   setTimeout(() => {
    //     expect(navigateTo).toHaveBeenCalledWith('/homeUser');

    //     done();
    //   }, 10);
    // });
  });
});
