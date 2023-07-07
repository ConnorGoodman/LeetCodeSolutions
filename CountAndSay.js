/*
The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

For example, the saying and conversion for digit string "3322251": 

two threes, three twos, one five, one one.
23321511

Example 1:

Input: n = 1
Output: "1"
Explanation: This is the base case.
Example 2:

Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211" */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n == 1) {
        return "1"
    }

    let result = countAndSay(n-1);
    result = digitCounter(result)
    return result;
};

var digitCounter = function(string) {
    let lastNum = -1;
    let lastNumCount = 0;
    let result = "";
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) != lastNum.toString()) {
            if (lastNum != -1) {
                result += lastNumCount;
                result += lastNum;
            }
            lastNum = string.charAt(i);
            lastNumCount = 1;
        }
        else {
            lastNumCount++;
        }
    }
    if (lastNumCount != 0 && lastNum != -1) {
        result += lastNumCount;
        result += lastNum;
    }
    return result;
};

let answer = countAndSay(13);
answer;