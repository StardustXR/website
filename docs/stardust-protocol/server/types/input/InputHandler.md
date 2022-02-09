---
sidebar_position: 1
---
# InputHandler
## Derived from [Spatial](../Spatial) (`scalable: false`)

A handler to allow clients to recieve input. Won't send input through the callback if disabled.

## Methods
### `setField(string field)`
Sets the field this input handler will use.

### `setCallback(string callbackPath, string callbackMethod)`
Sets the callback this input handler will use.

### `setActions(Vector<String> actions)`
Specify all compatible action names (human-readable).

### `Vector<String> getActions(null)`
Get a list of all action names (human-readable).

### `setActions(Vector<String> actions)`
Set all the objects on this input handler to `actions`.

### `runAction(String actionName)`
Runs the action specififed by `actionName`.