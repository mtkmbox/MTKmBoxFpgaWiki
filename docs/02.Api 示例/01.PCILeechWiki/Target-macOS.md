---
outline: [2,3]
---



## Target operating system: macOS

PCILeech is able to target macOS prior or equal to macOS Sierra. **PCILeech is not able to target macOS High Sierra or later.**

By default macOS protects itself with Vt-d, preventing DMA attacks. There is however a setting in recovery mode, which is accessible by anyone unless a firmware password is set, do disable the Vt-d DMA protections. This setting has been removed in macOS High Sierra and as a result PCILeech no longer supports macOS High Sierra.

To disable Vt-d boot the mac, press Command+r at boot time, when the apple logo shows, to boot into recovery mode. Start a terminal and type `nvram boot-args="dart=0x0"`. Vt-d should now be disabled and it will now be possible to attack macOS.

Apple have further information about [how to disable Vt-d](https://developer.apple.com/library/mac/documentation/HardwareDrivers/Conceptual/ThunderboltDevGuide/DebuggingThunderboltDrivers/DebuggingThunderboltDrivers.html) in macs prior to High Sierra.

Macs are most conveniently targeted by connecting PCILeech to the Thunderbolt or Thunderbolt3 ports of the mac with various adapters.

***

### Examples:

Load macOS kernel module:
* ` pcileech.exe kmdload -kmd macos `

Remove macOS password requirement, requires a KMD is loaded. In this example 0x11abc000 is used.
* ` pcileech.exe macos_unlock -kmd 0x11abc000 -0 1 `

In addition to the examples below please find additional built-in commands and macOS compatible implants starting with macos when executing `pcileech` without any parameters.