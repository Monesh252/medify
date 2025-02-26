# Use the official Node.js 18 LTS image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Expose the port your app runs on
EXPOSE 3001

# Set environment variables from the .env file (Docker Compose is better for this)
CMD ["node", "index.js"]
