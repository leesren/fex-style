# 版本管理

## git 提交规范

- [git commit 提交规范](https://github.com/commitizen/cz-cli)
- [约定式提交-一种用以给提交信息增加人机可读的信息的规范](https://www.conventionalcommits.org/zh-cn/v1.0.0-beta.4/)

## 常用的版本工具库

- [docusaurus - 简单的文档站点工具, facebook 的很多开源项目都在用](https://docusaurus.io/)
- [lerna - 一款多项目多模块的管理工具](https://github.com/lerna/lerna)
- [rimraf - A `rm -rf` util for nodejs](https://github.com/isaacs/rimraf)
- [changelog - Generate a changelog from git metadata](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli)

自动生成 `CHANGELOG.md` 文件

- [npm-version - 自动生成版本](https://docs.npmjs.com/cli/version.html)

当你提交一次要改版本号时，你会用到的

```bash
npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease [--preid=<prerelease-id>] | from-git]

'npm [-v | --version]' to print npm version
'npm view <pkg> version' to view a package's published version
'npm ls' to inspect current package/dependency versions

```
