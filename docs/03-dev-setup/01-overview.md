---
sidebar_position: 1
---
# Overview

This guide will teach you how to setup a complete Stardust XR setup from scratch. This guide will assume that you already have a working OpenXR setup.

## Projects & Components

### Server

The [Stardust XR reference server](https://github.com/StardustXR/server) is the root space that all clients connect to and show up in. It must be run before any clients, but can autostart clients itself for full setups.

### Clients

- [**armillary**](https://github.com/StardustXR/Armillary): A 3D model viewer for Stardust XR; rotate, move, and display models in your XR space 
- [**atmosphere**](https://github.com/StardustXR/atmosphere): A 3D environment viewer
- [**black hole**](https://github.com/StardustXR/black-hole): Universal minimization of objects
- [**comet**](https://github.com/StardustXR/comet): Annotate in 3D wherever you want amongst your other apps!
- [**flatland**](https://github.com/StardustXR/flatland): Lets your 2D apps take from as a Panel in 3D space
- [**gravity**](https://github.com/StardustXR/gravity): Launch programs with a certain offset in 3D space
- [**non-spatial-input**](https://github.com/StardustXR/non-spatial-input): Provides utilities to port keyboard, mouse, and other input methods like libinput into Stardust XR
- [**protostar**](https://github.com/StardustXR/protostar): App launcher library and examples including futuristic hexagon launcher

### Rust crates

- [**core lib**](https://github.com/StardustXR/core): Rust crates and schemas for connecting stardust server and client
- [**molecules**](https://github.com/StardustXR/molecules): Higher level interaction toolkit crate for Stardust
- [**asteroids**](https://github.com/StardustXR/asteroids): Declaritive framework in Rust
- [**protostar**](https://github.com/StardustXR/protostar): App launcher library and examples including futuristic hexagon launcher

### Other

- [**telescope**](https://github.com/StardustXR/telescope): Prepackaged Stardust setup built primarily as an overlay
- [**website**](https://github.com/StardustXR/website): The location where documentation is done and the website is generated from

### Currently unmaintined

- [**magnetar**](https://github.com/StardustXR/magnetar): Example workspaces client
