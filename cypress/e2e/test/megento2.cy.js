import { user } from "../../fixtures/example"

describe("Sing in",()=>{
    beforeEach(() => {
        cy.visit("https://magento2-demo.magebit.com/default/customer/account/login/")
    })
    it("Sing in",()=>{

    cy.get('[name="login[username]"]').type(user.email)
    cy.get('[name="login[password]"]').type(user.password)
    cy.get('[class="action login primary"]').click()
    })
})
    
        
