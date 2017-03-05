#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import jinja2
import webapp2

env = jinja2.Environment(loader=jinja2.FileSystemLoader('pages'))

class MainHandler(webapp2.RequestHandler):
    def get(self):
        main_template = env.get_template('home.html')
        self.response.out.write(main_template.render())


class NoteHandler(webapp2.RequestHandler):
    def get(self):
        main_template = env.get_template('notification.html')
        self.response.out.write(main_template.render())


class AboutHandler(webapp2.RequestHandler):
    def get(self):
        main_template = env.get_template('about.html')
        self.response.out.write(main_template.render())


class StayHandler(webapp2.RequestHandler):
    def get(self):
        main_template = env.get_template('keep_open.html')
        self.response.out.write(main_template.render())



app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/notification', NoteHandler),
    ('/about', AboutHandler),
    ('/application', StayHandler)
], debug=True)
