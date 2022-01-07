/*
const { Then, When, After, Before, Given} = require('@cucumber/cucumber');
const {expect} = require('chai')
const webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
const chrome = require('selenium-webdriver')

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

let sum = 0;

Before(function () {
    console.log('Inside Before');
});

After(function () {
    console.log('Inside After');
});

When('I add {int} and {int}', function (num1, num2) {
    sum = num1+num2;
});

Then('the result is {int}', function (result) {
    expect(sum).equal(result)
});

Given('I visit google homepage', async () => {
    await driver.get('https:/google.com');
});

When('I search for Techverito', async () => {
    await driver.findElement(By.name('q')).sendKeys('Techverito'+'\n')
});

Then('I should see the results', async () => {
    let text = await driver.findElement(By.id('search')).getText()
    console.log(text);
});

Then ('I click the first link' , async () => {
    await driver.findElement(By.xpath('//!*[@id="rso"]/div[1]/div/div/div[1]/a/h3')).click()
    });*/
