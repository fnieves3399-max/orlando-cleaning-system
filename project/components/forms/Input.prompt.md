Text input — all single-line entry. Supports leading/trailing adornments.

```jsx
<Input placeholder="Square footage" type="number" trailing="sq ft" />
<Input leading="$" inputMode="decimal" />
```

`size` sm|md|lg, `invalid` for error state. Wrap in `<Field>` for labels.
