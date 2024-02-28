// prompt to enter a list of flavors
const input = prompt(
    "Please enter some froyo flavors separated by commas."
)

// turn string into an array
const flavors = input.split(",");

// calculate how many of each flavor has been listed

// make a group for froyo flavors
const froyoFlavors = {
    vanilla: 0,
    chocolate: 0,
    strawberry: 0,
    blueberry: 0,
    mint: 0,
    coffee: 0,
    notHere: 0
};

// for every froyo flavor listed add a value to the correct flavor
function countFlavors(flavors, froyoFlavors) {
    for(let i=0; i<flavors.length; i++) {
        //let something be the value of flavors targeted
        let flav = flavors[i];
        if (flav = `vanilla`){
            froyoFlavors.vanilla += 1;
        }
        else if (flav = `chocolate`){
            froyoFlavors.chocolate += 1;
        }
        else if (flav = `strawberry`){
            froyoFlavors.strawberry += 1;
        }
        else if (flav = `blueberry`){
            froyoFlavors.blueberry += 1;
        }
        else if (flav = `mint`){
            froyoFlavors.mint += 1;
        }
        else if (flav = `coffee`){
            froyoFlavors.coffee += 1;
        }
        else {
            froyoFlavors.notHere += 1;
        }
    }
}
countFlavors(flavors, froyoFlavors);

// Print a table of each flavor value
console.table(froyoFlavors);