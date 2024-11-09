import pymongo

url = "mongodb://localhost:27017/"
client = pymongo.MongoClient(url)

# TO connect DB
db = client['mypro']