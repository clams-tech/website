---
title: Runes
index: 2
sections: ['recipes']
---

# Runes

Having established a connection to your node on the [previous step](/docs/connect), it is now time to provide a [Rune](https://lightning.readthedocs.io/lightning-commando-rune.7.html). Think of a Rune as an access token with specific permissions to perform commands on your node.

**Note** - Runes cannot be deleted once they are created, so be mindful when creating them.

### Recipes

To create a fresh rune which can do anything:

```
$ lightning-cli commando-rune
{
   "rune": "KUhZzNlECC7pYsz3QVbF1TqjIUYi3oyESTI7n60hLMs9MA==",
   "unique_id": "0"
}
```

### Decoder

Upon pasting the Rune into the field, Clams App will [decode](https://github.com/clams-tech/rune-decoder) it to verify its authenticity and inform you of the permissions that it will grant. If all looks good, proceed.

Thats it! You are all set to remotely control your node from a browser, anywhere!
