Labeled form field wrapper — pairs a label with any control, plus hint/error text.

```jsx
<Field label="Email" htmlFor="email" required hint="We'll send the quote here">
  <Input id="email" type="email" placeholder="maria@email.com" />
</Field>
```

Shows `error` (red) in place of `hint` when present.
