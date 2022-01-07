const {When, Given, Then} = require('@cucumber/cucumber');
const {expect} = require('chai')
const webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
const chrome = require('selenium-webdriver')
const {sendRequest} = require("selenium-webdriver/http");
const {elementIsSelected, elementTextContains} = require("selenium-webdriver/lib/until");

let browser = new webdriver.Builder()
    .forBrowser('chrome')
    .build();


Given('user open a google.com pages', async () => {
    await browser.get('https://google.com')
});

When('the user searches for amazon and get results', async () => {
    await browser.findElement(By.name('q')).sendKeys('amazon'+'\n') && key.ENTER
});

Then('the user click the second results and open the amazon.com', async () => {
    await browser.findElement(By.xpath('//*[@id="rso"]/div[1]/div/div/div/div/div/div[1]/a/h3')).click();
});

Then('the user search for {string} and get results', async function (string) {
    await browser.findElement(By.xpath('//*[@id="twotabsearchtextbox"]')).click();
    await browser.findElement(By.xpath('//*[@id="twotabsearchtextbox"]')).sendKeys("nintendo");
    await browser.findElement(By.xpath('//*[@id="nav-search-submit-button"]')).click();
    await browser.findElement(By.xpath('//*[@id="sp-cc-accept"]')).click();
});

Then('the user select the nintendo swift', async () => {
    await browser.findElement(By.xpath('//*[@id="search"]/div[1]/div[1]/div/span[3]/div[2]/div[1]/div/span/div/div/div[2]/div[1]/h2/a/span')).click();
});

Then('the user product add the cart', async () => {
    await browser.findElement(By.xpath('//*[@id="add-to-cart-button"]')).click();
});

Then('the user search "apple" and get results', async () => {
    await browser.findElement(By.xpath('//*[@id="twotabsearchtextbox"]')).click();
    await browser.findElement(By.xpath('//*[@id="twotabsearchtextbox"]')).sendKeys("apple");
    await browser.findElement(By.xpath('//*[@id="nav-search-submit-button"]')).click();
});

Then('the user click iphone 11 and add the cart', async () => {
    await browser.findElement(By.xpath('//*[@id="search"]/div[1]/div[1]/div/span[3]/div[2]/div[2]/div/div/div/div/div[3]/div[1]/h2/a/span')).click();
    await browser.findElement(By.xpath('//*[@id="add-to-cart-button"]')).click();
});


Then('the user enters product cart', async () => {
    await browser.findElement(By.xpath('//*[@id="attach-accessory-pane"]/div')) && key.ENTER;
    await browser.actions().mouseMove(element).perform();

});

Then('the user delete the product from cart', async () => {
    await browser.findElement(By.xpath('//*[@id="sc-item-C621fd5af-8b34-4046-962a-f5dfedfc2b1e"]/div[4]/div/div[1]/div/div/div[2]/div[1]/span[2]/span/input')).click();
    await browser.findElement(By.xpath('//*[@id="sc-item-Cdcfe896a-48a1-4d8e-99d1-e62001025f49"]/div[4]/div/div[1]/div/div/div[2]/div[1]/span[2]/span/input')).click();
    await browser.close();
});