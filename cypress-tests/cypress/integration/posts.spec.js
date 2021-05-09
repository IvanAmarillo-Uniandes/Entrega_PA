/// <reference types="cypress-xpath" />
import { GhostPost } from "../page-objects/ghost-post";

describe('F1 - Gestionar Posts', () => {
    
    const ghost = new GhostPost()

    beforeEach(() => {
        ghost.login()
        cy.url({ timeout: 20000 }).should('contain', '/site')
        ghost.goPosts()
    })

    it('Should select lasted post and publish it', () => {
        ghost.createDraftPost()
        ghost.goPosts()
        ghost.selectLastedPost()
        ghost.publishPost()
        cy.get('div.gh-publishmenu-dropdown button.gh-publishmenu-button')
            .should('have.class', 'gh-btn-green')
    })

    it('Should edit the post title', () => {
        ghost.selectLastedPost()
        cy.get('.gh-editor-title').clear()
        cy.get('.gh-editor-title').type('The title have been edited')
        ghost.publishPost()
        cy.get('div.gh-publishmenu-dropdown button.gh-publishmenu-button')
            .should('have.class', 'gh-btn-green')
        cy.get('.gh-editor-title')
            .should('have.value', 'The title have been edited')
    })

    it('Should change the status to unpublished', () => {
        ghost.selectPublishedPost()
        ghost.changePostStatus()
        cy.get('footer.gh-publishmenu-footer button.gh-publishmenu-button')
            .should('have.class', 'gh-btn-green')
    })

    it('Should delete a post', () => {
        ghost.selectLastedPost()
        ghost.openPostSettings()
        cy.get('button.settings-menu-delete-button').click()
        cy.get('div.modal-footer button.gh-btn-red > span').contains('Delete').click()
        cy.url({ timeout: 10000 })
            .should('contain', '/posts')
    })
})