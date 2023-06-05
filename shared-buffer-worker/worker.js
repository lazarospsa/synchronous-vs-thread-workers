const { parentPort, workerData } = require("worker_threads");

//access the shared buffer
const buffer = new Uint8Array(workerData.sharedBuffer);

for (let i = 0; i < buffer.length; i++) {
  //we do some calculations to change the value of selected buffer
  //8 is just a random number
  buffer[i] = 8 + i;
}

parentPort.postMessage("done");
