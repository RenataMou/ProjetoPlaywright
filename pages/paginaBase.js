const { expect } = require('@playwright/test');

class PaginaBase {
  constructor(page) {
    this.page = page;
    this.urlBase = 'https://front.serverest.dev';
  }

  async navegar(caminho = '') {
    await this.page.goto(`${this.urlBase}${caminho}`);
  }

  async aguardarElemento(localizador, timeout = 10000) {
    await expect(localizador).toBeVisible({ timeout });
  }

  async aguardarElementos(localizadores, timeout = 10000) {
    for (const localizador of localizadores) {
      await expect(localizador).toBeVisible({ timeout });
    }
  }

  async clicarElemento(localizador) {
    await expect(localizador).toBeEnabled();
    await localizador.click();
  }

  async preencherCampo(localizador, valor) {
    if (valor) {
      await localizador.fill(valor);
    }
  }

  async marcarCheckbox(localizador) {
    await localizador.check();
  }

  async verificarTexto(localizador, timeout = 5000) {
    await expect(localizador).toBeVisible({ timeout });
  }
}

module.exports = PaginaBase;