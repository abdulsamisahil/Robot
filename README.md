# Robot Programming Test

This repository is a test assignment from the Devoteam, builded by Abdul Sami Sahil (2022 May 20).

![Robot Image](frontend\public\image\Robot.JPG?raw=true 'Title')

Download the repository and open it in a text editor, (VS code recommended) and then make sure you have all the dependencies, kindly run the following commands prior to running the system:

cd frontend

### `npm install`

cd backend

### `npm install`

Now from the root directory you may run:

### `npm start`

By running the above command, Client and Server both will run at the same time.

To run the unit tests and to test the robot logic, from the root directory run:

### `npm run test`

It will run the 9 tests that were made.

### Description

It is a little fullstack application, that takes x, y and facing direction as inputs from the client, and return its' position back.
The client can also command the robot by commanding like L to turn left, R to turn right and F to move forward. The client firstly decide the room's widht and depth by adding a x and y value.

### Architecture

It is a client server architecture

### Development Enviornment

Language: TypeScript
Node.js
React.js
Bootstrap 5 as the CSS framework
