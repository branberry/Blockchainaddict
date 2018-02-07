import requests
import json

class FetchCryptoData:
    def __init__(self):
        self.data = {}
    
    def requestData(self,coin,currency):
        r = requests.get('https://min-api.cryptocompare.com/data/price?fsym='+coin+'&tsyms='+currency)
        res = json.loads(r.text)
        self.data[coin] = res[currency]
        #print(res['USD'])