from keras.models import Sequential
from keras.layers.core import Dense, Activation

class Predict:
    def __init__(self, data):
        self.data = data
    
    def linearRegression(self):
        model = Sequential()
        model.add(Dense(32, input_shape=(None,)))

        # mean square error regression
        model.compile(optimizer='rmsprop',
        loss='mse')