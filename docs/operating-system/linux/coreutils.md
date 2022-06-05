# Coreutils

## Directory listing

### `ls`: List directory contents

您可以使用 `ls` 命令列出您有权访问的任何目录中的文件。

您可以使用文件名片段和通配符来限制描述的文件。

- `ls hello`：列出全名为 `hello` 的文件；如果 `hello` 是一个目录，则显示 `hello` 目录的内容。
- `ls hel*`：列出目录中以字符 `hel` 开头的所有文件。
- `ls hell?`：列出以 `hell` 开头后跟一个字符的文件。

`*` 代表任意数量的未知字符，而 `?` 只代表一个未知字符。您可以在文件名片段中的任何位置使用 `*` 和 `?` 。

如果您想列出另一个目录中的文件，请使用 `ls` 命令以及该目录的路径。例如，如果您在主目录中并且想要列出 `/etc` 目录的内容，请输入：

```sh
$ ls /etc
```

有几个选项控制您获得的信息的显示方式。选项以这种格式使用：

```sh
$ ls -option filename
```

`ls` 的一些常用选项是：

- `-a`：显示所有文件，包括以 `.` 开头的文件。
- `-d`：显示目录名称，但不显示内容。
- `-F`：用符号标记特殊文件以表明它们是什么：`/` 表示目录，`@` 表示符号链接，`*` 表示可执行程序。
- `-l`：显示文件的权限、所有者、大小（以字节为单位）以及最后一次修改文件的时间。
- `-R`：递归列出子目录。
- `-h`：以易读形式显示文件大小。

## Changing file attributes

类 Unix 操作系统，如 Linux，使用权限管理来确定谁可以访问和修改存储在其文件系统中的文件和目录，文件系统中的每个文件和目录都分配有 `owner` 和 `group` 属性。

默认情况下，创建文件或目录的用户被设置为该文件或目录的所有者，需要时，系统的 root 管理员可以更改文件和目录的用户属性。

`group` 属性可用于授予队友或协作者对所有者的文件和目录的共享访问权限，并提供一种方便的方式来授予多个用户访问权限。

### `chmod`: Change access permissions

要更改文件和目录权限，请使用命令 `chmod` (change mode)。文件的所有者可以通过添加 `+` 或减去 `-` 读取、写入和执行权限来更改用户 `u`、组 `g` 或其他 `o` 的权限。

- `-R`：递归更改文件和目录。

使用 `chmod` 更改文件权限有两种基本方法：符号方法和绝对形式。

#### Symbolic method

使用单字母缩写指定权限。

```sh
$ chmod a+r myfile
```

#### Absolute form

可以在其中指定一组三个数字，这些数字共同确定所有访问类别和类型。您必须指定文件权限的整个状态，而不是更改特定属性。

```sh
$ chmod 751 myfile
```

## File permissions

要查看目录中所有文件的权限，请使用 `ls -al` 命令。

```sh
$ ls -al
drwxr-xr-x   2 root root 4096 Jun  2 18:01 Example
-rw-r--r--   1 root root    0 Jun  2 18:01 myfile.txt
```

在上面的输出示例中，每行中的第一个字符表示列出的对象是文件还是目录。目录由 `d` 表示；第一行开头没有 `d` 表示 `myfile.txt` 是常规文件。

字母 `rwx` 代表不同的权限级别：

| Permission | Files        | Directories        |
| ---------- | ------------ | ------------------ |
| `r`        | 可以读取文件 | 可以 `ls` 目录     |
| `w`        | 可以写入文件 | 可以修改目录的内容 |
| `x`        | 可以执行文件 | 可以 `cd` 到目录   |

注意 `r`, `w` 和 `x` 的多个实例。这些分为三组，代表不同的所有权级别：

- 所有者或用户权限：第一组三个字符表示所有者（也称为用户）的权限设置。
- 组权限：第二个 `rwx` 集表示组权限。在上面示例的第四列中，root 是组名。
- 其他权限：最后的 `rwx` 集用于“其他”（有时称为“世界”）。这是组外的任何人。

### Symbolic Modes

符号模式将文件模式位的更改表示为对单字符符号的操作。它们允许您修改文件模式位的全部或选定部分，可选择基于它们以前的值，也可能基于当前的 `umask`。

#### Setting Permissions

符号模式，可以使用单字母缩写指定权限。

| Access class | Operator             | Access Type |
| ------------ | -------------------- | ----------- |
| u (user)     | + (add access)       | r (read)    |
| g (group)    | - (remove access)    | w (write)   |
| o (other)    | = (set exact access) | x (execute) |

`a` 表示 all，表示 `u`, `g`, and `o`。 `+w` 为省略符号模式，默认为 `a+w`。

#### The Umask and Protection

`umask` 是一个命令，它确定掩码的设置，控制如何为新创建的文件设置文件权限。掩码中所有数字均为[八进制](https://en.wikipedia.org/wiki/Umask#Octal_codes)。

- 计算新创建文件的权限：
  - 在 Linux 中不允许创建有可执行权限的新文件，因此需要去掉 user, group, other 的执行权限 1；
  - 使用 666 按位减 `umask` 值，直至减到为 0。
- 计算新创建目录的权限：
  - 直接使用 777 按位减 `umask` 值即可。

计算方法参考 [myfreax](https://www.myfreax.com/linux-settings-umask/)。

常见 `umask` 速查：

```
Umask   Created Files       Created Directories
-------------------------------------------------------------
000     666 (rw-rw-rw-)     777     (rwxrwxrwx)
002     664 (rw-rw-r--)     775     (rwxrwxr-x)
022     644 (rw-r--r--)     755     (rwxr-xr-x)
027     640 (rw-r-----)     750     (rwxr-x---)
077     600 (rw-------)     700     (rwx------)
277     400 (r--------)     500     (r-x------)
```

### Numeric Modes

| Permission  | Number |
| ----------- | ------ |
| Read (r)    | 4      |
| Write (w)   | 2      |
| Execute (x) | 1      |

## References

- [GNU Coreutils](https://www.gnu.org/software/coreutils/manual/html_node/index.html)
- [Stack Exchange - File permissions: kernel or file system](https://unix.stackexchange.com/questions/443318/file-permissions-kernel-or-file-system)
- [Stack Exchange - Linux Kernel: uid and gid vs /etc/passwd](https://unix.stackexchange.com/questions/61408/linux-kernel-uid-and-gid-vs-etc-passwd)
- [Knowledge Base - Manage file permissions on Unix-like systems](https://kb.iu.edu/d/abdb)

