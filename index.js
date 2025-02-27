// Part 1: Growing Pains

// Your task is to create a program that advises a group of environmental scientists how to handle the growth and spread of a unique plant species under their supervision. You must develop a growth control system that will monitor and predict the plant growth, making decisions based on the available space and potential growth.

// Here is the information you have been given:

    // The area in which the plants are contained is circular, with a radius of 5 meters.
    let radius = 5
        // The formula for calculating the area of a circle is PI multiplied by the radius, squared:
        const PI = 3.1415
        const area = PI * radius * radius
    // Each plant requires a minimum space of 0.8 square meters.
    const plantSize = 0.8
    // The area is starting with 20 plants.
    let totalPlants = 20
    console.log(`The initial number of plants is ${totalPlants}.\n`)
// Using this information, your objectives are to:
    //Predict the plant growth after a specific number of weeks.
    let week = 0
    //Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.
    while (week < 3) {
        // The plants double in number every week.
        totalPlants *= 2
        week++
        // Ternary operator for plural wording
        weekStr = week === 1 ? `1 week` : `${week} weeks`
        console.log(`After ${weekStr} the total number of plants has doubled to ${totalPlants}.`)
    //Implement control flow to make decisions on whether the plants should be:
        //Pruned, to stop them from exceeding the capacity of the garden.
        // This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
        if (totalPlants * plantSize > area * 0.8) {
            console.log(`${totalPlants * plantSize}sq/m of plants exceed the allowed ${area * 0.8}sq/m area and should be pruned.\n`)
        }
        //Monitored, if they are growing at an acceptable rate.
        // This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
        else if (totalPlants * plantSize > area * 0.5) {
            console.log(`The garden has ${totalPlants * plantSize}sq/m of plants.  They are approching max capacity.  Keep an eye on them.\n`)
        }
        //Planted, if there is room to plant more plants.
        // This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
        else if (totalPlants > -1) {
            console.log(`The garden has ${totalPlants * plantSize}sq/m of plants.  There is room to plant more.\n`)
        }
        else {
            console.log(`You can't have ${totalPlants} plants, silly.\n`)
        }
    }

// Part 2: Thinking Bigger
// The conservation area in which the garden is located has multiple other gardens. 
// Using the logic you have already created, determine:
// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
// If the space remained circular, what would be the radius of this expanded garden?

// Mostly the same code as above
radius = 5
totalPlants = 100
console.log(`The initial number of plants will now be ${totalPlants}.\n`)
week = 0
while (week < 3) {
    totalPlants *= 2
    week++
    weekStr = week === 1 ? `1 week` : `${week} weeks`
    console.log(`After ${weekStr} the total number of plants has doubled to ${totalPlants}.`)
    if (totalPlants * plantSize > area * 0.8) {
        console.log(`${totalPlants * plantSize}sq/m of plants exceed the allowed ${area * 0.8}sq/m area and should be pruned.\n`)
    }
    else if (totalPlants * plantSize > area * 0.5) {
        console.log(`The garden has ${totalPlants * plantSize}sq/m of plants.  They are approching max capacity.  Keep an eye on them.\n`)
    }
    else if (totalPlants > -1) {
        console.log(`The garden has ${totalPlants * plantSize}sq/m of plants.  There is room to plant more.\n`)
    }
    else {
        console.log(`You can't have ${totalPlants} plants, silly.\n`)
    }
}