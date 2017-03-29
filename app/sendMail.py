import smtplib


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
    