# YUM

`YUM` 是用于在 Red Hat Enterprise Linux 中安装、更新、删除和管理软件包的主要软件包管理工具。`YUM` 在安装、更新和删除软件包时执行依赖关系解析。`YUM` 可以管理来自系统中已安装的存储库或 `.rpm` 包。

## Configuration file

`YUM` 的主要配置文件在 `/etc/yum.conf`。

额外的配置文件也从 `reposdir` 选项设置的目录中读取（默认是 `/etc/yum.repos.d`）。

### OPTIONS

- `exclude`：要从更新或安装中排除的软件包列表。以空格分隔的列表。
  - `exclude=kernel*`：排除内核相关包。
- `ip_resolve`：IP 地址类型，确定如何解析主机名。
  - `ip_resolve=4`：解析为 IPv4 地址。
- `proxy`：代理服务器的 URL。
  - `proxy_username`：用于代理的用户名。
  - `proxy_password`：此代理的密码。

## Command Line

使用 `YUM` 在 Linux 中管理软件包很容易。在命令行中，输入：

`yum [options] [command] [package ...]`

### Command

以下是 `YUM` 的常用命令：

- `install`：用于安装一个包或一组包的最新版本，同时确保满足所有依赖项。
- `localinstall`：用于安装一组本地 `.rpm` 文件。
- `remove`：用于从系统中删除指定的包以及删除依赖于被删除包的任何包。
- `update`：如果在没有任何包的情况下运行，将更新每个当前安装的包。
- `upgrade`：与设置了 `--obsoletes` 标志的 `update` 命令相同。
- `check-update`：列出所有可更新的软件清单。
- `deplist`：列出依赖项和提供它们的包。
- `list`：用于列出可用包的各种信息。
  - `yum list available`：列出所有可用包。
  - `yum list installed`：列出所有已安装的软件包。
  - `yum list updates`：列出所有可更新的软件包。
  - `yum list extras`：列出已安装的软件包，且这些软件包在已配置的存储库中都不可用。
  - `yum list all`：列出已安装和可用的软件包。
  - `yum list kernel`：列出已安装和可用的内核包。
- `info`：用于列出可用包的描述和摘要信息。
- `search`：当您对包有所了解但不确定它的名称时，这用于查找包。
- `repolist`：生成已配置存储库的列表，默认是列出所有启用的存储库。
  - `yum repolist all`：显示所有的软件存储库。
  - `yum repolist enabled`：显示启用的软件存储库。
  - `yum repolist disabled`：显示禁用的软件存储库。
- `clean`：清理缓存目录中随时间累积的各种东西。
  - `yum clean packages`：删除保存在缓存中的包。
- `makecache`：用于下载当前启用的存储库的所有元数据并使其可用。
- `provides`：用于找出哪个包提供了某些功能或文件。
  - `yum provides "*bin/top"`：显示包含 top 命令的包。
  - `yum provides "*/nginx.conf"`：显示包含 nginx.conf 文件的包。
- `history`：查看事务的历史记录。
  - `yum history undo <id>`：撤消事务。

### Options

以下是 `YUM` 的常用选项：

- `-y`：假设任何问题的答案都是肯定的。

## Repositories

### Install a repository `.rpm`

安装一个带有存储库信息的 `.rpm`。以下命令为 CentOS 7 安装 EPEL 存储库：

```sh
$ yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
```

### Set up only a section of a repository

在需要特定存储库的情况下，例如 PHP 7.2，您首先需要安装存储库，然后使用 `yum-config-manager` 禁用和启用存储库，如下所示：

```sh
$ yum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
$ yum-config-manager --disable remi-php54
$ yum-config-manager --enable remi-php72
```

### Manually set up a repository

最后一种手动配置 `yum` 存储库的方法，我们使用文本编辑器在 `/etc/yum.repos.d` 中创建一个 `.repo` 文件。在此示例中，我们将为 MySQL 5.7 创建存储库文件：

```sh
$ nano /etc/yum.repos.d/mysql57-community.repo
[mysql57-community]
name=MySQL 5.7 Community Server
baseurl=http://repo.mysql.com/yum/mysql-5.7-community/el/7/$basearch/
enabled=1
gpgcheck=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql
```

### Repository mirroring

阿里云 Base：

```sh
$ mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
$ curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
```

清华 EPEL：

```sh
$ yum install epel-release
$ sed -e 's!^metalink=!#metalink=!g' \
    -e 's!^#baseurl=!baseurl=!g' \
    -e 's!//download\.fedoraproject\.org/pub!//mirrors.tuna.tsinghua.edu.cn!g' \
    -e 's!http://mirrors\.tuna!https://mirrors.tuna!g' \
    -i /etc/yum.repos.d/epel.repo /etc/yum.repos.d/epel-testing.repo
```

## YumUtils

用于操作存储库和扩展包管理的工具。

安装：

```sh
$ yum install yum-utils
```

以下是 `YumUtils` 的常用命令：

- `yum-config-manager`：切换存储库，添加新存储库并设置主要配置选项。
  - `yum-config-manager --add-repo repository_url`：从指定的文件或 url 添加并启用 repo。
  - `yum-config-manager --enable repository`：启用指定的 repos。
  - `yum-config-manager --disable repository`：禁用指定的 repos。
- `repoquery`：查询远程 repos 和本地 RPM 数据库。
  - `repoquery --requires --resolve bash`：显示依赖包。
  - `repoquery -ql epel-release`：列出包中的文件。

## References

- [Red Hat - Yum Command Cheat Sheet](https://access.redhat.com/articles/yum-cheat-sheet)
- [Red Hat - Adding, Enabling, and Disabling a Yum Repository](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/6/html/deployment_guide/sec-managing_yum_repositories)
- [Red Hat - How to add a Yum repository](https://www.redhat.com/sysadmin/add-yum-repository)
- [Red Hat - How to use yum to download a package without installing it](https://access.redhat.com/solutions/10154)
- [Managing Packages With Yum](https://prefetch.net/articles/yum.html)

