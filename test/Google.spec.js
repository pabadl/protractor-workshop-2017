describe('Given a SDET learning protractor', () => {
    
    describe('when open Google Page', () => {
        
        /**
         * Metodo que se ejecuta antes de cada test
         */
        beforeEach(() => {
            browser.get('http://www.google,com')
        }

        
        it('should have a title', () => {
            
            expect(browser.getTitle()).toEqual('Google');
        });
    });
});
