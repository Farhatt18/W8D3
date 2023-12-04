// // wut
// readline = require('readline'); 

// const reader = readline.createInterface({input:process.stdin, output:process.stdout});

// function addNumbers

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){
    if (numsLeft >= 1){
        reader.question('enter a number', function(result){
            sum += parseInt(result)
        
        // } else
        //     completionCallback(sum)
            console.log(sum);
            if (numsLeft === 1){
                completionCallback(sum)
                reader.close()
                return;
            }
            addNumbers(sum, numsLeft - 1, completionCallback)
        });
    }
}


console.log (addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`)))