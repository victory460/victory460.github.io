(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{172:function(_,v,e){"use strict";e.r(v);var t=e(0),r=Object(t.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"git-命令行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-命令行","aria-hidden":"true"}},[_._v("#")]),_._v(" git 命令行")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://cloud.githubusercontent.com/assets/17583395/23828785/ddc1ef96-0717-11e7-8d47-26c0556dbdb5.jpeg",alt:"git"}})]),_._v(" "),e("h2",{attrs:{id:"目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录","aria-hidden":"true"}},[_._v("#")]),_._v(" 目录")]),_._v(" "),e("ol",[e("li",[e("p",[e("a",{attrs:{href:"##%E6%9C%AC%E5%9C%B0%E5%BA%93"}},[_._v("本地库")])])]),_._v(" "),e("li",[e("p",[e("a",{attrs:{href:"#%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93"}},[_._v("远程仓库")])])]),_._v(" "),e("li",[e("p",[e("a",{attrs:{href:"#%E5%88%86%E6%94%AF%E7%AE%A1%E7%90%86"}},[_._v("分支管理")])]),_._v(" "),e("p",[_._v("3.1 "),e("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E4%B8%8E%E5%90%88%E5%B9%B6%E5%88%86%E6%94%AF"}},[_._v("创建与合并分支")])]),_._v(" "),e("p",[_._v("3.2 "),e("a",{attrs:{href:"#%E8%A7%A3%E5%86%B3%E5%86%B2%E7%AA%81"}},[_._v("解决冲突")])])]),_._v(" "),e("li",[e("p",[e("a",{attrs:{href:"#%E6%A0%87%E7%AD%BE%E7%AE%A1%E7%90%86"}},[_._v("标签管理")])]),_._v(" "),e("p",[_._v("4.1 "),e("a",{attrs:{href:"#%E5%88%9B%E5%BB%BA%E6%A0%87%E7%AD%BE"}},[_._v("创建标签")])]),_._v(" "),e("p",[_._v("4.2 "),e("a",{attrs:{href:"#%E6%93%8D%E4%BD%9C%E6%A0%87%E7%AD%BE"}},[_._v("操作标签")])])])]),_._v(" "),e("br"),_._v(" "),e("h2",{attrs:{id:"本地库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地库","aria-hidden":"true"}},[_._v("#")]),_._v(" 本地库")]),_._v(" "),e("p",[_._v("初始化一个 Git 版本库")]),_._v(" "),e("pre",[e("code",[_._v(" git init  \n")])]),_._v(" "),e("p",[_._v("查看 Git 版本库状态")]),_._v(" "),e("pre",[e("code",[_._v(" git status  \n")])]),_._v(" "),e("p",[_._v("查看被改动文件的详细信息")]),_._v(" "),e("pre",[e("code",[_._v(" git diff <fileName>  \n")])]),_._v(" "),e("p",[_._v("将文件加入缓存区")]),_._v(" "),e("pre",[e("code",[_._v(" git add <fileName>  \n")])]),_._v(" "),e("p",[_._v("提交到版本库")]),_._v(" "),e("pre",[e("code",[_._v(" git commit -m 'message'  \n")])]),_._v(" "),e("p",[_._v("查看版本库操作日志")]),_._v(" "),e("pre",[e("code",[_._v(" git log  \n")])]),_._v(" "),e("p",[_._v("格式显示版本库操作日志")]),_._v(" "),e("pre",[e("code",[_._v(" git log --pretty=oneline  \n")])]),_._v(" "),e("p",[_._v("回滚（重置）版本库")]),_._v(" "),e("pre",[e("code",[_._v(" git reset --hard <版本号>  \n")])]),_._v(" "),e("p",[e("strong",[_._v("工作区（Woking Directory）")])]),_._v(" "),e("pre",[e("code",[_._v(" 就是你在电脑里能看到的目录，或者说你当前 Git 版本库所在的文件夹  \n")])]),_._v(" "),e("p",[e("strong",[_._v("版本库（Repository）")])]),_._v(" "),e("p",[_._v("工作区有一个隐藏的目录 .git,这个不算工作区,而是 Git 的版本库")]),_._v(" "),e("p",[_._v("Git的版本库里存了很多东西，其中最重要的就是称为 "),e("code",[_._v("stage")]),_._v("(或者叫 "),e("code",[_._v("index")]),_._v(") 的暂存区，")]),_._v(" "),e("p",[_._v("还有 Git 为我们自动创建的第一个分支 "),e("code",[_._v("master")]),_._v("，以及指向 "),e("code",[_._v("master")]),_._v(" 的一个指针叫做 "),e("code",[_._v("HEAD")]),_._v("。")]),_._v(" "),e("p",[_._v("撤销工作区修改")]),_._v(" "),e("pre",[e("code",[_._v(" git checkout -- <fileName>  \n")])]),_._v(" "),e("p",[_._v("撤销暂存区修改")]),_._v(" "),e("pre",[e("code",[_._v(" git reset HEAD <fileName>  \n")])]),_._v(" "),e("p",[_._v("删除文件")]),_._v(" "),e("pre",[e("code",[_._v(" git rm <fileName>  \n")])]),_._v(" "),e("br"),_._v(" "),e("h2",{attrs:{id:"远程仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库","aria-hidden":"true"}},[_._v("#")]),_._v(" 远程仓库")]),_._v(" "),e("p",[_._v("关联远程仓库")]),_._v(" "),e("pre",[e("code",[_._v(" git remote add origin git@github.com:<github地址>/<仓库名称>.git  \n")])]),_._v(" "),e("p",[_._v("将内容推送的远程库")]),_._v(" "),e("pre",[e("code",[_._v(" git push -u origin <分支>  \n\ngit push origin <分支>  \n")])]),_._v(" "),e("p",[_._v("第一次推送 "),e("code",[_._v("master")]),_._v(" 分支时，加上了 "),e("code",[_._v("-u")]),_._v(" 参数，Git 不但会把本地的 "),e("code",[_._v("master")]),_._v(" 分支内容推送到远程新的 "),e("code",[_._v("master")]),_._v(" 分支，")]),_._v(" "),e("p",[_._v("还会把本地的 "),e("code",[_._v("master")]),_._v(" 分支和远程的 "),e("code",[_._v("master")]),_._v(" 分支关联起来，在以后的推送或者拉取时就可以简化命令。")]),_._v(" "),e("p",[_._v("克隆远程库")]),_._v(" "),e("pre",[e("code",[_._v(" git clone git@github.com:<github地址>/<仓库名称>.git  \n")])]),_._v(" "),e("br"),_._v(" "),e("h2",{attrs:{id:"分支管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支管理","aria-hidden":"true"}},[_._v("#")]),_._v(" 分支管理")]),_._v(" "),e("h3",{attrs:{id:"创建与合并分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建与合并分支","aria-hidden":"true"}},[_._v("#")]),_._v(" 创建与合并分支")]),_._v(" "),e("p",[_._v("创建并切换分支")]),_._v(" "),e("pre",[e("code",[_._v(" git checkout -b <branchName>  \n")])]),_._v(" "),e("p",[_._v("查看分支")]),_._v(" "),e("pre",[e("code",[_._v(" git branch  \n")])]),_._v(" "),e("p",[_._v("切换分支")]),_._v(" "),e("pre",[e("code",[_._v(" git checkout <branchName>  \n")])]),_._v(" "),e("p",[_._v("合并分支")]),_._v(" "),e("pre",[e("code",[_._v(" git merge <branchName>  \n")])]),_._v(" "),e("p",[_._v("删除分支")]),_._v(" "),e("pre",[e("code",[_._v(" git branch -d <branchName>  \n")])]),_._v(" "),e("h3",{attrs:{id:"解决冲突"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#解决冲突","aria-hidden":"true"}},[_._v("#")]),_._v(" 解决冲突")]),_._v(" "),e("p",[_._v("查看分支合并情况")]),_._v(" "),e("pre",[e("code",[_._v(" git log --graph --pertty=oneline --abbrev-commit  \n")])]),_._v(" "),e("p",[_._v("储藏")]),_._v(" "),e("pre",[e("code",[_._v(" git stash  \n")])]),_._v(" "),e("p",[_._v("查看储藏列表")]),_._v(" "),e("pre",[e("code",[_._v(" git stash list  \n")])]),_._v(" "),e("p",[_._v("应用储藏")]),_._v(" "),e("pre",[e("code",[_._v(" git stash apply <stash@{xx}>  \n")])]),_._v(" "),e("p",[_._v("删除储藏")]),_._v(" "),e("pre",[e("code",[_._v(" git stash drop <index | stash>  \n")])]),_._v(" "),e("p",[_._v("应用并删除储藏")]),_._v(" "),e("pre",[e("code",[_._v(" git stash pop <index | stash>  \n")])]),_._v(" "),e("p",[_._v("显示储藏信息")]),_._v(" "),e("pre",[e("code",[_._v(" git stash show <index | stash>  \n")])]),_._v(" "),e("p",[_._v("查看远程库信息")]),_._v(" "),e("pre",[e("code",[_._v(" git remote  \n")])]),_._v(" "),e("p",[_._v("查看远程库详细信息")]),_._v(" "),e("pre",[e("code",[_._v(" git remote -v  \n")])]),_._v(" "),e("p",[_._v("推送分支")]),_._v(" "),e("pre",[e("code",[_._v(" git push origin <branchName>\n")])]),_._v(" "),e("br"),_._v(" "),e("h2",{attrs:{id:"标签管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#标签管理","aria-hidden":"true"}},[_._v("#")]),_._v(" 标签管理")]),_._v(" "),e("h3",{attrs:{id:"创建标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建标签","aria-hidden":"true"}},[_._v("#")]),_._v(" 创建标签")]),_._v(" "),e("p",[_._v("创建标签")]),_._v(" "),e("pre",[e("code",[_._v(" git tag <name>  \n")])]),_._v(" "),e("p",[_._v("查看标签")]),_._v(" "),e("pre",[e("code",[_._v(" git tag  \n")])]),_._v(" "),e("p",[_._v("为commit id 添加标签")]),_._v(" "),e("pre",[e("code",[_._v(" git tag <commit id>  \n")])]),_._v(" "),e("p",[_._v("查看标签信息")]),_._v(" "),e("pre",[e("code",[_._v(" git show <tagName>  \n")])]),_._v(" "),e("p",[_._v("创建带有说明的标签")]),_._v(" "),e("pre",[e("code",[_._v(" git tag -a <tagName> -m 'your message'  \n")])]),_._v(" "),e("h3",{attrs:{id:"操作标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作标签","aria-hidden":"true"}},[_._v("#")]),_._v(" 操作标签")]),_._v(" "),e("p",[_._v("删除标签")]),_._v(" "),e("pre",[e("code",[_._v(" git tag -d <tagName>  \n")])]),_._v(" "),e("p",[_._v("推送标签到远程")]),_._v(" "),e("pre",[e("code",[_._v(" git push origin <tagName>  \n")])]),_._v(" "),e("p",[_._v("推送所以标签")]),_._v(" "),e("pre",[e("code",[_._v(" git push origin --tags  \n")])]),_._v(" "),e("p",[_._v("删除远程标签")]),_._v(" "),e("p",[_._v("删除远程标签需，要先删除本地标签，然后再执行")]),_._v(" "),e("pre",[e("code",[_._v(" git push origin :refs/tags/<tagNameg>")])])])}],!1,null,null,null);r.options.__file="git.md";v.default=r.exports}}]);