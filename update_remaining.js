const fs = require('fs');
const path = require('path');

const dir = 'd:/Traviora/Traviora-demo2-webpage';
const glob = fs.readdirSync(dir);

let count = 0;
glob.forEach(file => {
    if (file.endsWith('.html') || file.endsWith('.js')) {
        const filePath = path.join(dir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        const orig = content;

        content = content.replace(/>IORA<\/span>/g, '>IYORA</span>');
        content = content.replace(/alt="Traviora Logo"/g, 'alt="Traviyora Logo"');
        content = content.replace(/alt='Traviora Logo'/g, 'alt=\'Traviyora Logo\'');
        content = content.replace(/TRAVIORA VISA CONCIERGE/g, 'TRAVIYORA VISA CONCIERGE');
        content = content.replace(/TRAVIORA MEDICAL TOURISM/g, 'TRAVIYORA MEDICAL TOURISM');
        content = content.replace(/TRAVIORA — 4 STEPS/g, 'TRAVIYORA — 4 STEPS');
        content = content.replace(/TRAVIORA — LIGHT PANEL/g, 'TRAVIYORA — LIGHT PANEL');
        content = content.replace(/text-lg leading-none uppercase mt-1">Traviora<\/span>/g, 'text-lg leading-none uppercase mt-1">Traviyora</span>');

        if (content !== orig) {
            fs.writeFileSync(filePath, content, 'utf8');
            count++;
            console.log('Updated logo in: ' + file);
        }
    }
});
console.log('Done! Files updated: ' + count);
