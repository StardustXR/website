---
sidebar_position: 2
---

# Technical Overview

## Server

The server is what renders all the meshes of each client, takes in input from input methods, and spits out input to input handlers according to the SUIS (Spatial Universal Interaction System). As well, the server has a built-in Wayland compositor so all 2D applications can be used. It is the glue of Stardust, allowing any number of clients and apps to work in harmony while allowing the user full control in an intuitive way.

As new technologies come out, keeping the same server and trying to progressively upgrade it may lead to bloat and issues, so the protocol is designed to make creating new servers possible without too much hassle or to make servers modular. The design is highly inspired by game engines and display servers.

### Reference Server

Stardust has a reference server, but unlike other display servers this reference server is just as functional as any other Stardust server would be, because all the functionality is implemented in the clients. The server is just the glue.

The reference server uses Bevy as it is built to be highly flexible and entirely written in rust for stability and speed.

## IPC

The Stardust XR IPC uses Unix domain sockets for communication and a protocol based on flatbuffers/flexbuffers.

## Protocol

The Stardust XR protocol is object-oriented, depending on a scenegraph on the server end and scenegraph or functionally equivalent structure on the client end. This allows easier implementation of the protocol while still remaining fast and reliable.

## Clients

The clients tell the server what models to draw, where they would like to accept input in, etc. Stardust clients are much more suited to widgets or user interfaces to 2D apps.

## Architecture

```mermaid
graph TD
    OpenXR

    OpenXR -->|Frame Data| Bevy
    OpenXR -->|Input Data| Bevy

    subgraph Server[Stardust Reference Server]
    		Bevy[Bevy]
        InternalSceneGraph[Internal Client Scenegraph]
        WC1[Wayland Compositor]
        DBusConnection[D-Bus Connection]

        ClientSceneGraph -->|Drawable Objects| Bevy
        OpenXR -->|Controller, Hand & HMD Data| InternalSceneGraph
        InternalSceneGraph -->|Panel Items| ClientSceneGraph
        InternalSceneGraph -->|Controller, Hand & HMD Export| DBusConnection
        WC1 -->|Panel Item| InternalSceneGraph
        WC1 -->|Textures| Bevy
        Bevy -->|Rendered Images| OpenXR

        subgraph C1[Stardust Client 1]
        	ClientSceneGraph[Client Scenegraph]
        end
    end

    StardustSocket[Stardust Socket]
    SessionBus[D-Bus Session Bus]
    WaylandSocket[Wayland Socket]

    WC1 <--> WaylandSocket
    DBusConnection --> SessionBus
    C1 <--> StardustSocket

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

    StardustSocket <--> libstardustxr
    SessionBus -->|HMD Spatial Reference| Fusion


    WaylandClient[Wayland Client]
    WaylandClient <--> WaylandSocket
```
