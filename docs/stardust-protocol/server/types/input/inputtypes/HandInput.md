# HandInput
### Derived from [InputMethod](../InputMethod)

A full 27-bone hand+forearm input with useful abstractions provided through the datamap.

The local space of a hand is where +Z is away from the palm, +Y is from the palm to the fingers, and +X is orthogonal and to the right.

## Serialization
| Key       | Value Type   |
|-----------|--------------|
| origin    | `Vector3`    |
| direction | `Vector3`    |
| tilt      | `float`      |
| datamap   | `Dictionary` |

```js
[
	thumb metacarpal,
	thumb proximal,
	thumb distal,
	thumb tip,
	index metacarpal,
	index proximal,
	index intermediate,
	index distal,
	index tip,
	middle metacarpal,
	middle proximal,
	middle intermediate,
	middle distal,
	middle tip,
	ring metacarpal,
	ring proximal,
	ring intermediate,
	ring distal,
	ring tip,
	little metacarpal,
	little proximal,
	little intermediate,
	little distal,
	little tip
]
```
(This section is WIP)

## Datamap
### Required
| Key             | Value Type                  | Description                                                        |
|-----------------|-----------------------------|--------------------------------------------------------------------|
| confidence      | `float` (range `0.0`-`1.0`) | How confident the hand tracker is of the pose of the hand          |
| isLeft   | `bool` | `true` if this hand is the left hand, `false` if not |
| pinchStrength   | `float` (range `0.0`-`1.0`) | How much the hand is pinching                                      |
| pinchDistance   | `float` (>`0.0`)            | The distance in meters between the thumb and index finger |
| grabStrength    | `float` (range `0.0`-`1.0`) | How much the hand is making a fist                                 |

## Methods
**TODO**: Properly secured field distance calculation accessible to clients