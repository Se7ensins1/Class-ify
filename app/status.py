from browseWeb import *
from sendMail import *


def main(userData):
    url = userData.get('url')
    term = userData.get('term')
    career = userData.get('career')
    course = userData.get('classNum')
    mail = userData.get('mailTo')
    text = userData.get('textTo')
    service = userData.get('service')

    print(userData)

    driver = open_driver(url)
    try:
        class_open = web_browser(driver, term, career, course)
        while not class_open:
            loop(driver, url)
            class_open = web_browser(driver, term, career, course)
    except:
        return 'Error: could not browse internet. Please check that your info is correct and that you have a strong internet connection and submit a new form again.'

    close_driver(driver)

    try:
        mail_to(mail)
    except:
        return 'Error: could not send mail but class is open'

    try:
        text_to(text, service)
    except:
        return 'Error: could not send text but class is open'

    return 'done'
        