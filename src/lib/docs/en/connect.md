---
title: Connect
index: 1
sections: ['how-it-works']
---

# Connect

To get started with [Clams App](https://app.clams.tech) you must first enter your unique Lightning Address address when [prompted](https://app.clams.tech/connect). Your address will have two parts (seperated by the @ symbol):

- Node ID
- Host & Port

Here is an example:

```
02df5ffe895c778e10f7742a6c5b8a0cefbe9465df58b92fadeb883752c8107c8f@35.232.170.67:9735
```

If you do not know the Lightning address of your node, you can find it by running the [**getinfo**](https://lightning.readthedocs.io/lightning-getinfo.7.html?#synopsis) command via the Core Lightning CLI. See the **address** field in this response example:

```
{
   "id": "02bf811f7571754f0b51e6d41a8885f5561041a7b14fac093e4cffb95749de1a8d",
   "alias": "SLICKERGOPHER",
   "color": "02bf81",
   "num_peers": 0,
   "num_pending_channels": 0,
   "num_active_channels": 0,
   "num_inactive_channels": 0,
   "address": [
      {
         "type": "torv3",
         "address": "fp463inc4w3lamhhduytrwdwq6q6uzugtaeapylqfc43agrdnnqsheyd.onion",
         "port": 9736
      },
      {
         "type": "torv3",
         "address": "ifnntp5ak4homxrti2fp6ckyllaqcike447ilqfrgdw64ayrmkyashid.onion",
         "port": 9736
      }
   ],
   "binding": [
      {
         "type": "ipv4",
         "address": "127.0.0.1",
         "port": 9736
      }
   ],
   "version": "v0.10.2",
   "blockheight": 724302,
   "network": "bitcoin",
   "msatoshi_fees_collected": 0,
   "fees_collected_msat": "0msat",
   "lightning-dir": "/media/vincent/Maxtor/C-lightning/node/bitcoin"
   "our_features": {
      "init": "8828226aa2",
      "node": "80008828226aa2",
      "channel": "",
      "invoice": "20024200"
   }
}
```

**Note** - At this time the app only supports Core Lightning nodes that are running on clearnet. TOR support is on our roadmap.

### How it works

Under the hood, Clams App is ... @TODO
