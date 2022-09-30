# PointerInput
### Derived from [InputMethod](../InputMethod)

An input method for pointers, such as the Daydream's remote, a pointer put on an Index controller, Oculus style laser mouse, and your desktop's mouse in flatscreen.

The local space for a pointer is where +Z is along the pointer's direction, +X is to the right of the pointer when laying face up, and +Y is upward when laying face up.

## Serialization
| Key       | Value Type   |
|-----------|--------------|
| origin    | `Vector3`    |
| direction | `Vector3`    |
| tilt      | `float`      |
| datamap   | `Dictionary` |

## Datamap
### Required
| Key    | Value Type                                | Description                                                                                                                                                                     |
|--------|-------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| select | `float` (range `0.0`-`1.0`)               | Whether the pointer is attempting to select an object, usually through trigger. 1.0 is selected, 0.0 is not selected, and inbetween is to add smoothness to the interaction.    |
| grab   | `float` (range `0.0`-`1.0`)               | How much the pointer is attempting to grab an object. 0.0 is not grabbing at all, 1.0 is grabbing the strongest, and inbetween is to add smoothness.                            |
| scroll | `Vector2` (component range `-0.5`-`0.5`) | The amount to scroll on this input tick (sensitivity determined on the receiving client). Can be used for 2D scrolling as well as adjusting depth/size when grabbing an object. |
### Built in
| Key    | Value Type                                | Description                                                                                                                                                                     |
|--------|--------------|-----------------------------------------------------------|
| deepestPointDistance | `float` (>=`0.0`) | The distance along the ray where the deepest surface point resides. |
| type | `string` |  The type of pointer. Can be one of `"eyes"`, `"mouse"`, `"controller"`, `"gaze"`, `"generic"` |

## Methods
### `setDirection(Vector3 direction)`
Sets the direction the pointer is pointing in stage space.
### `setTilt(float angle)`
Sets the tilt of the pointer (rotation about the pointer direction) clockwise in radians.
### `setOrientation(Vector3 direction, float angle)`
Sets the direction and tilt of the pointer to save on IPC calls.
### `setPose(Vector3 origin, Vector3 direction, float angle)`
Sets the origin, direction, and tilt of the pointer to save on IPC calls.
