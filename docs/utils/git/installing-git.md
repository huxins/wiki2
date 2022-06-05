# Installing Git

## Installing on Linux

如果你想在 Linux 上用二进制安装程序来安装基本的 Git 工具，可以使用发行版包含的基础软件包管理工具来安装。

### RHEL

如果您使用 Fedora（或任何密切相关的基于 RPM 的发行版，例如 RHEL 或 CentOS）：

```sh
$ yum install git # up to Fedora 21
```

在 CentOS 7 上安装 Git 2，基于 [End Point Dev](https://www.endpointdev.com/blog/2021/12/installing-git-2-on-centos-7/)：

```sh
$ yum install https://packages.endpointdev.com/rhel/7/os/x86_64/endpoint-repo.x86_64.rpm
$ yum install git
```

在 CentOS 7 上安装 Git 2，基于 [IUS](https://ius.io/setup)：

```sh
$ yum install https://repo.ius.io/ius-release-el7.rpm
$ yum install git236
```

