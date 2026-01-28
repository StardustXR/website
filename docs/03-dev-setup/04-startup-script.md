---
sidebar_position: 3
---

# Startup script

We have an automatic startup script that the server will run on startup with the appropriate environment variables to ensure everything connects to stardust directly.
This can be used to configure an entire Stardust XR setup. Telescope also uses this internally to start the included clients.

The default setup script is at path `~/.config/stardust/startup` and is an executable (shell script or binary) that is run by the stardust server with the following environment variables.

- `STARDUST_INSTANCE`: Stardust socket name/path to ensure all Stardust clients connect to the server directly. Clients automatically use this to connect to the server.
- `WAYLAND_DISPLAY`: Wayland display socket name/path to ensure every Wayland app connects to the Stardust server's wayland compositor correctly. Wayland clients use this automatically.
- `FLAT_WAYLAND_DISPLAY`: Same as before, but this points to the wayland compositor that Stardust is running on top of (if any). Useful for situations like `manifold` in `non-spatial-input` where you want to display a window on the desktop to receive input or such.
- `XDG_SESSION_TYPE`: Set to `wayland` so that 2D applications know to try to connect to wayland first.

## Template

```bash
#!/usr/bin/env bash

# set keyboard layout, can be ignored for US keyboards
# export XKB_DEFAULT_LAYOUT=de

# make sure that all client binaries are in your $PATH, or run them with a full path

# Note that most things end with & to put them in the background so they can all be run at once.

# Use xwayland-satellite to let X applications connect to Wayland. 
xwayland-satellite :32 &
export DISPLAY=:32

# For debugging purposes
# echo $DISPLAY;
# echo $WAYLAND_DISPLAY;
# echo $STARDUST_INSTANCE;

# start panel/window handling
flatland &

# start app launcher
gravity 0 0 -0.3 hexagon_launcher &

# allow minimizing most things
black-hole &

# uncomment for a virtual pen you can draw with
# comet &

# Desktop inputs

# Take keyboard/mouse input from a window on desktop and beam it to whatever panel you are looking at.
WAYLAND_DISPLAY=$FLAT_WAYLAND_DISPLAY manifold | simular &
# Take keyboard/mouse input from raw input devices (assuming no desktop is running) and beam it to whatever panel you are looking at.
# eclipse | simular &

# Show the default atmosphere environment (run atmosphere install first).
# atmosphere show &
```
