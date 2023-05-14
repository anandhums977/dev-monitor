# dev-monitor 


![dev-monitor](https://i.ibb.co/pfhxBQL/logo-no-background.png)


A simple tool to monitor changes in your Node.js application and restart it automatically.


## Installation 🛠️

Use the package manager [npm](https://www.npmjs.com/) to install dev-monitor.

bash
npm i dev-monitor


## Usage 📘 

bash
dev-monitor [your node app]


# example 
dev-monitor ./server.js




## How its works ⚙️

dev-monitor uses the [chokidar](https://www.npmjs.com/package/chokidar) package to watch for changes in the main file of your Node.js application, as well as all JavaScript, TypeScript, and JSON files in the same folder and its subfolders except for the ones in the node_modules folder. Whenever a change is detected, dev-monitor restarts the Node.js process automatically.

## Important Note ⚠️

Fixed issue with executing TS files in versions 1.0.4 and lower. We strongly recommend upgrading to version 1.0.5 or higher to ensure proper functionality.



## License  📜

[MIT](https://choosealicense.com/licenses/mit/)