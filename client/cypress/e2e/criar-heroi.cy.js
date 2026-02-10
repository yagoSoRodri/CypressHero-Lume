describe('Criar novo herói', () => {

    beforeEach(() => {
        cy.login('admin@test.com', 'test123');
        cy.visit('/heroes/new');
    });

    it('deve criar um herói com dados válidos', () => {
        const nomeHeroi = `Herói Teste ${Date.now()}`;

        cy.getByCy('nameInput').type(nomeHeroi);
        cy.getByCy('priceInput').type('50');
        cy.getByCy('fansInput').type('100');
        cy.getByCy('savesInput').type('25');
        cy.getByCy('powersSelect').select(['1']);
        cy.contains('button', 'Submit').click();

        cy.url().should('include', '/heroes');
        cy.contains(nomeHeroi).should('be.visible');
    });

    it('deve exibir erro ao submeter formulário sem preencher campos obrigatórios', () => {
        cy.contains('button', 'Submit').click();
        cy.contains('Name is required').should('be.visible');
        cy.contains('Price is required').should('be.visible');
        cy.contains('Fans is required').should('be.visible');
        cy.contains('Saves is required').should('be.visible');
        cy.contains('Powers is required').should('be.visible');
    });

    it('deve criar herói e verificar na listagem', () => {
        const nomeHeroi = `Herói Validação ${Date.now()}`;

        cy.getByCy('nameInput').type(nomeHeroi);
        cy.getByCy('priceInput').type('75');
        cy.getByCy('fansInput').type('200');
        cy.getByCy('savesInput').type('50');
        cy.getByCy('powersSelect').select(['1', '2']);
        cy.contains('button', 'Submit').click();

        cy.url().should('not.include', '/new');
        cy.getByCy('hero-card').contains(nomeHeroi).should('be.visible');
    });

});
