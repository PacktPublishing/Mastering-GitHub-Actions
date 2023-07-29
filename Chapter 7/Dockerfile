# Use the official Node.js base image
FROM node:14

# Create a working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the index.js file from the host's dist directory to the container
COPY dist/* ./

# Specify the command to run the Node.js application
CMD ["node", "index.js"]
