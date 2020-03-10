from flask import Flask, render_template, jsonify, request
from flask_api import status
from flask_cors import CORS
import pickle
import numpy as np
import pandas as pd

# Importing machine learning model

import spacy, nltk
from model.movie_recommender import MovieRecommendation
from sklearn.feature_extraction.text import CountVectorizer
nlp = spacy.load('en_core_web_sm')
stop_words = nlp.Defaults.stop_words
ps = nltk.PorterStemmer()

app = Flask(__name__)
MovieRecommendation()
movieRecommendation = pickle.load(open('./model/model.pkl','rb'))
spam_classifier = pickle.load(open('./model/spam_classifier.pkl','rb'))

CORS(app)

@app.route('/api/get')
def get_data():
    return jsonify(posts)


@app.route('/api/recommended-movie', methods=['POST', 'GET'])
def get_recommendation():
    movie = request.json['movie']
    movie_list = movieRecommendation.get_recommended_movies(movie)

    movie_list = dict(movie_list)
    if movie_list['success'] == True:
        return movie_list, status.HTTP_200_OK
    else:
        return movie_list, status.HTTP_500_INTERNAL_SERVER_ERROR


@app.route('/api/email-classifier', methods=['POST', 'GET'])
def classify_email():
    message = request.json['message']

    corpus = pd.Series([message])
    corpus = corpus.apply(lambda x: ' '.join(ps.stem(x) for term in x.split() if not term in stop_words))

    cv = CountVectorizer()
    X = cv.fit_transform(corpus).toarray()
 
    print(X, 'sadasdasasdas')
    prediction = spam_classifier.predict(X)

    print(prediction, 'value predicted')

    

if __name__ == '__main__':
    app.run(debug=True)