import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

// test('I can start a game', async () => {

//     let button = await (await driver).findElement(By.id('start-game'));
//     await button.click();
    
// });

test('I can place an X', async () => {

    await (await driver).findElement(By.id('start-game')).click();
    await driver.sleep(1000)
    await (await driver).findElement(By.id('cell-0')).click()
    await driver.sleep(1000)
    await driver.close
});

test('I can place in different locations', async () => {
    driver.get("http://127.0.0.1:5500/tictacjs.html");
    driver.navigate().refresh()
    await (await driver).findElement(By.id('start-game')).click();
    await driver.sleep(1000)
    await (await driver).findElement(By.id('cell-1')).click()
    await driver.sleep(1000)
    await (await driver).findElement(By.id('cell-4')).click()
    await driver.sleep(1000)
    await (await driver).findElement(By.id('cell-5')).click()
    await driver.sleep(1000)
});


test('o overwrites X?', async () => {
    driver.get("http://127.0.0.1:5500/tictacjs.html");
    driver.navigate().refresh()
    await (await driver).findElement(By.id('start-game')).click();
    await driver.sleep(1000)
    await (await driver).findElement(By.id('cell-2')).click()
    await driver.sleep(1000)
    await (await driver).findElement(By.id('cell-3')).click()
    await driver.sleep(1000)
    await (await driver).findElement(By.id('cell-4')).click()
    await driver.sleep(1000)
});
