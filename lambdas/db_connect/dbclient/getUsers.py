import psycopg2
from psycopg2 import sql

# Define your database connection parameters
DB_HOST = "localhost"
DB_NAME = "docu"
DB_USER = "admin"
DB_PASSWORD = "admin"
DB_PORT = "5432"  # Default PostgreSQL port

def getUsers():
    print("get users")
    try:
        # Establish the connection
        connection = psycopg2.connect(
            host=DB_HOST,
            database=DB_NAME,
            user=DB_USER,
            password=DB_PASSWORD,
            port=DB_PORT
        )

        # Create a cursor object
        cursor = connection.cursor()

        # Execute a SQL query
        cursor.execute("SELECT * from users")

        # Fetch all rows from the query result
        users = cursor.fetchall()

        # Print out each document
        for user in users:
            print(user)


        # Fetch one result
        record = cursor.fetchone()
        print(f"Connected to - {record}\n")

    except Exception as error:
        print(f"Error connecting to PostgreSQL database: {error}")

    finally:
        # Close the connection
        if connection:
            cursor.close()
            connection.close()
            print("PostgreSQL connection is closed.")
