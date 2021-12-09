/// <reference types="cypress" />

describe("Should access home page", () => {
    before(() => {
        cy.visit("https://www.vr.com.br/")
    })

    it('access PRA VOCÊ', () => {
        cy.title().should('be.equal', 'VR Benefícios - Vale Refeição, Vale Alimentação e Transporte');
        cy.get('#lum_4028808471FC1D5D0171FE80340D6AC8_closePrivacyTerm').click();
        cy.get('.vr-menu-trigger--open > .vr-menu-trigger__icon > path').click();
        cy.get(':nth-child(3) > .vr-main-navigation__link').click();
    })

    it('access Onde usar meu cartão VR', () => {
        cy.title().should('be.equal', 'VR Benefícios - Onde aceita VR');
        cy.get('#lum_4028808471FC1D5D0171FE80340D6AC8_closePrivacyTerm').click();
        cy.get('.vr-button--negative').click();
        cy.get('.mfp-close').should('be.enabled');
    })

})