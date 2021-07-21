---
sidebar_position: 2
---

# Spatial
### Derived from [[Node]]
A base type for types that exist in 3D space, always relative to another space or the engine's world space. Spatials are always relative because in AR or XXR reference spaces change constantly in response to new environments.

## Internal Properties
Sometimes it makes sense for a Spatial to not be scalable (like in [[Field]]s where scaling dramatically increases the number of steps to raymarch for pointers) or not be rotatable (point lights) or such, so these are disabled for certain Spatial-derived objects, mentioned right after "Derived from [[Spatial]]".
### `translatable: bool`
If false, object's origin cannot be modified from a client.
### `rotatable: bool`
If false, object's rotation cannot be modified from a client (e.g. point lights, point sound sources).
### `scalable: bool`
If false, object's scale cannot be modified from a client (e.g. [[Field]]s, [[PointerInput]]s).

## Methods
### `move(Vector3 position)`
Moves the Spatial relative to itself if `translatable` is not `false`.

### `rotate(Quat rotation)`
Rotates the Spatial relative to itself if `rotatable` is not `false`.

### `rotateAround(Vector3 point, Quat rotation)`
Rotates the Spatial around `point` (relative to itself) if `rotatable` is not `false`.

### `scale(float scale)`
Multiplies the Spatial's scale vector by `scale` if `scalable` is not `false`.

### `setOrigin(Vector3 origin)`
Sets the origin to `origin` if `translatable` is not `false`.

### `setOrientation(Quat orientation)`
Sets the orientation to `orientation` if `rotatable` is not `false`.

### `setScale(Vector3 scale)`
Sets the scale to `scale` if `scalable` is not `false`.

### `setPose(Vector3 origin, Quat orientation)`
Sets the pose relative to the Spatial's space if `translatable` and `rotatable` are true. This method saves on IPC calls compared to `setOrigin` and `setOrientation` in sequence.

### `setTransform(Vector3 origin, Quat orientation)`
Sets the transform relative to the Spatial's space if `translatable`, `rotatable` and `scalable` are true. This method saves on IPC calls compared to `setOrigin`, `setOrientation`, and `setScale` in sequence.

### `setSpatialParent(string parentPath)`
Sets the spatial parent of this `Spatial` while keeping the "absolute" position in space intact.