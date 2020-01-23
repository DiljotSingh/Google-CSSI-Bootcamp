#!/usr/bin/python
#
# Copyright 2018 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

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

import webapp2
import jinja2
import os
import random



def get_fortune():
    # Add a list of fortunes to the empty fortune_list array
    fortune_list=['Your hard work will pay off soon.', 'You are a role model to others.',
    'You are an inspiration to others!', 'Many are proud of you.', 'Fortune will smile upon you soon.']
    # Use the random library to return a random element from the array
    # instead of "None"
    random_fortune = random.choice(fortune_list)
    return random_fortune


# Remember, you can get this by searching for jinja2 google app engine
jinja_current_directory = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class FortuneHandler(webapp2.RequestHandler):
    def get(self):
        # In part 2, instead of returning this string,
        # make a function call that returns a random fortune.
        start_template = jinja_current_directory.get_template("templates/fortune-results.html")
        fortune_predict = {
        "fortune": get_fortune(),
        }
        self.response.write(start_template.render(fortune_predict))
    # Add a post method
    # def post(self):
    #def post(self):
    #    random_fortune = get_fortune()

class HelloHandler(webapp2.RequestHandler):
    def get(self):
        self.response.write("Hello World. Welcome to the root route of my app. You may type '/predict' at the end of the current url to have your fortune predicted or '/farewell' for a farewell")

class GoodbyeHandler(webapp2.RequestHandler):
    def get(self):
        self.response.write('Goodbye World!')

# Route mapping
app = webapp2.WSGIApplication([
    # This line routes the main url ('/')  - also know as
    # The root route - to the Fortune Handler
    ('/', HelloHandler),
    ('/predict', FortuneHandler), #maps '/predict' to the FortuneHandler
    ('/farewell', GoodbyeHandler),
], debug=True)
