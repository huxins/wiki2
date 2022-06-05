# Shadow-utils

## Understand the /etc/passwd file

用户帐户信息存储在 `/etc/passwd` 文件中。此信息包括帐户名称，主目录位置和默认 shell 以及其他值。

每个字段由 `:` 字符分隔，并非所有字段都必须填充，但您必须对它们进行描述。

以下是 `/etc/passwd` 字段的示例：

```
username:password:UID:GID:comment:home:shell
```

默认情况下，Linux 系统会自动按照从 1000 开始的数字顺序将 UID 和 GID 分配给新用户帐户。换句话说，如果您在安装过程中创建一个新的用户帐户，它将具有 UID = 1000 和 GID = 1000，如下所示：

```
khess:x:1000:1000:Ken Hess:/home/khess:/bin/bash
```

这种任意分配背后的理论是，低于 1000 的任何东西都保留给系统帐户、服务和其他特殊帐户，而普通用户 UID 和 GID 保持在 1000 以上。该理论基于这样的假设，即 999 个帐号减去一些预先分配的帐号，足以满足大多数系统多年的需求。

root 帐户拥有 UID = 0 和 GID = 0 的令人敬畏的特权。这些数字赋予了 root 帐户压倒性的力量。

在许多 Unix 和 Linux 发行版中，nobody 用户是伪用户。根据 [Linux Standard Base](https://refspecs.linuxbase.org/LSB_3.0.0/LSB-PDA/LSB-PDA/usernames.html)。

## Understand the /etc/shadow file

很久以前，密码哈希存储在 `/etc/passwd` 文件中。这个文件是世界可读的，允许好奇的用户从文件中提取其他帐户的密码哈希，并通过密码破解实用程序运行它们。最终，密码散列被移动到一个只有 root 才能读取的文件：`/etc/shadow`。今天，`/etc/passwd` 文件中的密码字段标有 `x`。

管理员应该识别 `/etc/shadow` 中的每个字段。有几个字段与密码要求有关。

以下是 `/etc/shadow` 字段的示例：

```
username:password:last password change:min:max:warning:inactive:expired:reserved for future use
```

## Managing user accounts

### Adding user accounts

`useradd` 通过 [pam_start](https://github.com/shadow-maint/shadow/blob/4.6/src/useradd.c#L2190) 调用 PAM 的 [pam_start](https://github.com/linux-pam/linux-pam/blob/Linux-PAM-1_1_8/libpam/pam_start.c#L18) 函数来实现创建新用户或更新默认新用户信息。

`adduser` 是一个 `perl` 脚本，它在后端使用 `useradd` 二进制文件。

在 `adduser` 命令中，使用 `--system` 选项来创建系统用户。它不会将 `/etc/skel` 复制到主目录。系统用户将使用 `/usr/sbin/nologin` 并且默认属于 `nogroup`，要将新系统用户放在具有相同 ID 的新组中，请使用 `--group` 选项。

当您创建帐户以运行守护程序、服务或其他系统软件时，而不是创建用于交互使用的帐户，建议使用系统账户。将用户和软件帐户保持在数字空间的不同部分有长期的好处。大多数情况下，它可以很容易地判断帐户是什么，以及人类是否应该能够登录。

- `--system`：创建一个系统帐户，默认。
  - expiry date 为 never，保存于 `/etc/shadow`。
  - uid 低于 999，就像在 `/etc/login.defs` 上设置的一样。
- `--shell`：用户登录 shell 的名称。
- `-c`：它通常是对登录名的简短描述，目前用作用户全名的字段。
- `--home`：用户登录目录。
- `-m`：如果用户的主目录不存在，则创建它。
- `-M`：不要创建用户的主目录。
- `-g`：用户初始登录组的组名或编号，该组必须已经存在。
- `-G`：新增用户也是其成员的补充组列表。

### Removing user accounts

- `userdel -r <username>`：用户主目录中的文件将连同主目录本身和用户的 mail spool 一起被删除。

### Manage password requirements

- `chage -l <username>`：显示帐户帐龄信息。
- `passwd <username>`：修改密码。
  - `passwd -S <username>`：显示帐户密码状态的简短信息。
  - `passwd -e <username>`：配置帐户密码过期。
  - `passwd -l <username>`：锁定指定帐户。
  - `passwd -u <username>`：解锁指定帐户。
  - `passwd -n <mindays> <username>`：设置最短密码生命周期。
  - `passwd -x <maxdays> <username>`：设置最长密码生命周期。
  - `passwd -w <warndays> <username>`：设置密码过期警告的提前天数。
  - `passwd -i <inactivedays> <username>`：密码有效期内非活动状态达到多少天应被禁用。

## References

- [Stack Exchange - What does the --system flag for adduser do](https://unix.stackexchange.com/questions/619654/what-does-the-system-flag-for-adduser-do)
- [Stack Exchange - In what condition, should I create a system user instead of a normal user](https://serverfault.com/questions/350931/in-what-condition-should-i-create-a-system-user-instead-of-a-normal-user)
- [Stack Exchange - What's the difference between a normal user and a system user](https://unix.stackexchange.com/questions/80277/whats-the-difference-between-a-normal-user-and-a-system-user)
- [Stack Exchange - What is the difference between adduser and useradd](https://askubuntu.com/questions/345974/what-is-the-difference-between-adduser-and-useradd)
- [Red Hat - 3 basic Linux user management commands every sysadmin should know](https://www.redhat.com/sysadmin/linux-commands-manage-users)

