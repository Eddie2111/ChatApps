# ChatApps

## Description

This is an under contruction social media platform cloning facebook and discord together. It is using
multiple backends as well as 60:40 client side and server side rendering as well.

This application is focusing on multi service architecture to achieve all the backend services of facebook.
I am trying to create a clone of facebook that is supposed to have same amount of services as facebook has.
The project is under development. If you wish to work on this project, do mail me at [tarek42223@gmail.com]

This project has multiple backends composing multiple databases:

- NodeJS, Flask, FastAPI, (GoLang, proposed, not yet implemented)
- MySQL, Mongo, Redis, Neo4j

## features gained

- dark mode/light mode added
- smooth scroll
- Authentication
- chatting system
- upgrade frontend to next13 app
- post creation
- post upload system
- post preview system + images

## QA tests follow up

- change the auth token checking strategy to direct port token checking
- fix userdata of profiles page
- application is 60% client side with faulty structures
- build is corrupted, fix all data types (least priority)
- avoid JSDocs, not necessary.
- posts working perfectly for loadups, extend to pushdowns
- client_app has too many updates, app is no longer functional against backend systems

## Under progress

- chatting system with profiles
- see other profiles existing
- profile search options
- profile and profile system with context
- one command system up script *****

## features required

- indentity setup
- session management accross all services
- chatting, profile with identity
- friends and connection
- friends post show up

### Frontend

- React:18
- tailwindcss
- nextUI
- Socket.io-client

### Backend

- Auth :
        - nodejs
        - express
        - prisma: mysql
- backend :
        - nodejs
        - express: socket.io
        - mongoose: mongo
- profile :
        - python
        - fastapi
        - mongo
        - rate limite: redis
        - [Zookeeper : Kafka]
- CDN :
        - python
        - flask
        - rate limite: redis
        - os

### Dev Tools

- Docker
- mysqlDB
- mongoDB
- ZooKeeper : Kafka

### Pending

- react DND + react dnd backend html

### progress

## client_app

- login page added
- signup page added
- chat page added
- nextUI added
- navbar added
- footer added
- home page as posts added
- lenis scroll added
- google eslint added **

## backend

- socket io added
- chat schema built
- cors added
- chat rooms created

## auth

- express created
- prisma initated : mysql
- User, Group models added
- model functions added
- validation functions added

## profile

- data types
- get and post methods
- cors set up
- mongoDB integration : create, read
- singleton connection: Mongo, Kafka
- rate limiting using redis and fastapi_rateLimit
