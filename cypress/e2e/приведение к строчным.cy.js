describe('Автотесты на авторизацию', function () {
    
    it('приведение к строчным в полях', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon')
        })
})