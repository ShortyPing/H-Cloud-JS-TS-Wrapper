# JavaScript & TypeScript - Hetzner-API Wrapper
Licensed under the MIT licensed, created by Michael Steinmötzger
<br>
### NPM Package
![npm](https://img.shields.io/npm/v/hetzner-cloud-js-ts-wrapper?style=flat-square)

## Installation
``npm install hetzner-cloud-js-ts-wrapper``

## Tutorials

```typescript
import {HetznerCloud} from "./HetznerCloud";

// API-Token available in the Hetzner-Cloud Dashboard
const cloud = new HetznerCloud("token");

// Get all servers
cloud.getServerManager().getAllServers().then(servers => {
    // your code...
})

// create a server
cloud.getServerManager().createServer({
    //...
}).then(response => {
    // your code...
})

// delete a server
cloud.getServerManager().deleteServer(/*serverid*/).then(() => {
    //your code...
})
```