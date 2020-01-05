# Specify base image
FROM node:alpine
# Working directory inside the container where to copy the app
WORKDIR /usr/app
# Copy only the package json to avoid re installing every time there is a change in other files.
COPY ./package.json ./
# Install the packages just when there has been a change in package.json
RUN npm install
# Copy all the other files
COPY ./ ./
# Startup command
CMD ["npm", "start"]