import LoginPage from '../Page/LoginPage.spec'
import UtilsMethods from '../Utils/UtilsMethods.spec'
import ProdutoResidencialPage from '../Page/ProdutoResidencialPage.spec'

describe('Visitar - Youse Seguros', () => {
  it('Acessa area de seguros Residencial', () => {
    const youseLogin = new LoginPage();
    const utils = new UtilsMethods();
    const produtoResidencial = new ProdutoResidencialPage();
    youseLogin.visitarUrl();
    produtoResidencial.prodSeguroResidencial();
    produtoResidencial.enderecoCep('02994070');
    produtoResidencial.dadosEndereco('13', 'rua sem saida');
    produtoResidencial.btnEnderecoPronto();
    produtoResidencial.residenciaTipo();
    produtoResidencial.btnCriarSeguro();
    produtoResidencial.coberturaAssistencia();
  });
});