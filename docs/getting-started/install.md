---
sidebar_position: 2
---

# Installation

## [libstardustxr](https://github.com/StardustXR/libstardustxr) (server, client, and fusion)

### Prerequisites
1. Meson
2. Ninja
3. Flatbuffers >= 1.12.0

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

### Prerequisites
1. Meson >= 0.55.0
2. Ninja
3. CMake
4. Flatbuffers >= 1.12.0
5. EGL+GLES 3.2
6. GLX+Xlib
7. fontconfig
8. dlopen
9. OpenXR Loader (required even if run in flatscreen mode)

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
ninja install
```