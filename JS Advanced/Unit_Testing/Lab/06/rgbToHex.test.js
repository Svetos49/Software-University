const {expect} = require('chai');
const rgbToHexColor = require('./rgbToHex1');

/*
Take three integer numbers, representing the red, green and blue values of an RGB color, each within range [0…255]
Return the same color in hexadecimal format as a string (e.g. &#39;#FF9EAA&#39;)
Return undefined if any of the input parameters are of invalid type or not in the expected range
*/

describe('rgbToHexColor', () => {
  it('convert black to hex', () => {
      expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
  });

  it('convert white to hex', () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
});

it('convert red to hex', () => {
  expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
});

it('convert green to hex', () => {
  expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
});

it('convert blue to hex', () => {
  expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
});

  it('returns undefined for string params', () => {
    expect(rgbToHexColor('a', 'a', 'a')).to.be.undefined;
});

  it('returns undefined for negative values', () => {
  expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
});

  it('returns undefined for values > 255', () => {
  expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
});

it('returns undefined for negative values', () => {
  expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
});

  it('returns undefined for values > 255', () => {
  expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
  });

  it('returns undefined for negative values', () => {
    expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
  });
  
    it('returns undefined for values > 255', () => {
    expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
  });
  


 // test to overloading 
  it('converts (151, 104, 172) to hex', () => {
    expect(rgbToHexColor(151, 104, 172)).to.equal('#9768AC');
});

it('converts (41, 173, 170) to hex', () => {
  expect(rgbToHexColor(42, 173, 170)).to.equal('#2AADAA');
});
});