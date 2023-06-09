describe("Buying new hoodi",()=>{  
    it("Visiting Swag Labs",()=>{
      cy.visit("https://www.saucedemo.com")
      cy.clearAllCookies()
      cy.clearAllLocalStorage()   
      cy.contains("Swag Labs").should("be.visible")
      cy.contains("Accepted usernames are:").should("be.visible") 
      cy.contains("Password for all users:").should("be.visible") 
      })
it("Sing in", ()=>{
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()   
})
it("Add all items in cart", ()=> {  
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
    cy.contains("$7.99").should("be.visible") 
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.contains("$29.99").should("be.visible") 
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.contains("$9.99").should("be.visible") 
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.contains("$15.99").should("be.visible") 
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.contains("$49.99").should("be.visible") 
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    cy.contains("$15.99").should("be.visible") 
})
it("Checkout", ()=> {
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
})
it("Checkout: Your Information", ()=>{
    cy.contains("Checkout: Your Information").should("be.visible")
    cy.contains("Swag Labs").should("be.visible")
    cy.get('[data-test="firstName"]').type("Damjan")
    cy.get('[data-test="lastName"]').type("Delic")
    cy.get('[data-test="postalCode"]').type("24213")
    cy.get('[data-test="continue"]').click()
})
it("Finish", ()=> {
    cy.contains("Payment Information").should("be.visible")
    cy.contains("Shipping Information").should("be.visible")
    cy.contains("Price Total").should("be.visible")
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="back-to-products"]').click()
})
it("Log out", ()=> {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
})
})