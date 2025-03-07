---
sidebar_position: 3
---

# Setup OpenXR Runtime 

This guide will help you set up your VR or AR headset for use with Stardust. Although support for many headsets on Linux is still under active development, there are a number of good options available. If you already have OpenXR set up on your Linux distribution, head to the [Full Installation](manual) page to get Stardust XR installed. 


:::info
If you want to try Stardust in a window on your existing device you can skip this step and checkout the [Quick Start Guide](Quickstart).
:::
# Envision
:::note
![Envision](/img/docs/Envision_Monado.png)

We highly recommend using [Envision](https://lvra.gitlab.io/docs/fossvr/envision/), an easy to use GUI for utilizing [Monado](https://monado.dev/) which is what you likely use if you have a wired headset. Envision also comes with [WiVRn](https://github.com/WiVRn/WiVRn) support for connecting to headsets like the Meta Quest wirelessly.
:::

Check the [hardware table](https://lvra.gitlab.io/docs/hardware/) (for Monado/WiVRn support) to ensure your hardware and headset are compatible. If you're using an Nvidia card, you'll need to install [proprietary drivers]((https://rpmfusion.org/Howto/NVIDIA). If you're using a modern Nvidia card on Fedora (with RPMFusion) or Ultramarine, this command will install the driver:
```
sudo dnf install akmod-nvidia
sudo akmods
# Wait for this to finish before rebooting, this may take up to 15 minutes
```
AMD graphic cards do not require additional drivers.
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
  Fedora and derivatives (except Enterprise Linux)
</h3>

:::info
You will need the [Terra repository](https://terra.fyralabs.com/), unless you have [Ultramarine Linux](https://ultramarine-linux.org) or [Bazzite](https://bazzite.gg).
[Fedora Atomic Editions](https://fedoraproject.org/atomic-desktops/) will need to run the following command:
```
curl -fsSL https://github.com/terrapkg/subatomic-repos/raw/main/terra.repo | pkexec tee /etc/yum.repos.d/terra.repo
sudo rpm-ostree install terra-release
```
Other Fedora Editions can directly install terra-release:
```
sudo dnf install --nogpgcheck --repofrompath 'terra,https://repos.fyralabs.com/terra$releasever' terra-release
```
:::  
Then, install Envision using:
```
sudo dnf install envision
```
<h3>
  <img src="/img/docs/arch.png" alt="Logo" style={{ verticalAlign: 'middle', height: '1em', marginRight: '0.5em' }} />
  Arch Linux 
</h3>

For Arch Linux, Envision is available via the [AUR](https://aur.archlinux.org/packages/envision-xr-git). We suggest using an AUR helper, like Paru:
```
paru -S envision-xr-git
```
<h3>
  <img src="/img/docs/nixos.svg" alt="Logo" style={{ verticalAlign: 'middle', height: '1em', marginRight: '0.5em' }} />
  NixOS 
</h3>


On NixOS, it's generally easiest to follow the instructions at https://lvra.gitlab.io/docs/distros/nixos/ as Envision is currently unstable on NixOS and troubleshooting SteamVR can be tricky. 
### Other options for installation
You can also download the [Envision AppImage](https://gitlab.com/gabmus/envision/-/pipelines?ref=main&status=success). Once downloaded, unzip the archive, you should find a file named Envision-x86_64.AppImage. You can do this from the properties menu in your file manager, or run `chmod +x Envision-x86_64.AppImage` in your terminal.



Then double click the file to run it.
![Envision App Image](/img/docs/envisionappimage.png)

When you launch Envision, you will have to build a profile for your headset, check the [Envision website](https://lvra.gitlab.io/docs/fossvr/envision/) for instructions specific to what you have. You can take a look at [this section] of our Meta Quest setup video for an example using WiVRn.
![Envision Build Profile](/img/docs/envisionbuildprofile.png)

Once you have one of these options installed, a quick way to test on the headset is by running `xrgears`. [xrgears](https://gitlab.freedesktop.org/monado/demos/xrgears) is a demo that comes with Monado.

:::tip
If you run into any problems during installation, the [Meta Quest Walkthrough](quest-3-setup) may contain information helpful in regards to dependencies, firewalls and drivers.
:::
# ALVR

Another option is ALVR, you can check the GitHub repository for more information [https://github.com/alvr-org/ALVR](https://github.com/alvr-org/ALVR)

# SteamVR

If you'd like to use SteamVR, head over to [https://lvra.gitlab.io/docs/steamvr/](https://lvra.gitlab.io/docs/steamvr/), although it is not the recommended way to use VR within Linux due to poor support. 

