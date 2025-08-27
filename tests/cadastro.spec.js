const { test } = require('@playwright/test');
const PaginaCadastro = require('../pages/paginaCadastro');
const GeradorUsuario = require('../data/geradorUsuario');
const UsuariosFixture = require('../fixtures/usuarios');
const DataHelper = require('../utils/dataHelper');

test.describe('Cadastro de Usuário', () => {
  let paginaCadastro;
  let usuarioCriado;

  test.describe.configure({ mode: 'serial' });

  test.beforeEach(async ({ page }) => {
    paginaCadastro = new PaginaCadastro(page);
    await paginaCadastro.irParaPaginaCadastro();
  });

  test('CT01 - Deve cadastrar novo usuário com sucesso', async () => {
    const novoUsuario = GeradorUsuario.gerarUsuarioDinamico();
    usuarioCriado = novoUsuario;

    await paginaCadastro.cadastrarUsuario(novoUsuario);

    await paginaCadastro.verificarMensagemSucesso();
  });

  test('CT02 - Não deve permitir cadastro com email existente', async () => {
    if (!usuarioCriado) {
      test.skip('Teste anterior falhou - usuário não foi criado');
    }

    await paginaCadastro.cadastrarUsuario(usuarioCriado);

    await paginaCadastro.verificarMensagemEmailDuplicado();
  });

  test('CT03 - Deve cadastrar usuário com dados da fixture', async () => {
    const usuarioFixture = UsuariosFixture.obterUsuarioValido();
    usuarioFixture.email = DataHelper.gerarEmail('fixture');

    await paginaCadastro.cadastrarUsuario(usuarioFixture);

    await paginaCadastro.verificarMensagemSucesso();
  });
});