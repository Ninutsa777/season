describe('homePage tests', () => {
    beforeEach(() => {
      cy.visit('http://192.168.100.234:8080/index.html'); //CHTGPT ს ვკითხე , ვერ მივწვდი html საიტს და მასწავლა როგორ ჩამერთო ლოკალური სერვერი/*
    })
     it('should display title ', () => {
        cy.title().should('eq','დროები');
      ;
})});