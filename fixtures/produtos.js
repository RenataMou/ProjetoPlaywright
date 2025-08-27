class ProdutosFixture {
  static obterProdutoValido() {
    return {
      nome: 'Produto Teste',
      preco: '299',
      descricao: 'Produto para testes automatizados',
      quantidade: '10'
    };
  }

  static obterProdutosPorCategoria() {
    return {
      eletronicos: [
        { nome: 'Smartphone Premium', preco: '1899', descricao: 'Smartphone com 128GB', quantidade: '15' },
        { nome: 'Notebook Gamer', preco: '3499', descricao: 'Notebook para jogos', quantidade: '5' },
        { nome: 'Tablet Android', preco: '899', descricao: 'Tablet 10 polegadas', quantidade: '20' }
      ],
      casa: [
        { nome: 'Geladeira Duplex', preco: '2299', descricao: 'Geladeira 400 litros', quantidade: '8' },
        { nome: 'Microondas Digital', preco: '459', descricao: 'Microondas 30 litros', quantidade: '12' },
        { nome: 'Smart TV 55pol', preco: '1999', descricao: 'Smart TV 4K HDR', quantidade: '6' }
      ],
      moda: [
        { nome: 'Camiseta Premium', preco: '89', descricao: 'Camiseta 100% algodão', quantidade: '50' },
        { nome: 'Calça Jeans', preco: '149', descricao: 'Calça jeans masculina', quantidade: '30' },
        { nome: 'Tênis Esportivo', preco: '299', descricao: 'Tênis para corrida', quantidade: '25' }
      ]
    };
  }

  static obterProdutosInvalidos() {
    return {
      nomeVazio: { nome: '', preco: '100', descricao: 'Produto teste', quantidade: '5' },
      precoVazio: { nome: 'Produto', preco: '', descricao: 'Produto teste', quantidade: '5' },
      precoNegativo: { nome: 'Produto', preco: '-10', descricao: 'Produto teste', quantidade: '5' },
      precoZero: { nome: 'Produto', preco: '0', descricao: 'Produto teste', quantidade: '5' },
      quantidadeVazia: { nome: 'Produto', preco: '100', descricao: 'Produto teste', quantidade: '' },
      quantidadeNegativa: { nome: 'Produto', preco: '100', descricao: 'Produto teste', quantidade: '-1' },
      quantidadeZero: { nome: 'Produto', preco: '100', descricao: 'Produto teste', quantidade: '0' },
      descricaoVazia: { nome: 'Produto', preco: '100', descricao: '', quantidade: '5' }
    };
  }

  static obterProdutosPorPreco() {
    return {
      barato: { nome: 'Produto Economico', preco: '25', descricao: 'Produto com preço baixo', quantidade: '100' },
      medio: { nome: 'Produto Intermediario', preco: '150', descricao: 'Produto preço médio', quantidade: '50' },
      caro: { nome: 'Produto Premium', preco: '999', descricao: 'Produto de alto valor', quantidade: '10' },
      luxo: { nome: 'Produto Exclusivo', preco: '2999', descricao: 'Produto de luxo', quantidade: '3' }
    };
  }

  static obterDadosEdicao() {
    return {
      nomeAtualizado: 'Produto Atualizado',
      precoAtualizado: '399',
      descricaoAtualizada: 'Descrição atualizada do produto',
      quantidadeAtualizada: '20'
    };
  }
}

module.exports = ProdutosFixture;