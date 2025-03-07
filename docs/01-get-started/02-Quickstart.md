---
sidebar_position: 2
---

# QuickStart Guide  

The quickest way to get started with Stardust XR, is to try out <span style={{ color: 'yellow' }}>Telescope</span>, this works with the device you already have, or a headset. It comes with the **Stardust XR server**, an app launcher called **Hexagon Launcher** and some helpful apps like **Flatland** to use your 2D apps inside Stardust,  and **Black Hole** to quickly tuck away your objects and apps (kind of like desktop peek on Windows.)
<h1>
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
  Fedora and derivatives (except Enterprise Linux)
</h1>

:::info
You will need the [Terra repository](https://terra.fyralabs.com/), unless you have [Ultramarine Linux](https://ultramarine-linux.org/download/) which comes pre-installed: 
```
sudo dnf install --nogpgcheck --repofrompath 'terra,https://repos.fyralabs.com/terra$releasever' terra-release
```
:::
In your terminal, run:
```
sudo dnf install telescope 
``` 
<h1>
  <img src="/img/docs/arch.png" alt="Logo" style={{ verticalAlign: 'middle', height: '1em', marginRight: '0.5em' }} />
  Arch Linux 
</h1>

For Arch Linux, Stardust XR is available via the Arch Linux User Repository [AUR](https://aur.archlinux.org/packages/stardust-xr-telescope)
```
paru -S stardust-xr-telescope
```
<h1>
  <img src="/img/docs/nixos.svg" alt="Logo" style={{ verticalAlign: 'middle', height: '1em', marginRight: '0.5em' }} />
  NixOS 
</h1>

For NixOS use the [nix package manager](https://nixos.org/download/#nix-install-linux), make sure [flakes are enabled](https://nixos.wiki/wiki/flakes).
```
nix run github:StardustXR/telescope
```
# After installation:
From here, just run `telescope -f` for flatscreen mode in your terminal of choice!

You will see a floating hexagon with the Stardust XR logo within it, which is the Hexagon Launcher.


To look around, hold down ***Shift*** and hold down ***Right Click***

To move around, hold down ***Shift*** and ***W A S D***, with ***Q*** for moving down and ***E*** for moving up

If you click on the hexagon, the launcher will open up. Try dragging out one of the apps with the ***Mouse 5*** (Back) button. The small minus sign is Black Hole, if you click on it, it will grab any open window and store it away. Click it again and they will return to their original location.

If you are already using OpenXR within Linux, launching `telescope` while it's running should launch it within your headset. If not, check further instructions for setting up OpenXR, or the other installation guides. 
