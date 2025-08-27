class TestHelper {
  static async aguardar(milissegundos) {
    await new Promise(resolve => setTimeout(resolve, milissegundos));
  }

  static obterDataAtual() {
    return new Date().toISOString().split('T')[0];
  }

  static obterHoraAtual() {
    return new Date().toTimeString().split(' ')[0];
  }

  static gerarStringAleatoria(tamanho = 8) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let resultado = '';
    for (let i = 0; i < tamanho; i++) {
      resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return resultado;
  }

  static criarLog(nivel, mensagem) {
    const timestamp = new Date().toISOString();
    const log = {
      timestamp,
      nivel,
      mensagem
    };
    return log;
  }

  static async capturarScreenshot(page, nome) {
    const timestamp = Date.now();
    const nomeArquivo = `${nome}_${timestamp}.png`;
    await page.screenshot({ path: `screenshots/${nomeArquivo}`, fullPage: true });
    return nomeArquivo;
  }

  static async executarComTentativas(funcao, tentativas = 3, intervalo = 1000) {
    for (let i = 0; i < tentativas; i++) {
      try {
        return await funcao();
      } catch (erro) {
        if (i === tentativas - 1) throw erro;
        await this.aguardar(intervalo);
      }
    }
  }

  static validarDadosObrigatorios(dados, camposObrigatorios) {
    const camposFaltantes = [];
    
    camposObrigatorios.forEach(campo => {
      if (!dados[campo] || dados[campo].toString().trim() === '') {
        camposFaltantes.push(campo);
      }
    });

    if (camposFaltantes.length > 0) {
      throw new Error(`Campos obrigatórios não preenchidos: ${camposFaltantes.join(', ')}`);
    }
  }
}

module.exports = TestHelper;