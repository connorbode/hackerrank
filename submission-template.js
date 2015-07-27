var input = '';

function solve(cuts) {

}

function run () {
  var lines = input.split('\n')
    , i;
    
  for (i = 1; i < lines.length; i++) {
    process.stdout.write(solve(lines[i]) + '\n');
  }
}

process.stdin.resume();
process.stdin.setEncoding('ascii');
process.stdin.on('data', function (_input) { input += _input; });
process.stdin.on('end', function () { run(); });