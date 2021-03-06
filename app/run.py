from flask import Flask, render_template, redirect, url_for, request
import os
from status import main

app = Flask(__name__)

userData = {}
schoolBanner = {}


@app.route('/')
def index():
	return render_template("index.html")

@app.route('/about')
def about():
	return render_template("about.html")

@app.route('/user-data', methods = ['POST', 'GET'])
def userSC():
	schoolBanner['campus'] = request.form['campus']
	return render_template("userData.html", result = schoolBanner)

@app.route('/confirm', methods = ['POST', 'GET'])
def confirm():
	userData['term'] = request.form['term']
	userData['career'] = request.form['career']
	userData['classNum'] = request.form['num']
	userData['mailTo'] = request.form['emailName']
	userData['textTo'] = request.form['phoneNumber']
	userData['service'] = request.form['service']
	return render_template("confirm.html", result = userData)

@app.route('/technicalities')
def technicalities():
	return render_template("technicalities.html")

@app.route('/run')
def run():
	userData['url'] = "https://bcsweb.is.berkeley.edu/psc/bcsprd_pub/EMPLOYEE/HRMS/c/COMMUNITY_ACCESS.CLASS_SEARCH.GBL"
	return main(userData)


if __name__ == '__main__':
   port = int(os.environ.get("PORT", 5000))
   app.run(host='0.0.0.0', port=port)
