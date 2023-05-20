# 使用Git向OpenWHU/WHUCAO贡献资料



## 前言

> 本文将从命令行Git、Github Desktop两个不同的使用方式出发，简单讲述Git的基本工作流程，以使读者可以快速使用Git向OpenWHU/WHUCAO贡献资料

## 命令行Git

### 下载与安装

- 前往[Git - Downloads](https://git-scm.com/downloads)下载，选择您的系统并下载。对于大多数Windows用户来说，选择`Standalone Installer`下的`64-bit Git for Windows Setup`即可
- 打开并安装。其中有部分详细设置，在此不详细描述。对于本教程而言，您可以一路选择`Next`最后·`Install`
- 安装后，按下<kbd>WindowsR</kbd>+<kbd>R</kbd>键输入`cmd`后确认，在打开的命令行窗口中输入

```cmd
git --version
```

​	出现相关版本信息，即安装成功

​	<img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201112646.png" alt="image-20230520111227675" style="zoom: 67%;" /> 

### 基础配置

- 在命令行窗口输入

```cmd
git config --global user.name "your name"
```

​	进行全局的用户名配置，此用户名即为Commit的对外显示用户名

- 在命令行窗口输入

```cmd
git config --global user.email "your@email.com"
```

​	进行全局的邮箱配置，此邮箱即为Commit的对外显示邮箱

### Fork仓库并Clone到本地

#### Fork目标仓库（以OpenWHU仓库为例）

* 打开目标仓库，如[WHUCodingAndOpen/OpenWHU](https://github.com/WHUCodingAndOpen/OpenWHU)
* 点击右上角的`Fork`，并`Creat fork`

<img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201227062.png" alt="image-20230520121946660" style="zoom:50%;" /> 

​	创建完成后，您就会进入在您的账户下的对应的拷贝仓库

​	左上角显示的应是`您的用户名/OpenWHU (Forked from xxx)`

* 在您的仓库中，单击`Code`，并在`HTTPS`选项卡中单击复制按钮

<img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201252379.png" alt="image-20230520123633849" style="zoom:50%;" /> 

#### Clone仓库到本地

* 在您的电脑上希望存放仓库的文件夹*（没有就新建一个）*的`空白处`右键选择`Git Bash Here`*（Win11需要点击“显示更多选项”）*

* 输入

  ```cmd
  git clone 将链接粘贴到这里
  ```

  将您的仓库克隆到本地*（右键选择Paste粘贴，或使用快捷键<kbd>Shift</kbd>+<kbd>Insert</kbd>）*

#### **完成后，仓库便被Clone到本地，后续文件操作（增、删、改等）即在对应文件夹中进行**

### Add、Commit、Pull、Push

> add是将文件的变更操作提交到暂存区
>
> commit则是将目前暂存区的修改打包提交到本地代码库
>
> pull则是同步远程代码库到本地代码库
>
> push则是将本地的代码库同步到远程代码库（本文中为Github）

#### Add

文件的增删改操作需要使用`add`命令提交到暂存区

- 使用以下命令添加所有修改、删除或新建的文件到暂存区

```cmd
git add .
```

- 使用以下命令提交指定文件更改到暂存区

```cmd
git add filename.txt
```

* 如果再次修改了在暂存区中的文件，可以通过以下命令进行更新 

```cmd
git add -u
```

#### Commit

使用`Commit`命令将暂存区的代码提交到本地版本库

- 使用以下命令提交到本地版本库

```cmd
git commit -m '这里填写修改说明'
```

#### Pull

本地的代码库可能未更新远程代码库的新文件，使用`pull`命令同步远程代码库到本地代码库

- 使用以下命令同步远程代码库到本地代码库

```cmd
git pull origin main
```

#### Push

一切修改完成后，使用`Push`命令将本地代码库同步到远程代码库

- 将本地的提交同步给远程版本库

```cmd
git push origin main
```

**注：此操作会弹出Github的登录页面，请在相应页面登录；您也可使用配置ssh秘钥对进行登录，在本文中暂不讨论**

### 提交PR

完成`Push`后，相应的文件操作便同步到了您的相应的Github仓库中

此时，您需要向源仓库提交`Pull Request`，申请将自己仓库中的修改内容同步到源仓库中

- 打开您的仓库页面
- 选择`Contribute`并点击`Open Pull Request`

<img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201332074.png" alt="image-20230520133216700" style="zoom:50%;" /> 

- 完善相关信息，创建PR

<img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201334540.png" alt="image-20230520133403081" style="zoom: 25%;" /> 

- 创建完成后，等待管理员合并到主仓库即可

---

**至此，您就成功上传文件到源仓库（本例为OpenWHU）**

## Github Desktop

> 相较于命令行，图形化操作界面更简便

### 下载与安装

- 前往[GitHub Desktop Download](https://desktop.github.com/)页面下载Github Desktop应用程
- 安装完成后打开，进行登录
- 登录完成后填写`Name`、`Email`信息，该信息即为Commit的对外显示信息

### Fork仓库并Clone到本地

#### Fork目标仓库（以OpenWHU仓库为例）

* 打开目标仓库，如[WHUCodingAndOpen/OpenWHU](https://github.com/WHUCodingAndOpen/OpenWHU)
* 点击右上角的`Fork`，并`Creat fork`

<img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201227062.png" alt="image-20230520121946660" style="zoom:50%;" /> 

​	创建完成后，您就会进入在您的账户下的对应的拷贝仓库

​	左上角显示的应是`您的用户名/OpenWHU (Forked from xxx)`

#### Clone仓库到本地

- 打开Github Desktop
- 选择`Clone a repository from the Internet...`

<img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201348530.png" alt="image-20230520134839579" style="zoom:50%;" /> 

- 选择对应仓库并更改存储位置（可选）

<img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201350795.png" alt="image-20230520135020461" style="zoom: 33%;" /> 

- clone完成后，选择`To contribute to the parent project`

<img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201351275.png" alt="image-20230520135135026" style="zoom:33%;" /> 

#### **完成后，仓库便被Clone到本地，后续文件操作（增、删、改等）即在对应文件夹中进行**

### 选择并提交文件修改

你在本地仓库文件夹中做的所有修改都会被记录

- 选择需要提交的文件修改并Commit提交到本地版本库

<img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201409085.png" alt="image-20230520140916345" style="zoom:33%;" /> 

- Commit完成后，点击`Push origin`将本地版本库同步到远程Github版本库

  <img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201412599.png" alt="image-20230520141247054" style="zoom: 50%;" /> 

### 提交PR

完成`Push`后，相应的文件操作便同步到了您的相应的Github仓库中

此时，您需要向源仓库提交`Pull Request`，申请将自己仓库中的修改内容同步到源仓库中

- 打开您的仓库页面
- 选择`Contribute`并点击`Open Pull Request`

<img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201332074.png" alt="image-20230520133216700" style="zoom:50%;" /> 

- 完善相关信息，创建PR

<img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201334540.png" alt="image-20230520133403081" style="zoom: 25%;" /> 

- 创建完成后，等待管理员合并到主仓库即可

---

**至此，您就成功上传文件到源仓库（本例为OpenWHU）**

