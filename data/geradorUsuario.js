const DataHelper = require('../utils/dataHelper');

class GeradorUsuario {
  static gerarUsuarioDinamico() {
    const timestamp = DataHelper.gerarTimestamp();
    const random = DataHelper.gerarNumeroAleatorio();
    
    return {
      nome: DataHelper.gerarNome('Usuario'),
      email: DataHelper.gerarEmail('teste'),
      senha: 'senha123456'
    };
  }

  static gerarUsuarioPersonalizado(prefixo = 'Usuario') {
    const timestamp = DataHelper.gerarTimestamp();
    const random = DataHelper.gerarNumeroAleatorio();
    
    return {
      nome: `${prefixo}_${timestamp}_${random}`,
      email: `${prefixo.toLowerCase()}_${timestamp}_${random}@email.com`,
      senha: 'senha123456'
    };
  }

  static gerarUsuariosInvalidos() {
    return {
      nomeVazio: { nome: '', email: DataHelper.gerarEmail(), senha: 'senha123' },
      emailVazio: { nome: 'Usuario Teste', email: '', senha: 'senha123' },
      senhaVazia: { nome: 'Usuario Teste', email: DataHelper.gerarEmail(), senha: '' },
      emailInvalido: { nome: 'Usuario Teste', email: 'email-invalido', senha: 'senha123' }
    };
  }

  static gerarCredenciaisLogin() {
    const usuario = this.gerarUsuarioDinamico();
    return {
      email: usuario.email,
      senha: usuario.senha
    };
  }
}

module.exports = GeradorUsuario;