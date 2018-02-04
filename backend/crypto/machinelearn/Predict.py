from keras.models import Sequential
from keras.layers import Dense, Activation

class Predict:
    def __init__(self):
        self.data = {}
    
    def readData(self,request):
        print("hi")