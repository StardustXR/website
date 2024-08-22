---
sidebar_position: 1
---

# Overview

Stardust XR _(formerly known as Stardust)_ is an XR [display server](https://itsfoss.com/display-server) designed for Linux-based systems<!-- (possibly most unix-based too, but untested)-->.<br/>
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

![simplified architecture diagram](./simplified-architecture.png)

## Projects & Components

- [**telescope**](https://github.com/StardustXR/telescope): bundle most used components to have a demo environment set up
- [**server**](https://github.com/StardustXR/server): Reverence implementation of the StardustXR server (similar to wayland's `weston`)
- [**core lib**](https://github.com/StardustXR/core): Rust crates and schemas for connecting stardust server and client
- [**website**](https://github.com/StardustXR/website): The location where documentation is done and the website is generated from
- [**protostar**](https://github.com/StardustXR/protostar): Demo application launcher (like `nwg-drawer`, ...)
- [**black hole**](https://github.com/StardustXR/black-hole): Spatial storage for stardust xr
- [**gravity**](https://github.com/StardustXR/gravity): "Utility to launch apps and stardust clients spatially" ?!? is it an ap lancher like protostar? I could not got it to work ...
- [**magnetar**](https://github.com/StardustXR/magnetar): Workspaces client
- [**atmosphere**](https://github.com/StardustXR/atmosphere): Environment, homespace, and setup client
- [**orbit**](https://github.com/StardustXR/orbit): Simple Panel Item UI ?!?
- [**comet**](https://github.com/StardustXR/comet): Annotate things?!?
