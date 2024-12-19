# portfolio-nodeJS-mySql

This is the backend database for the project <a href="https://github.com/wooiseong/portfolio-project-vercel/tree/main">portfolio</a>. It utilizes express to build a simple web application to collect feedback from users and generate appropriate responses.


## View
Desktop (1366px)
![image](https://i.ibb.co/F7gnw8G/2024-12-18-220154.png)

## Features
|          Code               | Description                                                  | 
| :--------------------------: | ------------------------------------------------------------ | 
|    200    | The feedback is successfully added to the database |
|      400       | The server could not understand the request because of invalid syntax | 
|      409        | Conflict: repeat submission of feedback with the same name  | 
|      500  | There is an error when adding the feedback to mySql database              | 


## Installation
Please follow the instructions to get a copy of this project.

### Prerequisites
 * <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">npm</a> 

### Clone
```sh
git clone https://github.com/wooiseong/portfolio-nodeJS-mySql.git
```

### Install pnpm packages
```sh
npm install
```

