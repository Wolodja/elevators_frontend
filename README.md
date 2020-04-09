## Elevator Simulation Backend

Angular 9.1 program. GUI for elevator application. 

There are two types of requests that the program can send: 
1. Request for elevator from floor in UP / DOWN direction
2. Request inside elevator


##Backend for elevator app

To use this program you need first run Java Spring Boot application that simulates the work of elevator logic engine.

https://github.com/Wolodja/elevator_backend
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

In porgram you will need to provide two parameters:
- Number of elevators = 3
- Number of floors = 12

If you want to use other values please change them first in Java program in file application.properties.
Path: `elevator_backend/src/main/resources/application.properties`
