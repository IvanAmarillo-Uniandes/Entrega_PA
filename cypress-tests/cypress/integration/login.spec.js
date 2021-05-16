import { GhostPost } from "../page-objects/ghost-post";

describe('F5', () => {

    afterEach(() => {
        cy.screenshot()
    })
    
    const ghost = new GhostPost()

    it("E01-Ingresar credenciales incorrectas", () => {
        ghost.loginIncorrecto();       
    });

    it('E02-Iniciar sesión correctamente', () => {
        ghost.login()
    })
    
    it('E03-Should have error of login failed', () => {
        ghost.loginUserOnly()
        cy.get('p.main-error').should('contain', 'Please fill')

    })
})