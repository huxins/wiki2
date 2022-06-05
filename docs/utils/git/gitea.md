# Gitea

## Installing

### Installation from binary

基于二进制的安装，参考[文档](https://docs.gitea.io/en-us/install-from-binary/)。

从[下载页面](https://dl.gitea.io/gitea/)中选择与目标平台匹配的文件，复制 URL 并在以下命令中替换 URL：

```sh
$ wget -O gitea https://dl.gitea.io/gitea/1.16.8/gitea-1.16.8-linux-amd64
$ chmod +x gitea
$ cp gitea /usr/local/bin/gitea
```

检查服务器上是否安装了 Git。如果没有，请先安装它。 Gitea 需要 Git 版本 >= 2.0。

```sh
$ git --version
```

创建用户以运行 Gitea。

```sh
$ useradd \
    --system \
    --shell /bin/bash \
    -c 'Gitea Web' \
    --home /home/gitea \
    -m \
    gitea
```

创建所需的目录结构。

```sh
$ mkdir -p /var/lib/gitea/{custom,data,log}
$ chown -R gitea:gitea /var/lib/gitea/
$ chmod -R 750 /var/lib/gitea/
$ mkdir /etc/gitea
$ chown root:gitea /etc/gitea
$ chmod 770 /etc/gitea
```

### Run Gitea as Linux service

基于 systemd，参考[文档](https://docs.gitea.io/en-us/linux-service/)。

创建 `/etc/systemd/system/gitea.service` 文件。

```ini
[Unit]
Description=Gitea (Git with a cup of tea)
After=syslog.target
After=network.target

[Service]
RestartSec=2s
Type=simple
User=gitea
Group=gitea
WorkingDirectory=/var/lib/gitea/
ExecStart=/usr/local/bin/gitea web --config /etc/gitea/app.ini
Restart=always
Environment=USER=gitea HOME=/home/gitea GITEA_WORK_DIR=/var/lib/gitea

[Install]
WantedBy=multi-user.target
```

设置自启并启动 Gitea。

```sh
$ systemctl enable gitea
$ systemctl start gitea
```

