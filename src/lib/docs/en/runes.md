---
title: Runes
index: 2
sections: ['recipes']
---

# Runes

Having established a connection to your node on the [previous step](/docs/connect), it is now time to provide a [rune](https://lightning.readthedocs.io/lightning-commando-rune.7.html). Think of a rune as an access token with specific permissions to perform commands on your node.

**Note** - Adding restrictions to runes before sharing them (even with yourself) is best practice!

### Recipes

To create a fresh rune which can do **anything**:

```
$ lightning-cli commando-rune
{
   "rune": "KUhZzNlECC7pYsz3QVbF1TqjIUYi3oyESTI7n60hLMs9MA==",
   "unique_id": "0"
}
```

Updating the rune to have **readonly** restrictions:

```
$ lightning-cli commando-rune rune=KUhZzNlECC7pYsz3QVbF1TqjIUYi3oyESTI7n60hLMs9MA== restrictions=readonly
{
   "rune": "NbL7KkXcPQsVseJ9TdJNjJK2KsPjnt_q4cE_wvc873I9MCZtZXRob2RebGlzdHxtZXRob2ReZ2V0fG1ldGhvZD1zdW1tYXJ5Jm1ldGhvZC9saXN0ZGF0YXN0b3Jl",
   "unique_id": "0"
}
```

Make the rune only **viable for 24 hours**:

```
$ lightning-cli commando-rune rune=NbL7KkXcPQsVseJ9TdJNjJK2KsPjnt_q4cE_wvc873I9MCZtZXRob2RebGlzdHxtZXRob2ReZ2V0fG1ldGhvZD1zdW1tYXJ5Jm1ldGhvZC9saXN0ZGF0YXN0b3Jl restrictions='["time<'$(($(date +%s) + 24*60*60))'","rate=2"]'
{
   "rune": "tU-RLjMiDpY2U0o3W1oFowar36RFGpWloPbW9-RuZdo9MyZpZD0wMjRiOWExZmE4ZTAwNmYxZTM5MzdmNjVmNjZjNDA4ZTZkYThlMWNhNzI4ZWE0MzIyMmE3MzgxZGYxY2M0NDk2MDUmbWV0aG9kPWxpc3RwZWVycyZwbnVtPTEmcG5hbWVpZF4wMjRiOWExZmE4ZTAwNmYxZTM5M3xwYXJyMF4wMjRiOWExZmE4ZTAwNmYxZTM5MyZ0aW1lPDE2NTY5MjA1MzgmcmF0ZT0y",
   "unique_id": "0"
}
```

Learn more by reading the [Core Lightning docs](https://lightning.readthedocs.io/lightning-commando-rune.7.html)

### Decoder

Upon pasting the Rune into the field, Clams App will [decode](https://github.com/clams-tech/rune-decoder) it to verify its authenticity and inform you of the permissions that it will grant. If all looks good, proceed.

Thats it! You are all set to remotely control your node from a browser, anywhere!
