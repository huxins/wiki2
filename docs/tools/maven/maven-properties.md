# Maven Properties

除了在 setting.xml 以及 pom.xml 当中用 properties 定义的常量，Maven 还提供了一些隐式的变量，用来访问系统环境变量。

此页面提取了一些经典值：

- `${project.basedir}`
  - 包含 pom.xml 文件的目录。
- `${project.version}`
  - 项目版本。
- `${project.build.directory}`
  - 默认情况下，这表示 `target` 文件夹。
- `${project.build.outputDirectory}`
  - 默认情况下，这表示 `target/classes` 文件夹。
- `${project.build.testOutputDirectory}`
  - 默认情况下，这表示 `target/test-classes` 文件夹。
- `${project.build.sourceDirectory}`
  - 默认情况下，这表示 `src/main/java` 文件夹。
- `${project.build.testSourceDirectory}`
  - 默认情况下，这表示 `src/test/java` 文件夹。
- `${project.build.finalName}`
  - 默认定义为 `${project.artifactId}-${project.version}`。
- `${settings.localRepository}`
  - 它引用本地存储库的位置，默认为 `${user.home}/.m2/repository`。

## Reference

- [Maven Properties Guide](https://cwiki.apache.org/confluence/display/MAVEN/Maven+Properties+Guide)
- [Model Interpolation](https://maven.apache.org/ref/3.5.4/maven-model-builder/#Model_Interpolation)

