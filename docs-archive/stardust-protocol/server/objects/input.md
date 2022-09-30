# /input

Object managing input and interaction.

## Signals
<!-- ### `registerPointerInput(string name, Vector3 origin, Vector3 direction, float tilt)` -->
<!-- Creates a new [PointerInput](../types/input/inputtypes/PointerInput.fbs) at `/input/methods/[name]` with the origin, direction, and tilt specified. -->

### `registerInputHandler(string name, string field, string spacePath, Vector3 position, Quat rotation, string callbackPath, string callbackMethod)`
Creates a new [InputHandler](../types/input/InputHandler.md) with the specified `name` and `field`, located relative to the space referenced in `spacePath` and the `postion` + `rotation`.


## Methods

### `Vector<Vector<string inputHandlerUUID, Vector3 position>> getInputHandlers(string spacePath, bool excludeSelf)`
Returns a list of all [InputHandler](../types/input/InputHandler.md) UUIDs and their positions (relative to the space at `spacePath`), as well as puts aliases to those handlers in `/input/global_handler/[UUID]`. Excludes handlers from this client if `excludeSelf` is true.