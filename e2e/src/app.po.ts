import { browser, by, element } from 'protractor';

export class AppPage {
  public baseUrl ='http://localhost:4200/';
  public twitter ="https://twitter.com/angular";
  navigateTo(): any
  {
   // browser.ignoreSynchronization= false;
    browser.waitForAngularEnabled(true);
    return browser.get(this.baseUrl);

  }
  getbrowserTitle(): any 
  {
    return browser.getTitle();
  }

  clickTwitterIcon():any {
   return element(by.xpath('//*[@id="twitter-logo"]/path')).click();
  }

  clickLearnAngular():any {
   return element(by.xpath('/html/body/app-root/div[2]/div[2]/a[1]')).click();
  }

  clickCliDocumentation():any {
    return element(by.xpath('/html/body/app-root/div[2]/div[2]/a[2]')).click();
  }

  clickAngularBlog():any {
    return element(by.xpath('/html/body/app-root/div[2]/div[2]/a[3]')).click();
  }

  

  clickanimationIcon():any {
    return element(by.xpath('//*[@id="Path_15"]')).click();
  }

  clickCliIcon():any {
    return element(by.xpath('//*[@id="Path_21"]')).click();
  }

  clickauguryIcon():any {
    return element(by.xpath('//*[@id="Path_25"]')).click();
  }

  clickProtractorIcon():any {
    return element(by.xpath('//*[@id="Path_30"]')).click();
  }
  clickMeetIcon():any {
    return element(by.xpath('//*[@id="logo--mSwarm"]')).click();
  }
  clickgitterIcon():any {
    return element(by.xpath('/html/body/app-root/div[2]/div[5]/a[6]')).click();
  }

 

  clickRepoStar():any {
    return element(by.xpath(' /html/body/app-root/div[2]/footer/a[1]')).click();
  }
  clickStarIcon():any {
    return element(by.xpath('/html/body/app-root/div[2]/footer/a[1]/div')).click();
  }
  clickDocHere():any {
    return element(by.xpath('/html/body/app-root/div[2]/footer/a[2]/svg')).click();
  }

  getCurrentUrl(): any{
    return browser.getCurrentUrl();
  }





  clickComponentButton(): any{
    element(by.xpath('/html/body/app-root/div[2]/div[2]/a[1]/span')).click();
  }
  clickAngularMaterial(): any{
    
    element(by.xpath('/html/body/app-root/div[2]/div[3]/div[2]')).click();
  }
  clickAddPWA(): any{
    
    element(by.xpath('/html/body/app-root/div[2]/div[3]/div[3]/span')).click();
  }
  clickAddDependency(): any{
    
    element(by.xpath('/html/body/app-root/div[2]/div[3]/div[4]/span')).click();
  }
  clickRunAndWatch(): any{
    
    element(by.xpath('//html/body/app-root/div[2]/div[3]/div[5]/span')).click();
  }
  clickBuildForProduction(): any{
    
    element(by.xpath('/html/body/app-root/div[2]/div[3]/div[6]/span')).click();
  }
}


