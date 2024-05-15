
describe("Testing with Bstack", () => {

    it.only(`go to the SF page`, async () => {
      await browser.url("https://developer.salesforce.com/docs/component-library/bundle/lightning-formatted-date-time/example");
      await browser.pause(25000)
      await browser.switchToFrame(await browser.$(`//iframe[@name="preview"][1]`)) 
      await browser.switchToFrame(await browser.$(`//iframe[@name="preview"][1]`)) 
   
  console.log(`browser ${browser.capabilities.browserName} this is a text field: `+ await $(`//c-date/div/h2`).getText())
  console.log(`browser ${browser.capabilities.browserName} this is a Date field: `+ await $(`//p//lightning-formatted-date-time[1]`).getText())
      // await browser.debug()
  
    })

})
