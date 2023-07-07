/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    public int highestLength;

    public int DiameterOfBinaryTree(TreeNode root) {
        highestLength = 0;
        FindDiameter(root);
        return highestLength;
    }

    private int FindDiameter(TreeNode node) {
        if (node == null) {
            return 0;
        }

        int diameter1 = FindDiameter(node.left);            
        int diameter2 = FindDiameter(node.right);
        checkHighest(diameter1 + diameter2);
        return 1 + Math.Max(diameter1, diameter2);
    }

    private void checkHighest(int num) {
        if (num > highestLength) {
            highestLength = num;
        }
    }
}