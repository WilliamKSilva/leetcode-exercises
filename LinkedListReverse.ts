  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }

function visit (node: ListNode | null, arr: number[]) {
    if (!node) {
        return
    }

    visit(node.next, arr)
    arr.push(node.val)

    return
}

function createNode(node: ListNode, val: number) {
   const createdNode: ListNode = {val: val, next: null}
   node.next = createdNode

   return createdNode
}

function reverseList(head: ListNode | null): ListNode | null {
    const array = []

    if (head) {
        visit(head, array)
    }

    let dummy: ListNode = { next: null, val: 0 }
    const headTwo: ListNode = dummy
    for (let i = 0; i < array.length; i++) {
        dummy = createNode(dummy, array[i])
    }
    

    return headTwo.next
};
