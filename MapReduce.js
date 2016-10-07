function myFunction() {

    // Map function
    var map = function(k, v) {
        //We will put our result in this var
        var result = [];

        // We split the string in several words
        var matches = v.split(" ");

        // We read each word
        for (var i in matches) {
            //We save the current word with a 1 count
            result.push("(" + [matches[i], 1] + ")");   
        }
        
        //We return what we found
        return result;
    };

    // Reduce Function
    var reduce = function(k, v) {
        //We count how many element we have
        var sum = v.length;

        // We give back the word with the new count (sum)
        return "("+[k, sum]+")";
    };

    // We focus on Mapping logic
    var mapFocus = function(input) {
        // We separate each line of text
        var lines = input.split('\n');

        // Var initialization
        var mapResults = [];
        var count = 0;

        //For each line
        for (var i in lines) {
            //We map the current line
            var currentMap = map(i, lines[i]);
            //We save what we found at mapResults
            mapResults[count] = (currentMap + "  ///  ");
            // We increment the count
            count ++;
            
            
        }

        // final result is returned
        return mapResults;
    }

    //Focus on reducing function
    var reduceFocus = function(input) {

        //We separate each line
        var lines = input.split('\n');

        var reduceResults = [];
        var count = 0;

        // For each line
        for (var j in lines) {
            //We split each couple of words and number
            var line = lines[j].split(' ');

            //We isolate the word
            var word = line[0].split(",");
            word = word[0].substring(1);

            //We ask to the reduce function the result for the current line
            var currentReduce = reduce(word,line);
            //We save it
            reduceResults[count] = currentReduce;
            count ++;
        }

        return reduceResults;

    };

    //We search for the text to map
    var mapInput = document.getElementById("mapInput");
    //We map the text
    var resultMap = mapFocus(mapInput.textContent);
    //We search where to print the result
    var outputMap = document.getElementById("outputMap");
    //We print the result
    outputMap.innerHTML = resultMap;


    //We search the text to reduce
    var reduceInput = document.getElementById("reduceInput");
    //We reduce it
    var resultReduce = reduceFocus(reduceInput.textContent);
    //We search where to print it
    var outputReduce = document.getElementById("outputReduce");
    //We print it
    outputReduce.innerHTML = resultReduce;
 
};