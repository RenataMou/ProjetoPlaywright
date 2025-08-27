class ConfiguracaoFixture {
  static obterConfiguracao() {
    return {
      ambiente: {
        desenvolvimento: 'https://front.serverest.dev',
        teste: 'https://test.serverest.dev',
        producao: 'https://serverest.dev'
      },
      timeouts: {
        elemento: 10000,
        navegacao: 30000,
        api: 5000
      },
      tentativas: {
        padrão: 3,
        login: 5,
        cadastro: 2
      }
    };
  }

  static obterMensagens() {
    return {
      sucesso: {
        cadastro: 'Cadastro realizado com sucesso',
        login: 'Bem Vindo',
        produto: 'Produto cadastrado com sucesso',
        edicao: 'Registro alterado com sucesso',
        exclusao: 'Registro excluído com sucesso'
      },
      erro: {
        emailDuplicado: 'Este email já está sendo usado',
        credenciaisInvalidas: 'Email e/ou senha inválidos',
        emailObrigatorio: 'Email é obrigatório',
        senhaObrigatoria: 'Password é obrigatório',
        nomeObrigatorio: 'Nome é obrigatório',
        precoObrigatorio: 'Preco é obrigatório'
      }
    };
  }

  static obterNavegacao() {
    return {
      rotas: {
        login: '/login',
        cadastro: '/cadastro',
        produtos: '/admin/listarprodutos',
        usuarios: '/admin/listarusuarios',
        home: '/admin/home'
      },
      titulos: {
        login: 'Login - Serverest',
        cadastro: 'Cadastro - Serverest',
        produtos: 'Produtos - Serverest',
        home: 'Home - Serverest'
      }
    };
  }

  static obterFormatos() {
    return {
      data: 'DD/MM/YYYY',
      hora: 'HH:mm:ss',
      moeda: 'R$ #.##0,00',
      decimal: '#.##0,00'
    };
  }
}

module.exports = ConfiguracaoFixture;