---
outline: [2,3]
---


## Target operating system: FreeBSD

PCILeech supports 64-bit FreeBSD (x64). The support is more basic for FreeBSD compared to other operating systems. The kernel modules that allow running of arbitrary shellcode should however work on FreeBSD 10 and 11.

***

### Examples:

Load a kernel module into a target system FreeBSD kernel:
* `pcileech kmdload -kmd FREEBSD_X64`

In addition to the examples below please find additional built-in commands and FreeBSD compatible implants starting with fbsdx64 when executing `pcileech` without any parameters.