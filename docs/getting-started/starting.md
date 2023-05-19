---
sidebar_position: 4
---

# Starting

First, try running `cargo run` in a terminal window. If a headset is plugged in and OpenXR is working no window will show up. However, the headset should show the same things as the window that opens:

![A pitch black void with a single bleach white hand in the middle](/img/docs/run/xr_mode_windowed_blank.png)

### Images
Flatscreen mode upon initial startup:
![A pitch black window representing Stardust in flatscreen mode](/img/docs/run/flatscreen_1.png)

XR mode when OpenXR somehow fails:
![A black void representing Stardust in XR mode with a hand skeleton in the middle](/img/docs/run/flatscreen_2.png)

Flatscreen mode when `~/.config/stardust/skytex.hdr` is [Zhengyang Gate](https://polyhaven.com/a/zhengyang_gate):
![A pitch black window representing Stardust in flatscreen mode](/img/docs/run/flatscreen_3.png)

### Startup Scripts

`stardust-xr-server` is a Wayland server which clients can connect to.
The easiest way to get Wayland applications to connect is to run a script with your initial environment.
This can be specified using the `-e or --execute-startup-script <PATH>` CLI argument, or can be placed in `$HOME/.config/stardust/startup`.
(assuming you have cloned and installed [flatland](https://github.com/StardustXR/flatland))

This example will spawn the flatland client which will help arrange 2D windows, and spawn a KDE konsole which will attach to the wayland display set up by stardust. You will then be able to drag the konsole around with your mouse. If you have a keyboard you can move your camera around with `Shift+WASD`. If you don't have a 6DoF controller connected you can also use your mouse to move a hand around and the scroll wheel to move it towards and away from your screen.

```
#!/bin/sh

echo $DISPLAY;
echo $WAYLAND_DISPLAY;

flatland &
konsole &
```

### Help screen
```
stardust-xr-server 0.10.0
Nova King <technobaboo@proton.me>
Stardust XR reference display server

USAGE:
    stardust-xr-server [OPTIONS]

OPTIONS:
    -f, --flatscreen            Force flatscreen mode and use the mouse pointer as a 3D pointer
    -h, --help                  Print help information
    -o, --overlay <PRIORITY>    Run Stardust XR as an overlay with given priority
    -V, --version               Print version information
```
