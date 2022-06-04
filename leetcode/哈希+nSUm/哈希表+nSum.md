> **哈希表都是用来快速判断一个元素是否出现集合里**

> 当我们想使用哈希法来解决问题的时候，我们一般会选择如下三种数据结构。
>
> - 数组
> - set（集合）
> - map(映射)

> 总结一下，**当我们遇到了要快速判断一个元素是否出现集合里的时候，就要考虑哈希法**。
>
> 但是哈希法也是**牺牲了空间换取了时间**，因为我们要使用额外的数组，set或者是map来存放数据，才能实现快速的查找。
>
> 如果在做面试题目的时候遇到需要判断一个元素是否出现过的场景也应该第一时间想到哈希法！

#### [242. 有效的字母异位词](https://leetcode-cn.com/problems/valid-anagram/)-数组作哈希



> 给定两个字符串 `*s*` 和 `*t*` ，编写一个函数来判断 `*t*` 是否是 `*s*` 的字母异位词。
>
> **注意：**若 `*s*` 和 `*t*` 中每个字符出现的次数都相同，则称 `*s*` 和 `*t*` 互为字母异位词。
>
>  
>
> **示例 1:**
>
> ```
> 输入: s = "anagram", t = "nagaram"
> 输出: true
> ```
>
> 思路1：
>
> 1. 首先判断长度是否相等，不等直接false；
> 2. Map（）存储s中所有值，map[a]为出现次数，对其++
> 3. 对t中元素遍历，对对应的map[a]--，如果为负值了就false
>
> ```js
> var isAnagram = function(s, t) {
>     if (s.length !== t.length) return false;
>     let map = {};
>     for (const a of s) {
>         map[a] = (map[a] || 0) + 1;
>     }
>     for (const b of t) {
>         if (!map[b]) return false;
>         map[b]--;
>     }
>     return true;
> };
> ```
>
> ps: `charCodeAt()`方法返回字符串指定位置的 Unicode 码点（十进制表示），相当于`String.fromCharCode()`的逆操作。
>
> `数组就是简单的哈希表，但是数组的大小可不是无限开辟的`
>
> 思路2：大同小异，**数组其实就是一个简单哈希表**，而且这道题目中字符串只有小写字符，那么就可以定义一个数组，来记录字符串s里字符出现的次数。
>
> 用数组record来记录，题目中出现的字符仅仅包含小写字母
>
> 1. 用数组record来记录每个字母出现的次数，字母使用 ‘字母’ - 'a'.charCodeAt()的方式来转换成数字
> 2. s中对对应字母映射的下标所在的值++，t中--，为负值时false，否则true
>
> ```js
> var isAnagram = function(s, t) {
>     if (s.length !== t.length) return false;
>     const record = new Array(26).fill(0);
>     const base = 'a'.charCodeAt();
>     for (let a of s) {
>         record[a.charCodeAt() - base]++;
>     }
>     for (let b of t) {
>         let index = b.charCodeAt() - base;
>         if (record[index]) {
>             record[index]--;
>         } else {
>             return false;
>         }
>     }
>     return true;
> };
> ```

#### [383. 赎金信](https://leetcode-cn.com/problems/ransom-note/)-类似242

> 给你两个字符串：`ransomNote` 和 `magazine` ，判断 `ransomNote` 能不能由 `magazine` 里面的字符构成。
>
> 如果可以，返回 `true` ；否则返回 `false` 。
>
> `magazine` 中的每个字符只能在 `ransomNote` 中使用一次。
>
> 
>
> **示例 1：**
>
> ```
> 输入：ransomNote = "a", magazine = "b"
> 输出：false
> ```
>
> 这题和上一题代码`唯一不一样`的是，开头不需要加对于长度的判断
>
> `注意`：前后顺序，先遍历magazine
>
> ```js
> var canConstruct = function(ransomNote, magazine) {
>  let record = new Array(26).fill(0);
>  let base = 'a'.charCodeAt();
>  for (let a of magazine) {
>      record[a.charCodeAt() - base]++;
>  }
>  for (let b of ransomNote) {
>      let index = b.charCodeAt() - base;
>      if (record[index]) {
>          record[index]--;
>      } else {
>          return false;
>      }
> 
>  }
>  return true;
> };
> ```

#### [349. 两个数组的交集](https://leetcode-cn.com/problems/intersection-of-two-arrays/)-Set()

> 难度简单505
>
> 给定两个数组 `nums1` 和 `nums2` ，返回 *它们的交集* 。输出结果中的每个元素一定是 **唯一** 的。我们可以 **不考虑输出结果的顺序** 。
>
>  
>
> **示例 1：**
>
> ```
> 输入：nums1 = [1,2,2,1], nums2 = [2,2]
> 输出：[2]
> ```
>
> 思路：这道题目，主要要学会使用一种哈希数据结构：unordered_set，这个数据结构可以解决很多类似的问题。
>
> 注意题目特意说明：**输出结果中的每个元素一定是唯一的，也就是说输出的结果的去重的， 同时可以不考虑输出结果的顺序**
>
> <img src="哈希表+nSUm.assets/image-20220317132858810.png" alt="image-20220317132858810" style="zoom:33%;" />
>
> ```js
> var intersection = function(nums1, nums2) {
>     // Set（）：数组2去重
>     let nums1Set = new Set(nums1);
>     let resSet = new Set();
>     // 将结果用set（）保存
>     for (let i = 0; i < nums2.length; i++) {
>         if (nums1Set.has(nums2[i])) {
>             resSet.add(nums2[i])
>         }
>     }
>     // 返回数组
>     return Array.from(resSet);
> };
> ```
>
> 使用js方法版
>
> ```js
> var intersection = function(nums1, nums2) {
>     return Array.from(new Set(nums1.filter(ele => nums2.includes(ele))))
> };
> ```

#### [202. 快乐数](https://leetcode-cn.com/problems/happy-number/)

> 编写一个算法来判断一个数 `n` 是不是快乐数。
>
> **「快乐数」** 定义为：
>
> - 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
> - 然后重复这个过程直到这个数变为 1，也可能是 **无限循环** 但始终变不到 1。
> - 如果这个过程 **结果为** 1，那么这个数就是快乐数。
>
> 如果 `n` 是 *快乐数* 就返回 `true` ；不是，则返回 `false` 。
>
> **示例 1：**
>
> ```
> 输入：n = 19
> 输出：true
> 解释：
> 12 + 92 = 82
> 82 + 22 = 68
> 62 + 82 = 100
> 12 + 02 + 02 = 1
> ```
>
> 这道题目看上去貌似一道数学问题，其实并不是！
>
> 题目中说了会 **无限循环**，那么也就是说**求和的过程中，sum会重复出现，这对解题很重要！**
>
> 所以这道题目使用哈希法，来判断这个sum是否重复出现，如果重复了就是return false， 否则一直找到sum为1为止。
>
> 判断sum是否重复出现就可以使用unordered_set。
>
> **还有一个难点就是求和的过程，如果对取数值各个位上的单数操作不熟悉的话，做这道题也会比较艰难。**
>
> ```js
> // 每位数上平方然后求和
> function getSum(num) {
>     let sum = 0;
>     while (num) {
>         sum += (num % 10) * (num % 10);
>         num = Math.floor(num / 10);
>     }
>     return sum;
> }
> var isHappy = function(n) {
>     let set = new Set();
>     while (true) {
>         // 必须先add，再计算，否则等一下判断的时候，永远为false
>         setN.add(n);
>         n = getSum(n);
>         if (n === 1) return true;
>         if (setN.has(n)) return false;
>     }
> };
> ```

#### [1. 两数之和](https://leetcode-cn.com/problems/two-sum/)

> 给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出 **和为目标值** *`target`* 的那 **两个** 整数，并返回它们的数组下标。
>
> 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
>
> 你可以按任意顺序返回答案。 
>
> **示例 1：**
>
> ```
> 输入：nums = [2,7,11,15], target = 9
> 输出：[0,1]
> 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
> ```
>
> 思路：要记录下标和下标对应的值，选择map（）来实现
>
> target-map[i] 的值如果不为undefined，则代表有一个结果在map中
>
> 否则，把num[i]加入进去
>
> ```js
> var twoSum = function(nums, target) {
>     let map = {};
>     for (let i = 0; i < nums.length; i++) {
>         const x = target - nums[i];
>         if (map[x] !== undefined) {
>             return [map[x], i];
>         }
>         map[nums[i]] = i;
>     }
> };
> ```
>
> ```js
> var twoSum = function(nums, target) {
>     let map = new Map();
>     for (let i = 0; i < nums.length; i++) {
>         let x = target - nums[i];
>         if (map.has(x)) {
>             return [map.get(x), i];
>         }
>         map.set(nums[i], i);
>     }
> };
> ```

#### [454. 四数相加 II](https://leetcode-cn.com/problems/4sum-ii/)

> 给你四个整数数组 `nums1`、`nums2`、`nums3` 和 `nums4` ，数组长度都是 `n` ，请你计算有多少个元组 `(i, j, k, l)` 能满足：
>
> - `0 <= i, j, k, l < n`
> - `nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0`
>
>  
>
> **示例 1：**
>
> ```
> 输入：nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
> 输出：2
> 解释：
> 两个元组如下：
> 1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
> 2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
> ```

> map = {}方式：
>
> ```js
> var fourSumCount = function(nums1, nums2, nums3, nums4) {
>     // map，key:用于存放a+b两数之和 value: 存放出现的次数
>     let map = {};
>     // 遍历n1,n2数组，统计两个数组元素之和出现的次数，放入map
>     for (const a of nums1) {
>         for (const b of nums2) {
>             map[a + b] = (map[a + b] || 0) + 1;
>         }
>     }
>     // 统计结果
>     let count = 0;
>     // 遍历n3，n4，找到0-(c+d)出现的次数，存入count
>     for (const c of nums3) {
>         for (const d of nums4) {
>             count += (map[0 - (c + d)] || 0);
>         }
>     }
>     return count;
> };
> ```
>
> new Map()方式：
>
> ```js
> var fourSumCount = function(nums1, nums2, nums3, nums4) {
>     let sumMap = new Map();
>     let count = 0;
>     for (let a of nums1) {
>         for (let b of nums2) {
>             sumMap.set((a + b), (sumMap.get(a + b) || 0) + 1);
>         }
>     }
>     for (let c of nums3) {
>         for (let d of nums4) {
>             count += sumMap.get(0 - (c + d)) || 0;
>         }
>     }
>     return count;
> };
> ```

### labuladong-nsum问题

#### two-sum问题

如果假设输入一个数组 `nums` 和一个目标和 `target`，**请你返回 `nums` 中能够凑出 `target` 的两个元素的值**，比如输入 `nums = [5,3,1,6], target = 9`，那么算法返回两个元素 `[3,6]`。可以假设只有且仅有一对儿元素可以凑出 `target`。

> 我们可以先对 `nums` 排序，然后利用写过的左右双指针技巧，从两端相向而行就行了：
>
> ```js
> var twoSum = function(numbers, target) {
>     numbers.sort((a, b) => a - b);
>     let left = 0, right = numbers.length - 1;
>     while (left < right) {
>         let sum = numbers[left] + numbers[right];
>         if (target > sum) {
>             left++;
>         } else if (target < sum) {
>             right--;
>         } else {
>             return [numbers[left], numbers[right]]
>         }
>     }
> };
> ```

#### 魔改two-sum:返回不重复出现的元素对

> nums` 中可能有多对儿元素之和都等于 `target，请你的算法返回所有和为 `target` 的元素对儿，其中不能出现重复。
>
> 比如说输入为 `nums = [1,3,1,2,2,3], target = 4`，那么算法返回的结果就是：`[[1,3],[2,2]]`。
>
> 所以核心就是如何去掉重复元素？
>
> <img src="哈希表+nSUm.assets/image-20220317171704649.png" alt="image-20220317171704649" style="zoom:50%;" />
>
> 如图，当找到合适的左右值后，左指针和右指针都应该跳过重复元素（`因为排序了，所以重复元素必然在一起`），用whilel来跳过，详情看注释---增加三行代码
>
> `优化`：在前两个值不等的判断里，同样也可以跳过重复的值（这里不优化了，代码太多看着乱）
>
> ```js
> var twoSum = function(numbers, target) {
>     numbers.sort((a, b) => a - b);
>     let left = 0, right = numbers.length - 1;
>     let res = [];
>     while (left < right) {
>         let sum = numbers[left] + numbers[right];
>         // 记录索引 left 和 righ 最初对应的值
>         let res1 = numbers[left], res2 = numbers[right];
>         if (target > sum) {
>             left++;
>         } else if (target < sum) {
>             right--;
>         } else {
>             res.push([res1, res2]);
>             // 跳过左边和右边指针指向的重复元素，避免重复添加到res中
>             while (left < right && res1 == numbers[left]) left++;
>             while (left < right && res2 == numbers[right]) right--;
>         }
>     }
>     return res;
> };
> ```

#### 3sum问题 -- 一定要先排序！！！

> #### 15. 三数之和
>
> 给你一个包含 `n` 个整数的数组 `nums`，判断 `nums` 中是否存在三个元素 *a，b，c ，*使得 *a + b + c =* 0 ？请你找出所有和为 `0` 且不重复的三元组。
>
> **注意：**答案中不可以包含重复的三元组。
>
> **示例 1：**
>
> ```
> 输入：nums = [-1,0,1,2,-1,-4]
> 输出：[[-1,-1,2],[-1,0,1]]
> ```
>
> 泛化一下题目，计算和target的三元组，不允许结果重复
>
> 思路：
>
> 1. 首先确定一点，我们已经实现找两数之和（即，一个数组里和为target的数字2和数字3）   ---- res = [数字1， 数字2， 数字3]
> 2. 所以，我们对三数之和时，只需要穷举数字1就OK了！
> 3. `两数之和的target`设置为三数之和的`target - 数字1` --- 三数之和target = 数字1 + 两数之和target
> 4. 两数之和我们保证了数组对儿不会重复，但是还要优化第一个数字不让他重复：用while使i++去掉重复，因为数组已经排好序了，重复值在一起
> 5. 排序的时间复杂度：`O(NlogN)`，`twoSumTarget` 函数中的双指针操作为 `O(N)`，`threeSumTarget` 函数在 for 循环中调用 `twoSumTarget` 所以总的时间复杂度就是 `O(NlogN + N^2) = O(N^2)`。
>
> ```js
> // 从nums[start]开始，计算有序数组nums中所有和为target的二元组，（保证不重复）
> function twoSum(nums, start, target) {
>     let left = start, right = nums.length - 1;
>     let res = [];
>     while (left < right) {
>         let res1 = nums[left], res2 = nums[right];
>         let sum = res1 + res2;
>         if (sum > target) {
>             while (left < right && res2 == nums[right]) right--;  // 排除重复元素，优化
>         } else if (sum < target) {
>             while (left < right && res1 == nums[left]) left++;
>         } else {
>             res.push([res1, res2]);
>             while (left < right && res1 == nums[left]) left++;
>             while (left < right && res2 == nums[right]) right--; 
>         }
>     }
>     return res;
> }
> 
> // 计算数组nums中所有和为target的三元组
> var threeSum = function(nums) {
>     // 数组排序
>     nums.sort((a, b) => a - b);
>     let res = [];
>     let len = nums.length;
>     // 穷举threeSum的第一个数
>     for (let i = 0; i < len; i++) {
>         // 对 target(0) - nums[i] 计算twoSum
>         let tuples = twoSum(nums, i + 1, 0 - nums[i]);
>         // 如果存在满足条件的二元组，再加上nums[i]，就是结果三元组
>         for (let tuple of tuples) {
>             tuple.push(nums[i]);
>             res.push(tuple);
>         }
>         // 跳过第一个数组重复的情况，否则结果会重复
>         while (i < len - 1 && nums[i] === nums[i + 1]) i++;
>     }
>     return res;
> };
> ```

#### 4sum问题 -先排序！！！

> #### [18. 四数之和](https://leetcode-cn.com/problems/4sum/)
>
> 给你一个由 `n` 个整数组成的数组 `nums` ，和一个目标值 `target` 。请你找出并返回满足下述全部条件且**不重复**的四元组 `[nums[a], nums[b], nums[c], nums[d]]` （若两个四元组元素一一对应，则认为两个四元组重复）：
>
> - `0 <= a, b, c, d < n`
> - `a`、`b`、`c` 和 `d` **互不相同**
> - `nums[a] + nums[b] + nums[c] + nums[d] == target`
>
> 你可以按 **任意顺序** 返回答案 。
>
>  
>
> **示例 1：**
>
> ```
> 输入：nums = [1,0,-1,0,-2,2], target = 0
> 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
> ```

> 在3sum的基础上做，穷举第一个数字，然后调用 `3Sum` 函数计算剩下三个数，最后组合出和为 `target` 的四元组。

> ```js
> function twoSum(nums, start, target) {
>     let res = [];
>     let left = start, right = nums.length - 1;
>     while (left < right) {
>         let res1 = nums[left], res2 = nums[right];
>         let sum = res1 + res2;
>         if (sum > target) {
>             while (left < right && res2 === nums[right]) right--;
>         } else if (sum < target) {
>             while (left < right && res1 === nums[left]) left++;
>         } else {
>             res.push([res1, res2]);
>             while (left < right && res2 === nums[right]) right--;
>             while (left < right && res1 === nums[left]) left++;
>         }
>     }
>     return res;
> }
> 
> function threeSum(nums, start, target) {
>     let res = [];
>     let len = nums.length;
>     for (let i = start; i < len; i++) {
>         let tuples = twoSum(nums, i + 1, target - nums[i]);
>         for (let tuple of tuples) {
>             tuple.push(nums[i]);
>             res.push(tuple);
>         }
>         while (i < len - 1 && nums[i] === nums[i + 1]) i++;
>     }
>     return res;
> }
> 
> var fourSum = function(nums, target) {
>     nums.sort((a, b) => a - b);
>     let res = [];
>     let len = nums.length;
>     for (let i = 0; i < len; i++) {
>         let fourN = threeSum(nums, i + 1, target - nums[i])
>         for (let arr of fourN) {
>             arr.push(nums[i]);
>             res.push(arr);
>         }
>         while (i < len - 1 && nums[i] === nums[i + 1]) i++;
>     }
>     return res;
> };
> ```
>
> 