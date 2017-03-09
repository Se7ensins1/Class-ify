from selenium import webdriver
import time
import smtplib


class Status:

    def __init__(self, url):
        self.driver = webdriver.Chrome()
        self.url = url
        self.status = False

    def find_class(self, class_name):
        s

    def web_browser(self, term, career, course_num):
        self.driver.get(self.url)
        time.sleep(1)

        elem = self.driver.find_element_by_id("CLASS_SRCH_WRK2_STRM$35$")
        elem.send_keys(term)
        time.sleep(1)

        elem = self.driver.find_element_by_id("SSR_CLSRCH_WRK_ACAD_CAREER$2")
        elem.send_keys(career)
        time.sleep(1)

        elem = self.driver.find_element_by_id("DERIVED_CLSRCH_SSR_EXPAND_COLLAPS$149$$1")
        elem.click()
        time.sleep(1)

        elem = self.driver.find_element_by_id("SSR_CLSRCH_WRK_CLASS_NBR$9")
        elem.send_keys(course_num)
        elem.click()
        time.sleep(1)

        self.driver.find_element_by_id("CLASS_SRCH_WRK2_SSR_PB_CLASS_SRCH").click()
        time.sleep(2)

        self.check_status()

    def check_status(self):
        open = self.driver.find_element_by_id("win0div$ICField$4$$0").get_attribute("innerHTML")
        if "/cs/bcsprd_pub/cache/PS_CS_STATUS_OPEN_ICN_1.gif" in open:
            self.status = True


class SendMessage:

    services = {"att": "@txt.att.net",
                "tmobile": "@tmomail.net",
                "verizon": "@vtext.com",
                "sprint": "@pm.sprint.com",
                "virginmobile": "@vmobl.com",
                "metropcs": "@mymetropcs.com",
                "boostmobile": "@myboostmobile.com",
                "cricket": "@mms.cricketwireless.net",
                "ting": "@message.ting.com"
                }

    def __init__(self, mail, text):
        self.mail = mail
        self.text = text

    def mail_to(self, to):
        self.send(to)

    def text_to(self, num, service):
        to = num + SendMessage.services[service]
        self.send(to)

    def send(self, to):
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login("class.ify510@gmail.com", "hacktech2017")

        msg = "Hi"
        server.sendmail("class.ify510@gmail.com", to, msg)
        server.quit()
        print("message sent successfully")


s = Status("https://bcsweb.is.berkeley.edu/psc/bcsprd_pub/EMPLOYEE/HRMS/c/COMMUNITY_ACCESS.CLASS_SEARCH.GBL")
while not s.status:
    s.web_browser("2172", "Undergrad", "33181")

m = SendMessage(False, True)
if m.mail:
    m.mail_to("rojo.balloon@gmail.com")
else:
    m.text_to("8187474077")
