# /environment

## Signals
### `visible(bool enable)`
Enable or disables the skybox visibility (lighting remains active). This is not meant to be used for an additive AR mode as StereoKit will perform that when the OpenXR runtime indicates the layer's blend mode is additive.

### `setSkytex(string path)`
Sets the sky texture to be the image (HDR) at the absolute `path`.

### `setLighting(string path)`
Sets the ambient lighting (using spherical harmonics) to the HDR at the absolute `path`.