---
sidebar_position: 4
---
# Telescope Overlay

This guide covers installing Telescope, a premade Stardust XR package with some useful clients intended for overlay use.

<h3>
  <img src="/img/docs/arch.png" alt="Logo" style={{ verticalAlign: 'middle', height: '1em', marginRight: '0.5em' }} />
</h3>
### Arch Linux 

On Arch, install the AUR package, this can be done with an AUR helper like `paru` or `yay`.
```
paru -S stardust-xr-telescope
```
### Any other Distribution

For other Distros it is recommended to use the AppImage. Since some Distribution Packages might be Outdated, the AppImage will always be up to date.
You can still install other distro packages if you want, instructions below.

<h3>
  <img 
    src="/img/docs/Fedora_logo.svg" 
    alt="Fedora Logo" 
    style={{ verticalAlign: 'middle', height: '1em', marginRight: '0.5em' }} 
  />
  <img 
    src="/img/docs/ultramarine-logo.svg" 
    alt="Ultramarine Logo" 
    style={{ verticalAlign: 'middle', height: '1em', marginRight: '0.5em' }} 
  />
</h3>
### Fedora and Derivatives

:::info
Stardust XR is packaged in the [Terra repository](https://terra.fyralabs.com/). If you are using [Ultramarine Linux](https://ultramarine-linux.org), [Bazzite](https://bazzite.gg), or [Aurora](https://getaurora.dev), this repository comes pre-installed, otherwise you will need to add the repository if you haven't already. You can find a guide to do so [here](https://developer.fyralabs.com/terra/installing)
:::  
Then, run this command to install Telescope and all the required Stardust XR packages:
```
sudo dnf install stardust-xr-telescope
```

If using a Fedora Atomic/Universal Blue based image, run the following command to install Telescope and all Stardust XR packages:

```
sudo rpm-ostree install stardust-xr-telescope
```

From there, you can launch Stardust with `telescope`, then in another terminal window or tab, run any additional clients you want.

## Post Installation

Depending on how you installed Telescope, you can either run the AppImage directly, or if you chose a Distro package it should show up in your normal App Launcher (and WiVRn).
You can also run it from a Terminal by either running the appimage or `telescope`. You can then add add options like `-f` for flatscreen mode or `--xr-only` to prevent the flatscreen window from showing.

You will see a floating hexagon with the Stardust XR logo in the center, this is Hexagon Launcher.

If you tap the middle of the hexagon, the launcher will open. Try dragging one of the apps with a pinch or grip. The small minus sign on your Hand or Controller is Black Hole, if you tap it, it will grab any movable objects store it away. Tap it again and they will return to their original location.  

Running Telescope while an OpenXR runtime is running, launches Stardust in your headset. If not, check [further instructions for setting up OpenXR](/docs/get-started/setup-openxr).

Telescope is just a packaged version of a normal Stardust XR server, so feel free to launch any additional clients you want!
