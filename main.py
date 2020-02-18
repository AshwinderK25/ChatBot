import io
import random
import string # to process standard python strings
import warnings
import numpy as np
import numpy.linalg as LA
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import warnings
warnings.filterwarnings('ignore')

import nltk
from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords

from flask import Flask, render_template
from flask_socketio import SocketIO
import random

app = Flask(__name__)
app.config['SECRET_KEY'] = 'vnkdjnfjknfl1232#'
socketio = SocketIO(app, cors_allowed_origins = '*')


@app.route('/')
def sessions():
    return render_template('ChatBotUI.html')


def messageReceived(methods=['GET', 'POST']):
    print('message was received!!!')

######################################################


with open('ChatBot.txt','r', encoding='utf8', errors ='ignore') as fin:
    raw = fin.read().lower()

lines = []
with  open('ChatBot.txt') as fp:
    contents = fp.read()
    for entry in contents.split('|'):
        lines.append(entry)


sent_tokens = nltk.sent_tokenize(raw)# converts to list of sentences
#print(sent_tokens)
#print(len(sent_tokens))
word_tokens = nltk.word_tokenize(raw)

lemmer = WordNetLemmatizer()
def LemTokens(tokens):
    return [lemmer.lemmatize(token) for token in tokens]
remove_punct_dict = dict((ord(punct), None) for punct in string.punctuation)
def LemNormalize(text):
    return LemTokens(nltk.word_tokenize(text.lower().translate(remove_punct_dict)))


def practice(user_response):
    robo_response = ''
    train_set = sent_tokens
    test_set = nltk.sent_tokenize(user_response)
    stopWords = stopwords.words('english')
    max = 0
    #vectorizer = CountVectorizer(stop_words = stopWords)
    TfidfVec = TfidfVectorizer(tokenizer=LemNormalize, stop_words='english')
    trainVectorizerArray = TfidfVec.fit_transform(train_set).toarray()
    testVectorizerArray = TfidfVec.transform(test_set).toarray()
    cx = lambda a, b : round(np.inner(a, b)/(LA.norm(a)*LA.norm(b)), 3)
    count = 0
    finalindex = -1
    for index in range(len(trainVectorizerArray)):
        for testV in testVectorizerArray:
            cosine = cx(trainVectorizerArray[index], testV)
            #print("cosine : "+str(cosine)+" : "+str(train_set[index]))
            if cosine > max:
                max = cosine
                finalindex = index

    #print("max cosine :"+str(max))
    #print("index : "+train_set[finalindex])
    if(max==0):
        robo_response=robo_response+"I am sorry! I don't understand you"
        return robo_response
    else:
        #print(len(train_set))
        #print(len(lines))
        #print(str(finalindex))
        robo_response = lines[finalindex]
        return robo_response

GREETING_INPUTS = ("hello", "hi", "greetings", "sup", "what's up","hey",)
GREETING_RESPONSES = ["hi", "hey", "hi there", "hello", "Hi there. I am glad! You are talking to me"]
@socketio.on('my event')
def handle_my_custom_event(json, methods=['GET', 'POST']):
    print('received my event: ' + str(json))
    mes = str(json).split(":",1)[1]
    mes = mes.strip()
    user_response = mes[1:len(mes)-2].strip()
    hello = 'reply'
    choice = ''

    if(user_response!='bye'):
        if(user_response=='thanks' or user_response=='thank you' ):
            choice = "You are welcome.."
        else:
            for word in user_response.split():
                if word.lower() in GREETING_INPUTS:
                    choice = random.choice(GREETING_RESPONSES)
                    break;
                else:
                    choice = practice(user_response)
                    #practice(user_response)
                    #sent_tokens.remove(user_response)
    else:
        choice = "Bye! take care.."

    socketio.emit('my response', {hello: choice})


if __name__ == '__main__':
    socketio.run(app, debug=True)
