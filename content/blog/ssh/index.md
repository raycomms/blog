---
title: SSH Setup
date: "2021-08-25T13:06:19Z"
description: "Key File Permissions"
tags: ["ssh", "command line"]
---

To Install

```bash
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install openssh-client
```

Open the SSH port:

`sudo ufw allow ssh`

For Keys, typically you want the permissions to be:

- `.ssh` directory: `700 (drwx------)`
- public key (`.pub` file): `644 (-rw-r--r--)`
- private key (`id_rsa`): `600 (-rw-------)`

-  lastly your home directory should not be writeable by the group or others (at most `755 (drwxr-xr-x)`).
