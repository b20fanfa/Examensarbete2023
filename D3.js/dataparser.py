import csv
import json
 
# Function to convert a CSV to JSON
# Takes the file paths as arguments , def is a function)
def make_json(csvFilePath, jsonFilePath):

  # create a list [] and then a dictionary {}
  data = []
  obj = {}
    
  # Open a csv reader called DictReader
  with open(csvFilePath, encoding='utf-8') as csvf:
    csvReader = csv.DictReader(csvf ,delimiter="\t")
        
    # Convert each row into a dictionary
    # and add it to data
    for i, rows  in enumerate(csvReader):
      data = []
      #specifies the objects in order
      data.append(rows['Longitude [degrees_east]'])
      data.append(rows["Latitude [degrees_north]"])
      
      obj["data"+str(i)] = data
      # how many datapoint that will be displayed
      if i == 100:
        break

  # Open a json writer, and use the json.dumps()
  # function to dump data
  with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
    jsonf.write(json.dumps(obj, indent=4))
        
# Driver Code

# Decide the two file paths according to your computer system
csvFilePath = r'MapDataPoints.csv'
jsonFilePath = r'jsondata.json'

# Call the make_json function
make_json(csvFilePath, jsonFilePath)


