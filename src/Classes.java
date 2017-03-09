import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.HashMap;


public class Classes {
    public final WebDriver driver;
    public boolean status; // true is class is open, false is class is closed

    public Classes () {
        this.driver = new ChromeDriver();
        this.status = false;    // true if class is open, false if class is closed
    }

    public HashMap<String, String> findClass(String term, String career, String courseNum) {
        HashMap<String, String> classData = new HashMap<>();

        if (term != null && career != null && courseNum != null) {
            classData.put("term", term);
            classData.put("career", career);
            classData.put("courseNum", courseNum);
            return classData;
        } else {
            return classData;
        }
    }

    public void classOpen(String term, String career, String courseNum) {
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

        // if the element has index of the gif > 0 the class's status is open (true), else class's status is closed (false)
        String open = this.driver.findElement(By.id("win0div$ICField$4$$0")).getAttribute("innerHTML");
        if (open.indexOf("/cs/bcsprd_pub/cache/PS_CS_STATUS_OPEN_ICN_1.gif") > 0) {
            this.status = true;     // class is now open
        }
    }

    public void hold(int milli) {
        try {
            Thread.sleep(milli);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
