// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


cypress.Commands.add('registerMethod', ()=>{
    const userEmail =faker.internet.email()

     cy.visit('/')
     cy.get("a[href='/auth/register'].mr-2").click()

     //firstname
     cy.get('#registration_form_firstname').type('sherif',{force: true} )
     //lastname
     cy.get('#registration_form_lastname').type('can',{force: true} )
     //email
     cy.get('#registration_form_email').type(userEmail,{force: true}) 
     //password
     cy.get('#registration_form_plainPassword').type("FuNda123,!",{force: true} )
     //confirmPassword
     cy.get('#registration_form_confirmPassword').type('FuNda123,!',{force: true})

      //submit
      cy.get('.btn').click()

      //assertion yapma gorunuyor mu
      //should cypress assertion
      cy.get('.Toastify__toast-body').should('be.visible')

      //gelen mesaj dogrumu
      cy.get('.Toastify__toast-body').should('have.text','Welcome!')

       //Assert.assertEquals("expected","actual");

       //expect
       //cy.get('.Toastify__toast-body').getText() --> weblemetinin yazısınız verirdi
 
       // yanlıs kullanım cypressde --> const toast = cy.get('.Toastify__toast-body').invoke('text')
       cy.get('.Toastify__toast-body').invoke('text').then(toast=>{
        expect(toast).to.equal('Welcome!');
       });
})