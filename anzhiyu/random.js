var posts=["2024/11/17/集合框架/","2024/11/18/JVM/","2024/11/18/String/","2024/11/18/动态规划/","2024/11/18/多线程/","2024/11/18/流/","2024/11/18/JDK17/","2024/11/18/JDK21/","2024/11/18/EasyExcel/","2024/11/18/EffectiveJava/","2024/11/18/高效能人士的七个习惯/","2024/11/18/Redis_分布式锁实现原理/","2024/11/18/Redis-持久化机制/","2024/11/18/Redis为什么那么快/","2024/11/18/Redis事务/","2024/11/18/Redis布隆过滤器/","2024/11/18/Redis大key问题/","2024/11/18/Redis客户端/","2024/11/18/Redis常用的数据类型和应用场景/","2024/11/18/Redis性能问题排查和调优/","2024/11/18/Redis热key问题/","2024/11/18/Redis的hyperloglog/","2024/11/18/Redis的key过期会不会立刻删除/","2024/11/18/Redis的lua脚本使用场景和特点/","2024/11/18/Redis的pipeline机制/","2024/11/18/Redis的发布订阅机制/","2024/11/18/Redis缓存击穿问题/","2024/11/18/Redis的内存淘汰策略/","2024/11/18/Redis缓存穿透问题/","2024/11/18/Redis集群的几种方式/","2024/11/18/Redis缓存和数据库双写一致性问题/","2024/11/18/Redis缓存雪崩问题/","2024/11/18/SpringBoot整合Redis/","2024/11/18/怎么保障Redis中缓存的数据都是热点数据/","2024/11/18/Java程序员开发环境必备软件/","2024/11/19/唛头/","2024/11/19/报关和清关/","2024/11/19/环境概念/","2024/11/20/汽车VID/","2024/11/20/汽车总代理/","2024/11/20/SAP与ERP/","2024/11/20/汽车KD件/","2024/11/21/FOB离岸价/","2024/11/23/LeetCode-215-数组中的第K个最大元素/","2024/11/24/LeetCode-347-前K个高频元素/","2024/11/24/LeetCode-56-合并区间/","2024/11/25/LeetCode-189-轮转数组/","2024/11/26/LeetCode-238-除自身以外数组的乘积/","2024/11/26/LeetCode-73-矩阵置零/","2024/11/30/LeetCode-2-两数相加/","2024/11/30/LeetCode-206-反转链表/","2024/11/30/LeetCode-1-两数之和/","2024/11/30/LeetCode-49-字母异位词分组/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };