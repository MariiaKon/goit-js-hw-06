const categories = document.querySelectorAll('.item')
console.log(`Number of categories: ${categories.length}`);

const titles = document.querySelectorAll('.item h2');
const elements = document.querySelectorAll('.item ul')

for (let i = 0; i < categories.length; i += 1) {
    console.log(`Category: ${titles[i].textContent}`);
    console.log(`Elements: ${elements[i].children.length}`);
}
