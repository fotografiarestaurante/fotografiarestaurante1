# Base image
FROM node:20-slim

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the frontend
RUN npm run build

# Set production environment
ENV NODE_ENV=production

# Expose port 3000
EXPOSE 3000

# Start the server
CMD ["npm", "run", "dev"]
