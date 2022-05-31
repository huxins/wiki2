# RPM

RPM 包由文件和元数据的存档组成。元数据包括帮助脚本、文件属性和有关包的信息。

## Command Line

`RPM` 有一些基本模式：`query`, `verify`, `install`, `upgrade`, `erase`, `show querytags`, `show configuration`。至少需要选择其中一种模式来执行包管理任务。每种模式都有自己的一组选项。例如，安装模式 `i` 有自己的一组安装选项。

### Basic modes

以下是 `RPM` 的常用模式：

- `-i`：安装一个新包。
- `-U`：将当前安装的软件包升级到较新的版本。
- `-e`：卸载一个包。
- `-V`：将包中已安装文件的信息与存储在 rpm 数据库中的包元数据中的文件的信息进行比较。
- `-q`：查询一个包。

### General Options

- `-?` | `--help`：打印帮助信息。
- `--version	`：打印版本号。
- `-v`：打印详细输出。

### Install and Upgrade Options

- `-h`：套件安装时列出标记。

### Package Selection Options

- `-a`：查询所有已安装的包。
- `-f`：查询拥有指定文件的包。

### Package Query Options

- `-i`：显示包信息，包括名称、版本和描述。
- `-l`：列出包中的文件。
- `-R`：列出此包所依赖的功能。

## Common commands

- `rpm -qlp <package-file>`：查看 `.rpm` 包含了哪些文件。
- `rpm -qa`：查看所有已安装的软件包。
- `rpm -qi <package-file>`：显示包信息，包括名称、版本和描述。
- `rpm -qf <file>`：查询拥有指定文件的套件。
- `rpm -qR <package-file>`：列出此包所依赖的功能。
- `rpm -ivh <package-file>`：安装 `.rpm`。
- `rpm -Uvh <package-file>`：更新 `.rpm`。


## References

- [Red Hat - Linux package management with YUM and RPM](https://www.redhat.com/sysadmin/how-manage-packages)

