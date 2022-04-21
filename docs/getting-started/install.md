---
sidebar_position: 2
---

# Installation

As Stardust is a display server, it is split into multiple parts. Make sure to install the parts in order to avoid issues, and don't be afraid to ask questions in the Matrix or Discord servers!

1. [libstardustxr client/server/fusion](#libstardustxr-server-client-and-fusion)
2. [stardust-xr](#stardust-xr-reference-server)
3. Other clients (such as the [tests](#stardust-client-tests))

## [libstardustxr](https://github.com/StardustXR/libstardustxr) (server, client, and fusion)

### Packages
AUR: `libstardustxr-git` and `libstardustxr-fusion-git`

### Build system
1. Meson >= 0.55.0
2. Ninja (tested on 1.10.2)

### Build dependencies
1. Flatbuffers >= 1.12.0

### Download
```bash
git clone https://github.com/StardustXR/libstardustxr.git
cd libstardustxr
```

### Build
```bash
meson build --prefix=/usr
cd build
ninja
```

### Install
```bash
ninja install
```

## [stardust-xr](https://github.com/StardustXR/stardust-xr) (reference server)

### Packages
AUR: `stardust-xr-git`

### Build system
1. Meson >= 0.55.0
2. Ninja (tested on 1.10.2)
3. CMake (tested on 3.21.1)

### Build dependencies
1. [libstardustxr](#libstardustxr-server-client-and-fusion)
2. Flatbuffers >= 1.12.0
3. EGL+GLES 3.2
4. GLX+Xlib
5. fontconfig
6. dlopen
7. libseat (such as [seatd](https://sr.ht/~kennylevinsen/seatd/))
8. wayland
9. xwayland
10. OpenXR Loader (required even if run in flatscreen mode, generally just named `openxr`)
11. libxkbcommon-x11

### Download
```bash
git clone https://github.com/StardustXR/stardust-xr.git
cd stardust-xr
```

### Build
```bash
meson build --prefix=/usr
cd build
ninja
```

### Install
```bash
meson install --skip-subprojects
```


## [Stardust Client Tests](https://github.com/StardustXR/stardust-client-tests)

### Build system
1. Meson >= 0.55.0
2. Ninja (tested on 1.10.2)

### Build dependencies
1. [libstardustxr](#libstardustxr-server-client-and-fusion)
2. Flatbuffers >= 1.12.0
3. sdbus-cpp

### Download
```bash
git clone https://github.com/StardustXR/stardust-client-tests.git
cd stardust-client-tests
```

### Build
```bash
meson build --prefix=/usr
cd build
ninja
```
