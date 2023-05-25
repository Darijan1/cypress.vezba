import { faker } from '@faker-js/faker';
const firstName=faker.person.firstName()
const lastName=faker.person.lastName()
const email=faker.internet.email()
const password=faker.internet.password()
describe("Create an Account",()=>{

beforeEach(() => {
    cy.clearAllCookies()    
    cy.visit("https://magento2-demo.magebit.com/")
})

it("Creating new account",()=>{
    cy.contains('Create an Account').click()
    cy.get('[title="First Name"]').type(firstName)
    cy.get('[title="Last Name"]').type(lastName)
    cy.get('[title="Email"]').type(email)
    cy.get('[title="Password"]').type(password)
    cy.get('[title="Confirm Password"]').type(password)
    cy.get('[title="Create an Account"]').click()
})

})

