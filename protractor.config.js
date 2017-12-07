exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test/Google.spec.js'],
    
    /**
     * método para la información que debería ser igual en todas las pruebas
     */
    onPrepare: () => {
        browser.ignoreSynchronization = true; 
    }
}
