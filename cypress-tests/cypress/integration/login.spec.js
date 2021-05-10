import { GhostPost } from "../page-objects/ghost-post";

describe('F5 - Gestor de Log In', () => {
    
    const ghost = new GhostPost()

    it("Entering wrong credentials", () => {
        ghost.loginIncorrecto();       
    });

    it('Should login successfuly', () => {
        ghost.login()
    })
    
    it('Should have error of login failed', () => {
        ghost.loginUserOnly()
        cy.get('p.main-error').should('contain', 'Please fill')

    })
})