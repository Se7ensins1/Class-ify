from selenium import webdriver
import time
import smtplib


def open_driver(url):
    driver = webdriver.Chrome("static/chromedriver.exe")
    driver.get(url)
    time.sleep(1)
    return driver


def web_browser(driver, term, career, course_num):
    elem = driver.find_element_by_id("CLASS_SRCH_WRK2_STRM$35$")
    elem.send_keys(term)
    time.sleep(2)

    elem = driver.find_element_by_id("SSR_CLSRCH_WRK_ACAD_CAREER$2")
    elem.send_keys(career)
    time.sleep(2)

    elem = driver.find_element_by_id("DERIVED_CLSRCH_SSR_EXPAND_COLLAPS$149$$1")
    elem.click()
    time.sleep(3)

    elem = driver.find_element_by_id("SSR_CLSRCH_WRK_CLASS_NBR$9")
    elem.send_keys(course_num)
    elem.click()
    time.sleep(2)

    driver.find_element_by_id("CLASS_SRCH_WRK2_SSR_PB_CLASS_SRCH").click()
    time.sleep(2)

    return check_status(driver)


def check_status(driver):
    state = driver.find_element_by_id("win0div$ICField$4$$0").get_attribute("innerHTML")
    if "PS_CS_STATUS_OPEN_ICN_1.gif" in state:
        return True


def loop(driver, url):
    driver.get(url)


def close_driver(driver):
    driver.quit()


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


def mail_to(to):
    send(to)


def text_to(to, service):
    to += services[service]
    send(to)


def send(to):
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login("class.ify510@gmail.com", "hacktech2017")

    msg = "Hi"
    server.sendmail("class.ify510@gmail.com", to, msg)
    server.quit()


def main(url, term, career, course, mail, text, service):
    driver = open_driver(url)
    class_open = web_browser(driver, term, career, course)
    while not class_open:
        loop(driver, url)
        class_open = web_browser(driver, term, career, course)
    close_driver(driver)

    try:
        mail_to(mail)
    except:
        pass

    try:
        text_to(text, service)
    except:
        pass