const PaginaBase = require('./paginaBase');

class PaginaLogin extends PaginaBase {
  constructor(page) {
    super(page);
    this._inicializarSeletores();
  }

  _inicializarSeletores() {
    this.tituloLogin = this.page.getByRole('heading', { name: 'Login' });
    this.campoEmail = this.page.getByTestId('email');
    this.campoSenha = this.page.getByTestId('senha');
    this.botaoEntrar = this.page.getByTestId('entrar');
    this.linkCadastro = this.page.getByTestId('cadastrar');
    
    // Mensagem real encontrada no debug
    this.mensagemBoasVindas = this.page.locator('h1').filter({ hasText: /Bem Vindo/ });
    this.mensagemCredenciaisInvalidas = this.page.getByText('Email e/ou senha inválidos');
    this.mensagemEmailObrigatorio = this.page.getByText('Email é obrigatório');
    this.mensagemSenhaObrigatoria = this.page.getByText('Password é obrigatório');
  }

  async navegarParaLogin() {
    await this.navegar('/login');
  }

  async verificarPaginaLogin() {
    await this.aguardarElementos([
      this.tituloLogin, 
      this.campoEmail, 
      this.campoSenha, 
      this.botaoEntrar
    ]);
  }

  async preencherCredenciais(email, senha) {
    await this.preencherCampo(this.campoEmail, email);
    await this.preencherCampo(this.campoSenha, senha);
  }

  async submeterLogin() {
    await this.clicarElemento(this.botaoEntrar);
  }

  async realizarLogin(email, senha) {
    await this.preencherCredenciais(email, senha);
    await this.submeterLogin();
  }

  async verificarLoginSucesso() {
    try {
      await this.verificarTexto(this.mensagemBoasVindas, 15000);
    } catch (error) {
      const currentUrl = await this.page.url();
      throw new Error(`Login não foi bem-sucedido. URL atual: ${currentUrl}. Erro: ${error.message}`);
    }
  }

  async verificarCredenciaisInvalidas() {
    await this.verificarTexto(this.mensagemCredenciaisInvalidas);
  }

  async verificarEmailObrigatorio() {
    await this.verificarTexto(this.mensagemEmailObrigatorio);
  }

  async verificarSenhaObrigatoria() {
    await this.verificarTexto(this.mensagemSenhaObrigatoria);
  }

  async verificarCamposObrigatorios() {
    try {
      const emailVisivel = await this.mensagemEmailObrigatorio.isVisible({ timeout: 2000 });
      const senhaVisivel = await this.mensagemSenhaObrigatoria.isVisible({ timeout: 2000 });
      
      if (!emailVisivel && !senhaVisivel) {
        await this.page.waitForTimeout(1000);
        const emailVisivel2 = await this.mensagemEmailObrigatorio.isVisible();
        const senhaVisivel2 = await this.mensagemSenhaObrigatoria.isVisible();
        
        if (!emailVisivel2 && !senhaVisivel2) {
          throw new Error('Mensagem de campo obrigatório não encontrada');
        }
      }
    } catch (error) {
      throw new Error('Falha na validação de campos obrigatórios: ' + error.message);
    }
  }
}

module.exports = PaginaLogin;