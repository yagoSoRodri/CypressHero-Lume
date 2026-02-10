describe('Controle de permissão (UI)', () => {

    describe('sem login', () => {

        beforeEach(() => {
            cy.visit('/');
        });

        it('não deve exibir botão Create New Hero', () => {
            cy.contains('button', 'Create New Hero').should('not.exist');
        });

        it('não deve exibir botões de editar e excluir nos cards', () => {
            cy.getByCy('hero-card').first().within(() => {
                cy.get('[data-cy="pencil"]').should('not.exist');
                cy.get('[data-cy="trash"]').should('not.exist');
            });
        });

        it('deve exibir alerta ao tentar curtir sem login', () => {
            cy.getByCy('hero-card').first().find('[data-cy="like"]').click();
            cy.contains('You must log in to like.').should('be.visible');
            cy.contains('button', 'Ok').click();
        });

        it('deve exibir alerta ao tentar contratar sem login', () => {
            cy.getByCy('hero-card').first().find('[data-cy="money"]').click();
            cy.contains('You must log in to hire this hero.').should('be.visible');
            cy.contains('button', 'Ok').click();
        });

    });

    describe('usuário normal', () => {

        beforeEach(() => {
            cy.login('test@test.com', 'test123');
            cy.visit('/');
        });

        it('não deve exibir botão Create New Hero', () => {
            cy.contains('button', 'Create New Hero').should('not.exist');
        });

        it('não deve exibir botões de editar e excluir nos cards', () => {
            cy.getByCy('hero-card').first().within(() => {
                cy.get('[data-cy="pencil"]').should('not.exist');
                cy.get('[data-cy="trash"]').should('not.exist');
            });
        });

        it('deve permitir curtir um herói', () => {
            cy.getByCy('hero-card').first().within(() => {
                cy.getByCy('fans').invoke('text').then((antes) => {
                    cy.get('[data-cy="like"]').click();
                    cy.getByCy('fans').should('have.text', String(Number(antes) + 1));
                });
            });
        });

        it('deve permitir contratar um herói', () => {
            cy.getByCy('hero-card').first().within(() => {
                cy.getByCy('saves').invoke('text').then((antes) => {
                    cy.get('[data-cy="money"]').click();
                    cy.root().closest('body').find('button').contains('Yes').click();
                    cy.getByCy('saves').should('have.text', String(Number(antes) + 1));
                });
            });
        });

        it('não deve acessar página de criação de herói', () => {
            cy.visit('/heroes/new');
            cy.contains('button', 'Create New Hero').should('not.exist');
        });

    });

    describe('usuário admin', () => {

        beforeEach(() => {
            cy.login('admin@test.com', 'test123');
            cy.visit('/');
        });

        it('deve exibir botão Create New Hero', () => {
            cy.contains('button', 'Create New Hero').should('be.visible');
        });

        it('deve exibir botões de editar e excluir nos cards', () => {
            cy.getByCy('hero-card').first().within(() => {
                cy.get('[data-cy="pencil"]').should('be.visible');
                cy.get('[data-cy="trash"]').should('be.visible');
            });
        });

        it('deve permitir curtir um herói', () => {
            cy.getByCy('hero-card').first().within(() => {
                cy.getByCy('fans').invoke('text').then((antes) => {
                    cy.get('[data-cy="like"]').click();
                    cy.getByCy('fans').should('have.text', String(Number(antes) + 1));
                });
            });
        });

        it('deve redirecionar ao clicar em editar', () => {
            cy.getByCy('hero-card').first().find('[data-cy="pencil"]').click();
            cy.url().should('include', '/edit');
        });

        it('deve exibir modal de confirmação ao clicar em excluir', () => {
            cy.getByCy('hero-card').first().find('[data-cy="trash"]').click();
            cy.contains('Delete Hero?').should('be.visible');
            cy.contains('button', 'No').click();
        });

    });

});
