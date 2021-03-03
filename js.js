const input = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat enim dignissim varius aliquet. Ut id enim vel ipsum rutrum gravida. Integer magna justo, ornare eu urna id, volutpat vehicula velit. Donec sit amet ullamcorper augue. Ut efficitur neque eu ligula commodo, sit amet placerat ex pharetra. Praesent sed velit eget dui dictum laoreet. Duis sodales rutrum odio, vel porta velit dignissim vitae. Mauris quam est, semper quis accumsan ut, tempus non ligula. Nunc a odio semper, condimentum erat vitae, pretium ex.";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray =[];
for (let inputIndex = 0; inputIndex < input.length; inputIndex++){
    //console.log("inputIndex = " + input[inputIndex]);
    for(let vowel = 0; vowel < vowels.length; vowel ++){
        if (input[inputIndex] === vowels[vowel]){
            if(input[inputIndex] === 'e'){
                resultArray.push('ee');
            }
            else if (input[inputIndex] === 'u'){
                resultArray.push('uu')
            }
            else {
                resultArray.push(input[inputIndex]);
            }
        } 
    }
}
console.log(resultArray.join("").toUpperCase());