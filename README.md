# Practice Makes Permanent

Practice Makes Permanent is a Web Application that allows users to record practice information through each repetition and receive a score based on positve, neutral, or negative reps.  The app requries users to state a goal for each session and includes a timer to record time on task.  Additionally,  users can track their history to compare scores over time.

![MVP_demo_1](https://user-images.githubusercontent.com/59206068/93688056-89a4da00-fa88-11ea-9649-f95af0e4a5fc.gif)

![MVP_demo_2](https://user-images.githubusercontent.com/59206068/93687949-c2907f00-fa87-11ea-9431-20e00641641c.gif)

## Functionality:
* user input of username, pracice goals, and time on task dynamically upates interdependent stateful components on the page
* working timer with pause and restart
* user interface that allows user input to track plus, check, and minus on a counter that assigns a score upon completion of session
* modal that displays results from a session including a score and time on task
* a history modal that includes user's timestamped scores from previous sessions
* dispays a random pro-tip for young musicians on page refresh

## Technology:
##### Front End
* [React] w/ hooks
* [MaterialUI]
##### Back End
* [node.js]
* [Express]
* [MySQL]
##### Developer Tools
* [WebPack]
* [Babel]
* [NPM]

## Installation:
```sh
cd into forked folder

$ npm install
$ npm run start
Navigate to localhost:5000/
```


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [React]: <https://reactjs.org/>
   [MySQL]: <https://www.mysql.com/>
   [WebPack]: <https://webpack.js.org/>
   [Babel]: <https://babeljs.io/>
   [NPM]: <https://www.npmjs.com/>
   [MaterialUI]: <https://material-ui.com//>
