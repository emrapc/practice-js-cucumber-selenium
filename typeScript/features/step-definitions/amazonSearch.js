"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
const { expect } = require('chai');
let { webdriver } = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
const { chrome } = require('selenium-webdriver');
(0, cucumber_1.Given)('user open a google.com pages', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://google.com');
}));
(0, cucumber_1.When)('the user searches for amazon and get results', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.findElement(By.name('q')).sendKeys('amazon');
}));
(0, cucumber_1.Then)('the user click the second results and open the amazon.com', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.findElement(By.xpath('//*[@id="rso"]/div[1]/div/div/div[1]/div/div/div[2]')).click();
}));
(0, cucumber_1.Then)('the user search for nintendo and get results', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.findElement(By.xpath('//*[@id="twotabsearchtextbox"]')).sendKeys("nintendo" + protractor_1.Key.ENTER);
}));
(0, cucumber_1.Then)('the user select the nintendo swift', () => __awaiter(void 0, void 0, void 0, function* () {
}));
(0, cucumber_1.Then)('the user product add the cart', () => __awaiter(void 0, void 0, void 0, function* () {
}));
(0, cucumber_1.Then)('the user enters product cart', () => __awaiter(void 0, void 0, void 0, function* () {
}));
(0, cucumber_1.Then)('the user delete the product from cart', () => __awaiter(void 0, void 0, void 0, function* () {
}));
