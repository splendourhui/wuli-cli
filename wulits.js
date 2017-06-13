const exec = require('child_process').exec;
const fs = require('fs');
const path = require('path');
const templates = require('./templates');

const CONTAINER = 'container';

const type = process.argv[2];
const name = process.argv[3];
const className = process.argv[4];

switch (type) {
  case CONTAINER:
    var mkdirCmd = `mkdir ${name}`;
    exec(mkdirCmd, (err, stdout, stderr) => {
      if (err) {
        return console.log(err);
      }
      console.log(`Create directory ${name}`);

      /** index.tsx */
      fs.writeFile(path.join(__dirname, `${name}/index.tsx`),
        templates.container.index.replace(/\$name/g, name), err => {
          if (err) {
            return console.log(err);
          }
          console.log(`Create index.tsx`);
        });

      /** style.less */
      fs.writeFile(path.join(__dirname, `${name}/style.less`),
        templates.container.style.replace(/\$className/g, className), err => {
          if (err) {
            return console.log(err);
          }
          console.log(`Create style.less`);
        });

      /** component.tsx */
      fs.writeFile(path.join(__dirname, `${name}/${name}.component.tsx`),
        templates.container.component.replace(/\$className/g, className).replace(/\$name/g, name), err => {
          if (err) {
            return console.log(err);
          }
          console.log(`Create ${name}.component.tsx`);
        });

      /** selector.tsx */
      fs.writeFile(path.join(__dirname, `${name}/${name}.selector.tsx`),
        templates.container.selector.replace(/\$name/g, name), err => {
          if (err) {
            return console.log(err);
          }
          console.log(`Create ${name}.selector.tsx`);
        });

      /** decorator.tsx */
      fs.writeFile(path.join(__dirname, `${name}/${name}.decorator.tsx`),
        templates.container.decorator.replace(/\$name/g, name), err => {
          if (err) {
            return console.log(err);
          }
          console.log(`Create ${name}.decorator.tsx`);
        });

    });
    break;

  default:
    break;
}

const execCmd = cmd => new Promise((resolve, reject) => {
  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      reject(err);
    } else {
      resolve(true);
    }
  })
});

// exec(cmd, function(err, stdout, stderr) {
//   if (err) {
//     return console.log(err);
//   }
//   stdout.split('\n').filter(function(line) {
//     var p = line.trim().split(/\s+/);
//     var command = p[0];
//     var address = p[1];
//     if (address && address != 'PID' && command == 'node') {
//         exec('kill ' + address, function(err, stdout, stderr) {
//           if (err) {
//             return console.log('kill port failed');
//           }
//           console.log('kill port success');
//       });
//     }
//   });
// });
