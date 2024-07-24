const fs = require('fs');
function concatenate(file1, file2){
    const text1 = fs.readFileSync(file1, 'utf-8');
    const text2 = fs.readFileSync(file2, 'utf-8');
    const combined = text1 + text2
    console.log(combined)
}
concatenate('example1.txt', 'example2.txt')