import json
from dbclient.getUsers import getUsers



def lambda_handler(event, context):
    print("lambda_handler running")
    getUsers()

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Docker Lambda!')
    }
