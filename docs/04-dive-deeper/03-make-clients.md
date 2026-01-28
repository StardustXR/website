---
sidebar_position: 3
---

# Making Clients

A Stardust client is at its core an executable that connects to a stardust server instance at `$XDG_RUNTIME_DIR/stardust-[0-32]`, sends and receives messages according to the Stardust protocol.

## Rust

Stardust uses Rust due to its speed and reliability in build and runtime, so you will need to install cargo (preferably through [rustup](https://rustup.rs/)). If you're unsure how to use Rust then a great guide is at https://doc.rust-lang.org/book/.

### stardust-xr

`stardust-xr` is a connecting library for servers and clients that deals with the lowest level of connecting to ensure basic compatibility is ensured. As a client developer you most likely won't need it, but it's good to know about it.

### Fusion

`stardust-xr-fusion` is the high level library you'll probably be using to create your clients. It features structs for all Stardust objects and trait-based + async systems for handling events from the server.

### Molecules

`stardust-xr-molecules` is an even higher level widget library built on Fusion similar to [MRTK](https://github.com/microsoft/MixedRealityToolkit-Unity) to get your clients up and running faster. Documentation will be available at https://docs.rs/crate/stardust-xr-molecules/latest.

### Asteroids

`stardust-xr-asteroids` is a declarative UI library kinda similar to [Iced](https://iced.rs/) (efficient functional design) and [SwiftUI](https://developer.apple.com/swiftui/) (direct state manipulation/saving/restoring).

This is probably what you should use to make most normal "app-like" clients because complexity is easy to manage in your state struct.

### Getting Started

To get started, create a new Rust project using
```bash
cargo new
```
and include the crates you want to use in your `Cargo.toml`. Documentation will be available at [docs.rs](https://docs.rs), just search for the crates you're using.

