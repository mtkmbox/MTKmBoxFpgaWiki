---
outline: [2,3]
---



## Target operating system: UEFI

PCILeech is able to target UEFI (Unified Extensible Firmware Interface) also known as BIOS unless the UEFI protects itself from DMA attacks with Vt-d or by other means.

Most computers in 2018 do not protect their UEFI by default. The most noteworthy secure exceptions are Macs and more recent computers from other big brands such as Lenovo.

If a computer is vulnerable in its UEFI mode for DMA attacks PCILeech is able to inject a "kernel" module and hijack execution. This will allow the user to execute arbitrary code in UEFI before the operating system starts. Even if secure boot may be enabled. For more information check out the blog entry [Attacking UEFI](http://blog.frizk.net/2017/08/attacking-uefi.html).

Also check out the YouTube recording from the 34th Chaos Communication Congress below:

<p align="center"><a href="https://youtu.be/XcEYkcwbRX8?t=17m40s" alt="34C3 FPGA UEFI Attack" target="_new"><img src="https://img.youtube.com/vi/XcEYkcwbRX8/0.jpg" height="250"/></a></p>

***

### Examples:

Load a "kernel" module by searching for and hooking UEFI BootServices.SignalEvent(), execute sample print to screen shellcode and then unload "kernel" module.
* ` pcileech.exe uefi_textout -kmd UEFI_SIGNAL_EVENT ` 

Load a "kernel" module by hooking and BootServices.ExitBootServices(). Base memory location of UEFI specified manually (IBI SYST table).
* ` pcileech.exe kmdload -kmd UEFI_EXIT_BOOT_SERVICES -efibase 0x7b399018 ` 

The ExitBootServices is recommended if targeting an operating system loader. If targeting UEFI itself the SignalEvent hook may be a better choice.

In addition to the examples below please find additional built-in commands and UEFI compatible implants starting with uefi when executing `pcileech` without any parameters.