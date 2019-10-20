import LoginPage from '../Page/LoginPage.spec'
import CadastroPage from '../Page/CadastroPage.spec'
import UtilsMethods from '../Utils/UtilsMethods.spec'

describe('Preencher formulario', () => {
    it('Preencher Quick Book', () => {
      const youseLogin = new LoginPage();
      const youseCadastro = new CadastroPage();
      const utils = new UtilsMethods();
      youseLogin.visitarUrl();
      youseCadastro.btnCadLogin();
      youseCadastro.btnCadCadastro();
      youseCadastro.preecherDados('Tiago Freitas de Oliveira', 'tiagofreitas94@gmail.com', 'Youse@123', 'Youse@123');
      youseCadastro.btnEnviarCadastro();
    });
  });