# /drawable

Object managing anything drawable, from the skytex to models.

## Signals
### `createModelFromFile(string name, string spacePath, string path)`
Creates a new [Model](../types/Model.md) at `/model/[name]` with parent at `spacePath`.

### `setSkytex(string path)`
Sets the sky texture to be the image (HDR) at the absolute `path`.

### `setSkylight(string path)`
Sets the ambient lighting (using spherical harmonics) to the HDR at the absolute `path`.