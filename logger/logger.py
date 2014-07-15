import json
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/logger")
def logger():
    language    = request.args.get('language', None)
    url         = request.args.get('url', None)
    user_agent_language = request.args.get('user_agent_language', None)
    
   # return "mow"
    #write to db/file
    data = {"language": language, "url": url, "user_agent_language": user_agent_language}
    return json.dumps(data)
#    return "Hello World! lang: {}, url: {}, user_agent_language: {}".format(language, url, user_agent_language)

@app.route("/dashboard")
def dashboard():

    #get params
    
    #write to db/file
    return render_template('dashboard.html')
    
if __name__ == "__main__":
    app.debug = True
    app.run()
