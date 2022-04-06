/**
* @jest-environment jsdom
*/
/* eslint-disable jest/no-focused-tests */
import { navigateTo, reload } from '../../src/lib/navigator.js';
import { waitForAuthLoad, userState } from '../../src/lib/firebase.js';
import { Navbar } from '../../src/views/Navbar.js';

jest.mock('../../src/lib/firebase.js');
jest.mock('../../src/lib/navigator.js');

describe('Vista Navbar', () => {
  beforeEach(() => {
    // rendereza vista HTML
    document.body.innerHTML = Navbar.render();
  });


    it('al hacer click en el boton continuar, para emailVerified === true navegar al muro principal ', async () => {
      waitForAuthLoad.mockReturnValueOnce(Promise.resolve({}));
      userState.mockReturnValueOnce({ emailVerified: true });
      waitingRoom.afterRender();
      await waitForAuthLoad;

      document.getElementById('button-go').click();

      expect(navigateTo).toHaveBeenCalledWith('/homeUser');
    });

    it('al hacer click en el boton continuar, para emailVerified !== true recargar página ', async () => {
      waitForAuthLoad.mockReturnValueOnce(Promise.resolve({}));
      userState.mockReturnValueOnce({ emailVerified: false });
      waitingRoom.afterRender();
      await waitForAuthLoad;

      document.getElementById('button-go').click();

      expect(reload).toHaveBeenCalledTimes(1);
    });
  });
});
