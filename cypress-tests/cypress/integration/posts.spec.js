/// <reference types="cypress-xpath" />
import { GhostPost } from "../page-objects/ghost-post";

describe('Posts', () => {
    
    const ghost = new GhostPost()

    beforeEach(() => {
        ghost.login()
        cy.url({ timeout: 20000 }).should('contain', '/site')
        ghost.goPosts()
    })

    it('Should select lasted post and publish it', () => {
        ghost.createDraftPost()
        ghost.goPosts()
        ghost.selectPost()
        ghost.publishPost()
        cy.get('div.gh-publishmenu-dropdown button.gh-publishmenu-button')
            .should('have.class', 'gh-btn-green')
    })

    it('Should edit a published post', () => {
        ghost.selectPost()
        cy.get('.gh-editor-title').clear()
        cy.get('.gh-editor-title').type('The title have been edited')
        ghost.publishPost()
        cy.get('div.gh-publishmenu-dropdown button.gh-publishmenu-button')
            .should('have.class', 'gh-btn-green')
        cy.get('.gh-editor-title')
            .should('have.value', 'The title have been edited')
    })

    it('Should delete a post', () => {
        ghost.selectPost()
        ghost.openPostSettings()
        cy.get('button.settings-menu-delete-button').click()
        cy.get('div.modal-footer button.gh-btn-red > span').contains('Delete').click()
        cy.url({ timeout: 10000 })
            .should('contain', '/posts')
    })

    it('Should change the status to unpublished', () => {
        cy.get('ol.posts-list li', { timeout: 10000 }).find('a.gh-post-list-status > div > span.gh-content-status-published').first().click({ force: true })
        cy.get('div.gh-publishmenu-trigger').click()
        cy.get('section.gh-publishmenu-section div.gh-publishmenu-radio').first().click()
        cy.get('div.gh-publishmenu-radio').first().should('have.class', 'active')
        cy.get('footer.gh-publishmenu-footer button.gh-publishmenu-button').click()
        cy.get('footer.gh-publishmenu-footer button.gh-publishmenu-button').should('have.class', 'gh-btn-green')
    })
})