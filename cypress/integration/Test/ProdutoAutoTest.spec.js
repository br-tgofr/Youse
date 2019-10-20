import LoginPage from '../Page/LoginPage.spec'
import UtilsMethods from '../Utils/UtilsMethods.spec'
import ProdutoAutoPage from '../Page/ProdutoAutoPage.spec'

describe('Visitar - Youse Seguros', () => {
  it('Acessa area de seguros Auto', () => {
    const youseLogin = new LoginPage();
    const utils = new UtilsMethods();
    const produtoAuto = new ProdutoAutoPage();
    youseLogin.visitarUrl();
    produtoAuto.prodSeguroAuto();
    produtoAuto.dadosCotacao('Tiago Freitas', 'tiago1@gmail.com', '11 999999999');
    produtoAuto.btnCotContinuar();
    produtoAuto.dadosCarro('DMO-3016', 'nome de pessoa física');
    produtoAuto.dadosLocalizacao('02994070', '13', 'rua sem saida');
    produtoAuto.dadosSeguradora('42921067897');
    produtoAuto.btnSegContinuar();
    utils.validarTexto('Escolha as coberturas iniciais, e continue')
    utils.validarTexto('personalizando seu seguro')
    produtoAuto.cobertAssistMenor();
  });
});