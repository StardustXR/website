# Field
### Derived from [Spatial](../Spatial)
Type that contains methods all Fields share. All fields created are under  `/field`. See [/field](../../objects/field.md) for the field factory.

## Methods
### `double distance(string spacePath, Vector3 point)`
Returns the distance from `point` to the surface of the object, positive if the point is outside and negative if inside. When `point` is far enough away the object will give an approximate distance to the origin instead of the surface.

### `Vector3 normal(string spacePath, Vector3 point)`
Returns the normal of `point` compared to the surface of the object. Normal always points toward object.

### `Vector3 closestPoint(string spacePath, Vector3 point)`
Returns the closest point from `point` to the surface of the object. Use this instead of `distance` and `normal` when best to limit IPC calls.