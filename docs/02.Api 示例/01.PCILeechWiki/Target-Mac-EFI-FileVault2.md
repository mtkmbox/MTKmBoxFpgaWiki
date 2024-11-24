---
outline: [2,3]
---



## Target system: mac FileVault2 (EFI)

PCILeech together with USB3380 hardware is able to recover FileVault2 passwords from macs by rebooting them in versions prior to 10.12.2 (macOS Sierra released Dec. 13 2016). The mac EFI FileVault2 attack is also known as CVE-2016-7585.

For additional information please see the blog entry about it [here](http://blog.frizk.net/2016/12/filevault-password-retrieval.html).

Please check out the YouTube video below for a quick 1 minute demonstration how an attack may look like:



***

### Examples:

Connect the PCILeech device to a vulnerable running macs Thunderbolt port and run the command below to exploit it and retrieve the FileVault2 password. (USB3380 only).
* ` pcileech.exe mac_fvrecover `