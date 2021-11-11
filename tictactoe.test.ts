import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

// This test should succeed showing that x can be places in cell-0
test('I can place an X', async () => {
    driver.get("http://127.0.0.1:5500/tictacjs.html");
    driver.navigate().refresh()
    await (await driver).findElement(By.id('start-game')).click();
    await driver.sleep(500)
    await (await driver).findElement(By.id('cell-0')).click()
    await driver.sleep(500)
    driver.close
    let restultsText = await driver.findElement(By.id('cell-0')).getText()
    expect(restultsText.toLowerCase()).toContain("x")
});

// This test should succeed showing that x can be placed in multiple different locations
test('I can place in different locations', async () => {
    driver.get("http://127.0.0.1:5500/tictacjs.html");
    driver.navigate().refresh()
    await (await driver).findElement(By.id('start-game')).click();
    await driver.sleep(500)
    await (await driver).findElement(By.id('cell-1')).click()
    await driver.sleep(500)
    await (await driver).findElement(By.id('cell-4')).click()
    await driver.sleep(500)
    await (await driver).findElement(By.id('cell-5')).click()
    await driver.sleep(500)
    let restultsText = await driver.findElement(By.id('cell-1')).getText()
    expect(restultsText.toLowerCase()).toContain("x")
    let restultsText2 = await driver.findElement(By.id('cell-4')).getText()
    expect(restultsText2.toLowerCase()).toContain("x")
    let restultsText3 = await driver.findElement(By.id('cell-5')).getText()
    expect(restultsText3.toLowerCase()).toContain("x")
});

// This test should fail because "o" will overwrite the "X" in cell 3 on the third move
// If you change the expect statement to check for an "o" it will pass the test
test('x can be placed in cell-3', async () => {
    driver.get("http://127.0.0.1:5500/tictacjs.html");
    driver.navigate().refresh()
    await (await driver).findElement(By.id('start-game')).click();
    await driver.sleep(500)
    await (await driver).findElement(By.id('cell-2')).click()
    await driver.sleep(500)
    await (await driver).findElement(By.id('cell-3')).click()
    await driver.sleep(1000)
    await (await driver).findElement(By.id('cell-4')).click()
    await driver.sleep(1000)
    let restultsText3 = await driver.findElement(By.id('cell-3')).getText()
    expect(restultsText3.toLowerCase()).toContain("x")
});

// This is the same test as the on above, but with a changed expect statement, looking for the string "o"
test('x can be placed in cell-3', async () => {
    driver.get("http://127.0.0.1:5500/tictacjs.html");
    driver.navigate().refresh()
    await (await driver).findElement(By.id('start-game')).click();
    await driver.sleep(500)
    await (await driver).findElement(By.id('cell-2')).click()
    await driver.sleep(500)
    await (await driver).findElement(By.id('cell-3')).click()
    await driver.sleep(1000)
    await (await driver).findElement(By.id('cell-4')).click()
    await driver.sleep(1000)
    let restultsText3 = await driver.findElement(By.id('cell-3')).getText()
    expect(restultsText3.toLowerCase()).toContain("o")
});
