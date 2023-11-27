const fs = require('fs');
const path = require('path');

test('Has DOCTYPE tag', () => {
  const filename = 'index.html'; // make sure the HTML file is named index.html
  const fileContent = fs.readFileSync(filename, 'utf8');
  expect(fileContent).toMatch(/<!DOCTYPE/);
});

test('Has opening and closing HTML tags', () => {
  const filename = 'index.html'; // make sure the HTML file is named index.html
  const fileContent = fs.readFileSync(filename, 'utf8');
  expect(fileContent).toMatch(/<html/);
  expect(fileContent).toMatch(/<\/html>/);
});

test('Has lang="en" setting', () => {
  const filename = 'index.html'; // make sure the HTML file is named index.html
  const fileContent = fs.readFileSync(filename, 'utf8');
  expect(fileContent).toMatch(/lang="en"/);
});

test('Has opening and closing head tag', () => {
  const filename = 'index.html'; // make sure the HTML file is named index.html
  const fileContent = fs.readFileSync(filename, 'utf8');
  expect(fileContent).toMatch(/<head/);
  expect(fileContent).toMatch(/<\/head/);
});

test('Has <meta charset="utf-8">', () => {
  const filename = 'index.html'; // make sure the HTML file is named index.html
  const fileContent = fs.readFileSync(filename, 'utf8');
  expect(fileContent).toMatch(/<meta charset="utf-8"\s*\/?>/);
});

test('Has opening and closing title tag', () => {
  const filename = 'index.html'; // make sure the HTML file is named index.html
  const fileContent = fs.readFileSync(filename, 'utf8');
  expect(fileContent).toMatch(/<title/);
  expect(fileContent).toMatch(/<\/title/);
});

test('Has link to style sheet', () => {
  const filename = 'index.html'; // make sure the HTML file is named index.html
  const fileContent = fs.readFileSync(filename, 'utf8');
  expect(fileContent).toMatch(/<link rel="stylesheet" href="/);  
});

test('Has author information', () => {
  const filename = 'index.html'; // make sure the HTML file is named index.html
  const fileContent = fs.readFileSync(filename, 'utf8');
  expect(fileContent).toMatch(/<meta name="author"/);  
});

test('Has description information', () => {
  const filename = 'index.html'; // make sure the HTML file is named index.html
  const fileContent = fs.readFileSync(filename, 'utf8');
  expect(fileContent).toMatch(/<meta name="description"/);  
});

test('Has keywords information', () => {
  const filename = 'index.html'; // make sure the HTML file is named index.html
  const fileContent = fs.readFileSync(filename, 'utf8');
  expect(fileContent).toMatch(/<meta name="keywords"/);  
});

test('Has opening and closing body tag', () => {
  const filename = 'index.html'; // make sure the HTML file is named index.html
  const fileContent = fs.readFileSync(filename, 'utf8');
  expect(fileContent).toMatch(/<body/);
  expect(fileContent).toMatch(/<\/body/);
});

test('Has IDs', () => {
  const filename = 'index.html'; // make sure the HTML file is named index.html
  const fileContent = fs.readFileSync(filename, 'utf8');
  expect(fileContent).toMatch(/id="/);  
});

test('Has classes', () => {
  const filename = 'index.html'; // make sure the HTML file is named index.html
  const fileContent = fs.readFileSync(filename, 'utf8');
  expect(fileContent).toMatch(/class="/);  
});

test('Has favicon link', () => {
  const filename = 'index.html'; // make sure the HTML file is named index.html
  const fileContent = fs.readFileSync(filename, 'utf8');
  expect(fileContent).toMatch(/<link rel="icon"/);  
});