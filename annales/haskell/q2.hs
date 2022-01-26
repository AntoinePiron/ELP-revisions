

getAt :: Int -> [a] -> a
getAt n (x:xs) 
  | n > 0 = getAt (n-1) xs 
  | n==0 = x