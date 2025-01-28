# Stage 1: Build the frontend
FROM node:20 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Build the frontend (this will generate static files in the build folder)
RUN npm run build

# Stage 2: Serve the app (using NGINX or any other web server)
FROM nginx:alpine

# Copy the build files from the previous stage to the NGINX container
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port
EXPOSE 3000

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]

