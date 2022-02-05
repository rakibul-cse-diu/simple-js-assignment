// problem 01 : Ana to vori convertion 
function anaToVori(ana) {
    return ana / 16;  // 16 ana = 1 vori
}

// check anaToVori function 
var vori = anaToVori(32);
console.log("the convertion of ana is ", vori, " vori");
// end of problem 01




// problem 02 : pandaCost 
function pandaCost(singara, samusa, jilapi) {
    var totalCost;
    return totalCost = singara * 7 + samusa * 10 + jilapi * 15; // multiply the amount with the price
}

// check pandaCost function 
var bill = pandaCost(3, 2, 1);
console.log("the total cost of panda is ", bill);
// end of problem 02




// problem 03 : picnic budget
function picnicBudget(totalPerson) {
    var totalCost;
    if (totalPerson <= 100) {
        totalCost = totalPerson * 5000;
    } else if (totalPerson <= 200) {
        var under100 = 100 * 5000; // first 100 person's cost will 5000
        var remain = totalPerson - 100;
        totalCost = under100 + (remain * 4000);
    } else {
        var under100 = 100 * 5000; // first 100 person's cost will 5000
        var under200 = 100 * 4000; // second 100 person's cost will 4000
        var remain = totalPerson - 200;
        totalCost = under100 + under200 + (remain * 3000);
    }
    return totalCost;
}

// check picnicBudget function 
var budget = picnicBudget(300);
console.log("the total cost of picnic is ", budget);
// end of problem 03




// problem 04 : odd friend
function oddFriend(friendsArray) {
    var oddName;
    for (var i = 0; i < friendsArray.length; i++) {
        if (friendsArray[i].length % 2 == 1) {  // check the length of string
            oddName = friendsArray[i];
            break;
        }
    }
    return oddName;
}

// check oddFriend function 
var friends = ['kalu', 'milu', 'forid hasan', 'roni', 'jhallu', 'billu'];
var friendName = oddFriend(friends);
console.log("the odd friend is ", friendName);
// end of problem 04