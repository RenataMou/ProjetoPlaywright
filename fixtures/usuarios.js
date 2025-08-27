class UsuariosFixture {
  static obterUsuarioValido() {
    return {
      nome: 'Usuario Teste',
      email: 'usuario.teste@email.com',
      senha: 'senha123456'
    };
  }

  static obterUsuariosMultiplos() {
    return [
      { nome: 'Admin Sistema', email: 'admin@teste.com', senha: 'admin123' },
      { nome: 'Usuario Comum', email: 'usuario@teste.com', senha: 'user123' },
      { nome: 'Gerente Loja', email: 'gerente@teste.com', senha: 'gerente123' }
    ];
  }

  static obterUsuariosInvalidos() {
    return {
      nomeVazio: { nome: '', email: 'teste@email.com', senha: 'senha123' },
      emailVazio: { nome: 'Teste Usuario', email: '', senha: 'senha123' },
      senhaVazia: { nome: 'Teste Usuario', email: 'teste@email.com', senha: '' },
      emailInvalido: { nome: 'Teste Usuario', email: 'email-invalido', senha: 'senha123' },
      senhaFraca: { nome: 'Teste Usuario', email: 'teste@email.com', senha: '123' },
      nomeCurto: { nome: 'A', email: 'teste@email.com', senha: 'senha123' }
    };
  }

  static obterCredenciaisLogin() {
    return {
      validas: {
        email: 'admin@teste.com',
        senha: 'admin123'
      },
      invalidas: {
        email: 'inexistente@email.com',
        senha: 'senhaerrada'
      },
      vazias: {
        email: '',
        senha: ''
      }
    };
  }

  static obterDadosEdicao() {
    return {
      nomeAtualizado: 'Usuario Atualizado',
      emailAtualizado: 'atualizado@email.com',
      senhaAtualizada: 'novasenha123'
    };
  }
}

module.exports = UsuariosFixture;