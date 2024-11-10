import{_ as a,c as i,a0 as t,o as l}from"./chunks/framework.CbAMbEWr.js";const u=JSON.parse('{"title":"使用Git向OpenWHU/WHUCAO贡献资料","description":"","frontmatter":{},"headers":[],"relativePath":"tech/git.md","filePath":"tech/git.md","lastUpdated":1731205388000}'),s={name:"tech/git.md"};function o(n,e,p,d,h,c){return l(),i("div",null,e[0]||(e[0]=[t('<h1 id="使用git向openwhu-whucao贡献资料" tabindex="-1">使用Git向OpenWHU/WHUCAO贡献资料 <a class="header-anchor" href="#使用git向openwhu-whucao贡献资料" aria-label="Permalink to &quot;使用Git向OpenWHU/WHUCAO贡献资料&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><blockquote><p>本文将从命令行Git、Github Desktop两个不同的使用方式出发，简单讲述Git的基本工作流程，以使读者可以快速使用Git向OpenWHU/WHUCAO贡献资料</p></blockquote><h2 id="命令行git" tabindex="-1">命令行Git <a class="header-anchor" href="#命令行git" aria-label="Permalink to &quot;命令行Git&quot;">​</a></h2><h3 id="下载与安装" tabindex="-1">下载与安装 <a class="header-anchor" href="#下载与安装" aria-label="Permalink to &quot;下载与安装&quot;">​</a></h3><ul><li>前往<a href="https://git-scm.com/downloads" target="_blank" rel="noreferrer">Git - Downloads</a>下载，选择您的系统并下载。对于大多数Windows用户来说，选择<code>Standalone Installer</code>下的<code>64-bit Git for Windows Setup</code>即可</li><li>打开并安装。其中有部分详细设置，在此不详细描述。对于本教程而言，您可以一路选择<code>Next</code>最后·<code>Install</code></li><li>安装后，按下<kbd>WindowsR</kbd>+<kbd>R</kbd>键输入<code>cmd</code>后确认，在打开的命令行窗口中输入</li></ul><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">version</span></span></code></pre></div><p>​ 出现相关版本信息，即安装成功</p><p>​ <img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201112646.png" alt="image-20230520111227675" style="zoom:67%;"></p><h3 id="基础配置" tabindex="-1">基础配置 <a class="header-anchor" href="#基础配置" aria-label="Permalink to &quot;基础配置&quot;">​</a></h3><ul><li>在命令行窗口输入</li></ul><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">global user.name </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;your name&quot;</span></span></code></pre></div><p>​ 进行全局的用户名配置，此用户名即为Commit的对外显示用户名</p><ul><li>在命令行窗口输入</li></ul><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git config </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">global user.email </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;your@email.com&quot;</span></span></code></pre></div><p>​ 进行全局的邮箱配置，此邮箱即为Commit的对外显示邮箱</p><h3 id="fork仓库并clone到本地" tabindex="-1">Fork仓库并Clone到本地 <a class="header-anchor" href="#fork仓库并clone到本地" aria-label="Permalink to &quot;Fork仓库并Clone到本地&quot;">​</a></h3><h4 id="fork目标仓库-以openwhu仓库为例" tabindex="-1">Fork目标仓库（以OpenWHU仓库为例） <a class="header-anchor" href="#fork目标仓库-以openwhu仓库为例" aria-label="Permalink to &quot;Fork目标仓库（以OpenWHU仓库为例）&quot;">​</a></h4><ul><li>打开目标仓库，如<a href="https://github.com/WHUCodingAndOpen/OpenWHU" target="_blank" rel="noreferrer">WHUCodingAndOpen/OpenWHU</a></li><li>点击右上角的<code>Fork</code>，并<code>Creat fork</code></li></ul><img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201227062.png" alt="image-20230520121946660" style="zoom:50%;"><p>​ 创建完成后，您就会进入在您的账户下的对应的拷贝仓库</p><p>​ 左上角显示的应是<code>您的用户名/OpenWHU (Forked from xxx)</code></p><ul><li>在您的仓库中，单击<code>Code</code>，并在<code>HTTPS</code>选项卡中单击复制按钮</li></ul><img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201252379.png" alt="image-20230520123633849" style="zoom:50%;"><h4 id="clone仓库到本地" tabindex="-1">Clone仓库到本地 <a class="header-anchor" href="#clone仓库到本地" aria-label="Permalink to &quot;Clone仓库到本地&quot;">​</a></h4><ul><li><p>在您的电脑上希望存放仓库的文件夹*（没有就新建一个）<em>的<code>空白处</code>右键选择<code>Git Bash Here</code></em>（Win11需要点击“显示更多选项”）*</p></li><li><p>输入</p><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git clone 将链接粘贴到这里</span></span></code></pre></div><p>将您的仓库克隆到本地*（右键选择Paste粘贴，或使用快捷键<kbd>Shift</kbd>+<kbd>Insert</kbd>）*</p></li></ul><h4 id="完成后-仓库便被clone到本地-后续文件操作-增、删、改等-即在对应文件夹中进行" tabindex="-1"><strong>完成后，仓库便被Clone到本地，后续文件操作（增、删、改等）即在对应文件夹中进行</strong> <a class="header-anchor" href="#完成后-仓库便被clone到本地-后续文件操作-增、删、改等-即在对应文件夹中进行" aria-label="Permalink to &quot;**完成后，仓库便被Clone到本地，后续文件操作（增、删、改等）即在对应文件夹中进行**&quot;">​</a></h4><h3 id="add、commit、pull、push" tabindex="-1">Add、Commit、Pull、Push <a class="header-anchor" href="#add、commit、pull、push" aria-label="Permalink to &quot;Add、Commit、Pull、Push&quot;">​</a></h3><blockquote><p>add是将文件的变更操作提交到暂存区</p><p>commit则是将目前暂存区的修改打包提交到本地代码库</p><p>pull则是同步远程代码库到本地代码库</p><p>push则是将本地的代码库同步到远程代码库（本文中为Github）</p></blockquote><h4 id="add" tabindex="-1">Add <a class="header-anchor" href="#add" aria-label="Permalink to &quot;Add&quot;">​</a></h4><p>文件的增删改操作需要使用<code>add</code>命令提交到暂存区</p><ul><li>使用以下命令添加所有修改、删除或新建的文件到暂存区</li></ul><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> .</span></span></code></pre></div><ul><li>使用以下命令提交指定文件更改到暂存区</li></ul><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> filename.txt</span></span></code></pre></div><ul><li>如果再次修改了在暂存区中的文件，可以通过以下命令进行更新</li></ul><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">add</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">u</span></span></code></pre></div><h4 id="commit" tabindex="-1">Commit <a class="header-anchor" href="#commit" aria-label="Permalink to &quot;Commit&quot;">​</a></h4><p>使用<code>Commit</code>命令将暂存区的代码提交到本地版本库</p><ul><li>使用以下命令提交到本地版本库</li></ul><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git commit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">m </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&#39;这里填写修改说明&#39;</span></span></code></pre></div><h4 id="pull" tabindex="-1">Pull <a class="header-anchor" href="#pull" aria-label="Permalink to &quot;Pull&quot;">​</a></h4><p>本地的代码库可能未更新远程代码库的新文件，使用<code>pull</code>命令同步远程代码库到本地代码库</p><ul><li>使用以下命令同步远程代码库到本地代码库</li></ul><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git pull origin main</span></span></code></pre></div><h4 id="push" tabindex="-1">Push <a class="header-anchor" href="#push" aria-label="Permalink to &quot;Push&quot;">​</a></h4><p>一切修改完成后，使用<code>Push</code>命令将本地代码库同步到远程代码库</p><ul><li>将本地的提交同步给远程版本库</li></ul><div class="language-cmd vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmd</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git push origin main</span></span></code></pre></div><p><strong>注：此操作会弹出Github的登录页面，请在相应页面登录；您也可使用配置ssh秘钥对进行登录，在本文中暂不讨论</strong></p><h3 id="提交pr" tabindex="-1">提交PR <a class="header-anchor" href="#提交pr" aria-label="Permalink to &quot;提交PR&quot;">​</a></h3><p>完成<code>Push</code>后，相应的文件操作便同步到了您的相应的Github仓库中</p><p>此时，您需要向源仓库提交<code>Pull Request</code>，申请将自己仓库中的修改内容同步到源仓库中</p><ul><li>打开您的仓库页面</li><li>选择<code>Contribute</code>并点击<code>Open Pull Request</code></li></ul><img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201332074.png" alt="image-20230520133216700" style="zoom:50%;"><ul><li>完善相关信息，创建PR</li></ul><img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201334540.png" alt="image-20230520133403081" style="zoom:25%;"><ul><li>创建完成后，等待管理员合并到主仓库即可</li></ul><hr><p><strong>至此，您就成功上传文件到源仓库（本例为OpenWHU）</strong></p><h2 id="github-desktop" tabindex="-1">Github Desktop <a class="header-anchor" href="#github-desktop" aria-label="Permalink to &quot;Github Desktop&quot;">​</a></h2><blockquote><p>相较于命令行，图形化操作界面更简便</p></blockquote><h3 id="下载与安装-1" tabindex="-1">下载与安装 <a class="header-anchor" href="#下载与安装-1" aria-label="Permalink to &quot;下载与安装&quot;">​</a></h3><ul><li>前往<a href="https://desktop.github.com/" target="_blank" rel="noreferrer">GitHub Desktop Download</a>页面下载Github Desktop应用程</li><li>安装完成后打开，进行登录</li><li>登录完成后填写<code>Name</code>、<code>Email</code>信息，该信息即为Commit的对外显示信息</li></ul><h3 id="fork仓库并clone到本地-1" tabindex="-1">Fork仓库并Clone到本地 <a class="header-anchor" href="#fork仓库并clone到本地-1" aria-label="Permalink to &quot;Fork仓库并Clone到本地&quot;">​</a></h3><h4 id="fork目标仓库-以openwhu仓库为例-1" tabindex="-1">Fork目标仓库（以OpenWHU仓库为例） <a class="header-anchor" href="#fork目标仓库-以openwhu仓库为例-1" aria-label="Permalink to &quot;Fork目标仓库（以OpenWHU仓库为例）&quot;">​</a></h4><ul><li>打开目标仓库，如<a href="https://github.com/WHUCodingAndOpen/OpenWHU" target="_blank" rel="noreferrer">WHUCodingAndOpen/OpenWHU</a></li><li>点击右上角的<code>Fork</code>，并<code>Creat fork</code></li></ul><img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201227062.png" alt="image-20230520121946660" style="zoom:50%;"><p>​ 创建完成后，您就会进入在您的账户下的对应的拷贝仓库</p><p>​ 左上角显示的应是<code>您的用户名/OpenWHU (Forked from xxx)</code></p><h4 id="clone仓库到本地-1" tabindex="-1">Clone仓库到本地 <a class="header-anchor" href="#clone仓库到本地-1" aria-label="Permalink to &quot;Clone仓库到本地&quot;">​</a></h4><ul><li>打开Github Desktop</li><li>选择<code>Clone a repository from the Internet...</code></li></ul><img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201348530.png" alt="image-20230520134839579" style="zoom:50%;"><ul><li>选择对应仓库并更改存储位置（可选）</li></ul><img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201350795.png" alt="image-20230520135020461" style="zoom:33%;"><ul><li>clone完成后，选择<code>To contribute to the parent project</code></li></ul><img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201351275.png" alt="image-20230520135135026" style="zoom:33%;"><h4 id="完成后-仓库便被clone到本地-后续文件操作-增、删、改等-即在对应文件夹中进行-1" tabindex="-1"><strong>完成后，仓库便被Clone到本地，后续文件操作（增、删、改等）即在对应文件夹中进行</strong> <a class="header-anchor" href="#完成后-仓库便被clone到本地-后续文件操作-增、删、改等-即在对应文件夹中进行-1" aria-label="Permalink to &quot;**完成后，仓库便被Clone到本地，后续文件操作（增、删、改等）即在对应文件夹中进行**&quot;">​</a></h4><h3 id="选择并提交文件修改" tabindex="-1">选择并提交文件修改 <a class="header-anchor" href="#选择并提交文件修改" aria-label="Permalink to &quot;选择并提交文件修改&quot;">​</a></h3><p>你在本地仓库文件夹中做的所有修改都会被记录</p><ul><li>选择需要提交的文件修改并Commit提交到本地版本库</li></ul><img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201409085.png" alt="image-20230520140916345" style="zoom:33%;"><ul><li><p>Commit完成后，点击<code>Push origin</code>将本地版本库同步到远程Github版本库</p><img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201412599.png" alt="image-20230520141247054" style="zoom:50%;"></li></ul><h3 id="提交pr-1" tabindex="-1">提交PR <a class="header-anchor" href="#提交pr-1" aria-label="Permalink to &quot;提交PR&quot;">​</a></h3><p>完成<code>Push</code>后，相应的文件操作便同步到了您的相应的Github仓库中</p><p>此时，您需要向源仓库提交<code>Pull Request</code>，申请将自己仓库中的修改内容同步到源仓库中</p><ul><li>打开您的仓库页面</li><li>选择<code>Contribute</code>并点击<code>Open Pull Request</code></li></ul><img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201332074.png" alt="image-20230520133216700" style="zoom:50%;"><ul><li>完善相关信息，创建PR</li></ul><img src="https://pan.tavin.cn/p/VnetOnedriveCN/pic/202305201334540.png" alt="image-20230520133403081" style="zoom:25%;"><ul><li>创建完成后，等待管理员合并到主仓库即可</li></ul><hr><p><strong>至此，您就成功上传文件到源仓库（本例为OpenWHU）</strong></p>',93)]))}const k=a(s,[["render",o]]);export{u as __pageData,k as default};