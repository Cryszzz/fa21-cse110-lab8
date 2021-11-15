// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

test('Phone Number #1', () => {
    expect(functions.isPhoneNumber('012-345-6789')).toBe(true);
});
test('Phone Number #2', () => {
    expect(functions.isPhoneNumber('(123)456-7890')).toBe(true);
});
test('Phone Number #3', () => {
    expect(functions.isPhoneNumber('string')).toBe(false);
});
test('Phone Number #4', () => {
    expect(functions.isPhoneNumber('0982')).toBe(false);
});

test('Email #1', () => {
    expect(functions.isEmail('xz@gmail.com')).toBe(true);
});
test('Email #2', () => {
    expect(functions.isEmail('xz@ucsd.edu')).toBe(true);
});
test('Email #3', () => {
    expect(functions.isEmail('string')).toBe(false);
});
test('Email #4', () => {
    expect(functions.isEmail('0982')).toBe(false);
});

test('Strong Password #1', () => {
    expect(functions.isStrongPassword('String123_')).toBe(true);
});
test('Strong Password #2', () => {
    expect(functions.isStrongPassword('String1234')).toBe(true);
});
test('Strong Password #3', () => {
    expect(functions.isStrongPassword('stringstringstring')).toBe(false);
});
test('Strong Password #4', () => {
    expect(functions.isStrongPassword('098')).toBe(false);
});

test('Date #1', () => {
    expect(functions.isDate('1/6/2019')).toBe(true);
});
test('Date #2', () => {
    expect(functions.isDate('01/26/2019')).toBe(true);
});
test('Date #3', () => {
    expect(functions.isDate('string')).toBe(false);
});
test('Date #4', () => {
    expect(functions.isDate('0982')).toBe(false);
});

test('Hex Color #1', () => {
    expect(functions.isHexColor('#003754')).toBe(true);
});
test('Hex Color #2', () => {
    expect(functions.isHexColor('#FC0')).toBe(true);
});
test('Hex Color #3', () => {
    expect(functions.isHexColor('string')).toBe(false);
});
test('Hex Color #4', () => {
    expect(functions.isHexColor('0982')).toBe(false);
});
