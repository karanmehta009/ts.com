const fs = require('fs');
const path = require('path');
const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    let hasChanges = false;
    
    // We add gap-5 (20px gap) on mobile, gap-3 (12px) on desktop.
    // And pr-3 (12px padding) on mobile on the right, pr-0 on desktop.
    const navGroupRegex = /<div class="flex items-center gap-3 relative">/g;
    const replacement = '<div class="flex items-center gap-5 md:gap-3 relative pr-3 md:pr-0">';
    
    if (navGroupRegex.test(content)) {
        content = content.replace(navGroupRegex, replacement);
        hasChanges = true;
    }
    
    // Also, just in case any files had "gap-4 md:gap-3" already or something
    
    if (hasChanges) {
        fs.writeFileSync(path.join(dir, file), content);
        console.log("Updated gap inside", file);
    }
});
