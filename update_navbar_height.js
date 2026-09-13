const fs = require('fs');
const path = require('path');
const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    let hasChanges = false;
    
    // We want the final container class to be:
    // class="max-w-[1440px] (or whatever) mx-auto px-4 md:px-6 py-1.5 md:py-4 flex justify-between items-center"
    
    // Replace existing padding combinations
    const patterns = [
        /px-6 py-5( flex justify-between items-center)/g,
        /px-6 py-4( flex justify-between items-center)/g,
        /px-4 md:px-6 py-2\.5 md:py-4( flex justify-between items-center)/g,
        /px-4 md:px-6 py-2 md:py-4( flex justify-between items-center)/g,
    ];
    
    const replacement = 'px-4 md:px-6 py-1.5 md:py-4$1';
    
    patterns.forEach(pattern => {
        if (pattern.test(content)) {
            content = content.replace(pattern, replacement);
            hasChanges = true;
        }
    });

    // Also reduce top spacing for mobileMenu
    const menuPatterns = [/top-\[60px\]/g, /top-\[70px\]/g, /top-\[52px\]/g, /top-\[56px\]/g];
    menuPatterns.forEach(pattern => {
        if (pattern.test(content)) {
            content = content.replace(pattern, 'top-[48px]');
            hasChanges = true;
        }
    });

    // Scale down mobile menu button to save height (from w-10 h-10 to w-8 h-8)
    const mobileBtnPattern = /w-10 h-10( flex flex-col justify-center items-center gap-1\.5 bg-slate-50)/g;
    if (mobileBtnPattern.test(content)) {
        content = content.replace(mobileBtnPattern, 'w-8 h-8 md:w-10 md:h-10$1');
        hasChanges = true;
    }

    // Scale down profile button and logout button heights slightly for mobile
    const profileBtnPattern = /w-10 h-10 md:w-11 md:h-11/g;
    if (profileBtnPattern.test(content)) {
        content = content.replace(profileBtnPattern, 'w-8 h-8 md:w-11 md:h-11');
        hasChanges = true;
    }

    const logoutBtnPattern = /w-16 h-9 md:w-20 md:h-10/g;
    if (logoutBtnPattern.test(content)) {
        content = content.replace(logoutBtnPattern, 'w-14 h-8 md:w-20 md:h-10');
        hasChanges = true;
    }
    
    const logoImgPattern = /class="h-6 w-auto object-contain/g;
    if (logoImgPattern.test(content)) {
        content = content.replace(logoImgPattern, 'class="h-5 md:h-6 w-auto object-contain');
        hasChanges = true; 
    }

    if (hasChanges) {
        fs.writeFileSync(path.join(dir, file), content);
        console.log("Reduced navbar height in", file);
    }
});
