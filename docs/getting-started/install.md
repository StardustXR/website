---
sidebar_position: 2
---

# Installation

As Stardust is a display server, it is split into multiple parts. Don't be afraid to ask questions in the [Matrix](https://matrix.to/#/#stardustxr:matrix.org) or [Discord](https://discord.gg/A9w7fKE) servers!

## [stardust-xr](https://github.com/StardustXR/stardust-xr-server) (reference server)

<!-- ### Packages -->
<!-- AUR: `stardust-xr-git` -->

### Build system
1. Cargo

### Build dependencies
1. Flatbuffers >= 2.0.8
2. EGL+GLES 3.2
3. GLX+Xlib
4. fontconfig
5. dlopen
6. libseat (such as [seatd](https://sr.ht/~kennylevinsen/seatd/))
7. wayland
8. OpenXR Loader (required even if run in flatscreen mode, generally just named `openxr`)

### Download
```bash
git clone https://github.com/StardustXR/stardust-xr-server.git
cd stardust-xr-server
```

### Build
```bash
cargo build
```

### Install
```bash
cargo install
```

## [Flatland](https://github.com/StardustXR/flatland) (Simple simula-like panel UI client for 2D app interaction)

### Build system
1. Cargo

### Build dependencies
1. Flatbuffers >= 1.12.0

### Install
```bash
cargo install flatland
```
