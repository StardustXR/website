---
sidebar_position: 9
---

# Zone
### Derived from [Spatial](Spatial)
An object to manipulate compatible [Spatials](Spatial) inside its field, such as organizing/aligning widgets or creating workspaces, acting as an inertial reference frame or part of a multi-selection wand.


## Signals
### `bool isCaptured(string spatialUUID)`
Returns `true`/`false` if the [Spatial](Spatial) is captured by this zone or another, `null` if the [Spatial](Spatial) at `spatialUUID` is not accessible by this zone or does not exist.

### `capture(string spatialUUID)`
Captures the [Spatial](Spatial) at `spatialUUID` if that [Spatial](Spatial) exists and is accessible by this zone. This means that the [Spatial](Spatial) cannot be seen or affected by other zones unless a zone is closer to the [Spatial](Spatial) than this zone.

### `release(string spatialUUID)`
Uncaptures the [Spatial](Spatial) at `spatialUUID` so any zone the [Spatial](Spatial) is inside can access it.