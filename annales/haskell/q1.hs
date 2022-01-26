if' :: Bool -> p -> p -> p
if' bool param1 param2
    | bool == True = param1
    | bool == False = param2