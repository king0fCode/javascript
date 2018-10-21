const name = 'john';
const age = 30;
const job = 'Web DEveloper';
const city = 'Miami';
let html;

// Without template strins (es5)
html = '<ul><li>Name: ' + name + '</li><li>age: ' + age + '</li><li>job: ' + job + '</li><li>city: ' + city + '</li></ul>';

html = '<ul>' +
    '<li>Name: ' + name + '</li>' +
    '<li>Age: ' + age + '</li>' +
    '<li>Job: ' + job + '</li>' +
    '<li>City: ' + city + '</li></ul>';

function hello() {
    return 'hello';
}
// with template strings (es6)

html = `
    <ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City ${city}</li>
     <li> ${2 + 2}</li>
      <li> ${hello()}</li>
       <li> ${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
    `;

window.onload = function() {

    document.body.innerHTML = html;

}