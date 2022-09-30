---
sidebar_position: 1
---

# Overview

## Description
Stardust XR (informally known as Stardust) is an XR display server for Linux-based distros (possibly most unix-based too, but untested). Unlike display servers of the past that were run on bounded 2D screens, Stardust has to break convention in order to account for unbounded 3D space in any potential virtual or real environment.

Unlike many display servers, Stardust is not trying to reinvent how applications interface with the system. Stardust uses Wayland and will use OpenXR for 2D/XR app integration. Stardust however has a special protocol for creation of virtual objects such as 3D UIs around 2D apps (called Panel Shells) and handling of data as objects (called Items, can represent files or Wayland surfaces or such). Stardust is not a collaborative 3D space, instead focusing on your own personal device and interactions with it.

Put simply, Stardust is a system UI framework where multiple different clients (programs that connect to Stardust directly) can create objects for the user to interact with their apps and device. The user can choose to use the objects that work best for their current scenario, and default setups can easily be created so users start out with all the essentials.