---
title: CQM 6.3 editorials
description: Editorials for CQM 6.3 conducted on 26th January, 2019.
---

# [CQM-6.3](https://www.hackerrank.com/contests/cqm-6-3/)

# Editorials

## [Dashiell And High Jump](https://www.hackerrank.com/contests/cqm-6-3/challenges/dashiell-and-high-jump)

This is a cakewalk problem on array. Initialise a variable "high_jump" to the height of first wall because there is at least one wall to jump. Now traverse the array if the next element is greater than previous, find difference and compare with "high_jump". If difference is greater than "high_jump", update it with value of difference. Final value of "high_jump" is the highest jump made by him.


Code (in C++) :
```cpp
#include<bits/stdc++.h>
using namespace std;

int main(){
  int t; cin>>t;
  while(t--){
    int n; cin>>n;
    int h[n];
    for(int i=0; i<n; i++)cin>>h[i];
    int high_jump=h[0];
    for(int i=0; i<n-1; i++){
        high_jump = max(high_jump, (h[i+1]-h[i]));
    }
    cout<<high_jump<<endl;
  }
  return 0;
}

```

## [Brady and the river](https://www.hackerrank.com/contests/cqm-6-3/challenges/brady-and-the-river)

You can use ternary search or use geometry to find the answer.

![Geometry solution](editorial.png)
