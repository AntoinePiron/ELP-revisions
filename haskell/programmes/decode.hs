  decode :: [(Int, a)] -> [a]
  decode [] = []
  decode ( (nb,elt) : sublst )
    | nb > 0 = elt : decode ( (nb-1,elt) : sublst )
    | otherwise = decode sublst