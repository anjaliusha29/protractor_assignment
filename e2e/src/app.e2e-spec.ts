import { browser, logging,by, element  } from 'protractor';
import { AppPage } from './app.po';
describe('Demo App Test Suite App 1', () => {
let home: AppPage;
let currentPage : any;

  beforeAll( ()=>
  {
   home= new AppPage();
   home.navigateTo();
   browser.sleep(5000);
   
  }) 

  it('Angular test01',async()=>
  {  
      home.getbrowserTitle;
      expect(home.getbrowserTitle()).toMatch('My App');
      browser.sleep(3000);
  })

  it('Angular twitterIcon',async()=>
  {   
       //browser.sleep(3000);
       home.clickTwitterIcon;
       browser.sleep(3000); 
       expect(home.getCurrentUrl()).toMatch("https://twitter.com/angular");
  })

  it('Angular LearnAngular',async()=>
  {    
       home.clickLearnAngular;
       browser.sleep(3000);
     //c console.log(home.getCurrentUrl);
      // console.log(home.getCurrentUrl());
       expect(home.getCurrentUrl()).toEqual("https://angular.io/tutorial");
  })

  it('Angular CLI documentation',async()=>
  {    
       home.clickCliDocumentation;
       browser.sleep(3000);
     //c console.log(home.getCurrentUrl);
      // console.log(home.getCurrentUrl());https://blog.angular.io/
      //expect(browser.getCurrentUrl).toEqual("https://angular.io/cli");
       expect(home.getCurrentUrl()).toMatch("https://angular.io/cli");
  })

  it('Angular Blog',async()=>
  {    
       home.clickAngularBlog;
       browser.sleep(3000);
       expect(home.getCurrentUrl()).toMatch("https://blog.angular.io/");
  })
 
  it('Angular Animation Icon',async()=>
  {    
       home.clickanimationIcon;
       browser.sleep(3000);
       expect(home.getCurrentUrl()).toMatch("https://angular.io/guide/animations");
  })
  it('Angular Cli Icon',async()=>
  {    
       home.clickCliIcon;
       browser.sleep(3000);
       expect(home.getCurrentUrl()).toMatch("https://cli.angular.io/");
  })
  it('Angular Augury',async()=>
  {    
       home.clickauguryIcon;
       browser.sleep(3000);
       expect(home.getCurrentUrl()).toMatch("https://augury.rangle.io/");
  })
  it('Angular Protractor Icon',async()=>
  {    
       home.clickProtractorIcon;
       browser.sleep(3000);
       expect(home.getCurrentUrl()).toMatch("https://www.protractortest.org/#/");
  })
  it('Angular Meet Up',async()=>
  {    
       home.clickMeetIcon;
       browser.sleep(3000);
       expect(home.getCurrentUrl()).toMatch("https://www.meetup.com/find/?keywords=angular");
  })

  it('Angular Gitter',async()=>
  {    
       home.clickgitterIcon;
       browser.sleep(3000);
       expect(home.getCurrentUrl()).toMatch("https://gitter.im/angular/angular");
  })

  it('Angular Repo',async()=>
  {    
       home.clickgitterIcon;
       browser.sleep(3000);
       expect(home.getCurrentUrl()).toMatch("https://github.com/angular/angular");
  })
  it('Angular Star Icon',async()=>
  {    
       home.clickgitterIcon;
       browser.sleep(3000);
       expect(home.getCurrentUrl()).toMatch("https://github.com/angular/angular");
  })
  it('Angular Doc  Here',async()=>
  {    
       home.clickgitterIcon;
       browser.sleep(3000);
       expect(home.getCurrentUrl()).toMatch("https://github.com/angular/angular");
  })

});



describe('Angular Test Suite 02', () => {
  let page :AppPage;

  beforeAll( ()=>
  {
    page = new AppPage();
    page.navigateTo();
    browser.sleep(3000);
  })

  it('Valid Component Click', async()=>
  {
    page.clickComponentButton;
    browser.sleep(3000);
    expect(element(by.xpath('/html/body/app-root/div[2]/div[4]')).getText()).toMatch("ng generate component xyz");
  })

  it('Valid Angular Material Click', async()=>
  {
    page.clickAngularMaterial;
    browser.sleep(3000);
    expect(element(by.xpath('/html/body/app-root/div[2]/div[4]')).getText()).toMatch("ng add @angular/material");
  })

  it('Valid Add PWA Click', async()=>
  {
    page.clickAddPWA;
    browser.sleep(3000);
    expect(element(by.xpath('/html/body/app-root/div[2]/div[4]')).getText()).toMatch("ng add @angular/pwa");
  })

  it('Valid Add Dependency Click', async()=>
  {
    page.clickAddDependency;
    browser.sleep(3000);
    expect(element(by.xpath('/html/body/app-root/div[2]/div[4]')).getText()).toMatch("ng add _____");
  })

  it('Valid Run and Watch Click', async()=>
  {
    page.clickRunAndWatch;
    browser.sleep(3000);
    expect(element(by.xpath('/html/body/app-root/div[2]/div[4]')).getText()).toMatch("ng test");
  })

  it('Valid Build for Production Click', async()=>
  {
    page.clickBuildForProduction;
    browser.sleep(3000);
    expect(element(by.xpath('/html/body/app-root/div[2]/div[4]')).getText()).toMatch("ng build --prod");
  })
})
