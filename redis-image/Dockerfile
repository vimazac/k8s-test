# Use an existing docker image as a base
From alpine

# Download and install a dependency the apk comes pre installed in alpine image
# We made use of alpine because of this program apk to help us install redis
RUN apk add --update redis
RUN apk add --update gcc
# Docker use its cache when the order of operations has not changed

# Tell the image what to do when it starts as a container
CMD ["redis-server", "--protected-mode", "no"]

