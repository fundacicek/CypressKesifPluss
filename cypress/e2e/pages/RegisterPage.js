class RegisterPage {


    elements ={
        registerButton: ()=> cy.get("a[href='/auth/register'].mr-2"),
        firstName: ()=> cy.get("#registration_form_firstname"),
        lastname: ()=>cy.get("#registration_form_lastname"),
        email:()=> cy.get("#registration_form_email"),
        password: ()=> cy.get("#registration_form_plainPassword"),
        confirmPasword: ()=> cy.get("#registration_form_confirmPassword"),
        submit: ()=> cy.get(".btn"),
        toast: ()=> cy.get(".Toastify__toast-body"),



    }



    registerMethod(email) {
        cy.visit("/");
        this.elements.registerButton().click();
        this.elements.firstName().type("sherif",{force: true} );
        this.elements.lastname().type('can',{force: true} );
        this.elements.email().type(email,{force: true});
        this.elements.password().type("FuNda123,!",{force: true} );
        this.elements.confirmPasword().type("FuNda123,!",{force: true});
        this.elements.submit().click();
        

    }
}
export const registerPage = new RegisterPage()