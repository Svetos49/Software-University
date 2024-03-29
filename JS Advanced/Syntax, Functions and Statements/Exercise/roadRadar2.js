function roadRadar2(speed, area) {
    let limit = 0;
    switch (area) {
        case 'motorway': limit = 130;
            break;
        case 'interstate': limit = 90;
            break;
        case 'city': limit = 50;
            break;
        case 'residential': limit = 20;
            break;
    }
    const difference = speed - limit;
    if(difference <= 0) {
      return `Driving ${speed} km/h in a ${limit} zone`;
    } 
    let status = '';
    if(difference <= 20) {
        status = 'speeding';
    } else if(difference > 20 && difference <= 40) {
        status = 'excessive speeding';
    } else if(difference > 40) {
        status = 'reckless driving';
    }
    return `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
}

    // roadRadar2(40, 'city');
    // roadRadar2(120, 'interstate');
    console.log(roadRadar2(40, 'city'));
    console.log( roadRadar2(120, 'interstate'));