class TreeNode {
    public left: TreeNode = null!;
    public right: TreeNode = null!;

    constructor(
        public value: number
    ) { }
}

class BinarySearchTree {
    public root: TreeNode = null!;

    public add(value: number): void {
        const node: TreeNode = new TreeNode(value);

        if (this.isEmpty()) {
            this.root = node;
        } 
        else {
            let currentNode: TreeNode = this.root;
            while (currentNode) {
                if (value > currentNode.value) {
                    if (currentNode.right === null) {
                        currentNode.right = node;
                        return;
                    }

                    currentNode = currentNode.right;
                } 
                else {
                    if (currentNode.left === null) {
                        currentNode.left = node;
                        return;
                    }

                    currentNode = currentNode.left;
                }
            }
        }
    }

    public isEmpty(): boolean {
        return this.root === null;
    }

    public inorder(): void {
        this._inorder(this.root);
    }

    private _inorder(root: TreeNode): void {
        if (root) {
            this._inorder(root.left);
            console.log(root.value);
            this._inorder(root.right);
        }
    }

    public preorder(): void {
        this._preorder(this.root);
    }

    public size (): number {
        return this._size(this.root);
    }

    public postorder(): void {
        this._postorder(this.root);
    }

    private _preorder(root: TreeNode): void {
        if (root) {
            console.log(root.value);
            this._preorder(root.left);
            this._preorder(root.right);
        }
    }

    private _postorder(root: TreeNode): void {
        if (root) {
            this._postorder(root.left);
            this._postorder(root.right);
            console.log(root.value);
        }
    }

    private _size (root: TreeNode): number {
        if (root === null) {
            return 0;
        }
        return 1 + this._size(root.left) + this._size(root.right);
    }

    public print (): string {
        return this._print(this.root);
    }

    private _print (root: TreeNode): string {
        if (root === null) {
            return ' ';
        }
        const leftBranch: string = this._print(root.left);
        const rightBranch: string = this._print(root.right);

        return `${leftBranch}${root.value}${rightBranch}`;
    }

    public min (): number | null {
        let currentNode: TreeNode = this.root;

        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    }

    public max (): number | null {
        let currentNode: TreeNode = this.root;

        while (currentNode.right !== null) {
            currentNode = currentNode.right;
        }
        return currentNode.value;
    }
}



// Test 
const bst = new BinarySearchTree();
bst.add(20);
bst.add(25);
bst.add(15);
bst.add(18);
bst.add(14);

console.debug(`Tree: ${bst.print()}`);
console.debug(`The max value is: ${bst.max()}`);
console.debug(`The min value is: ${bst.min()}`);
console.debug(`The size is: ${bst.size()}`);

console.log(`=== Inorder ===`);
bst.inorder();
console.log(`=== Preorder ===`);
bst.preorder();
console.log(`=== Postorder ===`);
bst.postorder();