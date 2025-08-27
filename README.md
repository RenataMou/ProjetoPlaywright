# Projeto Base - Automação com Playwright

Este é um projeto base simples para praticar automação de testes com Playwright e JavaScript, usando o site [Serverest](https://front.serverest.dev/) como aplicação de teste.

## Objetivo

Demonstrar como iniciar um projeto inicial em automação de testes, implementando:
- Padrão Page Object Model (POM)
- Estrutura Arrange-Act-Assert (AAA)
- Organização de código
- Boas práticas de automação

## Estrutura do Projeto

```
projeto-automacao/
├── tests/
│   ├── pages/           # Page Objects
│   │   ├── paginaBase.js
│   │   ├── paginaCadastro.js
│   │   ├── paginaLogin.js
│   │   └── paginaProduto.js
│   ├── specs/           # Arquivos de teste
│   │   ├── cadastro.spec.js
│   │   ├── login.spec.js
│   │   └── produto.spec.js
│   ├── data/            # Geradores de dados
│   │   ├── geradorUsuario.js
│   │   ├── geradorProduto.js
│   │   ├── dadosFixos.js
│   │   └── dadosCompartilhados.js
│   ├── fixtures/        # Dados estáticos
│   │   ├── usuarios.js
│   │   ├── produtos.js
│   │   └── configuracao.js
│   └── utils/           # Funções auxiliares
│       ├── dataHelper.js
│       ├── validationHelper.js
│       └── testHelper.js
├── playwright.config.js
└── package.json
```

## Funcionalidades Testadas

### Cadastro de Usuários
- Cadastro de novo usuário
- Validação de email duplicado
- Testes com dados dinâmicos

### Login
- Login com credenciais válidas
- Validação de credenciais inválidas
- Verificação de campos obrigatórios

### Cadastro de Produtos
- Cadastro de produto após login
- Testes com diferentes categorias
- Validação de redirecionamento

## Requisitos

- Node.js 18+
- Playwright

## Instalação

```bash
# Clonar o projeto
git clone [url-do-projeto]

# Instalar dependências
npm install

# Instalar navegadores do Playwright
npx playwright install
```

## Executar Testes

```bash
# Executar todos os testes
npx playwright test

# Executar com interface gráfica
npx playwright test --headed

# Executar teste específico
npx playwright test cadastro.spec.js

# Ver relatório
npx playwright show-report
```

## Conceitos Aplicados

### Page Object Model (POM)
Cada página da aplicação tem uma classe correspondente que encapsula os elementos e ações da página.

### Arrange-Act-Assert (AAA)
Todos os testes seguem a estrutura:
- **Arrange**: Preparar dados e estado inicial
- **Act**: Executar a ação a ser testada
- **Assert**: Verificar o resultado esperado

### Geração de Dados Dinâmicos
Sistema de geração automática de dados únicos para evitar conflitos entre execuções.

### Reutilização de Código
Classe base compartilhada e utilitários para reduzir duplicação.

## Limitações

Este é um projeto básico focado em demonstrar conceitos fundamentais. Não inclui:
- Testes de API
- Integração com CI/CD
- Relatórios avançados
- Testes paralelos em larga escala
- Configurações multi-ambiente complexas

## Aplicação Testada

**Serverest**: https://front.serverest.dev/
- Sistema de e-commerce educacional
- Cadastro de usuários e produtos
- Interface simples para testes de automação

## Observações

Este projeto serve como base para estudos e práticas de automação. É recomendado expandir e adaptar conforme necessidades específicas de cada contexto profissional.
