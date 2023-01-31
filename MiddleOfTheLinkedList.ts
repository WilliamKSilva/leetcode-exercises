

class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }

function middleNode(head: ListNode | null): ListNode | null {
    let length = 0;
    let current = head;

    if (!current) {
        return null;
    }

    while (current.next) {
        length++;
        current = current.next;
    }

    let middle = Math.ceil(length / 2);
    let iterator = 0;
    let curr = head;

    while (iterator < middle) {
        curr = curr!.next
        iterator++
    }  

    return curr;
};
