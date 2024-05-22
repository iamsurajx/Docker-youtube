FROM ubuntu

# Update the package list
RUN apt-get update

# Install curl
RUN apt-get install -y curl

# Add NodeSource repository for Node.js
RUN curl -sL https://deb.nodesource.com/setup_18.x -o /tmp/nodesource_setup.sh
RUN bash /tmp/nodesource_setup.sh

# Install Node.js
RUN apt-get install -y nodejs

# Copy application files
COPY package.json package.json 
COPY package-lock.json package-lock.json 
COPY main.js main.js

# Install dependencies
RUN npm install

# Set the entrypoint
ENTRYPOINT ["node", "main.js"]
