(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{169:function(s,t,e){"use strict";e.r(t);var a=e(0),n=Object(a.a)({},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"content"},[s._m(0),s._v(" "),e("ul",[e("li",[e("a",{ref:"noopener noreferrer",attrs:{href:"https://dev.mysql.com/doc/refman/5.7/en/binary-installation.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux 二进制安装 MySQL"),e("OutboundLink")],1)])]),s._v(" "),s._m(1),s._v(" "),e("p",[s._v("首先我们打开「"),e("a",{ref:"noopener noreferrer",attrs:{href:"https://dev.mysql.com/downloads/mysql/5.7.html#downloads",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL 5.7 下载页面"),e("OutboundLink")],1),s._v("」然后在英文界面有三个选择框，分别是 "),e("code",[s._v("Select Version")]),s._v("、"),e("code",[s._v("Select Operating System")]),s._v(" 和 "),e("code",[s._v("Select OS Version")]),s._v("，那么 "),e("code",[s._v("Select Version")]),s._v(" 以及默认为我们选择好了，是 "),e("code",[s._v("5.7.*")]),s._v(" 这里的 "),e("code",[s._v("*")]),s._v(" 是恩和版本，如果不是 "),e("code",[s._v("5.7")]),s._v(" 开头，请点击选择 "),e("code",[s._v("5.7")]),s._v(" 开头的版本。"),e("code",[s._v("Select Operating System")]),s._v(" 这里我们点击后选择 "),e("code",[s._v("Linux - Generic")]),s._v(" 即可，"),e("code",[s._v("Select OS Version")]),s._v(" 系统版本我们下啦选择 "),e("code",[s._v("Linux - Generic (glibc 2.12)(x86, 64-bit)")]),s._v(" 即可。如图：")]),s._v(" "),e("img",{attrs:{src:s.$withBase("/assets/img/guide/installation/mysql-download-page.png")}}),s._v(" "),s._m(2),s._v(" "),e("img",{attrs:{src:s.$withBase("/assets/img/guide/installation/mysql-download-page-get-archival.png")}}),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),s._m(5),s._m(6),s._v(" "),s._m(7),s._v(" "),e("p",[s._v("执行完成上面的步骤后，我们就下载完了 MySQL 5.7 源码，接下里我们对源码归档进行解压处理。首先运行：")]),s._v(" "),s._m(8),s._m(9),s._v(" "),s._m(10),s._v(" "),s._m(11),s._v(" "),s._m(12),s._m(13),s._v(" "),s._m(14),s._m(15),s._v(" "),s._m(16),e("p",[s._v("然后创建 MySQL 需要的文件目录并设置权限和用户：")]),s._v(" "),s._m(17),e("p",[s._v("现在，我们来初始化数据库吧：")]),s._v(" "),s._m(18),s._m(19),s._v(" "),s._m(20),s._v(" "),s._m(21),s._v(" "),s._m(22),s._v(" "),s._m(23),s._m(24),s._v(" "),s._m(25),s._v(" "),s._m(26),s._v(" "),s._m(27),e("p",[s._v("执行完成后，我们执行：")]),s._v(" "),s._m(28),e("p",[s._v("会输出下面的结果：")]),s._v(" "),s._m(29),e("p",[s._v("我们通过这种服务命令来启动数据库是最好的现在执行来启动吧：")]),s._v(" "),s._m(30),s._m(31),s._v(" "),e("p",[s._v("启动完成后，我们试一下是否正常启动了呢：")]),s._v(" "),s._m(32),e("p",[s._v("然后会出现一个密码输入，现在输入之前初始化的时候得到的 root 账号密码，即可成功进入数据库啦！")]),s._v(" "),s._m(33),s._v(" "),s._m(34),s._v(" "),s._m(35),e("p",[s._v("哈哈，懵逼是吧，这是因为我们没有修改 root 帐号的默认密码所致，我们在数据库输入：")]),s._v(" "),s._m(36),e("p",[s._v("执行完成后，我们需要刷新权限：")]),s._v(" "),s._m(37),s._m(38),s._v(" "),s._m(39),s._m(40),s._v(" "),s._m(41),s._v(" "),s._m(42),s._v(" "),s._m(43)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("本章将带领你在 "),t("strong",[this._v("CentOS")]),this._v(" "),t("code",[this._v("7.4")]),this._v(" 系统中安装 "),t("strong",[this._v("MySQL")]),this._v(" 5.7 数据库。参考资料：")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载","aria-hidden":"true"}},[this._v("#")]),this._v(" 下载")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("请保证除了 "),t("code",[this._v("Select Version")]),this._v(" 以外，其他选择必须与上图选择一致，然后看在你的页面中找到上图中"),t("strong",[this._v("青蓝色")]),this._v("框标记的 "),t("code",[this._v("Download")]),this._v(" 按钮，点击这个按钮，打开页面如下：")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("找到页面底部的 "),t("code",[this._v("No thanks, just start my download.")]),this._v(" 文字，右键复制链接地址我们得到 "),t("code",[this._v("https://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-5.7.23-linux-glibc2.12-x86_64.tar.gz")]),this._v(" 这样的文件。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("然后我们登入 CentOS 服务器，输入 "),t("code",[this._v("cd ~")]),this._v(" 命令进入家目录，然后下载该文件：")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("curl")]),this._v(" -L -o mysql-5.7.23-linux-glibc2.12-x86_64.tar.gz https://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-5.7.23-linux-glibc2.12-x86_64.tar.gz\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("blockquote",[t("p",[this._v("注意，我这里是 "),t("code",[this._v("5.7.23")]),this._v(" 版本，当你阅读教程的时候可能不是 23 版本了，记得在命令中替换为你的版本号！\n同时，如果你的系统不是 64 bit 请选择 32 bit 版本。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"解压"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解压","aria-hidden":"true"}},[this._v("#")]),this._v(" 解压")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("tar")]),this._v(" -zxvf mysql-5.7.23-linux-glibc2.12-x86_64.tar.gz\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("执行完成后运行 "),t("code",[this._v("ls")]),this._v(" 命令你会看到一个 "),t("code",[this._v("mysql-5.7.23-linux-glibc2.12-x86_64")]),this._v(" 的目录，那么，我们以及获取到源代码了！")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化","aria-hidden":"true"}},[this._v("#")]),this._v(" 初始化")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("在运行初始化之前，我们需要安装一个链接库 "),t("code",[this._v("libaio")]),this._v(" 这个库是 MySQL 二进制安装必须的库：")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("yum "),t("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" -y libaio\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("安装完成后我们还需要为 MySQL 提供用户和用户组来运行（我这里设置为 "),t("code",[this._v("mysql:mysql")]),this._v("）：")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" mysql "),e("span",{attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -r -g mysql -s /bin/false mysql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("接下来，我们将程序放到一个比较统一的位置，推荐放置在 "),t("code",[this._v("/usr/local")]),this._v(" 目录下：")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("mv")]),this._v(" -f ~/mysql-5.7.23-linux-glibc2.12-x86_64 /usr/local/mysql\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /usr/local/mysql/mysql-files "),e("span",{attrs:{class:"token operator"}},[s._v("&&")]),s._v(" \\\n"),e("span",{attrs:{class:"token function"}},[s._v("chown")]),s._v(" mysql:mysql /usr/local/mysql/mysql-files "),e("span",{attrs:{class:"token operator"}},[s._v("&&")]),s._v(" \\\n"),e("span",{attrs:{class:"token function"}},[s._v("chmod")]),s._v(" 750 /usr/local/mysql/mysql-files\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("/usr/local/mysql/bin/mysqld --initialize --user"),e("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("mysql "),e("span",{attrs:{class:"token operator"}},[s._v("&&")]),s._v(" \\\n/usr/local/mysql/bin/mysql_ssl_rsa_setup\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("执行完成后，从页面输出中找到 "),t("code",[this._v("[Note] A temporary password is generated for root@localhost: icXadLT)-0mx")]),this._v(" 这样一条信心，例如这条 Example 信息中 "),t("code",[this._v("icXadLT)-0mx")]),this._v(" 这一段就是默认的 root 帐号密码。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"一些方便设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一些方便设置","aria-hidden":"true"}},[this._v("#")]),this._v(" 一些方便设置")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("当然，MySQL 在 "),t("code",[this._v("bin")]),this._v(" 目录下提供了很多好用的命令，我们每次都全路径指定很繁琐，所以加入到环境变量是一个很好的注意。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("使用 "),t("code",[this._v("vim /etc/profile")]),this._v(" 打开文件，在结尾写入：")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("export")]),this._v(" PATH"),t("span",{attrs:{class:"token operator"}},[this._v("=")]),t("span",{attrs:{class:"token variable"}},[this._v("$PATH")]),this._v(":/usr/local/mysql/bin/\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("然后执行 "),t("code",[this._v("source /etc/profile")]),this._v(" 即可。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"启动-mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动-mysql","aria-hidden":"true"}},[this._v("#")]),this._v(" 启动 MySQL")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("我们可以使用 "),t("code",[this._v("bin/mysqld_safe --user=mysql &")]),this._v(" 来启动，但是我们先不要这样子。我们有更好的和安全的非法：")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{attrs:{class:"token function"}},[this._v("mv")]),this._v(" -f /usr/local/mysql/support-files/mysql.server /etc/init.d/mysql.server\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("/etc/init.d/mysql.server\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("Usage: mysql.server  {start|stop|restart|reload|force-reload|status}  [ MySQL server options ]\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[this._v("/etc/init.d/mysql.server start\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"登入数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#登入数据库","aria-hidden":"true"}},[this._v("#")]),this._v(" 登入数据库")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("mysql -u root -h localhost -P 3360 -p\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"小问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小问题","aria-hidden":"true"}},[this._v("#")]),this._v(" 小问题")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("进入数据库后，你可能迫不及待的输入 "),t("code",[this._v("show databases;")]),this._v(" 查看数据表了，输入后，会返回：")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("ERROR 1820 (HY000): You must reset your password using ALTER USER statement before executing this statement.\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[s._v("set")]),s._v(" password"),e("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("password"),e("span",{attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{attrs:{class:"token string"}},[s._v('"你的密码"')]),e("span",{attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[this._v("flush "),t("span",{attrs:{class:"token keyword"}},[this._v("privileges")]),t("span",{attrs:{class:"token punctuation"}},[this._v(";")]),this._v("\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("好了，我们现在执行 "),t("code",[this._v("show databases;")]),this._v(" 就正常了，输出内容如下：")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+--------------------+\n| Database           |\n+--------------------+\n| information_schema |\n| mysql              |\n| performance_schema |\n| sys                |\n+--------------------+\n4 rows in set (0.00 sec)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("证明我们修改密码成功了，之后使用 root 登入 MySQL 需要使用你设置的"),t("strong",[this._v("新密码")]),this._v("！")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("退出 MySQL 则在输入 "),t("code",[this._v("exit")]),this._v(" 然后回车即可！")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令","aria-hidden":"true"}},[this._v("#")]),this._v(" 命令")])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ul",[e("li",[e("code",[s._v("/etc/init.d/mysql.server")]),s._v(" 输出辅助信息")]),s._v(" "),e("li",[e("code",[s._v("/etc/init.d/mysql.server start")]),s._v(" 启动 MySQL")]),s._v(" "),e("li",[e("code",[s._v("/etc/init.d/mysql.server stop")]),s._v(" 停止 MySQL")]),s._v(" "),e("li",[e("code",[s._v("/etc/init.d/mysql.server restart")]),s._v(" 重启")]),s._v(" "),e("li",[e("code",[s._v("/etc/init.d/mysql.server reload")]),s._v(" 重新加载配置")]),s._v(" "),e("li",[e("code",[s._v("/etc/init.d/mysql.server force-reload")]),s._v(" 强制重新加载配置")]),s._v(" "),e("li",[e("code",[s._v("/etc/init.d/mysql.server status")]),s._v(" 查看运行状态")])])}],!1,null,null,null);n.options.__file="build-install-mysql.md";t.default=n.exports}}]);