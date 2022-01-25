  somme :: [Int] -> Int
  somme [] = 0
  somme (x:xs) = x + somme xs 