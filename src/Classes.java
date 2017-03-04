import org.jsoup.*;
import org.jsoup.helper.*;
import org.jsoup.nodes.*;
import org.jsoup.select.*;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.*;

import java.io.*; // Only needed if scraping a local File.

/**
 * Created by anastasiav on 3/4/2017.
 */

public class Classes {

    public Classes() {
        Document doc = null;
        try {
            doc = Jsoup.connect("https://bcsweb.is.berkeley.edu/psc/bcsprd_pub/EMPLOYEE/HRMS/c/COMMUNITY_ACCESS.CLASS_SEARCH.GBL").get();
        } catch (IOException ioe) {
            ioe.printStackTrace();
        }

        Element table = doc.getElementById("CLASS_SRCH_WRK2_STRM$35$");
        Elements rows = table.getElementsByTag("TR");

        for (Element row : rows) {
            Elements tds = row.getElementsByTag("TD");
            for (int i = 0; i < tds.size(); i++) {
                if (i == 1) System.out.println(tds.get(i).text());
            }
        }

        // You may use any WebDriver implementation. Firefox is used here as an example
        WebDriver driver = new ChromeDriver();

        // A "base url", used by selenium to resolve relative URLs
        String baseUrl = "http://www.google.com";

        // Create the Selenium implementation
        Selenium selenium = new WebDriverBackedSelenium(driver, baseUrl);

        // Perform actions with selenium
                selenium.open("http://www.google.com");
        selenium.type("name=q", "cheese");
        selenium.click("name=btnG");

        // And get the underlying WebDriver implementation back. This will refer to the
        // same WebDriver instance as the "driver" variable above.
        WebDriver driverInstance = ((WebDriverBackedSelenium) selenium).getUnderlyingWebDriver();
    }

    public static void main (String args[]) {

        new Classes();

    }

}

