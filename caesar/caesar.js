const caesar = function (str, num) {
    var position = 0;
    var result = "";
    while (position < str.length) {
        //uppercase
        if (str.charCodeAt(position) < "Z".charCodeAt(0)) {
            result += String.fromCharCode((str.charCodeAt(position)+num-65)%26 + 65);
            position++;
        
        }
        //lowercase
        else if (str.charCodeAt(position) >= "a".charCodeAt(0)) {
            result += String.fromCharCode((str.charCodeAt(position)+num-97)%26 + 97);
            position++;
        }
    }
    return result;
}

module.exports = caesar
