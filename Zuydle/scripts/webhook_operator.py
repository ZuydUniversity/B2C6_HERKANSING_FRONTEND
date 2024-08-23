import flask
import subprocess

app = flask.Flask(__name__)

@app.route('/', methods=['POST'])
def handle_webhook():
    data = flask.request.get_json()
    branch = data['ref'].split('/')[-1]

    if branch == 'main':
        subprocess.run(['cd', 'Container-Devops-Zuyd'], 
                       check=True)
        subprocess.run(['cd', 'B2C6_HERKANSING_FRONTEND'], 
                       check=True)
        
        subprocess.run(['git', 'remote', 'set-url', 'origin', 'https://github.com/ZuydUniversity/B2C6_HERKANSING_FRONTEND.git'],
                       check=True)
        subprocess.run(['git', 'fetch', 'origin'], 
                       check=True)
        subprocess.run(['git', 'checkout', 'main'], 
                       check=True)
        subprocess.run(['git', 'pull', 'origin', 'main'], 
                       check=True)

        subprocess.run(['cd', 'Zuydle'], 
                       check=True)

        subprocess.run(['sudo', 'docker', 'stop', '$(sudo', 'docker', 'ps', '-a', '-q'],
                        check=True)
        subprocess.run(['sudo', 'docker', 'build', '-t', 'trueprovidence/devops', '.'],
                        check=True)
        subprocess.run(['sudo', 'docker', 'run', '-d', '-p', '5173:5173', 'trueprovidence/devops'],
                        check=True)
        
    return 'Webhook received successfully'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)