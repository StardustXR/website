---
sidebar_position: 3
---

# Developer build
:::caution  
Make sure all of the repositories that are cloned are on main branch to ensure Stardust protocol compatibility  
:::
### Server

Clone the [Stardust XR Server](https://github.com/StardustXR/server) `https://github.com/StardustXR/server`

Make sure to check the list of prerequisites. Run `cargo run` in the cloned repo to start the server. Once running you will only see a black void with controllers and hands, to do anything useful you will need to run clients!

When doing development on the server we recommend running `cargo run -F bevy/dynamic_linking` to improve rebuild times

### Clients

A list of first-party clients can be found [here](/docs/dev-setup/overview#clients).
Clone the client repo and run it with `cargo run`, or in the case of workspace repositories (protostar and non-spatial-input) run `cargo run -p {client crate name here}`

The minimal recommended setup is `hexagon-launcher` from `protostar` and `flatland`

### 2D apps

For 2D apps to connect to the Stardust XR server you need to set the `WAYLAND_DISPLAY` environment variable for the 2D app, assuming you're running a normal Wayland compositor and one stardust server this should be `wayland-1`.
The server automatically sets this env var for the startup script.

The Wayland compositor included in the server doesn't natively implement xwayland, we recommend using [**xwayland-satellite**](https://github.com/Supreeeme/xwayland-satellite) for X11 compatibility.
