# "https://strimi.s3-ap-southeast-2.amazonaws.com/85.jpg"
# "https://strimi.s3-ap-southeast-2.amazonaws.com/testVid2.mov"

#
#  Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
#
#  This file is licensed under the Apache License, Version 2.0 (the "License").
#  You may not use this file except in compliance with the License. A copy of
#  the License is located at
# 
#  http://aws.amazon.com/apache2.0/
# 
#  This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
#  CONDITIONS OF ANY KIND, either express or implied. See the License for the
#  specific language governing permissions and limitations under the License.
#
import boto3
import json
import decimal
import uuid
# dynamodb = boto3.resource('dynamodb', region_name='ap-southeast-2', endpoint_url="https://dynamodb.ap-southeast-2.amazonaws.com")

# # CREATE TABLE

# table = dynamodb.create_table(
#     TableName='Movies',
#     KeySchema=[
#         {
#             'AttributeName': 'id',
#             'KeyType': 'HASH'  #Partition key
#         }
#     ],
#     AttributeDefinitions=[
#         {
#             'AttributeName': 'id',
#             'AttributeType': 'S'
#         },
#     ],
#     ProvisionedThroughput={
#         'ReadCapacityUnits': 10,
#         'WriteCapacityUnits': 10
#     }
# )

# print("Table status:", table.table_status)

# # Wait until the table exists.
# table.meta.client.get_waiter('table_exists').wait(TableName='Movies')

# # Print out some data about the table.
# print(table.item_count)

# # INSERT DATA
# table = dynamodb.Table('Movies')

# for x in range(90):
#     tag=""
#     if (x < 30):
#         tag = "Slide_1 Title"
#     elif (x < 60):
#         tag = "Slide_2 Title"
#     else:
#         tag = "Slide_3 Title"
#     table.put_item(
#         Item={
#             "id": str(uuid.uuid1()),
#             'year': 2019,
#             'title': "title"+str(x),
#             'info': {
#                 "directors" : [
#                     "Alice Smith",
#                     "Bob Jones"
#                 ],
#                 "release_date" : "2013-01-18T00:00:00Z",
#                 "rating" : 5,
#                 "genres" : [
#                     "Comedy",
#                     "Drama"
#                 ],
#                 "plot" : "A rock band plays their music at high volumes, annoying the neighbors.",
#                 "rank" : 11,
#                 "running_time_secs" : 5215,
#                 "actors" : [
#                     "David Matthewman",
#                     "Ann Thomas",
#                     "Jonathan G. Neff"
#                 ]
#             },
#             "imgURL": "https://strimi.s3-ap-southeast-2.amazonaws.com/"+str(x)+".jpg",
#             "trailerURL": "https://strimi.s3-ap-southeast-2.amazonaws.com/testVid2.mov"
#         }
#     )
def main():
    homeData = []
    for x in range(3):

        title="Slide_"+str(x)
        data=[]

        for y in range(30):

            index = x*30+y

            Item = generateItem(index)

            data.append(Item)

        slide={
            "title":title,
            "data":data
        }

        homeData.append(slide)

    with open('data.json', 'w', encoding='utf-8') as f:
        json.dump(homeData, f, ensure_ascii=False, indent=4)
    
        

def generateItem(index):
    Item={
        "id": str(uuid.uuid1()),
        'year': 2019,
        'title': "title"+str(index),
        'info': {
            "directors" : [
                "Alice Smith",
                "Bob Jones"
            ],
            "release_date" : "2013-01-18T00:00:00Z",
            "rating" : 5,
            "genres" : [
                "Comedy",
                "Drama"
            ],
            "plot" : "A rock band plays their music at high volumes, annoying the neighbors.",
            "rank" : 11,
            "running_time_secs" : 5215,
            "actors" : [
                "David Matthewman",
                "Ann Thomas",
                "Jonathan G. Neff"
            ]
        },
        "imgURL": "https://strimi.s3-ap-southeast-2.amazonaws.com/"+str(index)+".jpg",
        "trailerURL": "https://strimi.s3-ap-southeast-2.amazonaws.com/testVid2.mov"
    }    
    return Item



if __name__ == "__main__":
    main()