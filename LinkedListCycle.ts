  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 

function hasCycle(head: ListNode | null): boolean {
    const arr: ListNode[] = []
    let curr = head as ListNode

    if (!curr) {
        return false;
    }

    while (curr.next) {
        if (arr.includes(curr)) {
            return true
        };

        arr.push(curr);
        curr = curr.next;
    } 

    return false;
};