describe('angularjs homepage', function() {
    it('should open the home page', function() {
      browser.get('http://lttswebframework.azurewebsites.net/');
  browser.sleep(10000);
  expect(browser.getCurrentUrl()).toEqual('http://lttswebframework.azurewebsites.net/pages/oilgas-dashboard');
    });

    it('v&v for dropDown',function(){
      var dd = element(by.xpath('//*[@data-name="chevron-down"]'));
dd.isPresent().then(function(){
  element(by.className('select-button')).click();
});
  browser.sleep(10000)
    });

    it('verification of dropDown options',function(){
  expect(element(by.id('nb-option-4')).isPresent()).toBe(true);
  element(by.id('nb-option-4')).click();
  browser.sleep(10000);
  expect(element(by.className('layout')).getCssValue('background-color')).toBe('rgba(21, 26, 48, 1)');
 //console.log(colour);
 //https://bl.ocks.org/njvack/02ad8efcb0d552b0230d
 //expect(colour.getText()).toBe('rgb(21, 26, 48)');
  //expect($('rgb(21, 26, 48) none repeat scroll 0% 0% / auto padding-box border-box').getCssValue('background')).toEqual("rgb(21, 26, 48)");
    });
    });

    