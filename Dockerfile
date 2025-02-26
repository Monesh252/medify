# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Expose the port the application runs on
EXPOSE 3001

# Define the command to run the application


# Set environment variable from .env file
CMD ["sh", "-c", "node index.js"]
