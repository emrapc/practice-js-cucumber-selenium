const {When, Given, Then} = require('@cucumber/cucumber');
const {expect} = require('chai')
const webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
const chrome = require('selenium-webdriver')
const {sendRequest} = require("selenium-webdriver/http");
const {elementIsSelected, elementTextContains} = require("selenium-webdriver/lib/until");
const {assert} = require("assert");

let browser = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

    Given(/^kullanıcı google anasayfasına gider/, async () => {
        await browser.get('https://google.com');
    });

    Then(/^kullanıcı arama kısmına akbank yazar ve enter tıklar/, async () => {
        await browser.findElement(By.name('q')).sendKeys('akbank'+'\n') && key.ENTER;
    });

    Then(/^kullanıcı gelen sonuclarda sayfanın altına iner/, async () => {
       await browser.executeScript('window.scrollTo(0, document.body.scrollHeight);');
    });

