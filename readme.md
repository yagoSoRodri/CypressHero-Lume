# 🦸 Cypress Heroes — Automação E2E Profissional

![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![React](https://img.shields.io/badge/-React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Status](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge)

Este repositório contém um projeto de automação de testes End-to-End (E2E) robusto e profissional, desenvolvido para a aplicação **Cypress Heroes**.

A aplicação é um sistema completo com Frontend em **React** e Backend em **NestJS**, permitindo a gestão, contratação e "curtida" de heróis. O foco deste projeto foi garantir a qualidade do software através de uma suíte de testes automatizados que cobre os fluxos críticos da aplicação.

---

## 🚀 Tecnologias Utilizadas

- **Cypress**: Framework de automação de testes E2E.
- **JavaScript**: Linguagem utilizada para a escrita dos scripts de teste.
- **Node.js**: Ambiente de execução.
- **Prisma**: ORM utilizado para gestão do banco de dados nos testes.

---

## 🧪 Cobertura de Testes

A suíte de testes foi desenhada para cobrir cenários positivos e negativos, validando tanto a interface (UI) quanto a integração com a API.

| Arquivo de Teste | Descrição da Cobertura |
| :--- | :--- |
| `login.cy.js` | ✅ Login com sucesso (Usuário e Admin)<br>✅ Logout<br>❌ Validação de campos obrigatórios<br>❌ Bloqueio de e-mail inválido e senha incorreta |
| `listagem-herois.cy.js` | ✅ Exibição correta dos cards de heróis<br>✅ Validação de dados (Nome, Preço, Fãs, Saves)<br>✅ Listagem para usuários logados e não logados |
| `criar-heroi.cy.js` | ✅ Criação de novo herói (Fluxo Admin)<br>✅ Validação de persistência na listagem<br>❌ Bloqueio de submissão com formulário incompleto |
| `controle-permissao.cy.js` | ✅ Validação de Regras de Negócio (RBA)<br>✅ Admin: Acesso total (Criar, Editar, Excluir)<br>✅ Usuário: Apenas interagir (Curtir, Contratar)<br>✅ Visitante: Bloqueio de ações restritas (Redirecionamento para Login) |

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- Node.js instalado (v16 ou superior)

### 1. Instalação e Configuração
Clone o repositório e instale as dependências:

```bash
# Instalar dependências
npm install

# Configurar banco de dados e seeds
npm run setup
```

### 2. Rodar a Aplicação
Inicie o Frontend e o Backend simultaneamente:

```bash
npm run dev
```
> A aplicação estará disponível em: [http://localhost:3000](http://localhost:3000)

### 3. Executar os Testes (Cypress)
Mantenha o terminal do passo anterior aberto e, em um **novo terminal**, execute:

```bash
cd client
npx cypress open
```

---

## 📋 Documentação QA

Além da automação, este projeto conta com uma documentação completa de QA, incluindo:
- **Plano de Testes**
- **Casos de Teste** detalhados
- **Relatório de Bugs** encontrados durante a exploração
- **Sugestões de Melhoria** para o produto

📄 [Acesse a Documentação QA aqui](client/cypress/documentacao-qa.md)

---

Developed with 💜 by **QA Engineer**
