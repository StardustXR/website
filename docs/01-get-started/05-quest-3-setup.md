---
sidebar_position: 5
---

# Meta Quest Walkthrough 
Do you have a Meta Quest and would like to try Stardust for yourself? Even if you don't have any experience with Linux, this full guide will get you started with Stardust! It is recommended that you install a version of Linux called [Ultramarine](https://ultramarine-linux.org/download/). We suggest Plasma Edition due to VRR and HDR support. Once you have it installed, you will mainly be using the terminal to install what you need. Linked below is a YouTube walkthrough:

<div style={{textAlign: 'center'}}>
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/Rgj9-9UwA2g"
  frameBorder={0}
  allow="autoplay; encrypted-media"
  allowFullScreen
  style={{maxWidth: '100%', aspectRatio: '16/9'}}
></iframe>
</div>

:::info  
This applies to the Quest, Quest 2, Quest 3, and Quest Pro. These instructions should work on all Fedora derivatives (excluding Enterprise Linux). If you are using [Ultramarine Linux](https://ultramarine-linux.org) or [Bazzite](https://bazzite.gg), this reposoitory comes pre-installed, otherwise you will need to add the repository:

If you are using a [Fedora Atomic Edition](https://fedoraproject.org/atomic-desktops/) or derrivative you will need to run the following command:
```
curl -fsSL https://github.com/terrapkg/subatomic-repos/raw/main/terra.repo | pkexec tee /etc/yum.repos.d/terra.repo
sudo rpm-ostree install terra-release
```
Standard Fedora Editions and derrivatives can directly install terra-release:
```
sudo dnf install --nogpgcheck --repofrompath 'terra,https://repos.fyralabs.com/terra$releasever' terra-release
```
The setup video is done with a Meta Quest 3, and with [Ultramarine](https://ultramarine-linux.org/download/), a Fedora based distribution. Ultramarine comes with the Terra repository pre-installed. You can follow [these instructions](https://wiki.ultramarine-linux.org/en/setup/getting/) to install a version of Ultramarine.  
:::

# Nvidia & AMD
AMD Graphics cards do not require additional drivers, but Nvidia graphics cards will need to install drivers [provided by RPMFusion](https://rpmfusion.org/Howto/NVIDIA), which can be installed with:
```
sudo dnf install akmod-nvidia
``` 
# Envision
The next step is to install [Envision](https://lvra.gitlab.io/docs/fossvr/envision/). Envision is a GUI that makes it easier to connect and run the Quest 3 (among other headsets) with [Monado](https://monado.dev/), an open source OpenXR implementation, and [WiVRn](https://github.com/WiVRn/WiVRn), a wireless streaming implementation that also works with the Quest 3. Envision comes pre-packaged with WiVRn. Envision can be installed via:
```
sudo dnf install envision
``` 
# Vulkan Layers
If you have an Nvidia graphics card, it is possible that you will need to install [Vulkan Layers](https://gitlab.freedesktop.org/monado/utilities/vulkan-layers) for Monado, although this may not be necessary depending on the driver version:
```
sudo dnf install monado-vulkan-layers
``` 
Next, Launch Envision, and in the drop down menu on the bottom, select the **WiVRn profile** and click **Build Profile**. It'll give you a list of dependencies to install, so copy the command and run it. After they are installed, there's one extra dependency to add manually.
```
sudo dnf install libnotify-devel
``` 
:::note  
Note that [Developer Mode](https://developers.meta.com/horizon/documentation/native/android/mobile-device-setup/) must be enabled on your Quest 3. The most streamlined way to do this is through the Meta Horizons app on [Android](https://play.google.com/store/apps/details?id=com.oculus.twilight&hl=en_US) or [iPhone](https://apps.apple.com/us/app/meta-horizon/id1366478176)  
:::

# Installing WiVRn 

Once that is complete, you're ready to click Build Profile within Envision. Once it's done building, you're ready to install WiVRn on the headset. Connect your headset to your computer via the Quest 3 Link cable or another compatable USB-C cable. Now that Developer Mode is enabled, you should see "Allow USB debugging", click *allow* within the headset.

With debugging enabled and the headset connected, click **Install WiVRn** within Envision to install the android apk onto the headset.

# Firewalls
Once it's installed, you'll need avahi-daemon running:
```
systemctl enable --now avahi-daemon
``` 
And it's possible that your firewall could prevent connection, so use the following commands to open up the ports required and reload the firewall:
```
sudo firewall-cmd --zone=public --add-port=5353/udp --permanent
sudo firewall-cmd --zone=public --add-port=9757/udp --permanent
sudo firewall-cmd --zone=public --add-port=9757/tcp --permanent

sudo firewall-cmd --reload
``` 

# Stardust XR
Now that we've set up the Quest 3 to be able to connect to your linux distribution via Envision/WiVRn, we can install Stardust XR!
```
sudo dnf group install stardust-xr
```
Once installed, you'll have to launch WiVRN within the headset. On the bottom right of the Quest 3 menu, go to Library > Unknown Sources, and you'll see the WiVRn app. Once you're loaded up, click the Start button at the top of Envision on your computer, and you'll be greeted with a PIN for firs time setup. Back in the Quest 3, tap Connect, and enter the PIN, and you should see "Connection ready, Start a VR application on Ultramarine"

For the quickest way to test Stardust XR, run the command
```
telescope
```
Which will launch Stardust XR along with the Hexagon App Launcher and some pre-loaded applications!
