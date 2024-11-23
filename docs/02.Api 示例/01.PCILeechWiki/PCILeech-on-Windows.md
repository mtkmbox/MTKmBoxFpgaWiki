---
outline: [2,3]
---



## PCILeech on Windows

This section is about running PCILeech on Windows. For more information about targeting Windows systems please check [Target: Windows](https://github.com/ufrisk/pcileech/wiki/Target-Windows).
Please find a pre-compiled binary version of pcileech in the [latest release](https://github.com/ufrisk/pcileech/releases/latest) in the PCILeech repo.

***

### Required Library:

PCILeech is dependent on the [LeechCore](https://github.com/ufrisk/LeechCore) library for memory acquisition. The LeechCore library is distributed in the binary release. For more information about LeechCore acquisition library, the LeechAgent, and the full range of memory acquisition options please have a look at [LeechCore](https://github.com/ufrisk/LeechCore).

PCILeech is dependent on the co-bundled [LeechCore](https://github.com/ufrisk/LeechCore) and [MemProcFS](https://github.com/ufrisk/MemProcFS) libraries.

### Required Drivers (USB3380 Hardware):

The Google Android USB driver also have to be installed if USB3380 hardware is used. Download the Google Android USB driver from: http://developer.android.com/sdk/win-usb.html#download Unzip the driver. Open Device Manager. Right click on the computer, choose add legacy hardware. Select install the hardware manually. Click Have Disk. Navigate to the Android Driver, select android_winusb.inf and install.

### Required Drivers (FPGA Hardware):

FTDI drivers have to be installed if FPGA is used with FT601 USB3 addon card. FTDI drivers will installed automatically on Windows from Windows Update at first connection. PCILeech also requires 64-bit [`FTD3XX.dll`](https://ftdichip.com/wp-content/uploads/2023/11/FTD3XXLibrary_v1.3.0.8.zip) which must be downloaded from FTDI and placed alongside `pcileech.exe`.

### Required Drivers - File System:

To use the mount functionality including:
- Mount target computer file system as folder.
- Mount target computer live RAM as file.
- The Memory Process File System.

The Dokany file system library must be installed. Please download and install the latest stable version of Dokany version 2 at: https://github.com/dokan-dev/dokany/releases/latest

***

### Building PCILeech:

PCILeech is dependent on [LeechCore](https://github.com/ufrisk/LeechCore) and [MemProcFS](https://github.com/ufrisk/MemProcFS). Please ensure LeechCore and MemProcFS are placed alongside PCILeech.

Open the PCILeech project in Visual Studio 2019 or later. Enable the LeechCore and MemProcFS projects in the solution. Build. The resulting binaries will be placed in the _pcileech\files_ folder.

To build individual shellcode kernel modules and implants please individual instructions in each source file.