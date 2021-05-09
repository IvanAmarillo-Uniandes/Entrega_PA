import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

lorem.generateWords(1);
lorem.generateSentences(5);
lorem.generateParagraphs(7);

export class GhostPost {
    login() {
        cy.visit('ghost/#/signin')
        cy.get('#ember8').type(Cypress.env('email'))
        cy.get('#ember10').type(Cypress.env('pass'))
        cy.get('#login').submit()
    }

    goPosts() {
        cy.visit('ghost/#/posts')
    }

    createDraftPost() {
        cy.get('section.view-actions > a[href="#/editor/post/"]').click({force: true})
        cy.get('.gh-editor-title').type(lorem.generateSentences(1)).invoke('val').then(val => {
            const postTitle = val
            console.log(postTitle)
        })
    }

    selectPost() {
        cy.get('ol.posts-list',{ timeout: 10000 }).find('li.gh-posts-list-item > a').first().click({ force: true })
    }

    publishPost() {
        cy.get('div.gh-publishmenu-trigger > span').click()
        cy.get('div.gh-publishmenu-dropdown button.gh-publishmenu-button').click()
    }

    openPostSettings() {
        cy.url({ timeout: 10000 }).should('contain', '/editor/post/')
        cy.get('button.post-settings').click()
    }
}