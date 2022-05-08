# Maven Build Profiles

构建配置文件是一系列配置项的值，可以用来设置或者覆盖 Maven 构建默认值。

使用构建配置文件，可以为不同的环境，比如说生产环境（Production）和开发（Development）环境，定制构建方式。

## types of profile

| 类型        | 在哪定义                       |
| ----------- | ------------------------------ |
| Per Project | pom.xml                        |
| Per User    | %USER_HOME%/.m2/settings.xml   |
| Global      | %maven.home%/conf/settings.xml |

### pom.xml

**构建配置文件**采用的是 **\<profiles>** 节点。

```xml
<profiles>
  <profile>
    <id>test</id>
    <build>
      <plugins>
        <plugin>
          <groupId>org.apache.maven.plugins</groupId>
          <artifactId>maven-antrun-plugin</artifactId>
          <version>3.1.0</version>
          <executions>
            <execution>
              <id>env-properties-test</id>
              <phase>test</phase>
              <goals>
                <goal>run</goal>
              </goals>
              <configuration>
                <target>
                  <echo>Using env.test.properties</echo>
                  <copy file="src/main/resources/env.test.properties" tofile="${project.build.outputDirectory}/env.properties" overwrite="true"/>
                </target>
              </configuration>
            </execution>
          </executions>
        </plugin>
      </plugins>
    </build>
  </profile>
</profiles>
```

## triggered profile

Maven 的构建配置文件可以通过多种方式激活。

- 使用命令控制台输入显式激活。
- 通过 maven 设置。
- 基于环境变量。
- 操作系统设置。
- 文件的存在或者缺失。

### From the command line

通过命令行参数输入指定的 profile id，显式激活 profile。

```sh
$ mvn clean test -Ptest
```

第一个 test 为 Maven 生命周期阶段，第二个 test 为**构建配置文件**指定的 \<id> 参数，这个参数通过 -P 来传输。

### Through Maven settings

配置 setting.xml 文件，增加 \<activeProfiles> 属性。

```xml
<activeProfiles>
  <activeProfile>test</activeProfile>
</activeProfiles>
```

### Based on environment variables

在 pom.xml 里面的 \<profile> 节点，加入 \<activation> 节点。

```xml
<activation>
  <property>
     <name>env</name>
     <value>test</value>
  </property>
</activation>
```

执行命令：

```sh
$ mvn test -Denv=test
```

上面使用 -D 传递环境变量，其中 evn 对应刚才设置的 \<name> 值，test对应 \<value>。

## Reference

- [Introduction to Build Profiles](https://maven.apache.org/guides/introduction/introduction-to-profiles.html)

