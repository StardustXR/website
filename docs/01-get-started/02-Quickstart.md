---
sidebar_position: 2
---

# Quick Start Guide  

The quickest way to get started with Stardust XR is to try out <span style={{ color: 'yellow' }}>Telescope</span>. This works with the device you already have, or a headset. It comes with the **Stardust XR server**, an app launcher called **Hexagon Launcher**, and some helpful apps like **Flatland** to use your 2D apps inside Stardust, and **Black Hole** to quickly tuck away your objects and apps (kind of like desktop peek on Windows).
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
Stardust XR is packaged in the [Terra repository](https://terra.fyralabs.com/). If you are using [Ultramarine Linux](https://ultramarine-linux.org) or [Bazzite](https://bazzite.gg), this reposoitory comes pre-installed, otherwise you can add the repository.

If you are using a [Fedora Atomic Edition](https://fedoraproject.org/atomic-desktops/) or derrivative you will need to run the following command:
```
curl -fsSL https://github.com/terrapkg/subatomic-repos/raw/main/terra.repo | pkexec tee /etc/yum.repos.d/terra.repo
sudo rpm-ostree install terra-release
```
Standard Fedora Editions and derrivatives can directly install terra-release:
```
sudo dnf install --nogpgcheck --repofrompath 'terra,https://repos.fyralabs.com/terra$releasever' terra-release
```
:::  
Then, install Telescope using:
```
sudo dnf install telescope 
``` 
<h1>
  <img src="/img/docs/arch.png" alt="Logo" style={{ verticalAlign: 'middle', height: '1em', marginRight: '0.5em' }} />
  Arch Linux 
</h1>

On Arch Linux, Stardust XR is available in the Arch Linux User Repository [AUR](https://aur.archlinux.org/packages/stardust-xr-telescope). We suggest using an [AUR helper](https://wiki.archlinux.org/title/AUR_helpers), like Paru:
```
paru -S stardust-xr-telescope
```
<h1>
  <img src="/img/docs/nixos.svg" alt="Logo" style={{ verticalAlign: 'middle', height: '1em', marginRight: '0.5em' }} />
  NixOS 
</h1>

On NixOS, use the [Nix package manager](https://nixos.org/download/#nix-install-linux) Make sure [flakes are enabled](https://nixos.wiki/wiki/flakes).
```
nix run github:StardustXR/telescope
```
# After Installation
From here, just run `telescope -f` for flatscreen mode in your terminal!

You will see a floating hexagon with the Stardust XR logo in the center, this is Hexagon Launcher.

To look around, hold down ***Shift*** and ***Right Click*** while moving the mouse.

To move around, hold down ***Shift*** and ***W A S D***, with ***Q*** for moving down and ***E*** for moving up.

If you click on the hexagon, the launcher will open. Try dragging one of the apps with the ***Mouse 5*** (Back) button. The small minus sign is Black Hole, if you click it, it will grab any open window and store it away. Click it again and they will return to their original location.

If you are already using OpenXR within Linux, running `telescope` while OpenXR is running should launch Stardust on your headset. If not, check further instructions for setting up OpenXR.
