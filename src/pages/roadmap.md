---
title: Roadmap
---

# Roadmap

## 1.0 (Minimum Viable Product)

- [x] Core functionality
  - [x] IPC+RPC
- [x] Client
  - [x] Fusion
    - [x] Initial connection
    - [x] Node type creation/destruction
    - [x] Interface interaction
    - [x] Callbacks
    - [x] Documentation
- [x] Server
  - [x] Per-client scenegraph
  - [x] Statically link StereoKit
  - [x] Basic features
    - [x] Logic step
    - [x] Spatial transforms
      - [x] Absolute movement
      - [x] Relative movement
      - [x] Spatial parenting
    - [x] Models
      - [x] Loading
      - [x] Setting material parameters
    - [x] Fields (SDFs for interaction)
      - [x] Box field
      - [x] Rounded box field
      - [x] Sphere field
    - [x] Input
      - [x] Input methods
        - [x] Hand input
          - [x] Creation from OpenXR
          - [x] Creation from StereoKit (flatscreen)
          - [x] Interaction with clients
        - [x] Pointer input
          - [x] Creation from StereoKit (flatscreen, mouse cursor ray)
          - [x] Interaction with clients
      - [x] Input handler
        - [x] Async input propagation through distance
    - [x] Environment
      - [x] Set skytex
      - [x] Set skylight
    - [x] Items
      - [x] Base item class
      - [x] Base item accepter class
      - [x] Environment equirectangular item
      - [x] Environment equirectangular accepter
    - [x] 2D integration
      - [x] Panels
        - [x] Panel item
        - [x] smithay (for Wayland)
          - [x] Rendering
          - [x] Input seats
      - [x] Panel shells
        - [x] Accept panel items
        - [x] Put surface on model material's texture
        - [x] Feed input through to panel
        - [x] Release panel items
- [ ] Daily Drivable System
  - [ ] GUI App Launcher (Protostar)
    - [x] Get desktop files
    - [x] Find and parse icons
    - [ ] Display icons and desktop files in grid
    - [x] Launch executables spatially
  - [ ] Panel Item UI
    - [ ] Flatland

More to come!