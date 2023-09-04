#!/bin/bash

# Start Docker containers for MongoDB, MySQL, and Redis
docker start mongodb mysql redis

# Change to the directory where your applications are located
cd I:/ChatApps2

# Start each application in a new cmd window
# Replace the paths and commands with your actual setup
cd ./app  && start cmd /k "npm start"

cd ./profile && start cmd /k "uvicorn app:app --reload --port 3500"

cd ./auth && start cmd /k "npm run dev"

cd ./auth && start cmd /k "npm run devStart"

cd ./client_app && start cmd /k "npm run dev"

