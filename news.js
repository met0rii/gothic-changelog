const fs = require('fs');
const path = require('path');

const filesToCheck = ['g1.json', 'g2.json', 'g3.json'];
const publicDir = path.resolve(__dirname, 'static');
const modsPath = path.resolve(publicDir, 'mods');
const modsFiles = fs.readdirSync(modsPath) 
console.log(modsFiles);
const arr = [];
for (const item of modsFiles) {

  const filePath = path.resolve(modsPath, item);
  const mod = JSON.parse(fs.readFileSync(filePath).toString());

  if (!mod) {
    continue;
  }


  if (!mod.changes) {
    continue;
  }

  for (const change of mod.changes) {
    if (new Date(change.date).getTime() > new Date().getTime()) {
      continue;
    }
    const changelogData = {
      title: `Aktualizacja ${mod.title}`,
      date: change.date,
      body: change.updateDescription,
      redirect: `/${mod.id}/changelog/${change.updateId}`
    };
    arr.push(changelogData);
  }
}

const newsPath = path.resolve(publicDir, "news.json");
const currentNewsData = JSON.parse(fs.readFileSync(newsPath).toString().trim());
currentNewsData.changelogs = arr;
fs.writeFileSync(newsPath, JSON.stringify(currentNewsData));
