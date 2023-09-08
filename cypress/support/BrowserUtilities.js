
//ES6 oncesi method olusturma
export const registerReadymethod = () => {
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
        expect(toast).to.equal('Welcome!')
       })

};

//ES6 sonrasi method olusturma
const registerMethodNewStyle = () =>{

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
};
export default{
    registerMethodNewStyle
}