const fs = require('fs');

let html = fs.readFileSync('apply.html', 'utf8');

// 1. Update <head> up to <style> body
html = html.replace(/<link href="https:\/\/fonts\.googleapis\.com\/css2\?family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">[\s\S]*?body\s*\{\s*font-family:\s*'Outfit',\s*sans-serif;\s*background-color:\s*#[a-f0-9]+;.*\s*\}/m, 
`<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: { 
                        sans: ['Outfit', 'sans-serif'],
                        serif: ['Playfair Display', 'serif']
                    },
                    colors: { brand: { dark: '#0a0a0a', accent: '#2563eb' } }
                }
            }
        }
    </script>
    <style>
        body {
            font-family: 'Outfit', sans-serif;
            background-color: #f0f4f8; 
        }`);

// 2. Update CSS classes
html = html.replace(/\.form-input,\s*\.form-select,\s*\.form-textarea\s*\{[\s\S]*?\}\s*\.step-item\.completed\s*\.step-num\s*span\s*\{\s*display:\s*none;\s*\}/m, 
`.form-input, .form-select, .form-textarea {
            width: 100%;
            background-color: #f8fafc;
            border: 1px solid transparent;
            border-radius: 1rem;
            padding: 1rem 1.25rem;
            font-size: 0.95rem;
            font-weight: 600;
            color: #0f172a;
            outline: none;
            transition: all 0.2s;
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
            background-color: white;
            border-color: #2563eb;
            box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
        }

        .form-label {
            display: block;
            font-size: 0.65rem;
            font-weight: 800;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 0.75rem;
        }

        .form-select {
            appearance: none;
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2364748b' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
            background-position: right 1rem center;
            background-repeat: no-repeat;
            background-size: 1.5em 1.5em;
        }

        .step-transition {
            animation: fadeIn 0.4s ease-out forwards;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .step-item { transition: all 0.3s; margin-left: -0.5rem; padding: 0.5rem; border-radius: 1rem; }
        .step-item.active { background-color: #eff6ff; }
        .step-item.active .step-num { background-color: #2563eb; color: white; }
        .step-item.active .step-title { font-weight: 800; color: #0f172a; }
        .step-item.completed .step-num { background-color: #dcfce7; color: #16a34a; }
        .step-item.completed .step-num::after { content: '\\f00c'; font-family: 'Font Awesome 6 Free'; font-weight: 900; }
        .step-item.completed .step-num span { display: none; }
        .step-item.completed .step-title { color: #334155; }
        
        .hidden-scrollbar::-webkit-scrollbar { display: none; }
        .hidden-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`);

// 3. Update Body structural layout (up to id="step1")
html = html.replace(/<body[\s\S]*?id="step1" class="step-transition">/m, 
`<body class="bg-[#f0f4f8] text-slate-800 h-screen overflow-hidden p-4 md:p-6 lg:p-8">
    
    <div class="max-w-[1440px] mx-auto h-full flex flex-col md:flex-row gap-4 lg:gap-6">

        <!-- Left Sidebar Structure (Process Bar) -->
        <div class="w-full md:w-[320px] lg:w-[380px] flex-shrink-0 flex flex-col gap-4 lg:gap-6 h-full z-10">
            <!-- Top Logo Box -->
            <div class="bg-white rounded-[2rem] p-5 flex items-center justify-between shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
                <button onclick="window.history.back()" class="w-10 h-10 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:text-black hover:bg-slate-100 transition"><i class="fa-solid fa-arrow-left"></i></button>
                <a href="index.html" class="flex items-center gap-2 group mr-2">
                    <img src="assets/ChatGPT%20Image%20Aug%2017,%202026,%2012_36_42%20PM.png" alt="Traviora Logo" class="h-4 w-auto object-contain hover:scale-105 transition-transform duration-300">
                    <span class="font-black tracking-[0.2em] text-[#0a192f] text-[11px] leading-none uppercase mt-0.5">Traviora</span>
                </a>
            </div>
            
            <!-- Process Box -->
            <div class="bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex flex-col relative flex-grow overflow-y-auto hidden-scrollbar">
                
                <div class="mb-8 relative z-10">
                    <span id="sidebarRouteBadge" class="bg-blue-50 text-blue-600 text-[9px] font-black px-3 py-1.5 rounded-full inline-block tracking-widest uppercase mb-4">EVISA</span>
                    <h2 id="sidebarTitle" class="text-3xl lg:text-4xl font-serif font-bold mb-3 text-[#0f172a] leading-tight pr-8">Thailand Tourist Visa</h2>
                    <p id="sidebarSubtitle" class="text-xs text-slate-500 font-medium tracking-wide">Thailand • 3-5 working days • 3 required documents</p>
                    <div class="mt-4 pt-4 border-t border-slate-100" id="trackingIdDisplay" style="display: none;">
                        <p class="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Application ID</p>
                        <p class="text-xs font-black text-blue-600" id="navTrackId">-</p>
                    </div>
                </div>
                
                <!-- Watermark Logo Image Overlay -->
                <div class="absolute right-0 top-12 opacity-[0.03] pointer-events-none overflow-hidden">
                    <i class="fa-solid fa-globe text-8xl translate-x-1/3"></i>
                </div>
                
                <!-- Steps List -->
                <div class="space-y-2 flex-grow relative z-10">
                    <div class="flex items-center gap-4 step-item active" id="navStep1">
                        <div class="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xs font-bold step-num"><span>1</span></div>
                        <span class="text-[13px] font-bold text-slate-500 step-title">Identity</span>
                    </div>
                    <div class="flex items-center gap-4 step-item" id="navStep2">
                        <div class="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xs font-bold step-num"><span>2</span></div>
                        <span class="text-[13px] font-bold text-slate-500 step-title">Applicant</span>
                    </div>
                    <div class="flex items-center gap-4 step-item" id="navStep3">
                        <div class="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xs font-bold step-num"><span>3</span></div>
                        <span class="text-[13px] font-bold text-slate-500 step-title">Passport</span>
                    </div>
                    <div class="flex items-center gap-4 step-item" id="navStep4">
                        <div class="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xs font-bold step-num"><span>4</span></div>
                        <span class="text-[13px] font-bold text-slate-500 step-title">Travel</span>
                    </div>
                    <div class="flex items-center gap-4 step-item" id="navStep5">
                        <div class="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xs font-bold step-num"><span>5</span></div>
                        <span class="text-[13px] font-bold text-slate-500 step-title">Accommodation</span>
                    </div>
                    <div class="flex items-center gap-4 step-item" id="navStep6">
                        <div class="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xs font-bold step-num"><span>6</span></div>
                        <span class="text-[13px] font-bold text-slate-500 step-title">Documents</span>
                    </div>
                    <div class="flex items-center gap-4 step-item" id="navStep7">
                        <div class="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xs font-bold step-num"><span>7</span></div>
                        <span class="text-[13px] font-bold text-slate-500 step-title">Review</span>
                    </div>
                    <div class="flex items-center gap-4 step-item" id="navStep8">
                        <div class="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xs font-bold step-num"><span>8</span></div>
                        <span class="text-[13px] font-bold text-slate-500 step-title">Payment</span>
                    </div>
                </div>
                
            </div>
        </div>

        <!-- Right Main Content Area -->
        <div class="flex-grow bg-white rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-8 md:p-10 lg:p-14 h-full overflow-y-auto relative hidden-scrollbar" id="formContainer">
            
            <!-- STEP 1: Pre-Fill (Identity Entry) -->
            <div id="step1" class="step-transition">`);

// 4. Update the <h1> headings dynamically
html = html.replace(/<h1 class="text-3xl font-black mb-2 text-\[#0f172a\] tracking-tight">/g, 
'<h1 class="text-3xl lg:text-4xl font-serif font-bold mb-2 text-[#0f172a]">');

// 5. Update ending div tags
// We changed <body class="..."> -> added one div <div class="..."> 
// Then we have left column, right column. We need to add one closing div before body closes.
html = html.replace(/<\/body>/, '    </div>\n</body>');

fs.writeFileSync('apply.html', html);
console.log("Successfully rebuilt apply.html styles and architecture to perfectly match the user's reference mockup image.");
