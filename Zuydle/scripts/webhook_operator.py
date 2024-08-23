import flask
import subprocess

app = flask.Flask(__name__)

@app.route('/', methods=['POST'])
def handle_webhook():
    data = flask.request.get_json()
    branch = data['ref'].split('/')[-1]

    if branch == 'main':
        subprocess.run(['sudo', 'docker', 'stop', '$(sudo', 'docker', 'ps', '-a', '-q'],
                        check=True)

        subprocess.run(['sudo', 'docker', 'run', '-d', '-p', '5173:5173', 'trueprovidence/devops'],
                        check=True)
        
    return 'Webhook received successfully'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)