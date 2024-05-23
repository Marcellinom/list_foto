# Use the official Node.js image as a base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the application code
COPY . .

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 8080

# Command to run the app
CMD ["npm", "start"]