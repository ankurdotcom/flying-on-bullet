# Use the official Node.js image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.*json ./
RUN npm install

# Copy the application code
COPY ./src ./src

# Expose the app's port
EXPOSE 4000

# Start the application
CMD ["node", "app.js"]
