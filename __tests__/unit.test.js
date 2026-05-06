// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//isPhoneNumber Tests
test('Verifies wrong format to be false', () => {
    expect(isPhoneNumber("11111111111")).toBe(false);
});

test('Verifies character string to be false', () => {
    expect(isPhoneNumber("Wrong Format")).toBe(false);
});

test('(619) 230-0921 is valid', () => {
    expect(isPhoneNumber("(619) 230-0921")).toBe(true);
});

test('230-0921 is valid', () => {
    expect(isPhoneNumber("230-0921")).toBe(true);
});

//isEmail Tests
test('lamp.com is invalid', () => {
  expect(isEmail("lamp.com")).toBe(false);
});

test('@.com is false', () => {
  expect(isEmail("@.com")).toBe(false);
});

test('schoolemail@go@school.edu is invalid', () => {
  expect(isEmail("schoolemail@go@school.edu")).toBe(false);
});

test('talk.talk@gmail.co is invalid', () => {
  expect(isEmail("talk.talk@gmail.co")).toBe(false);
});

test('t@t.wrong is invlaid', () => {
  expect(isEmail("t@t.wrong")).toBe(false);
});

test('valid@email.co is valid', () => {
  expect(isEmail("valid@email.co")).toBe(true);
});

test('valid@email.com is valid', () => {
  expect(isEmail("valid@email.com")).toBe(true);
});

//isStrongPassword Tests
test('ThisPasswordHasMoreThanSixteenCharacters is invalid', () => {
  expect(isStrongPassword("ThisPasswordHasMoreThanSixteenCharacters")).toBe(false);
});

test('"Strong Passwords Space" is invlaid', () => {
  expect(isStrongPassword("Strong Passwords Space")).toBe(false);
});

test('nah is invalid', () => {
  expect(isStrongPassword("nah")).toBe(false);
});

test('1NotValid is invalid', () => {
  expect(isStrongPassword("1NotValid")).toBe(false);
});

test('a111 is valid', () => {
  expect(isStrongPassword("a111")).toBe(true);
});

test('abc_1_2_Valid is valid', () => {
  expect(isStrongPassword("abc_1_2_Valid")).toBe(true);
});

test('vaLiDPa55w0rD is valid', () => {
  expect(isStrongPassword("vaLiDPa55w0rD")).toBe(true);
});

//isDate Tests 
test('1000/1000/1100 is invalid', () => {
  expect(isDate("1000/1000/1100")).toBe(false);
});

test('XX/XX/YYYY is invalid', () => {
  expect(isDate("XX/XX/YYYY")).toBe(false);
});

test('1/2 is invalid', () => {
  expect(isDate("1/2")).toBe(false);
});

test('1/2/3 is invalid', () => {
  expect(isDate("1/2/3")).toBe(false);
});

test('11/11/1111 is valid', () => {
  expect(isDate("11/11/1111")).toBe(true);
});

test('1/1/2003 is valid', () => {
  expect(isDate("1/1/2003")).toBe(true);
});

//isHexColor Tests
test('#A is invalid', () => {
  expect(isHexColor("#A")).toBe(false);
});

test('#AAAAAAA is invalid', () => {
  expect(isHexColor("#AAAAAAA")).toBe(false);
});

test('#GGG is invalid', () => {
  expect(isHexColor("#GGG")).toBe(false);
});

test('#AABBCC is valid', () => {
  expect(isHexColor("#AABBCC")).toBe(true);
});

test('#abc is valid', () => {
  expect(isHexColor("#abc")).toBe(true);
});

test('A23FF2 is valid', () => {
  expect(isHexColor("A23FF2")).toBe(true);
});