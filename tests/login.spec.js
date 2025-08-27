const { test } = require('@playwright/test');
const PaginaCadastro = require('../pages/paginaCadastro');
const PaginaLogin = require('../pages/paginaLogin');
const GeradorUsuario = require('../data/geradorUsuario');
const DadosCompartilhados = require('../data/dadosCompartilhados');
const UsuariosFixture = require('../fixtures/usuarios');
const ValidationHelper = require('../utils/validationHelper');

test.describe('Validações de Login', () => {
  let paginaCadastro;
  let paginaLogin;
  let usuarioTeste;

  test.describe.configure({ mode: 'serial' });

  test.beforeEach(async ({ page }) => {
    paginaCadastro = new PaginaCadastro(page);
    paginaLogin = new PaginaLogin(page);
  });

  test('CT04 - Setup - Criar usuário para testes de login', async ({ page }) => {
    usuarioTeste = GeradorUsuario.gerarUsuarioDinamico();
    
    await paginaCadastro.irParaPaginaCadastro();
    await paginaCadastro.cadastrarUsuario(usuarioTeste);
    await paginaCadastro.verificarMensagemSucesso();
    
    DadosCompartilhados.definirUsuario(usuarioTeste);
  });

  test('CT05 - Deve realizar login com credenciais válidas', async () => {
    await paginaLogin.navegarParaLogin();
    await paginaLogin.verificarPaginaLogin();
    await paginaLogin.realizarLogin(usuarioTeste.email, usuarioTeste.senha);

    await paginaLogin.verificarLoginSucesso();
  });

  test('CT06 - Deve rejeitar email inválido', async () => {
    const credenciaisInvalidas = UsuariosFixture.obterCredenciaisLogin().invalidas;
    
    await paginaLogin.navegarParaLogin();
    await paginaLogin.verificarPaginaLogin();
    await paginaLogin.realizarLogin(credenciaisInvalidas.email, usuarioTeste.senha);

    await paginaLogin.verificarCredenciaisInvalidas();
  });

  test('CT07 - Deve rejeitar senha inválida', async () => {
    const senhaInvalida = 'senhaerrada123';
    
    await paginaLogin.navegarParaLogin();
    await paginaLogin.verificarPaginaLogin();
    await paginaLogin.realizarLogin(usuarioTeste.email, senhaInvalida);

    await paginaLogin.verificarCredenciaisInvalidas();
  });


  test('CT08 - Deve validar campo email vazio', async () => {
    await paginaLogin.navegarParaLogin();
    await paginaLogin.verificarPaginaLogin();
    await paginaLogin.realizarLogin('', usuarioTeste.senha);

    await paginaLogin.verificarEmailObrigatorio();
  });
});