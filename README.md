# Shop app

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Goals

- [x] Product list
- [x] Search products by name
- [x] Single product page
- [x] Add product to cart
- [x] Remove product from cart
- [x] Products are summed up in cart

## Extra mile tasks

- [x] Refactoring
- [x] Pretty styles
- [ ] Add validation for requests
- [ ] Add custom 404 page

## What could be added/changed

### Cart

I implemented cart in a way that there is an imaginary backend that verifies prices on each item count change, I've seen simillar behaviors in other online shops like: Konesso and X-Kom.

To make it work seamlessly I could keep all items in store and update prices with count live, but that would be less realistic, because you don't want to show cached prices to customers. It could end up in some discrepancies in prices.

### Dynamic head for pages

It was not in the scope of this task, so I allocated my time for other things like refactoring or more features
