# /spatial

Object managing spatial objects and spatial manipulation.

## Signals
### `createSpatial(string name, string spacePath, Vector3 origin, Quat orientation, Vector3 scale, bool translatable, bool rotatable, bool scalable)`
Creates a new [Spatial](../types/Spatial.md) at `/spatial/spatial/[name]` with parent at `spacePath`.

### `createZone(string name, string fieldPath, string spacePath, Vector3 origin, Quat orientation, string callbackPath, string callbackMethod)`
Creates a new [Zone](../types/Zone.md) at `/spatial/zone/[name]` with parent at `spacePath` and field at `fieldPath`. The arguments `callbackPath` and `callbackMethod` refer to a callback method accepting a `Vector` of 2 `TypedVector`s, the first being a list of names of nodes that have just entered the field and the second being names of nodes that left (as `string`). 