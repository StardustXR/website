# /

Object managing the client/server relationship as a whole.

## Signals
### `subscribeLogicStep(string path, string method)`
Executes `method` on object at `path` on the client when the main logic loop of the server starts each frame.

`method` must have arguments of `(double delta, double timeToRender)`. 

`delta` gives the time in seconds between the current time and the last time the logic loop executed while `timeToRender` gives the time in ms since epoch when the current frame is expected to reach the user's eyes (returns 0 for now).

### `disconnect(null)`
Lets the server know that the client wishes to disconnect. After this it can be assumed the client is disconnected from the server.
