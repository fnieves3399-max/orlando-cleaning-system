Data table — leads, jobs, subcontractors, financial line items.

```jsx
<Table
  columns={[
    { key:'name', header:'Customer' },
    { key:'status', header:'Status', render:(v)=><Badge status={v}/> },
    { key:'value', header:'Quote', align:'right' },
  ]}
  rows={leads}
  onRowClick={openCustomer}
/>
```

Pass `render` for cells with components (badges, money, avatars). Rows hover-highlight.
