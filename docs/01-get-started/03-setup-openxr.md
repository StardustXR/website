---
sidebar_position: 3
---

# Setup OpenXR Runtime 

This guide will help you set up your VR or AR headset for use with Stardust. Although support for many headsets on Linux is still under active development, there are a number of good options available. If you already have OpenXR set up on your Linux install, head to the [Full Installation](manual) page to get Stardust XR installed. 

:::info  
If you want to try Stardust in a window without any XR hardware you can skip this step and checkout the [Full installation](manual) guide.  
:::  


# Monado and WiVRn

:::note  
We highly recommend using [Monado](https://monado.dev/) or [WiVRn](https://github.com/WiVRn/WiVRn), depending on if you use a wired PCVR headset or a standalone headset.
:::

### Wired Headsets

When using a wired PCVR headset you want to use [Monado](https://monado.dev/), if you are using NixOS take a look at this guide on the LVRA Wiki [https://lvra.gitlab.io/docs/distros/nixos/#monado](https://lvra.gitlab.io/docs/distros/nixos/#monado).

For other Distros using Envision to build Monado is recommended, you can find more information here [https://lvra.gitlab.io/docs/fossvr/envision](https://lvra.gitlab.io/docs/fossvr/envision/)

### Standalone Headsets

When using a standalone headset, you need to stream Stardust XR to your headset. For that you want to use [WiVRn](https://github.com/WiVRn/WiVRn), information on how to install it can be found here [https://lvra.gitlab.io/docs/fossvr/wivrn](https://lvra.gitlab.io/docs/fossvr/wivrn/)

For more information on how to setup VR on linux in general, check out the [LVRA Wiki](https://lvra.gitlab.io/)!

# SteamVR

:::warning
SteamVR is considered highly unstable on Linux! It is strongly recommended to use Monado or WiVRn if at all possible.
:::

### Wired Headsets

If you'd like to use SteamVR, head over to [https://lvra.gitlab.io/docs/steamvr](https://lvra.gitlab.io/docs/steamvr/)

### Standalone Headsets

For standalone headsets you can either use Steam Link VR or ALVR. 
At the time of writing ALVR seems to be the more stable option, you can check the GitHub repository for more information [https://github.com/alvr-org/ALVR](https://github.com/alvr-org/ALVR)
