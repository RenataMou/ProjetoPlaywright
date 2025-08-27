const { test } = require('@playwright/test');
const PaginaCadastro = require('../pages/paginaCadastro');
const PaginaLogin = require('../pages/paginaLogin');
const PaginaProduto = require('../pages/paginaProduto');
const GeradorUsuario = require('../data/geradorUsuario');
const GeradorProduto = require('../data/geradorProduto');
const ProdutosFixture = require('../fixtures/produtos');

test.describe('Cadastro de Produto', () => {
  let usuarioParaTestes;

  test.describe.configure({ mode: 'serial' });

  test('Setup - Criar usuário para testes de produto', async ({ page }) => {
    const paginaCadastro = new PaginaCadastro(page);
    usuarioParaTestes = GeradorUsuario.gerarUsuarioDinamico();
    
    await paginaCadastro.irParaPaginaCadastro();
    await paginaCadastro.cadastrarUsuario(usuarioParaTestes);
    await paginaCadastro.verificarMensagemSucesso();
  });

  test('Deve cadastrar produto dinamico', async ({ page }) => {
    const paginaLogin = new PaginaLogin(page);
    const paginaProduto = new PaginaProduto(page);
    const novoProduto = GeradorProduto.gerarProdutoDinamico();

    await paginaLogin.navegarParaLogin();
    await paginaLogin.verificarPaginaLogin();
    await paginaLogin.realizarLogin(usuarioParaTestes.email, usuarioParaTestes.senha);
    await paginaLogin.verificarLoginSucesso();

    await paginaProduto.acessarCadastroProduto();
    await paginaProduto.cadastrarProduto(novoProduto);
    await paginaProduto.verificarSucessoProduto();
  });

  test('Deve cadastrar smartphone premium', async ({ page }) => {
    const paginaLogin = new PaginaLogin(page);
    const paginaProduto = new PaginaProduto(page);
    
    const smartphone = {
      nome: `Smartphone Premium ${Date.now()}`,
      preco: '1899',
      descricao: 'Smartphone com 128GB',
      quantidade: '15'
    };

    await paginaLogin.navegarParaLogin();
    await paginaLogin.verificarPaginaLogin();
    await paginaLogin.realizarLogin(usuarioParaTestes.email, usuarioParaTestes.senha);
    await paginaLogin.verificarLoginSucesso();

    await paginaProduto.acessarCadastroProduto();
    await paginaProduto.cadastrarProduto(smartphone);
    await paginaProduto.verificarSucessoProduto();
  });

  test('Deve cadastrar produto de casa', async ({ page }) => {
    const paginaLogin = new PaginaLogin(page);
    const paginaProduto = new PaginaProduto(page);
  const categorias = ProdutosFixture.obterProdutosPorCategoria();
  const produtoCasa = { ...categorias.casa[0], nome: `${categorias.casa[0].nome} ${Date.now()}` };

    await paginaLogin.navegarParaLogin();
    await paginaLogin.verificarPaginaLogin();
    await paginaLogin.realizarLogin(usuarioParaTestes.email, usuarioParaTestes.senha);
    await paginaLogin.verificarLoginSucesso();

    await paginaProduto.acessarCadastroProduto();
    await paginaProduto.cadastrarProduto(produtoCasa);
    await paginaProduto.verificarSucessoProduto();
  });
});