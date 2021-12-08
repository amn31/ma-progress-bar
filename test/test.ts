
import { ProgressBar } from '../lib/ma-progress-bar';
//

// Or, in a single line:
//require('draftlog').into(console)

// Account for manual line breaks with:
//require('draftlog').into(console).addLineListener(process.stdin)

//To create a updatable log, use the draft method injected into the provided console:

// Create a Draft log
var update = console.draft('Hi, my name is')

// You can call logs after it
console.log('Something else')
update('Alain!')

setTimeout(() => {
    update('Hi, my name is Ivan!')
}, 500)
// Use the received callback to update it as many times as you want


let p = new ProgressBar();

p.start('Starting download (1)...');
p.progress(2);

let p1 = new ProgressBar();

p1.start('Starting download (2)...');
p1.progress(20);

setTimeout(() => {
    p.progress(3);
}, 2000)
setTimeout(() => {
    p1.progress(100,'finished (2)');
}, 5000)
setTimeout(() => {
    p.progress(100,'finished (1)');
}, 10000)

// function ProgressBar(progress: number) {
//     // Make it 50 characters length
//     var units = Math.round(progress / 2)
//     return '[' + '='.repeat(units) + ' '.repeat(50 - units) + '] ' + progress + '%'
// }

// var barLine = console.draft('Starting download...')
// const downloadFile = (n: number) => {
//     barLine(ProgressBar(n))
//     setTimeout(() => {
//         update('Hi, my name is Ivan!');
//         if (n < 100) {
//             n++;
//             downloadFile(n);
//         }
//     }, 100)
// };

// downloadFile(1);