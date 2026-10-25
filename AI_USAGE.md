# AI usage log

Using AI never costs marks; a vague or missing log does.
Add a new section every week, before you tag. Did not use AI? Write "None" under Tool(s).

## Week 1

- Tool(s): ChatGPT
- What I asked for: I asked why my page was blank on the local host page.
- What I kept, changed or rejected, and why: ChatGPT asked me to checked the console in Chrome. I recognize the error and fixed it.
- One thing the AI got wrong and how I fixed it:I forgot to add export on Header and Footer jsx file so I fixed it.

## Week 2

- Tool(s):chatGPT
- What I asked for: I asked where I should put the in the JSX part of the code for Part C3(4.App).
- What I kept, changed or rejected, and why: I typed it outside the function initially, then chatGPT told me it needs to be inside the function.
- One thing the AI got wrong and how I fixed it: ChatGPT writes a new code to copy, I only see where I should add the new codes to my existing ones.

- Tool(s):chatGPT
- What I asked for: I for help troubleshooting for part C2 because my vendor stayed as Mahallah Ali instead of the ones I updated.
- What I kept, changed or rejected, and why: I rejected the step AI provided because it was different from my current code.
- One thing the AI got wrong and how I fixed it: AI provided a long step to fix which is different so I just double checked my code and noticed a line I forgot to add in VendorCard.jsx.

## Week 3

- What I asked for:
  I pasted my CheckoutForm and asked help to complete the TODOs: of limit pickup time to 07:00–22:00 and call onPlaceOrder only when there are no errors.
- What I kept, changed or rejected, and why:
  I added the missing error messages in the JSX and the key values check before onPlaceOrder(values).

- What I asked for: I asked Claude to check my pickup time validation and submit logic.
- What I kept, changed or rejected, and why:
  Changed "7:00" to "07:00", because type="time" returns HH:MM and string comparison would wrongly reject "07:30". Fixed Object, keys to Object.keys and renamed PlaceOrder to `onPlaceOrder.
- One thing the AI got wrong and how I fixed it:

- What I asked for:
  I asked Claude how to derive the cart total with cart.reduce instead of storing it in state.
- What I kept, changed or rejected, and why:
  Kept the total as a derived value and fixed my comma typo so it reads sum + line.item.price \* line.qty.
- One thing the AI got wrong and how I fixed it:
  Claude first used line.price, assuming the price sat on the cart line. My code uses { item, qty }, so I used line.item.price.

- What I asked for:
  I pasted CartItem and asked Claude to check the three TODOs: the + button, the line total, and the Remove button.
- What I kept, changed or rejected, and why:
  Changed + to onChangeQty(item.id, 1), the total to (item.price \* qty).toFixed(2).
- One thing the AI got wrong and how I fixed it:
