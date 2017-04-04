function makeStory() {
    // get form values (2 points)
    var noun1 = document.getElementById('noun1').value;
    var noun2 = document.getElementById('noun2').value;
    var noun3 = document.getElementById('noun3').value;
    var noun4 = document.getElementById('noun4').value;
    var noun5 = document.getElementById('noun5').value;
    var verb1 = document.getElementById('verb1').value;
    var verb1 = document.getElementById('verb1').value;
    var verb2 = document.getElementById('verb2').value;
    var occupation = document.getElementById('occupation').value;
    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;
    var shape = document.getElementById('shape').value;
    var bodypart1 = document.getElementById('bodypart1').value;
    var restaurant = document.getElementById('restaurant').value;
    var monument = document.getElementById('monument').value;





    // Set title of story. Use at least one form value in the title. (2 points)
    var title = " Michael Bay ";


    // Build story. you can add as many paragraphs as you like. (3 points)
var paragraph1 = name1 + " is a normal " + occupation + ". Then, one day, a " + noun1 + " explodes, causing a " + noun2 +
                 " to blow up, and a nearby " + noun3 + " erupts into a " + shape + " of flames. " + name1 +
                 " realized that he is being chased by the government, who is trying to " + verb1 +
                 " him. While on the run, he teams up with an incredibly attractive woman named " + name2 +
                 " who has an incredible " + bodypart1 + ". She may be from the streets, but she can " + verb2 +
                 " like nobody's business. The duo decide to turn the tables on  their pursuers by blowing up a " +
                 noun4 + ". Which triggers a chain reaction, causing the local " + noun5 + ", " + restaurant + ", and the " +
                 monument + " to explode.";


    // Display story by putting title & paragraphs into appropriate divs. (3 points)
 document.getElementById("title").innerHTML = title;
 document.getElementById("one").innerHTML = paragraph1;
}
