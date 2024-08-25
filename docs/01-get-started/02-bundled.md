---
sidebar_position: 2
---

# Bundled setup

Telescope is a bundled Stardust setup that lets you 1-click run all the essentials for testing a setup out on an existing 2D computer.

## Nix

### Install Nix

For easy development and distribution this project uses the [nix package manager](https://nix.dev/).<br/>
This allows to ensure all dependency requirements are met.

If you do not have nix installed follow the instructions at https://nixos.org/download/#nix-install-linux.
:::warning
Make sure to have [flakes enabled](https://nixos.wiki/wiki/flakes).
:::

### Run Telescope

Because telescope itself is a nix flake, you simply have to run
Intel/AMD/NVK graphics:
```sh
nix run github:StardustXR/telescope
```

~~Proprietary NVIDIA graphics:~~ is broken :/
```sh
NIXPKGS_ALLOW_UNFREE=1 nix run --impure github:StardustXR/telescope#telescopeNvidia
```

## Non-nix

An AppImage generated from the nix flake is currently WIP. Please check back later or do a [manual build.](manual)
