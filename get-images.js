import fs from 'fs';
import path from 'path';

const characterShortName = "ta";
const cardsFolder = `./public/cards/${characterShortName}`;

const cards = fs.readdirSync(cardsFolder).map(fileName => {
    const filePath = path.join(cardsFolder, fileName);
    const fileInfo = fs.lstatSync(filePath);
    return {name: fileName.replace(".jpeg", ""), createdAt: fileInfo.birthtimeMs};
}).sort((a, b) => a.createdAt - b.createdAt).map(c => c.name);

const cover = cards.shift();

console.log(`
"${characterShortName}": {
    name: "Trapper",
    cover: "${cover}",
    maxCards: 9,
    cards: [
        ${cards.map(card => `{ name: "${card}" },`).join("\n")}
    ]
},
`);