const fs = require('fs');

// Mock Browser Environment for our Services
global.window = {};
global.localStorage = {
    _data: {},
    getItem: function(k) { return this._data[k] || null; },
    setItem: function(k, v) { this._data[k] = String(v); },
    removeItem: function(k) { delete this._data[k]; }
};

// Polyfill location for URL parsing simulation
global.location = { search: '' };
class URLSearchParams {
    constructor(s) { this.s = s; }
    get(k) { return null; }
}
global.URLSearchParams = URLSearchParams;

// Load Services
const script1 = fs.readFileSync('js/visa-data.js', 'utf8');
const script2 = fs.readFileSync('js/visa-eligibility.js', 'utf8');
const script3 = fs.readFileSync('js/storage.js', 'utf8');

eval(script1);
eval(script2);
eval(script3);

function simulateFlow(dest, nat, name) {
    console.log(`\n--- RUNNING TEST: ${name} [Dest: ${dest} | Pass: ${nat}] ---`);
    
    // Simulate formatting DD-MM-YYYY
    const arr = "10-09-2026";
    const dep = "25-09-2026"; // 15 days stay

    const check = window.TravioraEligibility.check({
        destination: dest,
        nationality: nat,
        arrivalDate: arr,
        departureDate: dep
    });

    console.log("Eligibility Engine Result =>", check.eligible ? check.status : `NOT_ELIGIBLE: ${check.reason}`);
    
    if (check.eligible) {
        // Init Storage Context
        const ctx = window.TravioraApplicationContext.init(check, dest);
        console.log("Central Application Created => ID:", ctx.applicationId, "| Route:", ctx.routeType, "| Status:", ctx.status);
    }
}

console.log("Starting End-to-End Test Engine...");
// 1. Thailand (TH) + India (IN) -> Visa Free
simulateFlow('TH', 'IN', 'Test 1 (Visa Free)');

// 2. Indonesia (ID) + India (IN) -> VOA
simulateFlow('ID', 'IN', 'Test 2 (VOA)');

// 3. UAE (AE) + India (IN) -> E-Visa
simulateFlow('AE', 'IN', 'Test 3 (E-Visa)');

// 4. Schengen (EU) + India (IN) -> Embassy
simulateFlow('EU', 'IN', 'Test 4 (Embassy)');
