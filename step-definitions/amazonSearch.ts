import {Then, When, Given} from '@cucumber/cucumber';
import {browser, Key, protractor} from "protractor";
const {expect} = require('chai')
let {webdriver} = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
const {chrome} = require('selenium-webdriver')


Given('user open a google.com pages', async () => {
    await browser.get('https://google.com')
});

When('the user searches for amazon and get results', async () => {
    await browser.findElement(By.name('q')).sendKeys('amazon');

});

Then('the user click the second results and open the amazon.com', async () => {
    await browser.findElement(By.xpath('//*[@id="rso"]/div[1]/div/div/div[1]/div/div/div[2]')).click();
});

Then('the user search for nintendo and get results', async () => {
    await browser.findElement(By.xpath('//*[@id="twotabsearchtextbox"]')).sendKeys("nintendo"+Key.ENTER)

});

Then('the user select the nintendo swift', async () => {

});

Then('the user product add the cart', async () => {

});

Then('the user enters product cart', async () => {

});

Then('the user delete the product from cart', async () => {

});