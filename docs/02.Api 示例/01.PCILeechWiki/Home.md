# The PCILeech Wiki and Guide
===========================

PCILeech works on both Windows and Linux with a wide range of memory acquisition methods. The Windows version is somewhat more feature-rich and better performant than the Linux version due to some Windows-only dependencies and more optimized drivers. For general information about running PCILeech on Windows or Linux please check out the sections [PCILeech on Windows](https://github.com/ufrisk/pcileech/wiki/PCILeech-on-Windows) and [PCILeech on Linux](https://github.com/ufrisk/pcileech/wiki/PCILeech-on-Linux).

***

## Memory acquisition methods:
PCILeech is able to capture memory using a wide range of memory acquisition methods - both hardware based and software based methods. It's also possible to access remote memory made accessible via a remote LeechAgent.

Methods include (but are not limited to): 
* Live memory via PCIe DMA with FPGA and USB3380 hardware.
* Dump Files - Raw, Full Microsoft CrashDump, VirtualBox CoreDump, VMWare and Hyper-V save files.
* Live Memory - Comae DumpIt and WinPmem.
* Remote Memory - via LeechAgent and any supported acquisition method.

**All memory acquisition is made through the [LeechCore](https://github.com/ufrisk/LeechCore) library.** Please check out the [LeechCore and LeechService](https://github.com/ufrisk/LeechCore) project for detailed information about each memory acquisition method.

***

## Target operating systems:
As a general rule, PCILeech may always be able to dump memory of the target system supports it regardless whether the operating system is supported for kernel and user-mode module injection. For more information about kernel and user-mode injection please check out the Targets section in the menu to the right.

***

## Build from source:
Please find build instructions in the sections [PCILeech on Windows](https://github.com/ufrisk/pcileech/wiki/PCILeech-on-Windows) and [PCILeech on Linux](https://github.com/ufrisk/pcileech/wiki/PCILeech-on-Linux).
