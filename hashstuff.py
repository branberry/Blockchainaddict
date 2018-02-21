from math import fmod,floor,sqrt

m = 1000
A = (sqrt(5)-1)/2
k = 61

for i in range(5):
    hashval = floor(m*fmod(k*A,1))
    print(hashval)
    k = k + 1
