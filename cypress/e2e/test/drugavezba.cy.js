describe("styling test", () => {

it("visit base url",()=>{
    cy.visit("https://magento2-demo.magebit.com/") 
    cy.get('#ui-id-3').should("have.text","What's New")
    cy.get("#ui-id-5").trigger("mouseover")
    cy.get("#ui-id-18").trigger("mouseover")
    cy.get('#ui-id-20 > span').click()


})

it("validate css in navigation bar",()=>{

    cy.get("#ui-id-5").should("have.css","font-size","14px").and("have.css","color","rgb(51, 51, 51)")



})


















})