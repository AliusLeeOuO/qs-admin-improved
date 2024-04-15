# QS Admin 后台模板

## 项目提交规范

为了保持代码仓库的提交记录清晰规范，我们遵循一系列提交信息的格式规则。以下是我们项目的提交规范详细指南。

### 忽略规则

我们的提交信息中有特定的忽略规则，这些规则定义了哪些提交可以不被 `commitlint` 检查。

- **首次提交**：所有包含 "first commit" 文本的提交都将被忽略。

### 提交格式

所有提交信息应该遵循以下基本格式：

```plaintext
<type>(<scope>): <description>
```

- `<type>`：提交类型，表明这次提交主要是什么类型的更改。
- `<scope>`：（可选）影响范围，用于指明此次提交主要影响项目的哪个部分。
- `<description>`：对提交内容的简洁明了的描述。

### 允许的提交类型

以下列出了所有可接受的提交类型以及其具体含义：

- `feat`：新增功能（feature）。
- `fix`：修补bug。
- `docs`：文档更新（documentation）。
- `style`：不影响代码意义的更改（空格、格式化、缺少分号等）。
- `refactor`：重构（既不是新增功能，也不是修复bug的代码变动）。
- `perf`：优化性能。
- `test`：添加或修改测试。
- `build`：影响构建系统或外部依赖的更改（例如gulp、webpack、npm等）。
- `ci`：更改CI配置、脚本（例如Travis、Circle、Jenkins等更改）。
- `chore`：其他不修改源代码或测试文件的更改。
- `revert`：撤销先前的提交。
- `wip`：工作进行中的提交，可能需要进一步更改。
- `mod`：其他类型的修改，通常是小修小改或其他不影响功能的代码变动。

### 示例

正确的提交信息示例：

- `feat(authentication): add Google OAuth2.0 support`
- `fix(server): resolve memory leak in image processing module`
- `docs(api): update endpoint documentation for new pagination logic`

请遵循这些规范来维护项目的健康和可维护性。
