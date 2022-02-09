---
sidebar_position: 3
---

# Model
### Derived from [Spatial](Spatial)
A graphical model. It will only show when enabled.

## Properties

### `setVisible(bool visible)`
Enables/disables visibility.

### `setOrigin(Vector3 origin)`
Sets the origin to `origin`. 

### `setOrientation(Quat orientation)`
Sets the orientation to `orientation`. 
<!--  -->
<!-- ### `setPose(Vector3 origin, Quat orientation)` -->
<!-- Sets the pose using `origin` and `orientation` absolutely. -->

### `destroy()`
Destroys the model instance. Resources like the mesh and material and textures may be in memory still, but the resource manager will clean it up if needed.

### `setMaterialProperty(uint32 submeshIndex, string propertyName, float value)`
### `setMaterialProperty(uint32 submeshIndex, string propertyName, Color value)`
### `setMaterialProperty(uint32 submeshIndex, string propertyName, string value)`
Sets the material property `propertyName` on this model's submesh at `submeshIndex` to `value`. Valid material names are:

| Name         | Type         | Description                                                                                  |
|--------------|--------------|----------------------------------------------------------------------------------------------|
|`color`       | `Color`      | Tint/multiply the shader's output color by this amount. (default is opaque white)            |
|`roughness`   | `float`      | Scale the metal texture's roughness by this amount                                           |
|`metallic`    | `float`      | Scale the metal texture's metalness by this amount                                           |
|`tex_scale`   | `float`      | Scale the UV coordinates of all textures by this amount                                      |
|`diffuse`     | `string`     | Path to the diffuse texture of the material (if it has one).                                 |
|`emission`    | `string`     | Path to the emission texture of the material (if it has one).                                |
|`metal`       | `string`     | Path to the metalness texture of the material (if it has one).                               |
|`normal`      | `string`     | Path to the normal map texture of the material (if it has one).                              |
|`occlusion`   | `string`     | Path to the occlusion map texture of the material (if it has one).                           |