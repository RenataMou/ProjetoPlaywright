const PaginaBase = require('./paginaBase');

class PaginaProduto extends PaginaBase {
  constructor(page) {
    super(page);
    this._inicializarSeletores();
  }

  _inicializarSeletores() {
    this.tituloPagina = this.page.getByRole('heading', { name: 'Cadastrar Produtos' });
    this.botaoCadastrarProdutos = this.page.getByTestId('cadastrarProdutos');
    this.campoNome = this.page.getByTestId('nome');
    this.campoPreco = this.page.getByTestId('preco');
    this.campoDescricao = this.page.getByTestId('descricao');
    this.campoQuantidade = this.page.getByTestId('quantity');
    this.campoImagem = this.page.getByTestId('imagem');
    this.botaoSubmeter = this.page.getByTestId('cadastarProdutos');
    
    // Elementos da página de sucesso/lista
    this.tituloListaProdutos = this.page.getByRole('heading', { name: 'Lista dos Produtos' });
    this.tabelaProdutos = this.page.getByRole('table');
  }

  async verificarPaginaProdutos() {
    await this.aguardarElementos([this.tituloPagina, this.botaoCadastrarProdutos]);
  }

  async navegarParaFormularioProduto() {
    await this.clicarElemento(this.botaoCadastrarProdutos);
    await this.verificarFormularioProduto();
  }

  async verificarFormularioProduto() {
    await this.aguardarElementos([
      this.campoNome,
      this.campoPreco,
      this.campoDescricao,
      this.campoQuantidade,
      this.botaoSubmeter
    ]);
  }

  async preencherFormularioProduto(dadosProduto) {
    await this.preencherCampo(this.campoNome, dadosProduto.nome);
    await this.preencherCampo(this.campoPreco, dadosProduto.preco);
    await this.preencherCampo(this.campoDescricao, dadosProduto.descricao);
    await this.preencherCampo(this.campoQuantidade, dadosProduto.quantidade);
  }

  async submeterProduto() {
    await this.botaoSubmeter.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(1000);

    try {
      await this.clicarElemento(this.botaoSubmeter);
    } catch (error) {
      await this.botaoSubmeter.click({ force: true });
    }
    // Aguarda o heading da lista de produtos aparecer
    await this.page.waitForSelector('h1:has-text("Lista dos Produtos")', { timeout: 15000 });
  }

  async cadastrarProduto(dadosProduto) {
    await this.preencherFormularioProduto(dadosProduto);
    await this.submeterProduto();
    await this.verificarSucessoProduto();
  }

  

  async verificarSucessoProduto() {
    await this.verificarTexto(this.tituloListaProdutos, 15000);
    await this.aguardarElemento(this.tabelaProdutos);
  }

  async verificarProdutoNaLista(nomeProduto) {
    const produtoNaTabela = this.page.getByText(nomeProduto);
    await this.verificarTexto(produtoNaTabela);
  }

  async acessarCadastroProduto() {
    await this.verificarPaginaProdutos();
    await this.navegarParaFormularioProduto();
  }

  async verificarProdutoNaLista(nomeProduto) {
    const produtoNaTabela = this.page.getByText(nomeProduto);
    await this.verificarTexto(produtoNaTabela);
  }

  async acessarCadastroProduto() {
    await this.verificarPaginaProdutos();
    await this.navegarParaFormularioProduto();
  }
}

module.exports = PaginaProduto;