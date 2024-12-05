# Incorrectly-Ordered Updates

## Problem Description

While the Elves get to work printing the correctly-ordered updates, you have a little time to fix the rest of them.

### Rules
- Identify updates that are not in the correct order
- Reorder these updates according to page ordering rules
- Find the middle page number for each incorrectly-ordered update
- Add up these middle page numbers

### Example Updates
* `75,97,47,61,53` becomes `97,75,47,61,53`
* `61,13,29` becomes `61,29,13`
* `97,13,75,29,47` becomes `97,75,47,29,13`

### Result
After reordering the incorrectly-ordered updates, the middle page numbers are:
* First update: `47`
* Second update: `29`
* Third update: `47`

The sum of these middle page numbers is `47 + 29 + 47 = 123`