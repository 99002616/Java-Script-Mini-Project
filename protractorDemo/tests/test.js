describe('angularjs homepage', function() {
    it('should greet the named user', function() {
      browser.get('http://lttswebframework.azurewebsites.net/');
  browser.sleep(10000);

  element(by.className('select-button')).click();
  browser.sleep(10000);
  element(by.id('nb-option-4')).click();
  browser.sleep(10000);
    });
});
    