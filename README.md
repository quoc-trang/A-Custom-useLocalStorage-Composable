---
difficulty: 1
training: true
chapter: "Chapter 7: Challenge Roundup"
tags: vue
---

# A Custom useLocalStorage Composable

In this challenge, you'll create a custom `useLocalStorage` composable.

## Requirements

1. The composable should accept the following parameters:
   1. `key` - a string that represents the key in localStorage, required
   2. `defaultValue` - the initial value to be stored in localStorage
2. The composable should return a ref called value that holds the value from localStorage
3. The returned value should be updated when the related data in localStorage is updated
4. The data in localStorage should be updated when the ref value is updated
5. The composable does NOT have so support complex data types like objects (just strings is fine)

> 💡 HINT: You can use the following browser API to listen for changes in local storage window.addEventListener("storage", (event) => { if(event.key === key){ /_ Do stuff with event.newValue _/ }});

![screenshot of solution](https://images.certificates.dev/csvd-training-code-challenge-25.gif)
