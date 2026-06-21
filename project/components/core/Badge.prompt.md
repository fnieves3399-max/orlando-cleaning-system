Status pill — lifecycle states for leads, quotes, jobs, invoices.

```jsx
<Badge status="new lead" dot />
<Badge status="booked" />
<Badge tone="warning">Pending</Badge>
```

Pass `status` to auto-color by lifecycle (new lead→brand, quoted/pending→warning, booked/active/completed→success, lost/canceled→danger, inactive→neutral), or set `tone` explicitly. `dot` adds a leading indicator.
