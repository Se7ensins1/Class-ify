from flask import Flask, render_template, redirect, url_for, request
from status import main

app = Flask(__name__)

userData = {}

@app.route('/')
def index():
	return render_template("index.html")

@app.route('/notification', methods = ['POST', 'GET'])
def notification():
	userData['url'] = "https://bcsweb.is.berkeley.edu/psc/bcsprd_pub/EMPLOYEE/HRMS/c/COMMUNITY_ACCESS.CLASS_SEARCH.GBL"
	userData['term'] = request.form['term']
	userData['career'] = request.form['car']
	userData['classNum'] = request.form['classNum']
	return render_template("notification.html")

@app.route('/confirm', methods = ['POST', 'GET'])
def keepOpen():
	userData['mailTo'] = request.form['emailName']
	userData['textTo'] = request.form['phoneNumber']
	userData['service'] = request.form['service']
	return render_template("confirm.html")


@app.route('/done')
def run():
	status.main(userData['url'], userData['term'], userData['career'], userData['classNum'], userData['mailTo'], userData['textTo'], userData['service'])
	return render_template("done.html")


if __name__ == '__main__':
   port = int(os.environ.get("PORT", 5000))
   app.run(host='0.0.0.0', port=port)