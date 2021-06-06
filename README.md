# leetcode

https://github.com/youngyangyang04/leetcode-master#%E6%95%B0%E7%BB%84


### 用队列实现栈

保证L1是空的，每次push操作时，将入栈元素push进L1，然后把L2的元素依次出队列，并入列L1，然后交换L1和L2

https://leetcode-cn.com/problems/implement-stack-using-queues/solution/yong-dui-lie-shi-xian-zhan-by-leetcode-solution/

### 用栈实现队列（看到这个想叠罗汉）

S1是辅助栈，S2是存储栈

每次push的时候，把S2的内容依次出栈，然后入栈S1，S2空了后，入栈push元素，再把S1的倒回来

### 343. 整数拆分

https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0343.%E6%95%B4%E6%95%B0%E6%8B%86%E5%88%86.md

### 96. 不同的二叉搜索树

https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0096.%E4%B8%8D%E5%90%8C%E7%9A%84%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91.md

### 416. 背包问题变体

https://leetcode-cn.com/problems/partition-equal-subset-sum/solution/0-1-bei-bao-wen-ti-xiang-jie-zhen-dui-ben-ti-de-yo/


### 1049. 背包变体问题

https://github.com/youngyangyang04/leetcode-master/blob/master/problems/1049.%E6%9C%80%E5%90%8E%E4%B8%80%E5%9D%97%E7%9F%B3%E5%A4%B4%E7%9A%84%E9%87%8D%E9%87%8FII.md

1. 一开始我的思路错了，老是想着计算出前一状态的值，然后再重新判断后一状态，其实是不用的
2. dp一般都是记录中间结果，不记录中间状态
