---
layout: post
title: 磁盘与文件系统管理
subtitle: "linux 上常见的文件系统和硬盘相关命令记录"
tags: [文件系统, 硬盘, 分区, 挂载, 格式化]
permalink: /rust/ownership 
---

> 重新挂载格式化后的旧磁盘，记得修改 `/etc/fstab` 文件中对应硬盘 `uuid`，否则重启后会丢失挂载信息，导致启动失败

## 磁盘管理

