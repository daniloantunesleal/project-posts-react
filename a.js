const [ arr, ...a ] = [["a", "b", "c"], 2, 3, 5]

arr[1] = "x"

console.log(a, "|", arr[1])