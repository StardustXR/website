---
sidebar_position: 2
---

# Technical Overview

## Server
The server is what renders all the meshes of each client, takes in input from input methods, and spits out input to input handlers according to the SUIS (Spatial Universal Interaction System). As well, the server is going to be part Wayland compositor and OpenXR runtime so all 2D and XR applications can be used together at once (if the hardware allows). It is the glue of Stardust, allowing any number of clients and apps to work in harmony while allowing the user full control in an intuitive way.

As new technologies come out, keeping the same server and trying to progressively upgrade it may lead to bloat and issues, so the protocol is designed to make creating new servers possible without too much hassle or to make servers modular. Old interfaces can be deprecated without breaking the overall system, and new interfaces can be added if needed due to the object-oriented design. The design is highly inspired by game engines, however the reference server is made in StereoKit due to it being more optimal.

### Reference Server
Stardust has a reference server, but unlike other display servers this reference server is just as functional as any other Stardust server would be, because all the functionality is implemented in the clients. The server is just the glue.

The reference server uses StereoKit as its backend for many reasons:
- Much more lightweight than any other framework/other engine
  - It was originally designed to run AR apps on HoloLens, and now it works on Quest
  - It's able to render thousands of objects on a HoloLens without breaking a sweat
- Does not include unnecessary features that slow down performance
  - Physics and UI are not needed for Stardust, but those do not actively run and can always have an option to not be compiled at all.
- Uses C-style C++ meaning not bytecode or interpreted (however has a C# API that is not used by Stardust)
- Uses immediate mode rendering meaning the logic is many times easier to implement
- Exposes its rendering insides whenever needed
  - Very needed for Wayland when it needs to display EGL Wayland surface textures on meshes
  - Overriding the depthbuffer per-pixel in fragment shader is useful for XR depth compositing
- Is constantly getting new updates faster than most engines
  - World semantics for OpenXR was implemented ~1 week after the official OpenXR extension release
- Is optimized to load resources JIT
  - Many game engines are best at caching their assets, but this is not practical in a display server
- Uses OpenXR as its backend out of the box

## IPC
The Stardust XR IPC uses Unix domain sockets for communication and a protocol based on flatbuffers/flexbuffers.

## Protocol
The Stardust XR protocol is object-oriented, depending on a scenegraph on the server end and scenegraph or functionally equivalent structure on the client end. This allows easier implementation of the protocol while still remaining fast, reliable, and extensible.

## Clients
The clients tell the server what models to draw, where they would like to accept input in, etc. Stardust clients are much more suited to widgets or user interfaces to 2D/XR apps.