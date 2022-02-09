# /field

Object managing fields for interaction.

## Signals
### `createBoxField(string name, string spacePath, Vector3 origin, Quaternion orientation, Vector3 size)`
Creates a new [BoxField](../types/field/BoxField.md) at `/field/[name]` with parent at `spacePath`.

### `createCylinderField(string name, string spacePath, Vector3 origin, Quaternion orientation, float length, float radius)`
Creates a new [CylinderField](../types/field/CylinderField.md) at `/field/[name]` with parent at `spacePath`.

### `createSphereField(string name, string spacePath, Vector3 origin, float radius)`
Creates a new [SphereField](../types/field/SphereField.md) at `/field/[name]` with parent at `spacePath`.