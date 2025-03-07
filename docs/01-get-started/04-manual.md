---
sidebar_position: 4
---
# Full Installation 
Unlike [Telescope](Quickstart) that launches the Stardust XR server and a small selection of clients, the typical way to interact with Stardust is to first run the server, which only provides a void by default, as there are no applications or clients within it. You can then launch any combination of the clients listed below, as they are all considered separate items but can run concurrently inside Stardust.   
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
  Fedora/Ultramarine Linux
</h3>

:::info
You will need the [Terra repository](https://terra.fyralabs.com/), unless you have [Ultramarine Linux](https://ultramarine-linux.org/download/) which comes pre-installed:
```
sudo dnf install --nogpgcheck --repofrompath 'terra,https://repos.fyralabs.com/terra$releasever' terra-release
```
:::
To do a full installation of Stardust XR on Fedora/Ultramarine run the following command:
```
dnf group install stardust-xr
```
<h3>
  <img src="/img/docs/arch.png" alt="Logo" style={{ verticalAlign: 'middle', height: '1em', marginRight: '0.5em' }} />
  Arch Linux 
</h3>

```
paru -s stardust-xr-telescope
paru -s stardust-xr-armillary
paru -s stardust-xr-atmosphere
paru -s stardust-xr-black-hole
paru -s stardust-xr-comet
paru -s stardust-xr-flatland
paru -s stardust-xr-gravity
paru -s stardust-xr-magnetar
paru -s stardust-xr-non-spatial-input
paru -s stardust-xr-protostar
paru -s stardust-xr-server
```

From there, you can launch the server with `stardust-xr-server`, and then in some other terminal windows, launch some clients. Recommended clients to start would be `flatland` & `hexagon-launcher`

# Manual Build  
:::caution
Make sure all of the repositories that are cloned are on the same branch (e.g. all main or all dev branch) to ensure stardust protocol compatibility  
:::
### Server

Clone the [Stardust XR Server](https://github.com/StardustXR/server) `https://github.com/StardustXR/server`

Make sure to check the list of prerequisites. `Cargo build` and `Cargo run` within the cloned repo to start the server. As stated above, the Stardust XR server itself will simply load in with a black void until clients are loaded in. This behaviour can currently be modified by creating a `startup` file within the folder `~/.config/stardust/` to automate the loading in of clients, an example of which is shown [here](https://youtu.be/c6RyEYDz2iw?si=pL1zffNVsWocZHrc&t=788), and an example of is linked [here](https://github.com/cyberneticmelon/usefulscripts/blob/main/startup)

### Clients

After the server is running, you'll need to run some clients. Clone any of these, `cargo build` & then `cargo run` after the server is already running, and they will load into the Stardust XR server!  

Non-exhaustive list of clients:
- [**flatland**](https://github.com/StardustXR/flatland): `https://github.com/StardustXR/flatland`  
3D panel UI (like window manager) for intercting with all your 2D apps
- [**protostar**](https://github.com/StardustXR/protostar): `https://github.com/StardustXR/protostar`  
App launcher library and examples including futuristic Hexagon Launcher
- [**black hole**](https://github.com/StardustXR/black-hole): `https://github.com/StardustXR/black-hole`  
Universal minimization of Stardust objects
- [**gravity**](https://github.com/StardustXR/gravity): `https://github.com/StardustXR/gravity`  
Launch programs with a certain offset in 3D space
- [**magnetar**](https://github.com/StardustXR/magnetar): `https://github.com/StardustXR/magnetar`  
Example workspaces client
- [**atmosphere**](https://github.com/StardustXR/atmosphere): `https://github.com/StardustXR/atmosphere`  
3D environment with natural momentum-based movement
- [**comet**](https://github.com/StardustXR/comet): `https://github.com/StardustXR/cometAnnotate`  
Write in 3D wherever you want amongst your other apps!

### Installation Script

If you have all the correct dependencies, we've created a [script](https://github.com/cyberneticmelon/usefulscripts/blob/main/stardustxr_setup.sh) that will automatically `git clone` all of the necessary repositories, `cargo build` all of them, and give them a symlinks for running the server and clients from the command line. It also creates a [config](https://github.com/cyberneticmelon/usefulscripts/blob/main/startup) file that will by default install the default `atmosphere` background. Run the script with flag `-nobg` if you don't want that. 
