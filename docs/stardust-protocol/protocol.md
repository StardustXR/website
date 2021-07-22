---
sidebar_position: 1
---

# Protocol

## Data
Every message uses [flatbuffers](https://google.github.io/flatbuffers/) and [flexbuffers](https://google.github.io/flatbuffers/flexbuffers.html) to add variant data such as method arguments and return values. The Stardust XR Message schema is:

```cpp
namespace StardustXR;

table Message {
	type: ubyte;
	id: uint;
	object: string;
	method: string;
	error: string;
	data:[ubyte] (flexbuffer);
}

root_type Message;
```

## Message Types
All fields not accounted for are assumed to be not included or `0` or `""`

### Error

| Field Name | Value |
|-:|:-|
| `type` | `0` |
| `id` | `0` or ID of method call |
| `object` | Path to the object the error comes from |
| `method` | What method caused the error (if applicable, otherwise this is an empty string) |
| `error` | String containing the error message itself |
| `data` | Empty vector |

### Signal
Signals are method calls that do not expect a response of any kind.

| Field Name | Value |
|-:|:-|
| `type` | `1` |
| `object` | Path to object to send signal to |
| `method` | Name of the method to execute |
| `data` | Flexbuffer containing arguments to pass to remote method |

### Method Call
Method calls allow for remote procedure calling.

| Field Name | Value |
|-:|:-|
| `type` | `2` |
| `id` | Dynamically generated ID to identify method return for this method |
| `object` | Path to object to execute method on |
| `method` | Name of the method to execute |
| `data` | Flexbuffer containing arguments to pass to remote method |

### Method Return
Message to pass the return value back to the program.

| Field Name | Value |
|-:|:-|
| `type` | `3` |
| `id` | The same as the message call's ID |
| `data` | Flexbuffer containing return value |

## Data Types
Stardust does not support the `Map` or `FixedTypedVector` flexbuffers datatypes.
### Color
A `Vector` of 4 `float` is treated as a `Color` in the form `RGBA`.
### Vector2
A `Vector` of 2 `double` is treated as a `Vector2`.
### Vector3
A `Vector` of 3 `double` is treated as a `Vector3`.
### Quaternion
A `Vector` of 4 `double` is treated as a `Quaternion`.