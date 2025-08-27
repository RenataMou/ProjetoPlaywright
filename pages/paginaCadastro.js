const PaginaBase = require('./paginaBase');

class PaginaCadastro extends PaginaBase {
  constructor(page) {
    super(page);
    this._inicializarSeletores();
  }

  _inicializarSeletores() {
    this.tituloLogin = this.page.getByRole('heading', { name: 'Login' });
    this.linkCadastro = this.page.getByTestId('cadastrar');
    this.tituloCadastro = this.page.getByRole('heading', { name: 'Cadastro' });
    this.campoNome = this.page.getByTestId('nome');
    this.campoEmail = this.page.getByTestId('email');
    this.campoSenha = this.page.getByTestId('password');
    this.checkboxAdmin = this.page.getByTestId('checkbox');
    this.botaoCadastrar = this.page.getByTestId('cadastrar');
    this.mensagemSucesso = this.page.getByRole('link', { name: 'Cadastro realizado com sucesso' });
    this.mensagemEmailDuplicado = this.page.getByText('Este email já está sendo usado');
  }

  async navegarParaLogin() {
    await this.navegar('/login');
  }

  async verificarPaginaLogin() {
    await this.aguardarElementos([this.tituloLogin, this.linkCadastro]);
  }

  async navegarParaCadastro() {
    await this.clicarElemento(this.linkCadastro);
    await this.aguardarElemento(this.tituloCadastro);
  }

  async preencherFormularioUsuario(dadosUsuario) {
    await this.preencherCampo(this.campoNome, dadosUsuario.nome);
    await this.preencherCampo(this.campoEmail, dadosUsuario.email);
    await this.preencherCampo(this.campoSenha, dadosUsuario.senha);
  }

  async selecionarPerfilAdmin() {
    await this.marcarCheckbox(this.checkboxAdmin);
  }

  async submeterFormulario() {
    await this.clicarElemento(this.botaoCadastrar);
  }

  async cadastrarUsuario(dadosUsuario) {
    await this.preencherFormularioUsuario(dadosUsuario);
    await this.selecionarPerfilAdmin();
    await this.submeterFormulario();
  }

  async verificarMensagemSucesso() {
    await this.verificarTexto(this.mensagemSucesso);
  }

  async verificarMensagemEmailDuplicado() {
    await this.verificarTexto(this.mensagemEmailDuplicado);
  }

  async irParaPaginaCadastro() {
    await this.navegarParaLogin();
    await this.verificarPaginaLogin();
    await this.navegarParaCadastro();
  }
}

module.exports = PaginaCadastro;