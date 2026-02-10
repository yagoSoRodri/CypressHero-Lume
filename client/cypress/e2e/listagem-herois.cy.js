describe('Listagem de heróis', () => {

    it('deve exibir a lista de heróis sem necessidade de login', () => {
        cy.visit('/');
        cy.getByCy('hero-card').should('have.length.greaterThan', 0);
    });

    it('deve exibir nome, price, fans e saves em cada card', () => {
        cy.visit('/');
        cy.getByCy('hero-card').first().within(() => {
            cy.getByCy('name').should('not.be.empty');
            cy.getByCy('price').should('not.be.empty');
            cy.getByCy('fans').should('not.be.empty');
            cy.getByCy('saves').should('not.be.empty');
        });
    });

    it('deve exibir os poderes do herói', () => {
        cy.visit('/');
        cy.getByCy('hero-card').first().within(() => {
            cy.getByCy('powers').should('exist');
        });
    });

    it('deve exibir a lista de heróis após login com usuário normal', () => {
        cy.login('test@test.com', 'test123');
        cy.visit('/');
        cy.getByCy('hero-card').should('have.length.greaterThan', 0);
    });

    it('deve exibir a lista de heróis após login com usuário admin', () => {
        cy.login('admin@test.com', 'test123');
        cy.visit('/');
        cy.getByCy('hero-card').should('have.length.greaterThan', 0);
    });

});
