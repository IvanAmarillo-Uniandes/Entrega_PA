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

export class GhostTag {
    login() {
        cy.visit('ghost/#/signin')
        cy.get('#ember8').type(Cypress.env('email'))
        cy.get('#ember10').type(Cypress.env('pass'))
        cy.get('#login').submit()
    }

    goTags() {
        cy.visit('ghost/#/tags')
    }

    selectTag() {
        cy.get('ol.tags-list',{ timeout: 10000 }).find('li.gh-tags-list-item > a').first().click({ force: true })
    }
    
}