
const stringSize = (text) => {
    return text.length

}
const replaceCharacterE = (text) => {
    let k=text.split("")
    for(let i =0;i<k.length;i++){
        if(k[i]=="e"){
            k[i]=" "
            break;
        }
    }
    return k.join("")

}
const concatString = (text1, text2) => {

    return text1+text2
}
const showChar5 = (text) => {

    return text[4]
}
const showChar9 = (text) => {

    return text.slice(0,9)
}
const toCapitals = (text) => {

    return text.toUpperCase()
}
const toLowerCase = (text) => {

    return text.toLowerCase()
}
const removeSpaces = (text) => {

    return text.trim()
}
const IsString = (text) => {

    return typeof(text)=='string'
}

const getExtension = (text) => {

    return text.slice(text.indexOf(".")+1)
}
const countSpaces = (text) => {
    let count=0;
    for(i=0;i<text.length;i++){
        if(text[i]==" ")
        count++
    }
    return count

}
const InverseString = (text) => {

    let rev=text.split("").reverse()
   return rev.join("")
}

const power = (x, y) => {

    return Math.pow(x,y)
}
const absoluteValue = (num) => {

    return Math.abs(num)
}
const absoluteValueArray = (array) => {

    let arr=[]
    for(let i=0;i<array.length;i++){
        arr[i]=absoluteValue(array[i])
    }
    return arr

}
const circleSurface = (radius) => {
    let pi =Math.PI
    let surf=pi*Math.pow(radius,2)
    return Math.round(surf)

}
const hypothenuse = (ab, ac) => {

    let hyp=Math.sqrt(ab * ab +ac * ac)
    return hyp
}
const BMI = (weight, height) => {

    let bmi=weight / (height * height)
    return parseFloat(bmi.toFixed(2))
}

const createLanguagesArray = () => {

    return ["Python","Java","React","CSS","Javascript"]
}

const createNumbersArray = () => {

}

const replaceElement = (languages) => {

}

const addElement = (languages) => {

}

const addNumberElement = (numbers) => {

}

const removeFirst = (languages) => {

}

const removeLast = (languages) => {

}

const convertStrToArr = (social_arr) => {

}

const convertArrToStr = (languages) => {

}

const sortArr = (social_arr) => {

}

const invertArr = (social_arr) => {

}