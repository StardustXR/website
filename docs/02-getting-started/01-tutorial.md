---
sidebar_position: 1
---

# Tutorial

## Setup OpenXR

:::note
if you have no headset or other OpenXR device, you can skip this step and start with [installing nix](#install-nix).
:::

### SteamVR

#### Archlinux

TODO

#### NixOS

TODO

#### Others

TODO: collect links for setup on different distrons

### [Monado](https://monado.dev/)

#### Archlinux

TODO

#### NixOS

TODO

#### Others

TODO: collect links for setup on different distrons

## Install nix

For easy development and distribution this project uses the [nix package manager](https://nix.dev/).<br/>
This allows to ensure all dependency requirements are met.

:::info
Make sure to have [flakes enabled](https://nixos.wiki/wiki/flakes).
:::

You can install nix on all common linux systems:

#### Archlinux

```shell
# install git and nix
sudo pacman -Sy git nix
# enable flakes
echo 'experimental-features = nix-command flakes' | sudo tee -a /etc/nix/nix.conf
# enable nix daemon service
sudo systemctl enable nix-daemon.service
# add the current user to nix-users group
sudo usermod -aG nix-users $(id -un)
# reboot to apply user and service changes
sudo systemctl reboot
```

#### NixOS

TODO

#### Others

TODO: collect links for setup on different distrons

## Run Demo

1. clone https://github.com/StardustXR/telescope
2. make sure your OpenXR device works (if 2D mode is not used)
3. run `nix run .`

## Run wayland client

```shell
# run demo.mp4 video in a loop within Stardust
WAYLAND_DISPLAY=wayland-0 DISPLAY= mpv Downloads/demo.mp4 --loop
```
