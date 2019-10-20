import LoginPage from '../Page/LoginPage.spec'
import UtilsMethods from '../Utils/UtilsMethods.spec'
import ProdutosVidaPage from '../Page/ProdutoVidaPage.spec'

describe('Visitar - Youse Seguros', () => {
    it('Acessa area de seguros Vida', () => {
      const youseLogin = new LoginPage();
      const utils = new UtilsMethods();
      const produtoVida = new ProdutosVidaPage();
      youseLogin.visitarUrl();
      produtoVida.prodSeguroVida();
    });
  });