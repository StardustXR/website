---
sidebar_position: 1
---

# What is Stardust XR (really)?
<div style={{textAlign: 'center'}}>
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/v2WblwbaLaA"
  frameBorder={0}
  allow="autoplay; encrypted-media"
  allowFullScreen
  style={{maxWidth: '100%', aspectRatio: '16/9'}}
></iframe>
</div>

Stardust XR is a [display server](https://itsfoss.com/display-server/) for VR and AR headsets on Linux-based systems. Stardust provides a 3D environment, where anything from 2D windows (including your existing apps!), to 3D apps built from objects, can exist together in physical space.

If you'd like to try Stardust XR on your existing device (including without a headset!) head to the [Telescope Installation](telescope) guide. If you'd like to use a VR headset, check out [Set up OpenXR Runtime](setup-openxr). If you already have your headset set up, head to the [Telescope Installation](telescope) page.

Stardust XR is actively looking for help with development to expand the project. You can also [become a sponsor](https://github.com/sponsors/technobaboo).

## Priorities

- **3D Environment Focus**: While supporting 2D clients through the Wayland protocol, Stardust XR primarily aims to create and manage 3D environments.

- **Standard Interfaces**: Utilizes Wayland and OpenXR for 2D and XR app integration.

- **Stardust Protocol**: Implements a special protocol for:
  - Creating virtual objects
  - Developing 3D UIs around 2D apps (Panel Shells)
  - Handling data as Items that can represent files, Wayland surfaces, etc.

- **Personal Device Interaction**: Focuses on individual user interactions rather than collaborative 3D spaces.

- **Flexible Object Interaction**: Users can choose objects that best suit their current scenario, with easy setup for default configurations.
