from flask import Flask, render_template
from dynamodb import get_all_sensors, get_all_by_sensorname
from http.server import HTTPServer, BaseHTTPRequestHandler
import json

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/sensors')
def get_Sensors():
    main_door_1 = get_all_by_sensorname('main_door_1')
    main_door_2 = get_all_by_sensorname('main_door_2')
    return render_template('users.html', main_door_1=main_door_1, main_door_2=main_door_2)

 
class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        response = {
            'main_door_1': get_all_by_sensorname('main_door_1'),
            'main_door_2': get_all_by_sensorname('main_door_2')
             
        }
 
        self.send_response(200)
        self.end_headers()
        response = json.dumps(response)
        response = bytes(response, 'utf-8')
        self.wfile.write(response)

def run():
    httpd = HTTPServer(('localhost', 3001), SimpleHTTPRequestHandler)
    httpd.serve_forever();

if __name__ == '__main__':
    app.run()
