function argumentInfo(...params) {
  let occurances = {};
  let result = [];
  params.forEach(el => {
      let type = typeof(el);
      result.push(`${type}: ${el}`);
      occurances[type] = occurances[type] !== undefined 
      ? occurances[type] + 1
      : 1;
  });
  Object.keys(occurances)
  .sort((a, b) => occurances[b] - occurances[a])
  .forEach(key => result.push(`${key} = ${occurances[key]}`));

  return result.join('\n')
}

console.log(argumentInfo('cat', 42, function () {console.log('Hello world!')}));
argumentInfo('cat', 42, function () {console.log('Hello world!')});
