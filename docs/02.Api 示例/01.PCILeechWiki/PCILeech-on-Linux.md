---
outline: [2,3]
---

## PCILeech on Linux

This section is about running PCILeech on Linux. For more information about targeting Linux systems please check [Target: Linux x64](https://github.com/ufrisk/pcileech/wiki/Target-Linux-x64).

NB! Mount functionality including mounting file systems of target computers is Windows only feature at the moment. If you require the mount functionality please look into running [PCILeech on Windows](https://github.com/ufrisk/pcileech/wiki/PCILeech-on-Windows).

It is possible to run PCILeech on 64-bit Linux systems; and pre-built packages exist for x64 and ARM64 (RPi4).

PCILeech package dependencies: `sudo apt-get install make gcc pkg-config libusb-1.0 libfuse2 openssl lz4`

Please find a pre-compiled binary version of pcileech in the [latest release](https://github.com/ufrisk/pcileech/releases/latest) in the PCILeech repo. Please note that PCILeech is dependent on the [LeechCore](https://github.com/ufrisk/LeechCore) library. The required `leechcore.so` and `vmm.so` libraries are co-bundled in the binary release.

***

### Required Drivers (FPGA / USB3380 Hardware):

When using FPGA or USB3380 hardware one must have libusb installed. Libusb is installed on most modern systems so this should not be a cause of concern. PCILeech should work out of the box on 64-bit Linux systems. If libusb is missing please install it by running (as root): `apt-get install libusb-1.0-0`.

Normally, PCILeech must be run as root when using FPGA / USB3380 hardware.

***

### Building PCILeech:

To compile for Linux make sure the dependencies are met by running: `sudo apt-get install make gcc pkg-config libusb-1.0 libusb-1.0-0-dev libfuse2 libfuse-dev openssl libssl-dev lz4 liblz4-dev`.

Also ensure that the `leechcore.so` and `vmm.so` libraries exists within the _pcileech/files_ directory. If it does not exist please first build [LeechCore](https://github.com/ufrisk/LeechCore) and [MemProcFS](https://github.com/ufrisk/MemProcFS) and copy the resulting `leechcore.so` and `vmm.so` files to the _pcileech/files_ directory.

To build PCILeech move into the _pcileech/pcileech_ directory and execute: `make`. The resulting binary `pcileech` will be placed alongside shellcode modules and configuration files in the _pcileech/files_ directory after a successful build.

To build individual shellcode kernel modules and implants please individual instructions in each source file. Kernel modules and implants, even for Linux, are currently built on Windows, but should be possible to build on Linux as well with minimal modifications.