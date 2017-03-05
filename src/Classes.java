import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Classes {
    public final WebDriver driver;

    public Classes (WebDriver driver) {
        this.driver = driver;
    }

    public boolean determineClass(String term, String career, String courseNum) {
        if (term != null && career != null && courseNum != null) {
            return this.classClosed(term, career, courseNum);
        } else {
            return false;
        }
    }

    public boolean classClosed(String term, String career, String courseNum) {
        this.driver.get("https://bcsweb.is.berkeley.edu/psc/bcsprd_pub/EMPLOYEE/HRMS/c/COMMUNITY_ACCESS.CLASS_SEARCH.GBL");   // load url
        hold(2000);
        this.driver.findElement(By.id("CLASS_SRCH_WRK2_STRM$35$")).sendKeys(term);  // change term to "Spring 2017"
        hold(1000);
        this.driver.findElement(By.id("SSR_CLSRCH_WRK_ACAD_CAREER$2")).sendKeys(career);    // change course career to "Undergraduate"
        hold(1000);
        this.driver.findElement(By.id("DERIVED_CLSRCH_SSR_EXPAND_COLLAPS$149$$1")).click(); // clicks to extend the Additional Search Criteria menu
        hold(1500);
        this.driver.findElement(By.id("SSR_CLSRCH_WRK_CLASS_NBR$9")).sendKeys(courseNum);  // changes course keyword to Korean 1A "33181"
        hold(1000);
        this.driver.findElement(By.id("CLASS_SRCH_WRK2_SSR_PB_CLASS_SRCH")).click();    // click the search button
        hold(2000);

        // if the element has index of the gif > 0 the class will return true, else return false
        if (this.driver.findElement(By.id("win0div$ICField$4$$0")).getText().indexOf("/cs/bcsprd_pub/cache/PS_CS_STATUS_CLOSED_ICN_1.gif") > 0) {
            return false;    // class is open
        } else {
            return true;    // class is closed
        }
    }

    private void hold(int milli) {
        try {
            Thread.sleep(milli);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "C:/Users/anastasiav/Downloads/chromedriver_win32/chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        Classes a = new Classes(driver);
        while (a.classClosed("2172", "Undergraduate", "33181")) {
            a.hold(30000);
            a.classClosed("2172", "Undergraduate", "33181");
        }
    }
}
