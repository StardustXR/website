---
sidebar_position: 2
---

# Options 

When launching the Stardust server manually (or telescope) you can add various flags to change behaviors of the stardust server such as:

- `-f`/`--force-flatscreen`: Flatscreen only, don't try to display on a headset at all.
- `-x`/`--xr-only`: XR only, don't try to display a flat window at all.
- `-s`/`--spectator`: Spector cam, flatscreen shows the same PoV as the headset. Without this flag you can navigate separately in 2D and XR.
- `-t`/`--transparent-flatscreen`: Make the flatscreen window's background transparent.
- `-e`/`--execute-startup-script`: Execute a custom startup script (see [startup script docs](/docs/dev-setup/startup-script)). Telescope already uses this, it cannot be used twice!
- `-d`/`--debug`: Take all stdin/stderr from startup script processes and output it from the server's stdin/stderr.
- `-o`/`--overlay`: Run as an OpenXR overlay with the given priority. Telescope already uses this, it cannot be used twice!
