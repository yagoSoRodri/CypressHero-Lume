describe('Funcionalidade de Login', () => {

    describe('Login com sucesso', () => {
        it('deve realizar login com usuário normal', () => {
            cy.visit('/');
            cy.contains('button', 'Login').click();
            cy.get('input[type="email"]').type('test@test.com');
            cy.get('input[type="password"]').type('test123');
            cy.contains('button', 'Sign in').click();
            cy.contains('button', 'Logout', { timeout: 10000 }).should('be.visible');
        });

        it('deve realizar login com usuário admin', () => {
            cy.visit('/');
            cy.contains('button', 'Login').click();
            cy.get('input[type="email"]').type('admin@test.com');
            cy.get('input[type="password"]').type('test123');
            cy.contains('button', 'Sign in').click();
            cy.contains('button', 'Logout', { timeout: 10000 }).should('be.visible');
            cy.contains('button', 'Create New Hero').should('be.visible');
        });

        it('deve realizar logout após login', () => {
            cy.login('test@test.com', 'test123');
            cy.visit('/');
            cy.contains('button', 'Logout').click();
            cy.contains('button', 'Login').should('be.visible');
        });
    });

    describe('Login com falha', () => {
        beforeEach(() => {
            cy.visit('/');
            cy.contains('button', 'Login').click();
        });

        it('deve exibir erro ao submeter com campos vazios', () => {
            cy.contains('button', 'Sign in').click();
            cy.contains('Email is required').should('be.visible');
            cy.contains('Password is required').should('be.visible');
        });

        it('deve exibir erro ao informar email com formato inválido', () => {
            cy.get('input[type="email"]').type('emailinvalido');
            cy.get('input[type="password"]').type('test123');
            cy.contains('button', 'Sign in').click();
            cy.contains('Email is not valid').should('be.visible');
        });

        it('deve exibir erro ao informar senha incorreta', () => {
            cy.get('input[type="email"]').type('test@test.com');
            cy.get('input[type="password"]').type('senhaerrada');
            cy.contains('button', 'Sign in').click();
            cy.contains('Invalid email or password').should('be.visible');
        });

        it('deve exibir erro ao informar email não cadastrado', () => {
            cy.get('input[type="email"]').type('inexistente@test.com');
            cy.get('input[type="password"]').type('test123');
            cy.contains('button', 'Sign in').click();
            cy.contains('Invalid email or password').should('be.visible');
        });
    });

});
