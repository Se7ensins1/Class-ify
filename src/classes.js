
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

function changeDriver() {
    driver.get('https://bcsweb.is.berkeley.edu/psc/bcsprd_pub/EMPLOYEE/HRMS/c/COMMUNITY_ACCESS.CLASS_SEARCH.GBL');
//    driver.findElement(By.name('CLASS_SRCH_WRK2_STRM$35$')).sendKeys("2172");

    driver.findElement(By.name('SSR_CLSRCH_WRK_ACAD_CAREER$2')).sendKeys("UGRD");
    driver.findElement(By.name('DERIVED_CLSRCH_SSR_EXPAND_COLLAPS$149$$1')).click();
    var hiddenBox = $("DERIVED_CLSRCH_SSR_EXPAND_COLLAPS$149$$1");

//    driver.findElement(By.name('SSR_CLSRCH_WRK_CATALOG_NBR_LBL$1')).click();
    driver.findElement(By.name('CLASS_SRCH_WRK2_SSR_PB_CLASS_SRCH')).click();
    //driver.quit();
    driver.findElement(By.name('DERIVED_CLSRCH_SSR_EXPAND_COLLAPS$149$$1'));
}
$

console.log(changeDriver());