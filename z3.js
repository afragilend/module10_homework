
function reverseString(str) {
    console.log(str)
    let arr
    arr = str.split("")
    console.log(arr)
    arr.reverse()
    console.log(arr)
    let newStr
    newStr = arr.join("")
    console.log(newStr)
    return newStr
}
reverseString("Hello")