# next-interval
> Interval for next.


## usage:
```js
import 'next-interval';

// create interval resource:
var res = nx.interval(()=>{
  console.log('delay 1s')
},1000);

// destroy resource:
res.destroy();
```
