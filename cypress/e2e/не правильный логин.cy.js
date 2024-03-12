describe('Автотесты на авторизацию', function () {
    
    it('правильная пара логина и пороля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov11.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon')
        })
})