describe('Tyres', function () {
    it('searchs on zzzz and retuns no result message', function () {
        cy.visit('/')

        cy.get('input')
            .type('zzzzz')

        cy.get('.tyresList')
            .should('contain', 'Pas de résultat')
    })
})