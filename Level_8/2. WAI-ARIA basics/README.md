The `Web Accessibility Initiative - Accessible Rich Internet Applications` document contains techniques for building fully accessible JavaScript widgets. ARIA has been around for a while now, and many of the accessibilty features were later supported by HTML5 itself. The first rule of ARIA use is "If you can use a native HTML element or attribute with the semantics and behavior you require already built in, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible, then do so."

Note that all aria-* HTML attributes are fully supported in JSX. Whereas most DOM properties and attributes in React are camelCased, these attributes should be hyphen-cased (also known as kebab-case, lisp-case, etc) as they are in plain HTML. For instance let's take an example of an `<input>` element for which we are not specifying a label with `htmlFor`. We can use `aria-label` to specify a label or use `aria-labelledby` where you can specify the id of the element that labels the `<input>` tag.

```tsx
<input
  type="text"
  aria-label={labelText}  aria-required="true"  onChange={onchangeHandler}
  value={inputValue}
  name="name"
/>
```

Let's take the example from the official docs as well, 

```html
<button aria-label="Close" onclick="myDialog.close()">
  <svg aria-hidden="true" focusable="false" width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="m.967 14.217 5.8-5.906-5.765-5.89L3.094.26l5.783 5.888L14.66.26l2.092 2.162-5.766 5.889 5.801 5.906-2.092 2.162-5.818-5.924-5.818 5.924-2.092-2.162Z" fill="#000"/></svg>
</button>
```

Here we have a `<button>` with only an `<svg>` inside. We can use `aria-label` to specify a label or use `aria-labelledby` where you can specify the id of the element that labels the `<button>` tag.

You can check out the (MDN Web Docs)[https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label] for more detailed understanding of the aria-* attributes