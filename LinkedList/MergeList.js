class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function createSortedList(arr) {
  if (arr.length === 0) return null;

  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

const list1 = createSortedList([1, 3, 5, 7]);
const list2 = createSortedList([2, 4, 6, 8]);

function printList(head) {
  let current = head;
  const values = [];
  while (current) {
    values.push(current.val);
    current = current.next;
  }
  console.log(values.join(' → '));
}

printList(list1);
printList(list2);

function mergeLinkedList(list1, list2) {
  let newHead = new ListNode(0);
  let current = newHead;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    current = current.next;
  }

  current.next = list1 || list2;

  return newHead.next;
}

const mergedList = mergeLinkedList(list1, list2);

printList(mergedList);
