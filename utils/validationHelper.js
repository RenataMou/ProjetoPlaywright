const { expect } = require('@playwright/test');

class ValidationHelper {
  static async verificarElementoVisivel(localizador, timeout = 10000) {
    await expect(localizador).toBeVisible({ timeout });
  }

  static async verificarElementoHabilitado(localizador) {
    await expect(localizador).toBeEnabled();
  }

  static async verificarTextoPresente(localizador, textoEsperado) {
    await expect(localizador).toContainText(textoEsperado);
  }

  static async verificarValorCampo(localizador, valorEsperado) {
    await expect(localizador).toHaveValue(valorEsperado);
  }

  static async verificarURL(page, urlEsperada) {
    await expect(page).toHaveURL(urlEsperada);
  }

  static async verificarTituloPagina(page, tituloEsperado) {
    await expect(page).toHaveTitle(tituloEsperado);
  }

  static async verificarElementoNaoVisivel(localizador, timeout = 5000) {
    await expect(localizador).not.toBeVisible({ timeout });
  }

  static async aguardarElementoDesaparecer(localizador, timeout = 10000) {
    await expect(localizador).toBeHidden({ timeout });
  }

  static async verificarQuantidadeElementos(localizador, quantidade) {
    await expect(localizador).toHaveCount(quantidade);
  }

  static async verificarAtributo(localizador, atributo, valor) {
    await expect(localizador).toHaveAttribute(atributo, valor);
  }
}

module.exports = ValidationHelper;