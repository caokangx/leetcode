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