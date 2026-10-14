

let result = ""

// Pattern 1
for (let row = 1; row <= 5; row++) {
    result += "* * * * *\n"
}

console.log(result)

result = ""

// Pattern 2
for (let row = 1; row <= 5; row++) {
    const maxStars = row
    
    for (let starsCount = 1; starsCount <= maxStars; starsCount++) {
        result += "* "
    }

    result += "\n"
}

console.log(result)

result = ""

// Pattern 3
for (let row = 1; row <= 5; row++) {
    const maxSpaces = 5 - row
    const maxStars = row
    
    for (let spacesCount = 1; spacesCount <= maxSpaces; spacesCount++) {
        result += " "
    } 

    for (let starsCount = 1; starsCount <= maxStars; starsCount++) {
        result += "* "
    }
    result += "\n"
}

console.log(result)

result = ""

// Pattern 4
for (let row = 1; row <= 5; row++) {
    if (row === 1 || row === 5)
        result += "* * * * *\n"
    else
        result += "*       *\n" 
}

console.log(result)