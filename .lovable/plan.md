## Add UK Company Legal Information to Footer

Add the following legal text to the website footer on every page, displayed in small, subtle text beneath the existing footer content, separated by a thin divider:

```
27X LTD | Company Number: 16835623 | Registered address: 3 Northcote Avenue, Isleworth, TW7 7JH
```

### Changes

**File: `src/components/Footer.tsx`**
- Add a thin horizontal divider (`w-16 h-px bg-border`) below the copyright text
- Add the legal text in `text-[11px]` with `text-muted-foreground/70` colour, centered
- Keep the existing footer layout and styling intact

### Styling details
- Font size: ~11px (smaller than existing `text-xs` footer text)
- Colour: muted-foreground at 70% opacity for subtlety
- Alignment: centered (matching existing footer layout)
- Divider: 16px wide, 1px high, using `bg-border` token for consistency with the design system