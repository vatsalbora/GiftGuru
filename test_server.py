from flask import Flask, request
from flask import current_app as app
import pickle
import numpy as np
import random
from numpy import dot
from numpy.linalg import norm
import json

example = ''
with open('example.json') as file:
    example = json.loads(file.read())

app = Flask(__name__)


@app.route('/seed', methods=['PUT'])
def seed():
    # content = request.get_json(force=True)
    # print(content)
    print(request)
    return example

@app.route('/get_seed', methods=['PUT'])
def get_seed():
    content = request.get_json(force=True)
    print(content)
    return example

@app.route('/choices',  methods=['PUT'])
def choices():
    content = request.get_json(force=True)
    print(content)
    return example

@app.route('/get_recomendations', methods=['PUT'])
def get_recomendations():
    content = request.get_json(force=True)
    print(content)
    return example

if __name__ == '__main__':
    app.run(port=5000)
