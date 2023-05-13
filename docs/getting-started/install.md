---
sidebar_position: 3
---

# Installation

As Stardust is a display server, it is split into multiple parts. Don't be afraid to ask questions in the [Matrix](https://matrix.to/#/#stardustxr:matrix.org) or [Discord](https://discord.gg/A9w7fKE) servers!

## [stardust-xr](https://github.com/StardustXR/stardust-xr-server) (reference server)

<!-- ### Packages -->
<!-- AUR: `stardust-xr-git` -->

### Build system
1. Cargo

### Build dependencies
(Some of this isn't needed immedietely. If you are just trying to "run" Stardust, you can get away without installing most of this.)
1. Flatbuffers >= 2.0.8
2. EGL+GLES 3.2
3. GLX+Xlib
4. fontconfig
5. dlopen
6. libseat (such as [seatd](https://sr.ht/~kennylevinsen/seatd/))
7. wayland
8. OpenXR Loader (required even if run in flatscreen mode, generally just named `openxr`)

### Download
In your terminal/terminal emulator, run:
```console
git clone https://github.com/StardustXR/stardust-xr-server.git
```
Enter the directory:
```console
cd stardust-xr-server
```

### Build
```console
cargo build
```

### Install
(this step isn't required. Using `cargo run` while developing is just fine)
```console
cargo install --path .
```

### Errors
If you run into an error saying you didn't install cmake, try reinstalling it differently. Something like this:
```console
sudo pacman -S cmake
```
If you run into any other errors, join the [Discord server](https://discord.gg/A9w7fKE) and ask away!

## [Flatland](https://github.com/StardustXR/flatland) (Simple simula-like panel UI client for 2D app interaction)

### Build system
1. Cargo

### Build dependencies
1. Flatbuffers >= 2.0.8

### Install
```console
cargo install flatland
```
