from flask import Flask, render_template
from flask_socketio import SocketIO
import random

app = Flask(__name__)
app.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'
socketio = SocketIO(app)


@app.route('/')
def sessions():
    return render_template('ChatBotUI.html')


def messageReceived(methods=['GET', 'POST']):
    print('message was received!!!')


@socketio.on('my event')
def handle_my_custom_event(json, methods=['GET', 'POST']):
    print('received my event: ' + str(json))
    mes = str(json).split(":",1)[1]
    mes = mes.strip()
    fmes = mes[1:len(mes)-2].strip()

    print("length of string :"+str(len(fmes))+":"+fmes)
    hello = 'reply'
    choice = ''
    usergreetings = ['hey', 'hi', 'hey there', 'hi there', 'hello', 'hola', 'yoo']
    botgreetings = ['hey there!', 'hi!', 'hi there!', 'hey!']
    if fmes in usergreetings:
        choice = random.choice(botgreetings)
    else:
        choice = "Sorry..."
    socketio.emit('my response', {hello: choice})


if __name__ == '__main__':
    socketio.run(app, debug=True)
