describe("validate shipping information message", () => {
    before(()=>{
        cy.clearAllLocalStorage()
    }
        

    )
    it("login", () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[name="login-button"]').click()
    })
    it("select some products", () => {
        
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        
    })
    it("fill in user data in checkout", () => {
        cy.get('[data-test="firstName"]').type("Darijan")
        cy.get('[data-test="lastName"]').type("Delic")
        cy.get('[data-test="postalCode"]').type("21000")
        cy.get('[data-test="continue"]').click()
        cy.contains('Free Pony Express Delivery!').should("be.visible")
    })
})
