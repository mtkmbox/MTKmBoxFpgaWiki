import{_ as a,c as t,a2 as r,o as l}from"./chunks/framework.BDQf3LYc.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"02.Api 示例/01.PCILeechWiki/Target-Mac-EFI-FileVault2.md","filePath":"02.Api 示例/01.PCILeechWiki/Target-Mac-EFI-FileVault2.md"}'),i={name:"02.Api 示例/01.PCILeechWiki/Target-Mac-EFI-FileVault2.md"};function o(s,e,n,c,m,h){return l(),t("div",null,e[0]||(e[0]=[r('<h2 id="target-system-mac-filevault2-efi" tabindex="-1">Target system: mac FileVault2 (EFI) <a class="header-anchor" href="#target-system-mac-filevault2-efi" aria-label="Permalink to &quot;Target system: mac FileVault2 (EFI)&quot;">​</a></h2><p>PCILeech together with USB3380 hardware is able to recover FileVault2 passwords from macs by rebooting them in versions prior to 10.12.2 (macOS Sierra released Dec. 13 2016). The mac EFI FileVault2 attack is also known as CVE-2016-7585.</p><p>For additional information please see the blog entry about it <a href="http://blog.frizk.net/2016/12/filevault-password-retrieval.html" target="_blank" rel="noreferrer">here</a>.</p><p>Please check out the YouTube video below for a quick 1 minute demonstration how an attack may look like:</p><hr><h3 id="examples" tabindex="-1">Examples: <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples:&quot;">​</a></h3><p>Connect the PCILeech device to a vulnerable running macs Thunderbolt port and run the command below to exploit it and retrieve the FileVault2 password. (USB3380 only).</p><ul><li><code>pcileech.exe mac_fvrecover</code></li></ul>',8)]))}const d=a(i,[["render",o]]);export{u as __pageData,d as default};
