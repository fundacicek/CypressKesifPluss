
import { faker } from '@faker-js/faker';
import { RegisterPage, registerPage } from '../pages/RegisterPage';
import browserUtilitiesYeni from '../../support/BrowserUtilities';

describe('cypress tanitimlari 2 gun',()=>{

    it.skip('register test1',()=>{

//const degişmez let degisir js de obje olusturma
  //   const // val
   //  let // var 

//Faker faker = new Faker() -->> java

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

    })







    it.skip('register test2 xpath kullanarak',()=>{

        //const degişmez let degisir js de obje olusturma
          //   const // val
           //  let // var 
        
        //Faker faker = new Faker() -->> java
        
           const userEmail =faker.internet.email()
        
        
        
             cy.visit('/')
             cy.xpath("//a[text()='Register']").click()
        
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
        
            })

        



            it.skip ('test 3 POM kullanarak',()=>{

                const userEmail =faker.internet.email();

              registerPage.registerMethod(userEmail);

              //POM ile assert yapma toast messajını
              registerPage.elements.toast().should('be.visible');
              registerPage.elements.toast().should('have.text','Welcome!');





            })

            it.skip('test 4, eski yontem method olusturma',()=>{
                const browserUtilities = require('../../support/BrowserUtilities')
                browserUtilities.registerReadymethod()
            });

            it.skip("test 5, yeni yontemle method olusturma", ()=>{

                browserUtilitiesYeni.registerMethodNewStyle()
            });

            it('test 6 cypress komutu olarak kullanma', ()=>{

              cy.registerMethod()
            })


        })

