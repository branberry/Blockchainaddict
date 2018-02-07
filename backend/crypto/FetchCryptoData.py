import requests
import json

class FetchCryptoData:
    def __init__(self):
        self.data = {}
    
    def requestData(self):
        r = requests.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR')
        res = json.loads(r.text)
        print(res['BTC'])