---
sidebar_position: 1
---

# Setup OpenXR Runtime

:::info
if you want to test stardust in flatscreen mode (in a window) without a headset or other OpenXR device, you can skip this step and start with [trying out telescope](bundled).
:::

Check the [hardware table](https://lvra.gitlab.io/docs/hardware/) to ensure your hardware and headset are compatible:

## SteamVR

You will likely want to use [Monado](#monado) instead, but if you need to the instructions are available.

:::warning
If you are on NixOS please consult https://lvra.gitlab.io/docs/distros/nixos/ before installing SteamVR.
:::

https://lvra.gitlab.io/docs/steamvr/ is a good starting point, but be aware that the stardust server cannot run as an overlay on top of other games due to SteamVR not implementing the OpenXR Overlay extension.

## Monado

If you've got a wired headset, this is generally the way to go.

### NixOS

It's generally easiest to follow the instructions at https://lvra.gitlab.io/docs/distros/nixos/ to install properly to the system.

### Other distros

[Envision](https://lvra.gitlab.io/docs/fossvr/envision/) is the XR launcher (like a minecraft launcher) of choice for open source XR and is overall better in practice than SteamVR.

# Test OpenXR Runtime

Try running [XRGears](https://gitlab.freedesktop.org/monado/demos/xrgears) and see if it works, you can get it from the system's package manager often.
