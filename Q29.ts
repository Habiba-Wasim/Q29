// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

const FavoriteFruits: string [] = ["Banana", "apple", "Strawberry"];

if(FavoriteFruits.includes("Banana")){
    console.log("you are really like Bananas!")
}
if(FavoriteFruits.includes("Apple")){
    console.log("you are really like Apple!")
}
if(FavoriteFruits.includes("Orange")){
    console.log("you are really like Orange!")
}else{
    console.log("Orange are not in your favourite fruit list.");
}
if(FavoriteFruits.includes("Strawberry")){
    console.log("you are really like Strawberries!")
}
if(FavoriteFruits.includes("Graphs")){
    console.log("you are really like Graphs!")
}else{
    console.log("Graphs are not in your favourite list.")
}