
const stringSize = (text) => {
    return text.length;

}
const replaceCharacterE = (text) => {
    let k=text.split("");
    for(let i =0;i<k.length;i++){
        if(k[i]=="e"){
            k[i]=" "
            break;
        }
    }
    return k.join("");

}
const concatString = (text1, text2) => {

    return text1+text2;
}
const showChar5 = (text) => {

    return text[4];
}
const showChar9 = (text) => {

    return text.slice(0,9);
}
const toCapitals = (text) => {

    return text.toUpperCase();
}
const toLowerCase = (text) => {

    return text.toLowerCase();
}
const removeSpaces = (text) => {

    return text.trim();
}
const IsString = (text) => {

    return typeof(text)=='string';
}

const getExtension = (text) => {

    return text.slice(text.indexOf(".")+1);
}
const countSpaces = (text) => {
    let count=0
    for(i=0;i<text.length;i++){
        if(text[i]==" ")
        count++
    }
    return count;

}
const InverseString = (text) => {

    let rev=text.split("").reverse();
   return rev.join("");
}

const power = (x, y) => {

    return Math.pow(x,y);
}
const absoluteValue = (num) => {

    return Math.abs(num);
}
const absoluteValueArray = (array) => {

    let arr=[];
    for(let i=0;i<array.length;i++){
        arr[i]=absoluteValue(array[i])
    }
    return arr;

}
const circleSurface = (radius) => {
    let pi =Math.PI;
    let surf=pi*Math.pow(radius,2);
    return Math.round(surf);

}
const hypothenuse = (ab, ac) => {

    let hyp=Math.sqrt(ab * ab +ac * ac);
    return hyp;
}
const BMI = (weight, height) => {

    let bmi=weight / (height * height)
    return parseFloat(bmi.toFixed(2));
}

const createLanguagesArray = () => {

    const array= [ 'Html', 'CSS', 'Java', 'PHP' ]
    return array
}

const createNumbersArray = () => {
    const nbarray=[ 0, 1, 2, 3, 4, 5 ];
    return nbarray;


}

const replaceElement = (languages) => {

    languages.splice(2,1,'Javascript');
    return languages;
}

const addElement = (languages) => {

    languages.splice(4, 0, 'Ruby', 'Python');
    return languages;
}

const addNumberElement = (numbers) => {

    numbers.unshift(-2,-1);
    return numbers;
}

const removeFirst = (languages) => {

    languages.shift();  
    return languages;
}

const removeLast = (languages) => {

    languages.pop();
    return languages;
}

const convertStrToArr = (social_arr) => {

    return split_string = social_arr.split(",");
}

const convertArrToStr = (languages) => {

    return languages.toString();
}

const sortArr = (social_arr) => {

    return social_arr.sort();
}

const invertArr = (social_arr) => {

    return social_arr.reverse();
}