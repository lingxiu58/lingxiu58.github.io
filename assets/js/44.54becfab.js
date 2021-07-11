(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{393:function(n,a,e){"use strict";e.r(a);var s=e(25),t=Object(s.a)({},(function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h2",{attrs:{id:"npm-常用命令详解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-常用命令详解"}},[n._v("#")]),n._v(" npm 常用命令详解")]),n._v(" "),e("p",[e("a",{attrs:{href:"https://www.npmjs.cn/cli/build/",target:"_blank",rel:"noopener noreferrer"}},[n._v("腾讯npm文档"),e("OutboundLink")],1)]),n._v(" "),e("p",[n._v("配置：")]),n._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("# taobao镜像源\nnpm config set registry https://registry.npm.taobao.org\n\n# npnjs镜像源\nnpm config set registry http://registry.npmjs.org/\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br")])]),e("p",[e("strong",[n._v("npm install [-g] "),e("package")],1),n._v(": 安装包")]),n._v(" "),e("p",[e("strong",[n._v("npm uninstall [-g] "),e("package")],1),n._v(": 卸载包")]),n._v(" "),e("p",[e("strong",[n._v("npm bugs "),e("package")],1),n._v(": 查看package对应github上的issue")]),n._v(" "),e("p",[e("strong",[n._v("npm bin [-g|--global]")]),n._v(":列出 npm 安装可执行文件的文件夹")]),n._v(" "),e("p",[e("strong",[n._v("npm start [-- "),e("args",[n._v("]")])],1),n._v(':在 package.json 文件中定义的 "scripts" 对象中查找 "start" 属性,\n如果此属性定义了任何命令则执行之。 如果 "scripts" 对象中没有定义 "start" 属性， 默认执行 node server.js 命令。'),e("br"),n._v(" "),e("strong",[n._v("npm cache")]),n._v(" :")]),n._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("npm cache add <tarball file>\nnpm cache add <folder>\nnpm cache add <tarball url>\nnpm cache add <name>@<version>\nnpm cache clean [<path>]\nnpm cache verify\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br")])]),e("ol",[e("li",[e("p",[n._v("关于npm cache"),e("br"),n._v("\nNPM会把所有下载的包保存，放在用户文件夹下面，在我的windows10机器上是保存在C:\\Users\\zcche\\AppData\\Roaming\\npm-cache下面")])]),n._v(" "),e("li",[e("p",[n._v("关于package.lock.json"),e("br"),n._v("\nNPM install之后会计算每个包的sha1值，然后将包与他的sha1值关联保存在package.lock.json里面"),e("br"),n._v("\n下次NPM install的时候会根据package.lock.json里面保存的sha1值去文件夹C:\\Users\\zcche\\AppData\\Roaming\\npm-cache里面寻找包文件，如果存在，就不用再次从网上下载安装报了")])]),n._v(" "),e("li",[e("p",[n._v("NPM cache verify\n目测这个命令是重新计算C:\\Users\\zcche\\AppData\\Roaming\\npm-cache下的文件是否与sha1值匹配，如果不匹配可能删除？")])]),n._v(" "),e("li",[e("p",[n._v("NPM cache clean --force\n这个命令从C:\\Users\\zcche\\AppData\\Roaming\\npm-cache下删除所有缓存文件")])])]),n._v(" "),e("p",[e("strong",[n._v("坑：")]),e("br"),n._v("\nNPM不同版本算出来的sha1貌似不完全一样，所以直接用别人的package.lock.json会报sha1不匹配的error")]),n._v(" "),e("p",[e("strong",[n._v("解决办法：")])]),n._v(" "),e("ol",[e("li",[n._v("不使用别人的package.lock.json")]),n._v(" "),e("li",[n._v("如果用了，删掉package.lock.json(记得删除回收站里的)，npm cache clear --force，npm install")])]),n._v(" "),e("p",[n._v("引用："),e("a",{attrs:{href:"https://www.cnblogs.com/chen8840/p/10002785.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("npm cache"),e("OutboundLink")],1)]),n._v(" "),e("p",[e("strong",[n._v("npm link")]),n._v(":"),e("br"),n._v("\n两个项目：npm-link-module,与npm-link-example"),e("br"),n._v('\n现在需要在npm-link-example中直接使用require("npm-link-module")引入')]),n._v(" "),e("ol",[e("li",[n._v("在npm-link-module目录下执行"),e("code",[n._v("npm link")]),n._v("， npm-link-module会被链接到"),e("code",[n._v("npm prefix -g")]),n._v("对应目录下的node_modules中")]),n._v(" "),e("li",[n._v("在npm-link-example中执行 "),e("code",[n._v("npm link npm-link-module")])]),n._v(" "),e("li",[n._v('使用require("npm-link-module")')])]),n._v(" "),e("p",[e("strong",[n._v("npm start")]),n._v(":"),e("br"),n._v("\n执行以下命令")]),n._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('"test": "node index.js",\n    "start": "npm run test --flag=123 -- a,b c"\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])]),e("p",[e("strong",[n._v("--flag=123")]),n._v(":\n配置npm_config_flag = 123,通过process.env.npm_config_flag可获取到"),e("br"),n._v(" "),e("strong",[n._v("-- a,b c")]),n._v(":"),e("br"),n._v("\n通过process.argv 获取为一个数组，如下："),e("br"),n._v("\n第一个值为node.exe地址，第二个为当前文件地址，从第三个开始为传入的值")]),n._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("[\n  'C:\\\\Program Files\\\\nodejs\\\\node.exe',\n  'E:\\\\learnMaterials\\\\nice\\\\Test\\\\index.js',\n  'a,b',\n  'c'\n]\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);