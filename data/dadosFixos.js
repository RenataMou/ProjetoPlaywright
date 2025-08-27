class DadosFixos {
  static obterUsuarioFixo() {
    return {
      nome: 'QA Tester',
      email: 'qa.tester@email.com',
      senha: 'senha123'
    };
  }

  static obterUsuariosFixos() {
    return [
      { nome: 'Admin Sistema', email: 'admin@email.com', senha: 'admin123' },
      { nome: 'Usuario Comum', email: 'usuario@email.com', senha: 'user123' },
      { nome: 'Gerente Sistema', email: 'gerente@email.com', senha: 'gerente123' }
    ];
  }

  static obterProdutosFixos() {
    return [
      { nome: 'Notebook Trabalho', preco: '2500', descricao: 'Notebook para trabalho', quantidade: '5' },
      { nome: 'Mouse Sem Fio', preco: '80', descricao: 'Mouse wireless', quantidade: '15' },
      { nome: 'Teclado Mecânico', preco: '150', descricao: 'Teclado mecânico', quantidade: '10' }
    ];
  }

  static obterConfiguracao() {
    return {
      usarMassaFixa: false,
      ambiente: 'teste',
      timeoutPadrao: 10000,
      tentativasPadrao: 3
    };
  }

  static deveUsarDadosFixos() {
    const config = this.obterConfiguracao();
    return config.usarMassaFixa && config.ambiente === 'desenvolvimento';
  }
}

module.exports = DadosFixos;