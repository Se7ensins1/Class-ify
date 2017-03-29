from browseWeb import *
from sendMail import *


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
        