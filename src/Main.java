import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        System.setProperty("webdriver.chrome.driver", "C:/Users/anastasiav/Downloads/chromedriver_win32/chromedriver.exe");
        Classes a = new Classes();
        HashMap<String, String> classData = a.findClass("2172", "Undergraduate", "26186");
        while (!a.status) {
            a.classOpen(classData.get("term"), classData.get("career"), classData.get("courseNum"));
            a.hold(15000);
        }
        a.driver.quit();
        Mailer m = new Mailer(true, true);
        if (m.mail) {
            m.mail("rojo.balloon@gmail.com", "hello! :)", "Your class is open?");
        }
        if (m.text) {
            m.text("8187474077", "Your class is open", "How r u?", "tmobile");
        }
    }
}
