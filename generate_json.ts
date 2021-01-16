declare var require: any;

export interface Item {
    name: string,
    alias: Array<string>,
    category: string,
    introduction: string,
    links: Array<[string, string]>
}

const fs = require('fs');

function generate(language: string) {
    const data = fs.readFileSync(`./${language}.md`, 'utf-8');
    const rows: Array<Array<string>> = data.split('\n')
        .slice(2)
        .map((it: string) => it.trim()).filter((it: string) => it !== '')
        .map((it: string) => it.split('|').map(it => it.trim()).slice(1));
    let result: Array<Item> = [];
    let currentName = "";
    for (const row of rows) {
        if (row[0] !== '') {
            currentName = row[0];
        }
        const aliases = row[1].split(",").map(it => it.trim()).filter(it => it !== '');
        const links = row[4].split(",")
            .map(it => it.replace('[', '').replace('(', '').replace(')', ''))
            .map(it => it.split(']').map(it => it.trim()).filter(it => it !== ""))
            .filter(it => it.length !== 0);
        result.push({name: currentName, alias: aliases, category: row[2], introduction: row[3], links: links as any});
    }
    const json = JSON.stringify(result);
    
    fs.writeFileSync(`./${language}.json`, json);
}

generate("zh");
generate("en");