---
sidebar_position: 3
---

# Developer build
:::caution  
Make sure all of the repositories that are cloned are on main branch to ensure Stardust protocol compatibility  
:::
### Server

Clone the [Stardust XR Server](https://github.com/StardustXR/server) `https://github.com/StardustXR/server`

Make sure to check the list of prerequisites. Run `cargo build` and `cargo run` in the cloned repo to start the server. As stated above, the Stardust server will simply load in with a black void until clients are loaded in. This behaviour can currently be modified by creating a `startup` file inside the folder `~/.config/stardust/` to automate the loading in of clients, an example of which is shown [here](https://youtu.be/c6RyEYDz2iw?si=pL1zffNVsWocZHrc&t=788), and an example of is linked [here](https://github.com/cyberneticmelon/usefulscripts/blob/main/startup)

### Clients

After the server is running, you'll need to run some clients. Clone any of these, `cargo build` & then `cargo run` after the server is already running, and they will load into the Stardust server!  

Non-exhaustive list of clients:
- [**armillary**](https://github.com/StardustXR/Armillary): `https://github.com/StardustXR/Armillary`  
A 3D model viewer for Stardust XR; rotate, move, and display models in your XR space
- [**atmosphere**](https://github.com/StardustXR/atmosphere): `https://github.com/StardustXR/atmosphere`  
3D environment with natural momentum-based movement
- [**black hole**](https://github.com/StardustXR/black-hole): `https://github.com/StardustXR/black-hole`  
Universal minimization of Stardust objects
- [**comet**](https://github.com/StardustXR/comet): `https://github.com/StardustXR/comet`  
Write in 3D wherever you want amongst your other apps!
- [**flatland**](https://github.com/StardustXR/flatland): `https://github.com/StardustXR/flatland`  
3D panel UI (like window manager) for interacting with all your 2D apps
- [**gravity**](https://github.com/StardustXR/gravity): `https://github.com/StardustXR/gravity`  
Launch programs with a certain offset in 3D space
- [**non-spatial-input**](https://github.com/StardustXR/non-spatial-input): `https://github.com/StardustXR/non-spatial-input`  
Provides utilities to port keyboard, mouse, and other input methods like libinput into Stardust XR
- [**protostar**](https://github.com/StardustXR/protostar): `https://github.com/StardustXR/protostar`  
App launcher library and examples including futuristic Hexagon Launcher

# After Installation

You can either use `Telescope` to launch the Stardust XR server and a small selection of clients (`telescope` in your terminal, or `telescope -f` for flatscreen mode), or you can run the server directly, which only provides a void by default, as there are no applications or clients within it. You can then launch any combination of the clients (listed above), as they are all considered separate items but can run concurrently inside Stardust.

You will see a floating hexagon with the Stardust XR logo in the center, this is Hexagon Launcher.
To move around, hold down ***Shift*** and ***W A S D***, with ***Q*** for moving down and ***E*** for moving up.  
![WASD Q E Look around](/img/updated_flat_wasd.GIF)

To look around, hold down ***Shift*** and ***Right Click*** while moving the mouse.  
![Look around](/img/updated_flat_look.GIF)

If you click on the hexagon, the launcher will open. Try dragging one of the apps with `Shift + ~`. The small minus sign is Black Hole, if you click it, it will grab any open window and store it away. Click it again and they will return to their original location.  
![Flat drag](/img/updated_flat_drag.GIF)

If you are already using OpenXR within Linux, running `telescope` while OpenXR is running should launch Stardust on your headset. If not, check further instructions for setting up OpenXR.
