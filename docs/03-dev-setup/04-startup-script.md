---
sidebar_position: 3
---

# Startup script

In order to make development of core components (server, core, etc.) easier, as well as bundle Telescope, we have an automatic startup script that the server will run on startup with the appropriate environment variables to ensure everything connects to stardust directly.

The default setup script is at path `~/.config/stardust/startup` and is an executable (shell script or binary) that is run by the stardust server with the following environment variables.

- `STARDUST_INSTANCE`: Stardust socket name to ensure all Stardust clients connect to the server directly. Clients automatically use this to connect to the server.
- `WAYLAND_DISPLAY`: Wayland display socket name/path to ensure every Wayland app connects to the Stardust server's wayland compositor correctly. Wayland clients use this automatically.
- `FLAT_WAYLAND_DISPLAY`: Same as before, but this points to the wayland compositor that Stardust is running on top of (if any). Useful for situations like `manifold` in `non-spatial-input` where you want to display a window on the desktop to receive input or such.
- `XDG_SESSION_TYPE`: Set to `wayland` so that 2D applications know to try to connect to wayland first.

## Template

```bash
#!/usr/bin/env bash

# set keyboard layout, can be ignored for US keyboards
# export XKB_DEFAULT_LAYOUT=de

# uncomment if using WiVRn and you want the default audio output to be to your headset
# pactl set-default-sink wivrn.sink

# uncomment if you did not install stardust crates to the system or download from distro packages
# for lib in core molecules xwayland-satellite
# do
#   export PATH=/run/media/nova/MEDIA/xr/stardust/$lib/target/debug:$PATH
#   export PATH=/run/media/nova/MEDIA/xr/stardust/$lib/target/debug/examples:$PATH
# done
# 
# for lib in atmosphere black-hole comet flatland gravity magnetar manifold protostar orbit poltergeist non-spatial-input solar-sailer state-space-adventure
# do
#   export PATH=/run/media/nova/MEDIA/xr/stardust/clients/$lib/target/debug:$PATH
#   export PATH=/run/media/nova/MEDIA/xr/stardust/clients/$lib/target/debug/examples:$PATH
#   export PATH=/run/media/nova/MEDIA/xr/stardust/clients/$lib/target/release:$PATH
#   export PATH=/run/media/nova/MEDIA/xr/stardust/clients/$lib/target/release/examples:$PATH
# done

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
