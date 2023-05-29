import { user } from "../../fixtures/example"
describe("Buying new hoodi",()=>{  
  it("Visiting Magento",()=>{
    cy.clearAllCookies()
    cy.clearAllLocalStorage()   
    cy.visit("https://magento2-demo.magebit.com/")

    })
    it("Sing in",()=>{
        cy.clearAllCookies() 
    cy.get('.panel > .header > .authorization-link > a').click()   
    cy.get('[name="login[username]"]').type("roni_cost@example.com")
    cy.get('[name="login[password]"]').type("roni_cost3@example.com")
    cy.get('[class="action login primary"]').click()
    cy.contains("Welcome, Veronica Costello!").should("be.visible")
    })

    it("Looking for Jacket",()=>{
     cy.clearAllLocalStorage() 
     cy.get("#ui-id-5").trigger("mouseover")
     cy.get("#ui-id-18").trigger("mouseover")
     cy.get('#ui-id-20 > span').click()
     cy.get('.base').should("be.visible")
    })
    it("Founding Beaumont Summit Kit",()=>{
    cy.clearAllLocalStorage() 
    cy.get('#product-item-info_278 > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    cy.get('[itemprop="name"]').should("be.visible") 
    cy.get('[data-option-tooltip-value="M"]').click()
    cy.get('[data-option-label="Orange"]').click()
    cy.get('[data-option-label="Orange"]').should("be.visible")
    cy.get('[title="Add to Cart"]').click()
    cy.contains("You added Beaumont Summit Kit to your shopping cart.").should("be.visible")
    cy.get('[class="action showcart"]').click()
    cy.get('[id="top-cart-btn-checkout"]').click()
    })
    it("Payment",()=>{
    cy.get(':nth-child(1) > :nth-child(1) > .radio').click()   
    cy.get('.button').click()
    cy.contains("Payment Method").should("be.visible")
    cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click()
    cy.contains("Thank you for your purchase!").should("be.visible")

    })
})

