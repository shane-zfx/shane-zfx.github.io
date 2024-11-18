---
layout: post
title: Rust 所有权系统
subtitle: "对作用域、所有权、生命周期的个人理解"
tags: [rust, 所有权, 生命周期]
permalink: /rust/ownership 
---

> 作用域指的是一个项的生命周期，它决定了一个变量在代码中的存活时间。
> 
## 作用域
## 所有权
## 生命周期标注

```bash
sudo docker run -d \
  --restart=always \
  --name minio2 \
  --network unisdd-net \
  -p 9100:9000 -p 9101:9001 \
  -e "MINIO_ROOT_USER=unidt2" \
  -e "MINIO_ROOT_PASSWORD=Huayuan@2023" \
  -v /data1/minio/data1:/data1 \
  -v /data2/minio/data2:/data2 \
  -v /data3/minio/data3:/data3 \
  minio/minio server /data1 /data2 /data3 \
  --console-address ":9001" \

```

