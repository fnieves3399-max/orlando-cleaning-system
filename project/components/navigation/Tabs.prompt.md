Underline tab bar — switch views within a page (Customer profile: Overview / Quotes / Jobs / Notes).

```jsx
<Tabs value={tab} onChange={setTab}
  tabs={[{id:'overview',label:'Overview'},{id:'quotes',label:'Quotes',count:3}]} />
```

Optional `count` badge per tab.
