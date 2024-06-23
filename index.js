let myName = 'Oyintonbra Ebufegha'
console.log(myName)

let age = 28
console.log(age)

let isStudent = false
console.log(isStudent)


let person = {
    firstName: 'Oyintonbra',
    lastName: 'Ebufegha',
    age: 28,
    isStudent: false,

    fullName : function(){
        myFullNameullName = this.firstName + this.lastName
        return myFullNameullName
    }

}

let writeMyFullName = person.fullName()
console.log(writeMyFullName)

let number = 64
let findSquareRoot = Math.sqrt(number)
console.log(findSquareRoot)

let randomNumber = Math.random()
console.log(randomNumber)

let roundedUp = Math.ceil(7.5)
console.log(roundedUp)

let maximumNumber = Math.max(10, 20, 30, 40, 50)
console.log(maximumNumber)

let aVariable = 10
let bVariable = 5

let addition = aVariable + bVariable
console.log(addition)

let subtraction = aVariable - bVariable
console.log(subtraction)

let multiplication = aVariable * bVariable
console.log(multiplication)

let division = aVariable/bVariable
console.log(division)

let modulus = aVariable % bVariable
console.log(modulus)