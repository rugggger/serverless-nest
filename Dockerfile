# Step 1: Build stage
FROM node:20 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the NestJS application
RUN npm run build

# Step 2: Production stage
FROM public.ecr.aws/lambda/nodejs:20
WORKDIR ${LAMBDA_TASK_ROOT}

# Copy the built application from the builder stage
COPY --from=builder /app/dist ${LAMBDA_TASK_ROOT}

# Install necessary packages for AWS Lambda
COPY --from=builder /app/package*.json ./
RUN npm install --only=production

CMD ["serverless.handler"]
