const DataHelper = require('../utils/dataHelper');

class GeradorProduto {
  static gerarProdutoDinamico() {
    const timestamp = DataHelper.gerarTimestamp();
    const random = DataHelper.gerarNumeroAleatorio();
    
    return {
      nome: DataHelper.gerarNome('Produto'),
      preco: DataHelper.gerarPreco(10, 1000),
      descricao: `Descricao_produto_${timestamp}_${random}`,
      quantidade: DataHelper.gerarQuantidade(1, 50)
    };
  }

  static gerarProdutoPersonalizado(nome, preco, descricao, quantidade) {
    const timestamp = DataHelper.gerarTimestamp();
    const random = DataHelper.gerarNumeroAleatorio();
    
    return {
      nome: nome || DataHelper.gerarNome('Produto'),
      preco: preco || DataHelper.gerarPreco(),
      descricao: descricao || `Descricao_${timestamp}_${random}`,
      quantidade: quantidade || DataHelper.gerarQuantidade()
    };
  }

  static gerarProdutosPorFaixaPreco() {
    return {
      barato: this.gerarProdutoPersonalizado(null, DataHelper.gerarPreco(1, 50)),
      medio: this.gerarProdutoPersonalizado(null, DataHelper.gerarPreco(51, 200)),
      caro: this.gerarProdutoPersonalizado(null, DataHelper.gerarPreco(201, 1000)),
      premium: this.gerarProdutoPersonalizado(null, DataHelper.gerarPreco(1001, 5000))
    };
  }

  static gerarProdutosInvalidos() {
    return {
      nomeVazio: { nome: '', preco: '100', descricao: 'Produto teste', quantidade: '5' },
      precoVazio: { nome: 'Produto', preco: '', descricao: 'Produto teste', quantidade: '5' },
      precoNegativo: { nome: 'Produto', preco: '-10', descricao: 'Produto teste', quantidade: '5' },
      quantidadeZero: { nome: 'Produto', preco: '100', descricao: 'Produto teste', quantidade: '0' }
    };
  }
}

module.exports = GeradorProduto;