// 1) SUM ZERO

const addToZero = arr => {
    let result = false

    for (let i=0; i<arr.length; i++) {
        for (let j=0; j<arr.length; j++) {
            if (i !== j) {
                if (arr[i] + arr[j] === 0) {
                    result = true
                }
            }
        }
    } return result
}
// console.log(addToZero[1])
// console.log(addToZero([1, 2, 3]))
// console.log(addToZero([1, 2, 3, -2]))
// space complexity = O(n)

// 2) UNIQUE CHARACTERS

const hasUniqueChars = word => {
    let unique = true

    for (i=0; i<word.length; i++) {
        for (j=i+1; j<word.length; j++) {
            if (word[i] === word[j]) {
                unique = false
            }
        }
    } return unique
}
// console.log(hasUniqueChars('Monday'))
// console.log(hasUniqueChars('Moonday'))
// space complexity = O(n)


// 3) PANGRAM SENTENCE

const isPangram = sentence => {    
    let alpha = new Set("abcdefghijklmnopqrstuvwxyz")
    for (let c of sentence.toLowerCase()){
        alpha.delete(c)
        if (alpha.size == 0) return true
    }
    return false

}
// console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
// console.log(isPangram("I like cats, but not mice"))
// space complexity = O(n)


// 4) LONGEST WORD

const findLongestWord = arr => {
    let biggestLength = 0

    for (let i=0; i<arr.length; i++) {
        if (arr[i].length > biggestLength) {
            biggestLength = arr[i].length
        }
    } return biggestLength
}
// console.log(findLongestWord(["hi", "hello"]))
// console.log(findLongestWord(["one", "two", "three", "hundred"]))
// space complexity = O(n)