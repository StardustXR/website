---
sidebar_position: 1
---

# Brief Overview

Stardust XR is an XR [display server](https://itsfoss.com/display-server) designed for Linux-based systems<!-- (possibly most unix-based too, but untested)-->.<br/>
Unlike traditional display servers that focus on 2D screens, Stardust XR introduces new conventions to utilize unbounded 3D space in virtual or real environments.

## Priorities

- **3D Environment Focus**: While supporting 2D clients through the Wayland protocol, Stardust XR primarily aims to create and manage 3D environments.

- **Standard Interfaces**: Utilizes Wayland and OpenXR for 2D and XR app integration.

- **Stardust Protocol**: Implements a special protocol for:
  - Creating virtual objects
  - Developing 3D UIs around 2D apps (Panel Shells)
  - Handling data as Items that can represent files, Wayland surfaces, etc.

- **Personal Device Interaction**: Focuses on individual user interactions rather than collaborative 3D spaces.

- **Flexible Object Interaction**: Users can choose objects that best suit their current scenario, with easy setup for default configurations.

## Architecture

```mermaid
graph LR
    OpenXR

    OpenXR -->|Frame Data| StereoKit
    OpenXR -->|Input Data| StereoKit

    subgraph Server[Stardust Server]
    		StereoKit[StereoKit]
        InternalSceneGraph[Internal Scenegraph]
        WC1[Wayland Client 1]
        DBusConnection[D-Bus Connection]

        ClientSceneGraph -->|Drawable Objects| StereoKit
        StereoKit -->|Controller, Hand & HMD Data| InternalSceneGraph
        InternalSceneGraph -->|Panel Items| ClientSceneGraph
        InternalSceneGraph -->|Controller, Hand & HMD Export| DBusConnection
        WC1 -->|Panel Item| InternalSceneGraph
        WC1 -->|Textures| StereoKit
        StereoKit -->|EGL Context| WC1
        ClientSceneGraph --> C1

        subgraph C1[Stardust Client 1]
        	ClientSceneGraph[Client Scenegraph]
        end
    end

    StardustSocket[Stardust Socket]
    SessionBus[D-Bus Session Bus]
    WaylandSocket[Wayland Socket]

    WC1 --> WaylandSocket
    WaylandSocket --> WC1
    DBusConnection --> SessionBus
    C1 --> StardustSocket

    subgraph StardustClient[Stardust Client 1]
        Fusion
        Molecules
        UserCode[User Code]

        Fusion --> Molecules
        Fusion --> UserCode
        Molecules --> UserCode

        subgraph Fusion
            libstardustxr[stardust-xr library]
        end
    end

    StardustSocket --> libstardustxr
    SessionBus -->|HMD Spatial Reference| Fusion


    WaylandClient[Wayland Client]
    WaylandSocket --> WaylandClient
    WaylandClient --> WaylandSocket
```

## Projects & Components

- [**armillary**](https://github.com/StardustXR/Armillary): A 3D model viewer for Stardust XR; rotate, move, and display models in your XR space 
- [**atmosphere**](https://github.com/StardustXR/atmosphere): 3D environment with natural momentum-based movement
- [**black hole**](https://github.com/StardustXR/black-hole): Universal minimization of Stardust objects
- [**comet**](https://github.com/StardustXR/comet): Annotate in 3D wherever you want amongst your other apps!
- [**core lib**](https://github.com/StardustXR/core): Rust crates and schemas for connecting stardust server and client
- [**flatland**](https://github.com/StardustXR/flatland): Allows Starust XR to run 2D linux applications 
- [**gravity**](https://github.com/StardustXR/gravity): Launch programs with a certain offset in 3D space
- [**magnetar**](https://github.com/StardustXR/magnetar): Example workspaces client
- [**non-spatial-input**](https://github.com/StardustXR/non-spatial-input): Provides utilities to port keyboard, mouse, and other input methods like libinput into Stardust XR
- [**protostar**](https://github.com/StardustXR/protostar): App launcher library and examples including futuristic hexagon launcher
- [**server**](https://github.com/StardustXR/server): Reference implementation of the StardustXR server (similar to Xorg)
- [**telescope**](https://github.com/StardustXR/telescope): Stable stardust setup for quick and easy usage
- [**website**](https://github.com/StardustXR/website): The location where documentation is done and the website is generated from
