function storeCatalogue(input) {
   let dictionary = {};
   while(input.length) {
       let [name, price] = input.shift().split(' : ');
       const firstLetter = name[0];

       if(!dictionary[firstLetter]) {
           dictionary[firstLetter] = [];
       }
       dictionary[firstLetter].push({name, price: Number(price)});
       dictionary[firstLetter].sort((a, b) => a.name.localeCompare(b.name));
   }
  
    let result = [];
//    for(const letter in dictionary) {
//        let values = dictionary[letter].map(entry => `  ${entry.name}:  ${entry.price}`);
//        let string = `${letter}\n${values.join('\n')}`;
//        result.push(string);
//    }
    Object.entries(dictionary).sort((a, b) => a[0].localeCompare(b[0])).forEach(entry => {
        let values = entry[1]
        .sort((a, b) => a.name.localeCompare(b.name)) // {name, price}
        .map(product =>`  ${product.name}: ${product.price}`) // name: price
        .join('\n')
        let string = `${entry[0]}\n${values}`;
        result.push(string);
    })

   return result.join('\n');
 }

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])

    console.log(storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']));