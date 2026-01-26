---
sidebar_position: 2
---

# Custom Installation 

This guide covers installing Stardust XR packages on various distributions.

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
Then, run this command to install all Stardust XR packages:
```
sudo dnf group install stardust-xr
```

If using a Fedora Atomic/Universal Blue based image, run the following command to install all Stardust XR packages:

```
sudo rpm-ostree install stardust-xr-armillary stardust-xr-atmosphere stardust-xr-black-hole stardust-xr-comet stardust-xr-flatland stardust-xr-gravity stardust-xr-non-spatial-input stardust-xr-protostar stardust-xr-server
```
<h3>
  <img src="/img/docs/arch.png" alt="Logo" style={{ verticalAlign: 'middle', height: '1em', marginRight: '0.5em' }} />
  Arch Linux 
</h3>

```
paru -s stardust-xr-armillary stardust-xr-atmosphere stardust-xr-black-hole stardust-xr-comet stardust-xr-flatland stardust-xr-gravity stardust-xr-non-spatial-input stardust-xr-protostar stardust-xr-server
```
