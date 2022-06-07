# Installing SVN

## Installing on Linux

### RHEL

```sh
$ yum install subversion
```

## The svnserve Server

配置文件在存储库的 `conf` 目录。

- svnserve.conf：服务配置文件。
- passwd：用户名口令配置文件。
- authz：权限配置文件。

### Understand the conf/svnserve.conf file

服务配置文件为版本库目录中的 `conf/svnserve.conf`。该文件仅由一个 [general] 配置段组成。

```ini
[general]
# 控制非鉴权用户访问版本库的权限
anon-access = none
# 控制鉴权用户访问版本库的权限
auth-access = write
# 指定用户名口令文件名
password-db = passwd
# 指定权限配置文件名
authz-db = authz
# 指定版本库的认证域
realm = Authorization SVN
```


### Understand the conf/passwd file

用户名口令文件由 `svnserve.conf` 的配置项 `password-db` 指定，默认为 conf 目录中的 passwd。该文件仅由一个 [users] 配置段组成。

```ini
[users]
admin = admin
thinker = 123456
```

### Understand the conf/authz file

权限配置文件由 `svnserve.conf` 的配置项 `authz-db` 指定，默认为 conf 目录中的 authz。该配置文件由一个 [groups] 配置段和若干个版本库路径权限段组成。

```ini
[groups]
g_admin = admin,thinker

[library:/]
@g_admin = rw
* = r
```

## The Apache HTTP Server

安装 Apache 服务：

- RHEL: `yum install httpd mod_dav_svn`

创建配置文件 `/etc/httpd/conf.d/subversion.conf`：

```xml
LoadModule dav_svn_module     modules/mod_dav_svn.so
LoadModule authz_svn_module   modules/mod_authz_svn.so
<Location /svn>
    DAV svn
    SVNParentPath /var/www/svn
    AuthType Basic
    AuthName "Authorization SVN"
    AuthzSVNAccessFile /var/www/svn/authz
    AuthUserFile /var/www/svn/passwd
    Require valid-user
</Location>
```

密码管理：

```sh
$ htpasswd -c -m /var/www/svn/passwd huxins
```

权限：

```sh
$ chown -R apache:apache /var/www/svn
```

