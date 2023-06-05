const { Worker } = require("worker_threads");

//create the shared buffer
const sharedBuffer = new SharedArrayBuffer(10000);
const buffer = new Uint8Array(sharedBuffer);
//we feed the buffer with a value,
//in this case the 5 is just a random number that I selected
buffer.fill(1);

console.log("buffer before modify: ", buffer);

//create worker and pass the shared buffer
const worker = new Worker("./worker.js", {
  workerData: { sharedBuffer },
});

//execute the worker
worker.once("message", () => {
  console.log("buffer after modify:", buffer);
});
