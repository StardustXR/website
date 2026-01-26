---
sidebar_position: 1
---
# Install

:::warning

Make sure to have installed [WiVRn](https://lvra.gitlab.io/docs/fossvr/wivrn/), [Monado](https://lvra.gitlab.io/docs/fossvr/monado/)/[Envision](https://lvra.gitlab.io/docs/fossvr/envision/), or (if necessary) [SteamVR](https://lvra.gitlab.io/docs/steamvr/)!

:::

<h3>
  <img src="/img/docs/arch.png" alt="Logo" style={{ verticalAlign: 'middle', height: '1em', marginRight: '0.5em' }} />
</h3>

### Arch Linux 

On Arch, install the AUR package, this can be done with an AUR helper like `paru` or `yay`.
```
paru -S stardust-xr-telescope
```

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

### Other Distributions

Download the AppImage from https://github.com/StardustXR/telescope/releases/latest. Since some Distribution Packages might be Outdated, the AppImage will always be up to date.

We know AppImages aren't ideal (for social and technical reasons), but bundling what is essentially a DE is hard work! [Let us know](https://discord.gg/A9w7fKE) if you can do better.
