---
sidebar_position: 3
---

# Setup

First you need to install and run the server from https://github.com/StardustXR/server. Follow the README. If you have issues getting OpenXR to work, try running https://gitlab.freedesktop.org/monado/demos/xrgears first.

After the server is running, you'll need to run some clients. Here's a demo showing some off:
![A showcase of some different clients](/img/docs/clients/demo_01.mp4)

Non-exhaustive list of clients:
- [Flatland](https://github.com/StardustXR/flatland): A panel item UI (XR equivalent of a window manager) so you can interact with your apps using virtual touchscreens. To show Wayland apps, run them with the proper `WAYLAND_DISPLAY` environment variable, in the server's startup script, or use a stardust launcher such as gravity or protostar. Flatland works great in 3DoF or 6DoF with direct touch and pointer interaction.
![A flat panel containing the prism launcher](/img/docs/clients/flatland.png)
- [Gravity](https://github.com/StardustXR/gravity): Command line tool to launch programs inside of stardust at a particular offset in space. This is nestable so you can run a script using gravity, and then gravity inside that script to make a whole composed setup out of thin air! It also ensures that everything launched through it will properly connect to the stardust server, such as wayland clients.
- [Protostar](https://github.com/StardustXR/protostar): Prototype app launcher library/examples. Grab app icons and drop them in space to launch apps where they're dropped.
- [Magnetar](https://github.com/StardustXR/magnetar): Workspaces in 3D. Any object inside the rings will move with them, so you can move a bunch of stuff out of the way temporarily when you don't need it.