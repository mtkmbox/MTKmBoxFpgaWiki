---
outline: [2,3]
---


## Target operating system: Linux 64-bit (x64)

PCILeech is currently able to target Linux x64 with kernel module implants. PCILeech does not support 32-bit Linux targets or ARM targets, except for native DMA memory access which is operating system independent.

The Linux kernel have gone through several changes during the years and different signatures and methods are required depending on the target system kernel version and the attack hardware used.

In kernels equal or below version 4.6 the kernel itself is always found below 4GB which means that both the USB3380 and FPGA hardware is able to access the kernel and patch into it.

Kernels equal to or above version 4.8 randomizes the kernel in the whole physical memory, making it unlikely to end up below 4GB which makes it a problem for USB3380 hardware - but not for FPGA hardware.

Kernels above or equal to 4.19 may currently experience problems.

In addition to directly target the kernel PCILeech supports targeting the EFI Runtime Services. This may be useful if USB3380 attack hardware is used more recent kernels and the system is EFI booted and not Legacy/MBR booted. The EFI Runtime Services attack method is discussed more in detail in the blog entry [Attacking UEFI Runtime Services and Linux](http://blog.frizk.net/2017/01/attacking-uefi-and-linux.html).

***

### Examples:

Load a kernel module into Linux kernel 4.6 or below. Minimum supported kernel version 2.6.33. Both USB3380 and FPGA hardware.
* ` pcileech kmdload -kmd LINUX_X64_46 `

Load a kernel module into the Linux kernel by first targeting the EFI runtime services. Both USB3380 and FPGA hardware.
* ` pcileech kmdload -kmd LINUX_X64_EFI `

Load a kernel module into Linux kernel 4.8 or above. Not likely to work with USB3380 hardware unless extremely lucky, will work with FPGA hardware.
* ` pcileech kmdload -kmd LINUX_X64_48 `

Mount Linux, kernel prior or equal to 4.6, target system live RAM and file system without pre-loading a KMD.
* ` pcileech.exe mount -kmd LINUX_X64_46 `

Retrieve the file /etc/shadow from a Linux system without pre-loading a KMD.
* ` pcileech lx64_filepull -kmd LINUX_X64_46 -s /etc/shadow -out c:\temp\shadow `

In addition to the examples below please find additional built-in commands and Linux compatible implants starting with lx64 when executing `pcileech` without any parameters.