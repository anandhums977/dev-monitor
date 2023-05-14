# dev-monitor 


![dev-monitor](https://camo.githubusercontent.com/eeae130556dacca3508881399bbe364f070d73fefe462e814a1060ec6f781d4c/68747470733a2f2f692e6962622e636f2f7066687842514c2f6c6f676f2d6e6f2d6261636b67726f756e642e706e67)


A simple tool to monitor changes in your Node.js application and restart it automatically.

## Installation 🛠️

Use the package manager [npm](https://www.npmjs.com/) to install dev-monitor.

```bash
npm i dev-monitor
```

## Usage 📘 

```bash
dev-monitor [your node app]


# example 
dev-monitor ./server.js


```

## How its works ⚙️

dev-monitor uses the [chokidar](https://www.npmjs.com/package/chokidar) package to watch for changes in the main file of your Node.js application, as well as all JavaScript, TypeScript, and JSON files in the same folder and its subfolders except for the ones in the node_modules folder. Whenever a change is detected, dev-monitor restarts the Node.js process automatically.


## Important Note ⚠️

Fixed issue with executing TS files in versions 1.0.4 and lower. We strongly recommend upgrading to version 1.0.5 or higher to ensure proper functionality.



## License  📜

[MIT](https://choosealicense.com/licenses/mit/)
