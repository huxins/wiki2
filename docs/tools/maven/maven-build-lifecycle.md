# Maven Build Lifecycle

Maven 的[生命周期](https://maven.apache.org/ref/3.5.4/maven-core/lifecycles.html)是对所有的构建过程进行抽象和统一，**其实际行为都由插件来完成。**

## Command Line Calls

三个生命周期相互独立，而一个生命周期的阶段是有前后依赖关系的。例如：

- `mvn clean`：该命令执行的阶段为 clean 生命周期的 pre-clean 和 clean 阶段。
- `mvn test`：执行 default 生命周期的 validate、initialize 等，直到 test 的所有阶段。
- `mvn clean package`：执行 clean 的 pre-clean、clean，default 的 validate 到 package 的所有阶段。

## Plugins

### Plugin Goal

一个插件可能有多个功能，每个功能就是一个插件目标。

例如 maven-dependency-plugin 有十多个目标，最常用的：

```sh
$ mvn dependency:analyze
```

### Plugin Bindings

Maven 的生命周期与插件相互绑定，用以完成实际的构建任务。

例如项目编译这一任务，它对应了 default 生命周期的 compile 阶段，而 maven-compile-plugin 这一插件的 compile 目标能完成该任务。因此，将它们绑定，就能实现编译的目的。

除了内置绑定以外，用户还能够自己选择**将某个插件目标绑定到生命周期的某个阶段**上。

```xml
<plugins>
  <plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-antrun-plugin</artifactId>
    <version>3.1.0</version>
    <executions>
      <execution>
        <id>echo-pre-clean</id>
        <phase>pre-clean</phase>
        <goals>
          <goal>run</goal>
        </goals>
        <configuration>
          <target>
              <echo>pre-clean phase</echo>
          </target>
        </configuration>
      </execution>
    </executions>
  </plugin>
</plugins>
```

## Reference

- [Introduction to the Build Lifecycle](https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html)
- [Lifecycles Reference](https://maven.apache.org/ref/3.5.4/maven-core/lifecycles.html)

