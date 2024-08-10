// The test cases of users
const users = [
    { name: 'Reuben',
      username: '@blood_pressure_killa',
      followers: 1,
      verified: false,
      bio: "It's an honor and a privilege."
    },
    { name: 'Laisha',
      username: '@passaic_papi',
      followers: 700,
      verified: true,
      bio: "My commute is longer than yours."
    },
    { name: 'Anne',
      username: '@i_love_bambas',
      followers: 12,
      verified: false,
      bio: "@mayabee is my best friend"
    },
    { name: 'Steph',
      username: '@queen_of_the_kew',
      followers: 1200,
      verified: false,
      bio: "✌🏼"
    },
    { name: 'Carmen',
      username: '@omar_apollo_fanclub',
      followers: 1200000,
      verified: true,
      bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
    }
  ]
  


// Question 1 : logAllNames

    // .map() method : returning in the form of an array
const logAllNames = (users) => {
    return users.map((user) => (user.name))
}
console.log(logAllNames(users))

    // .forEach() method
const logAllNames2 = (users) => {
    return users.forEach((user) => console.log(user.name))
}
logAllNames2(users)


// Question 2 : getAllTags
// const getAllTags = (users) => {
//     users.forEach((user) => 
//         console.log(`Hi my name is ${user.name}, and my tag is ${user.username}!`))
//     // This will grab all the names & usernamesnand put them in the variable
//     // let name = users.map((user) => user.name)
//     // let tag =  users.map((user) => user.username)
//     // return (`Hi my name is ${name}, and my tag is ${tag}!`)
// }
// console.log(getAllTags(users))

const getAllTags = (users) => {
    users.forEach(({name, username}) => console.log(`Hey my name is ${name}, and my tag is ${username}!`))
}
getAllTags(users)

// Question 3 : sumAllFollowers
const sumAllFollowers = (users) => {
    return users.reduce((total, {followers}) => total + followers)
}
console.log(sumAllFollowers(users))

// Question 4 : searchUsername
const searchUsername = (users, string) => {
    return users.filter((user) => user.username === string)
    // return users.filter((user)user.username === string)
}
console.log("\n Quesiton 4 Returns", searchUsername(users, "@passaic_papi"))

// quesiton 5
const longWinded = (users) => {
  if (users.length === 0) return null; // Return null if the users array is empty

  return users.reduce((longest, curr) => {
      return curr.bio.length > longest.bio.length ? curr : longest
  }, users[0]);
};
console.log("\n Question 5 Returns", longWinded(users))

// question 6
const follower = (users) => {
  return users.sort((following, curr) => {
    return following.followers - curr.followers
})
}
console.log("\n Question 6 Returns", follower(users))