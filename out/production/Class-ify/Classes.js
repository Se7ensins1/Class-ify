
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

function changeDriver() {
    var d1 = new Date();
    console.log(d1);

    console.log("load url");
    loadURL();

    // clicks to expand Additional Search Criteria
    driver.findElement(By.name('DERIVED_CLSRCH_SSR_EXPAND_COLLAPS$149$$1')).click();
    //driver.wait(until.titleIs('Class Search'), 1000);

    for (i = 0; i < 1000000000; i++) {}
    for (i = 0; i < 1000000000; i++) {}

    changeTerm();

    for (i = 0; i < 1000000000; i++) {}
    for (i = 0; i < 1000000000; i++) {}
    console.log("done");
    changeCareer();

    var d2 = new Date();
    console.log(d2);

//((JavascriptExecutor) driver).executeScript("return document.getElementById('element').blur()");

    driver.executeScript("return driver.findElement(By.name('CLASS_SRCH_WRK2_STRM$35$')).blur()");

    // change course id to 33181
    //driver.findElement(By.name('SSR_CLSRCH_WRK_CATALOG_NBR_LBL$1')).click("33181");

    // click the search button
    driver.findElement(By.name('CLASS_SRCH_WRK2_SSR_PB_CLASS_SRCH')).click();
    //driver.quit();
}

function loadURL() {
    driver.get('https://bcsweb.is.berkeley.edu/psc/bcsprd_pub/EMPLOYEE/HRMS/c/COMMUNITY_ACCESS.CLASS_SEARCH.GBL');
}


// changes Term to "2017 Spring"
function changeTerm() {
    console.log("change term");
    driver.findElement(By.name('CLASS_SRCH_WRK2_STRM$35$')).sendKeys("2172");
}

//changes Course Career to "Undergraduate"
function changeCareer() {
    console.log("change career");
    driver.findElement(By.name('SSR_CLSRCH_WRK_ACAD_CAREER$2')).sendKeys("UGRD");
}

console.log(changeDriver());