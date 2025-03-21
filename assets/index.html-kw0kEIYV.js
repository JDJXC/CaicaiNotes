import{_ as r,c as o,b as l,a as c,w as a,r as p,o as h,d,e as s}from"./app-0euYGPY4.js";const v={};function m(u,t){const n=p("Tabs");return h(),o("div",null,[t[4]||(t[4]=l('<div class="hint-container tip"><p class="hint-container-title">并发编程的目的</p><ul><li>为了让程序运行得更快</li></ul></div><div class="hint-container warning"><p class="hint-container-title">可能的挑战</p><ul><li>上下文切换的问题</li><li>死锁的问题</li><li>受限于硬件和软件的资源限制问题</li></ul></div><h2 id="_1-1-上下文切换" tabindex="-1"><a class="header-anchor" href="#_1-1-上下文切换"><span>1.1 上下文切换</span></a></h2><div class="hint-container info"><p class="hint-container-title">前提知识</p><p><strong>CPU</strong>：是计算机的核心处理器，负责执行指令、处理数据和控制计算机各部分协同工作。</p><p><strong>时间片</strong>：CPU分配给各个线程的时间</p><table><thead><tr><th></th><th>并发</th><th>并行</th><th>串行</th><th>多线程</th></tr></thead><tbody><tr><td><strong>定义</strong></td><td>同一时间段内多个任务交替执行</td><td>同一时刻多个任务在不同处理器上同时执行</td><td>任务按顺序逐个执行</td><td>在一个程序中同时运行多个线程</td></tr><tr><td><strong>特点</strong></td><td>资源共享，任务切换，微观串行</td><td>独立执行，加速计算，宏观并行</td><td>简单直观，性能瓶颈</td><td>共享资源，并发执行，提高响应速度</td></tr><tr><td><strong>实现方式</strong></td><td>多线程、多进程、异步I/O等</td><td>多核CPU、GPU加速、分布式计算等</td><td>单核CPU执行任务</td><td>操作系统线程库或编程语言线程支持</td></tr><tr><td><strong>适用场景</strong></td><td>提高系统资源利用率和响应速度（I/O密集型任务）</td><td>加速计算密集型任务（如数据处理、科学计算）</td><td>单核CPU执行任务，或任务之间存在依赖关系</td><td>GUI应用、网络服务器、并行计算等</td></tr></tbody></table></div><p>即使单核处理器也可以支持多线程执行代码，CPU通过给每个线程分配CPU时间片来实现这个机制。时间片非常短，一般是几十毫秒（ms）。</p><p>CPU通过时间片分配算法来循环执行任务，当前任务执行一个时间片后会切换到下一个任务。但是，切换前会保存上一个任务的状态，以便切换回这个任务时，能再加载这个任务的状态。所以<strong>任务从保存到再加载的过程就是一次上下文切换</strong>。</p><p>上下文切换会影响多线程的执行速度。</p><h3 id="_1-1-1-并发与并行" tabindex="-1"><a class="header-anchor" href="#_1-1-1-并发与并行"><span>1.1.1 并发与并行</span></a></h3>',8)),c(n,{id:"142",data:[{id:"标题1"},{id:"标题2"}]},{title0:a(({value:i,isActive:e})=>t[0]||(t[0]=[s("标题1")])),title1:a(({value:i,isActive:e})=>t[1]||(t[1]=[s("标题2")])),tab0:a(({value:i,isActive:e})=>t[2]||(t[2]=[d("p",null,"内容区块",-1)])),tab1:a(({value:i,isActive:e})=>t[3]||(t[3]=[d("p",null,"内容区块",-1)])),_:1})])}const g=r(v,[["render",m]]),f=JSON.parse('{"path":"/book/javabfbcys/u0lhzf9v/","title":"并发编程的挑战","lang":"zh-CN","frontmatter":{"title":"并发编程的挑战","createTime":"2025/03/20 17:21:55","permalink":"/book/javabfbcys/u0lhzf9v/"},"headers":[],"readingTime":{"minutes":1.85,"words":554},"git":{"updatedTime":1742540914000,"contributors":[{"name":"caicai","username":"caicai","email":"863340104@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/caicai?v=4","url":"https://github.com/caicai"}]},"filePathRelative":"notes/study/book/Java并发编程的艺术/1.并发编程的挑战.md"}');export{g as comp,f as data};
