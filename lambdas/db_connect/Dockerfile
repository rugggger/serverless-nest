# Use the Amazon Linux 2 base image for Lambda
FROM public.ecr.aws/lambda/python:3.12

# Copy the function code
COPY . .


# Install dependencies (if any)
RUN pip install requests psycopg2-binary

# Define the command to run the Lambda function handler
CMD ["app.lambda_handler"]
