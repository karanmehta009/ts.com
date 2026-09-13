const fs = require('fs');
const path = require('path');
const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    let hasChanges = false;
    
    // Hide top navbar logout button on mobile
    const logoutBtnPattern = /<button class="relative overflow-hidden group bg-slate-100/g;
    if (logoutBtnPattern.test(content)) {
        content = content.replace(logoutBtnPattern, '<button class="hidden lg:block relative overflow-hidden group bg-slate-100');
        hasChanges = true;
    }

    // Process Mobile Menu Logout
    const mobileMenuIdx = content.indexOf('id="mobileMenu"');
    if (mobileMenuIdx !== -1) {
        // Is it the rich style?
        const richStylePattern = /<a href="profile\.html"[\s\S]*?class="flex items-center gap-4 group mobile-link[\s\S]*?My\s*Profile<\/span>\s*<\/a>/;
        
        // Is it the simple style?
        const simpleStylePattern = /<a href="profile\.html" class="pb-2 border-b border-slate-50">My Profile<\/a>/;

        // Extract the mobile menu portion
        let menuEndIdx = content.indexOf('</nav>', mobileMenuIdx);
        if (menuEndIdx === -1) menuEndIdx = content.length;
        
        let beforeMenu = content.substring(0, mobileMenuIdx);
        let menuContent = content.substring(mobileMenuIdx, menuEndIdx);
        let afterMenu = content.substring(menuEndIdx);
        
        // Only add if not already added
        if (!menuContent.includes('Log Out')) {
            if (richStylePattern.test(menuContent)) {
                const richHtml = `
                <a href="index.html"
                    class="flex items-center gap-4 group mobile-link p-2 rounded-2xl hover:bg-red-50 transition-colors mt-2 border border-transparent hover:border-red-100">
                    <div
                        class="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-white group-hover:border-red-500 transition-all shadow-sm">
                        <i class="fa-solid fa-arrow-right-from-bracket text-lg"></i>
                    </div>
                    <span class="text-xl font-bold text-red-400 group-hover:text-red-600 transition-colors">Log
                        Out</span>
                </a>`;
                
                // Replace by adding after
                menuContent = menuContent.replace(richStylePattern, match => match + richHtml);
                hasChanges = true;
            } else if (simpleStylePattern.test(menuContent)) {
                const simpleHtml = `\n                <a href="index.html" class="pb-2 border-b border-slate-50 text-red-500 hover:text-red-600">Log Out</a>`;
                
                // Replace by adding after
                menuContent = menuContent.replace(simpleStylePattern, match => match + simpleHtml);
                hasChanges = true;
            }
        }
        
        content = beforeMenu + menuContent + afterMenu;
    }

    if (hasChanges) {
        fs.writeFileSync(path.join(dir, file), content);
        console.log("Moved logout to mobile menu in", file);
    }
});
