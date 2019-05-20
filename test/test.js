
var assert = require("assert");
var webdriver = require("selenium-webdriver");
require("geckodriver");

const serverUri = "https://staging.meettippy.com/";
const appTitle = "Tippy Portal";

var browser = new webdriver.Builder()
 .usingServer()
 .withCapabilities({ browserName: "chrome" })
 .build();


let sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))
const email = 'helen@meettippy.com'
let zip = Math.random().toString(9).substr(2, 5)
let randomString = Math.random().toString(36).substr(2, 10)
let emailOwner = 'owner-' + randomString + '@me.com'
let emailManager = 'manager-' + randomString + '@me.com'
let emailSP = 'SP-' + randomString + '@me.com'
let emailCompany = 'company-' + randomString + '@me.com'


function logTitle() {
 return new Promise((resolve, reject) => {
  browser.getTitle().then(function(title) {
   resolve(title);
  });
 });
} 


describe("Home", function() {
    this.timeout(100000000000)
    it("title", function() {
        return new Promise((resolve, reject) => {
         browser
          .get(serverUri)
          .then(logTitle)
          .then(title => {
           assert.strictEqual(title, appTitle);
           resolve();
          })
          .catch(err => reject(err));
        });
       });


    it("login", function() {
        return new  Promise(  (resolve, reject) => {
         browser.findElement({ xpath: '//*[@id="email"]' }).sendKeys(email)
         browser.findElement({ xpath: '//*[@id="password"]' }).sendKeys("helen1230.")
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div/div[2]/div[4]/button' }).click()
         
          .then(elem => resolve())
          .catch(err => reject(err));
        });
       });


      // // ---------------------------------------------DASHBOARD---------------------------------------------------------///

      it("dashboard-search-company", function() {
        return new  Promise( async (resolve, reject) => {
        await  sleep(5000)
        browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[1]/div/div/div[1]/div/div/div[2]/div/div/div' }).click()
        await  sleep(5000)
        browser.findElement({ xpath: '/html/body/div[2]/div/div/div/ul/li[3]' }).click()
        
          .then(elem => resolve())
          .catch(err => reject(err));
        });
      });
      // ----------------------------------------------LOCATIONS--------------------------------------------------------------------------///

       it("Locations-create", function() {
        return new  Promise( async (resolve, reject) => {
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[1]/div/div/section/div[1]/div/ul/li[7]/a' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[5]/div/div/div/div[1]/a[2]' }).click()
         await  sleep(15000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[6]/div/div/div[2]/div[1]/div[2]/div/div/div/div' }).click()
         await  sleep(10000)
         browser.findElement({ xpath: '/html/body/div[2]/div/div/div/ul/li[2]' }).click()
         await  sleep(2000)
         browser.findElement({ xpath: '//*[@id="street"]' }).sendKeys('ExampleAut')
         await  sleep(2000)
         browser.findElement({ xpath: '//*[@id="storeName"]' }).sendKeys('ExampleAut')
         await  sleep(2000)
         browser.findElement({ xpath: '//*[@id="city"]' }).sendKeys('ExampleAut')
         await  sleep(2000)
         browser.findElement({ xpath: '//*[@id="state"]' }).sendKeys('Activo')
         await  sleep(2000)
         browser.findElement({ xpath: '//*[@id="zip"]' }).sendKeys(zip)
         await  sleep(2000)
         browser.findElement({ xpath: '//*[@id="contactNumber"]' }).sendKeys('3123458790')
         await  sleep(2000)
         browser.findElement({ xpath: ' //*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[6]/div/div/div[2]/div[8]/div[2]/div/div/div/div/div/div[1]/p ' }).click()
         await  sleep(10000)
         browser.findElement({ xpath: '//*[@id="react-select-2-input"]' }).sendKeys("a")
         await  sleep(10000)
         browser.findElement({ css: '#react-select-2-option-4' }).click()
         await  sleep(10000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[6]/div/div/div[3]/button' }).click()
          .then(elem => resolve())
          .catch(err => reject(err));
        });
       });


      it("Locations-update", function() {
        return new  Promise( async (resolve, reject) => {
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[1]/div/div/section/div[1]/div/ul/li[7]/a' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[5]/div/div/div/div[2]/div/div[1]/table/tbody/tr[5]/td[12]/a' }).click() 
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="storeName"]' }).clear()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="storeName"]' }).sendKeys('EditName')
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="threshold"]' }).clear()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="threshold"]' }).sendKeys('10')
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[7]/div/div/div[3]/button' }).click()
          .then(elem => resolve())
          .catch(err => reject(err));
        });
       });



       it("Locations-seach-export", function() {
        return new  Promise( async (resolve, reject) => {
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[1]/div/div/section/div[1]/div/ul/li[7]/a' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[5]/div/div/div/div[2]/div/div[1]/table/tbody/tr[1]/td[1]' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[27]/div/div/div/div[2]/div[1]/span/input' }).sendKeys('Monti Cristo')
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[27]/div/div/div/div[2]/div[1]/div[2]/a' }).click()

          .then(elem => resolve())
          .catch(err => reject(err));
        });
       });


       it("Locations-delete", function() {
        return new  Promise( async (resolve, reject) => {
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[1]/div/div/section/div[1]/div/ul/li[7]/a' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[5]/div/div/div/div[2]/div/div[1]/table/tbody/tr[5]/td[13]/div' }).click()
         //si configuro cual voy a eliminar
         await  sleep(5000)
         browser.findElement({ xpath: '/html/body/div[3]/div/div[2]/div/div[1]/div/div/div[2]/button[2]' }).click()
         
          .then(elem => resolve())
          .catch(err => reject(err));
        });
       });



   

      // ---------------------------------------------COMPANIES---------------------------------------------------------///


      it("companies-create", function() {
        return new  Promise( async (resolve, reject) => {
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[1]/div/div/section/div[1]/div/ul/li[2]/a' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[2]/div/div/div/div[1]/div[2]/a[2]' }).click()  
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="name"]' }).sendKeys('CompanyName') 
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="contactName"]' }).sendKeys('ContacName') 
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="contactNumber"]' }).sendKeys('3211234567') 
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="city"]' }).sendKeys('City') 
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="country"]' }).sendKeys('Country') 
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="contactEmail"]' }).sendKeys(emailCompany) 
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="street"]' }).sendKeys('Street') 
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="state"]' }).sendKeys('Status') 
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="zip"]' }).sendKeys(zip)  
         .then(elem => resolve())
          .catch(err => reject(err));
        });
       });


        it("companies-edit", function() {
        return new  Promise( async (resolve, reject) => {
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[1]/div/div/section/div[1]/div/ul/li[2]/a' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[2]/div/div/div/div[2]/div/div[1]/table/tbody/tr[1]/td[1]' }).click()  
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[26]/div/div/div/div[2]/button' }).click()  
         await  sleep(2000)
         browser.findElement({ xpath: '//*[@id="street"]' }).clear()  
         await  sleep(2000) 
         browser.findElement({ xpath: '//*[@id="street"]' }).sendKeys('Street') 
         await  sleep(2000)
         await  sleep(2000)
         browser.findElement({ xpath: '//*[@id="city"]' }).clear()
         await  sleep(2000)
         browser.findElement({ xpath: '//*[@id="city"]' }).sendKeys('City') 
         await  sleep(2000)
         browser.findElement({ xpath: '//*[@id="state"]' }).clear()
         await  sleep(2000)
         browser.findElement({ xpath: '//*[@id="state"]' }).sendKeys('Status') 
         await  sleep(2000)
         browser.findElement({ xpath: '//*[@id="zip"]' }).clear()
         await  sleep(2000)
         browser.findElement({ xpath: '//*[@id="zip"]' }).sendKeys(zip) 
         await  sleep(2000)
         browser.findElement({ xpath: '//*[@id="name"]' }).clear()
         await  sleep(2000)
         browser.findElement({ xpath: '//*[@id="name"]' }).sendKeys('ContacName') 
         await  sleep(2000)
         browser.findElement({ xpath: '//*[@id="contactNumber"]' }).clear()
         await  sleep(2000)
         browser.findElement({ xpath: '//*[@id="contactNumber"]' }).sendKeys('3211234567') 
         await  sleep(2000)
         browser.findElement({ xpath: '//*[@id="contactName"]' }).clear()
         await  sleep(2000)
         browser.findElement({ xpath: '//*[@id="contactName"]' }).sendKeys('ContactName') 
         await  sleep(2000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[26]/div/div/div/div[2]/div/button[2]' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[1]/div/div/section/div[1]/div/ul/li[2]/a' }).click()   
         .then(elem => resolve())
          .catch(err => reject(err));
        });
       });


      
           it("companies-export", function() {
        return new  Promise( async (resolve, reject) => {
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[1]/div/div/section/div[1]/div/ul/li[2]/a' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[2]/div/div/div/div[1]/div[2]/a[1]' }).click()
          .then(elem => resolve())
          .catch(err => reject(err));
        });
       });

      
       it("companies-search-export", function() {
        return new  Promise( async (resolve, reject) => {
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[1]/div/div/section/div[1]/div/ul/li[2]/a' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[2]/div/div/div/div[1]/span/input' }).sendKeys('Tippy')
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[2]/div/div/div/div[1]/div[2]/a[1]' }).click()  
          .then(elem => resolve())
          .catch(err => reject(err));
        });
       });



      it("companies-delete", function() {
        return new  Promise( async (resolve, reject) => {
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[1]/div/div/section/div[1]/div/ul/li[2]/a' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[2]/div/div/div/div[2]/div/div[1]/table/tbody/tr[2]/td[10]/div' }).click()  
         await  sleep(5000)
         browser.findElement({ xpath: '/html/body/div[3]/div/div[2]/div/div[1]/div/div/div[2]/button[2]' }).click()  
         .then(elem => resolve())
          .catch(err => reject(err));
        });
       });


      // // ---------------------------------------------OWNER---------------------------------------------------------///

      it("Owner create", function() {
        return new  Promise( async (resolve, reject) => {
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[1]/div/div/section/div[1]/div/ul/li[4]/a' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[28]/div/div/div/div/div[1]/div[2]/a[2]' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[30]/div[2]/div/div/div[2]/div[1]/div[2]/div/div/div/span' }).click()  
         await  sleep(5000)
         browser.findElement({ xpath: '/html/body/div[2]/div/div/div/ul/li[2]' }).click()  
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="lastName"]' }).sendKeys('Last Name')
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="firstName"]' }).sendKeys('First Name')
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="email"]' }).sendKeys(emailOwner)
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="contactNumber"]' }).sendKeys('3456789089')
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="street"]' }).sendKeys('Street')
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="state"]' }).sendKeys('State')
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="city"]' }).sendKeys('City')
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="zip"]' }).sendKeys(zip)
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[30]/div[2]/div/div/div[2]/div[10]/button' }).click()

         .then(elem => resolve())
          .catch(err => reject(err));
        });
       });


      it("owner-search-export", function() {
        return new  Promise( async (resolve, reject) => {
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[1]/div/div/section/div[1]/div/ul/li[4]/a' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[28]/div/div/div/div/div[1]/span/input' }).sendKeys('Tippy')
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[28]/div/div/div/div/div[1]/div[2]/a[1]' }).click()  
         .then(elem => resolve())
          .catch(err => reject(err));
        });
       });

      it("owner-search-company-export", function() {
        return new  Promise( async (resolve, reject) => {
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[1]/div/div/section/div[1]/div/ul/li[4]/a' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[28]/div/div/div/div/div[1]/div[1]/div/div/div[2]/div/div/span' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '/html/body/div[2]/div/div/div/ul/li[5]' }).click()  
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[28]/div/div/div/div/div[1]/div[2]/a[1]' }).click()  
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[28]/div/div/div/div/div[1]/div[1]/div/div/div[2]/div/div/span' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '/html/body/div[2]/div/div/div/ul/li[1]' }).click()
         .then(elem => resolve())
          .catch(err => reject(err));
        });
       });
      

    

      //TIENE PROBLEMAS PARA CARGAR BIEN EL OWNER
      // it("Owner edit", function() {
      //   return new  Promise( async (resolve, reject) => {
      //    await  sleep(5000)
      //    browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[1]/div/div/section/div[1]/div/ul/li[4]/a' }).click()
      //    await  sleep(5000)
      //    browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[28]/div/div/div/div/div[2]/div/div[1]/table/tbody/tr[1]/td[1]' }).click()
        //  await  sleep(5000)
        //  browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[26]/div/div/div/div[2]/button' }).click()  
        //  await  sleep(5000)
        //  browser.findElement({ xpath: '//*[@id="firstName"]' }).clear()
        //  await  sleep(5000)
        //  browser.findElement({ xpath: '//*[@id="firstName"]' }).sendKeys('Firts Name')
        //  await  sleep(5000)
        //  browser.findElement({ xpath: '//*[@id="lastName"]' }).clear()
        //  await  sleep(5000)
        //  browser.findElement({ xpath: '//*[@id="lastName"]' }).sendKeys('Last Name')
        //  await  sleep(5000)
        //  browser.findElement({ xpath: '//*[@id="contactNumber"]' }).clear()
        //  await  sleep(5000)
        //  browser.findElement({ xpath: '//*[@id="contactNumber"]' }).sendKeys('3286432345')
        //  await  sleep(5000)
        //  browser.findElement({ xpath: '//*[@id="street"]' }).clear()
        //  await  sleep(5000)
        //  browser.findElement({ xpath: '//*[@id="street"]' }).sendKeys('Street')
        //  await  sleep(5000)
        //  browser.findElement({ xpath: '//*[@id="state"]' }).clear()
        //  await  sleep(5000)
        //  browser.findElement({ xpath: '//*[@id="state"]' }).sendKeys('State')
        //  await  sleep(5000)
        //  browser.findElement({ xpath: '//*[@id="city"]' }).clear()
        //  await  sleep(5000)
        //  browser.findElement({ xpath: '//*[@id="city"]' }).sendKeys('City')
        //  await  sleep(5000)
        //  browser.findElement({ xpath: '//*[@id="zip"]' }).clear()
        //  await  sleep(5000)
        //  browser.findElement({ xpath: '//*[@id="zip"]' }).sendKeys(zip)
 

      //    .then(elem => resolve())
      //     .catch(err => reject(err));
      //   });
      //  });

//OWNER ELIMINAR NO FUNCIONA
      //     it("Owner delete", function() {
      //   return new  Promise( async (resolve, reject) => {
      //    await  sleep(5000)
      //    browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[1]/div/div/section/div[1]/div/ul/li[4]/a' }).click()
      //    await  sleep(5000)
      //    browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[28]/div/div/div/div/div[2]/div/div[1]/table/tbody/tr[1]/td[10]/div' }).click()
      //    await  sleep(5000)
      //    browser.findElement({ xpath: '/html/body/div[3]/div/div[2]/div/div[1]/div/div/div[2]/button[2]' }).click()

      //    .then(elem => resolve())
      //     .catch(err => reject(err));
      //   });
      //  });


      // ---------------------------------------------MANAGER---------------------------------------------------------///


        it("Manager create", function() {
        return new  Promise( async (resolve, reject) => {
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[1]/div/div/section/div[1]/div/ul/li[5]/a' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[22]/div/div/div/div/div[1]/div[2]/a[2]' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[11]/div/div[2]/div/div/div[2]/div[1]/div[2]/div/div/div/span' }).click()  
         await  sleep(5000)
         browser.findElement({ xpath: '/html/body/div[2]/div/div/div/ul/li[1]' }).click()  
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="lastName"]' }).sendKeys('Last Name')
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="firstName"]' }).sendKeys('First Name')
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="email"]' }).sendKeys(emailManager)
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="contactNumber"]' }).sendKeys('3456789089')
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="street"]' }).sendKeys('Street')
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="state"]' }).sendKeys('State')
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="city"]' }).sendKeys('City')
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="zip"]' }).sendKeys(zip)
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[11]/div/div[2]/div/div/div[2]/div[6]/div[2]/div/div/div/span' }).click()  
         await  sleep(5000)
         browser.findElement({ xpath: '/html/body/div[3]/div/div/div/ul/li[1]' }).click()  
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[11]/div/div[2]/div/div/div[3]/button' }).click()
         
         .then(elem => resolve())
          .catch(err => reject(err));
        });
       });

            it("Manager search-export", function() {
        return new  Promise( async (resolve, reject) => {
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[1]/div/div/section/div[1]/div/ul/li[5]/a' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[22]/div/div/div/div/div[1]/span/input' }).sendKeys('fir')
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[22]/div/div/div/div/div[1]/div[2]/a[1]' }).click()  
         .then(elem => resolve())
          .catch(err => reject(err));
        });
       });

       it("Manager search-company-export", function() {
        return new  Promise( async (resolve, reject) => {
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[1]/div/div/section/div[1]/div/ul/li[5]/a' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[22]/div/div/div/div/div[1]/div[1]/div/div/div[2]/div/div/div' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '/html/body/div[2]/div/div/div/ul/li[3]' }).click()  
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[22]/div/div/div/div/div[1]/div[2]/a[1]' }).click()  
         .then(elem => resolve())
          .catch(err => reject(err));
        });
       });



//       //PROBLEMAS de carga
//       // it("Manager edit", function() {
//       //   return new  Promise( async (resolve, reject) => {
//       //    await  sleep(5000)
//       //    browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[1]/div/div/section/div[1]/div/ul/li[5]/a' }).click()
//       //    await  sleep(5000)
//       //    browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[22]/div/div/div/div/div[2]/div/div[1]/table/tbody/tr[1]/td[1]' }).click()
//       //    await  sleep(5000)
//       //    browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[26]/div/div/div/div[2]/button' }).click()  
//       //    await  sleep(5000)
//       //    browser.findElement({ xpath: '//*[@id="lastName"]' }).sendKeys('Last Name')
//       //    await  sleep(5000)
//       //    browser.findElement({ xpath: '//*[@id="firstName"]' }).sendKeys('First Name')
//       //    await  sleep(5000)
//       //    browser.findElement({ xpath: '//*[@id="email"]' }).sendKeys('eema3iil@me.com')
//       //    await  sleep(5000)
//       //    browser.findElement({ xpath: '//*[@id="contactNumber"]' }).sendKeys('3456789089')
//       //    await  sleep(5000)
//       //    browser.findElement({ xpath: '//*[@id="street"]' }).sendKeys('Street')
//       //    await  sleep(5000)
//       //    browser.findElement({ xpath: '//*[@id="state"]' }).sendKeys('State')
//       //    await  sleep(5000)
//       //    browser.findElement({ xpath: '//*[@id="city"]' }).sendKeys('City')
//       //    await  sleep(5000)
//       //    browser.findElement({ xpath: '//*[@id="zip"]' }).sendKeys(zip)
//       //    await  sleep(5000)
//       //    browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[11]/div/div[2]/div/div/div[2]/div[6]/div[2]/div/div/div/span' }).click()  
//       //    await  sleep(5000)
//       //    browser.findElement({ xpath: '/html/body/div[3]/div/div/div/ul/li[1]' }).click()  
//         //  await  sleep(5000)
//         //  browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[11]/div/div[2]/div/div/div[3]/button' }).click()  
//       //    .then(elem => resolve())
//       //     .catch(err => reject(err));
//       //   });
//       //  });


// //Problemas de carga
//       //  it("Manager delete", function() {
//       //   return new  Promise( async (resolve, reject) => {
//       //    await  sleep(5000)
//       //    browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[1]/div/div/section/div[1]/div/ul/li[5]/a' }).click()
//       //    await  sleep(5000)
//       //    browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[22]/div/div/div/div/div[2]/div/div[1]/table/tbody/tr[3]/td[10]/div' }).click()

//       //    .then(elem => resolve())
//       //     .catch(err => reject(err));
//       //   });
//       //  });



//       // ---------------------------------------------SERVICE PROFESSIONALS---------------------------------------------------------///

      it("sp-create", function() {
        return new  Promise( async (resolve, reject) => {
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[1]/div/div/section/div[1]/div/ul/li[6]/a' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[8]/div/div/div/div[1]/div[2]/a[2]' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[12]/div/div[2]/div/div/div[2]/div[1]/div[2]/div/div/div/span' }).click()  
         await  sleep(5000)
         browser.findElement({ xpath: '/html/body/div[2]/div/div/div/ul/li[5]' }).click()  
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="firstName"]' }).sendKeys('NameSP')
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="lastName"]' }).sendKeys('PerezSP')
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="contactNumber"]' }).sendKeys('3789098765')
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="email"]' }).sendKeys(emailSP)
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[12]/div/div[2]/div/div/div[2]/div[6]/div[2]/div/div/div/span' }).click() 
         await  sleep(5000)
         browser.findElement({ xpath: '/html/body/div[3]/div/div/div/ul/li' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[12]/div/div[2]/div/div/div[3]/button' }).click()
         .then(elem => resolve())
          .catch(err => reject(err));
        });
       });
     
      it("sp-search-export", function() {
        return new  Promise( async (resolve, reject) => {
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[1]/div/div/section/div[1]/div/ul/li[6]/a' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[8]/div/div/div/div[1]/span/input' }).sendKeys('sp')
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[8]/div/div/div/div[1]/div[2]/a[1]' }).click()  
         .then(elem => resolve())
          .catch(err => reject(err));
        });
       });

      it("sp-search-company-export", function() {
        return new  Promise( async (resolve, reject) => {
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[1]/div/div/section/div[1]/div/ul/li[6]/a' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[8]/div/div/div/div[1]/div[1]/div/div/div[2]/div/div/div' }).click()
         await  sleep(5000)
         browser.findElement({ xpath: '/html/body/div[2]/div/div/div/ul/li[4]' }).click()  
         await  sleep(5000)
         browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[8]/div/div/div/div[1]/div[2]/a[1]/i' }).click()  
         .then(elem => resolve())
          .catch(err => reject(err));
        });
       });


      //Problemas 
      //  it("sp-edit", function() {
      //   return new  Promise( async (resolve, reject) => {
      //    await  sleep(5000)
      //    browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[1]/div/div/section/div[1]/div/ul/li[6]/a' }).click()
      //    await  sleep(5000)
      //    browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[8]/div/div/div/div[2]/div/div[1]/table/tbody/tr[1]/td[2]' }).click()
      //    await  sleep(5000)
      //    browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[26]/div/div/div/div[2]/button' }).click()  

      //    .then(elem => resolve())
      //     .catch(err => reject(err));
      //   });
      //  });
//----------------

//Problemas de carga
      //  it("sp-delete", function() {
      //   return new  Promise( async (resolve, reject) => {
      //    await  sleep(5000)
      //    browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[1]/div/div/section/div[1]/div/ul/li[6]/a' }).click()
      //    await  sleep(5000)
      //    browser.findElement({ xpath: '//*[@id="root"]/div/div/div/div/div[2]/div[2]/div[1]/div/div[8]/div/div/div/div[2]/div/div[1]/table/tbody/tr[1]/td[14]/div/i' }).click()
      //    await  sleep(5000)
      //    browser.findElement({ xpath: '/html/body/div[3]/div/div[2]/div/div[1]/div/div/div[2]/button[2]' }).click()  
      //    .then(elem => resolve())
      //     .catch(err => reject(err));
      //   });
      //  });


 after(function() {
 
 browser.quit();
 });
});
