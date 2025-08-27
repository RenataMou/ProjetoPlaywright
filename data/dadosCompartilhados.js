class DadosCompartilhados {
  static usuarioLogado = null;
  static produtosCriados = [];
  static sessaoAtual = null;

  static definirUsuario(usuario) {
    this.usuarioLogado = usuario;
  }

  static obterUsuario() {
    if (!this.usuarioLogado) {
      throw new Error('Nenhum usuário configurado. Execute primeiro o teste de login.');
    }
    return this.usuarioLogado;
  }

  static temUsuario() {
    return this.usuarioLogado !== null;
  }

  static limparUsuario() {
    this.usuarioLogado = null;
  }

  static adicionarProduto(produto) {
    this.produtosCriados.push(produto);
  }

  static obterProdutos() {
    return this.produtosCriados;
  }

  static limparProdutos() {
    this.produtosCriados = [];
  }

  static definirSessao(dadosSessao) {
    this.sessaoAtual = dadosSessao;
  }

  static obterSessao() {
    return this.sessaoAtual;
  }

  static limparTodos() {
    this.usuarioLogado = null;
    this.produtosCriados = [];
    this.sessaoAtual = null;
  }
}

module.exports = DadosCompartilhados;