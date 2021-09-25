---
sidebar_position: 2
---
# InputMethod
## Derived from [Spatial](../Spatial.md) (`scalable: false`)
Represents an input device generically, with specifics being fleshed out in subclasses.

## Internal Properties
### `type: uint8`
|   | Name         | Description                                                                                                 |
|---|--------------|-------------------------------------------------------------------------------------------------------------|
| 0 | `Global`     | A non-spatial input, used for power buttons and system volume and such                                      |
| 1 | `Controller` | Contains a pose and datamap for buttons, trackpad, joystick, grip, trigger, etc.                            |
| 2 | [`PointerInput`](inputtypes/PointerInput.md) | Defined by origin, direction, and tilt with datamap for buttons, trackpad, etc.                             |
| 3 | [`HandInput`](inputtypes/HandInput.md) | Contains a full 27-bone hand skeleton (including forearm) and datamap for abstractions like grip, pinch distance/point, etc. |

### `datamap: Dictionary`
See [Datamap:](#datamap)

## Internal Methods
### `distanceToField(string field)`
Returns the distance from this input to a field in meters. `field` is the name of the field, not the full path.

### `serialize()`
Returns a serialized version of the InputMethod, each serialized schema is shown under #Serialization in the respective Input subclasses.

## Serialization
| Key       | Value Type   |
|-----------|-------------|
| type    | `int`    |
| distance    | `float`    |

## Datamap
The datamap is a dictionary containing abstracted and raw data related to the input that clients can use to analyze input in the most optimal way. It has keys of type `Key`(Flexbuffers-specific, in any other language use a `String`) and values:

| Type      | Example Uses                     | Usage Notes                                                                                                                                        |
|-----------|----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| `bool`    | Digital buttons                  | If values are analog, use a `float` instead with `1.0` being considered `true`.                                                                      |
| `float`   | Analog trigger, grip             | For values such as grip/trigger, make the range `0.0`-`1.0`, for something like a scroll wheel `-0.5`-`0.5`.                                       |
| `Vector2` | Touchpad, joystick               | For values such as trackpad and joystick, make each component in the range of `-0.5`-`0.5` and calculate+apply deadzone before setting these values. |
| `Vector3` | Pinch position, grip axis vector | For points and directions, make this a value inside the  InputMethod's local space. Raw hand pose data should not be put in the datamap.           |
| `string` | Input device type/name | Device name such as `"valveindex"` and device type such as `"controller"` on a PointerInput. Useful for client devs to customize input to work best with these devices. |

Standard supported datamap keys will be put in the individual type's documentation, however you can put more data in and some input handlers may be able to use that data for better interactions.

## Methods
<!-- ### `setPosition(Vector3 point)` -->
<!-- Sets the position of this [InputMethod](../input/InputMethod). This pose also defines the main interaction point. -->

### `modifyDatamap(Dictionary data)`
Merges the datamap of this [InputMethod](InputMethod) with `data`. Each key here will add to the datamap if not present and set the existing value if present. Any key not present in `data` will be unaffected.