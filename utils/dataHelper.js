class DataHelper {
  static gerarTimestamp() {
    return Date.now();
  }

  static gerarNumeroAleatorio(min = 1, max = 1000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static gerarEmail(prefixo = 'teste') {
    const timestamp = this.gerarTimestamp();
    const random = this.gerarNumeroAleatorio();
    return `${prefixo}_${timestamp}_${random}@email.com`;
  }

  static gerarNome(prefixo = 'Usuario') {
    const timestamp = this.gerarTimestamp();
    const random = this.gerarNumeroAleatorio();
    return `${prefixo}_${timestamp}_${random}`;
  }

  static gerarPreco(min = 10, max = 1000) {
    return this.gerarNumeroAleatorio(min, max).toString();
  }

  static gerarQuantidade(min = 1, max = 50) {
    return this.gerarNumeroAleatorio(min, max).toString();
  }

  static limparString(texto) {
    return texto.trim().replace(/\s+/g, ' ');
  }

  static formatarMoeda(valor) {
    return `R$ ${parseFloat(valor).toFixed(2).replace('.', ',')}`;
  }

  static validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  static validarCampoObrigatorio(valor) {
    return valor && valor.trim().length > 0;
  }
}

module.exports = DataHelper;