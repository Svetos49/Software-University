function commandProcessor() {
     let str = '';

     return {
         append,
         removeStart,
         removeEnd,
         print,
     }

     function append(strToAppend) {
            str += strToAppend;
     }
     function removeStart(n) {
       str = str.slice(n);
     }
     function removeEnd(n) {
       str = str.slice(0, -n);
     }
    function print() {
       console.log(str);
    }
}

let secondZero = commandProcessor();
secondZero.append('hello');
secondZero.append('again');
secondZero.removeStart(3);
secondZero.removeEnd(4);
secondZero.print();