import LoginPage from '../Page/LoginPage.spec'
import UtilsMethods from '../Utils/UtilsMethods.spec'

describe('Visitar - Youse Seguros', () => {
  it('Login valido', () => {
    const youseLogin = new LoginPage();
    const utils = new UtilsMethods();
    youseLogin.visitarUrl();
    youseLogin.btnLogin();
    youseLogin.preencherEmail('tiagofreitas94@gmail.com');
    youseLogin.btnProximoPasso();
    youseLogin.preencherSenha('Youse@123');
    youseLogin.btnEntrar();
    utils.validarTexto('Login efetuado com sucesso');
  });
});

describe('Visitar - Youse Seguros', () => {
  it('Login invalido', () => {
    const youseLogin = new LoginPage();
    const utils = new UtilsMethods();
    youseLogin.visitarUrl();
    youseLogin.btnLogin();
    youseLogin.preencherEmail('tiagofreitas94@gmail.com');
    youseLogin.btnProximoPasso();
    youseLogin.preencherSenha('xpto');
    youseLogin.btnEntrar();
    utils.validarTexto('Email ou senha inválidos')
  });
});

