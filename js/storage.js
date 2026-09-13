// d:\Traviora\Traviora-demo2-webpage\js\storage.js

// 1. Core Profile Database
let db = JSON.parse(localStorage.getItem('TravioraDb'));
if (!db) {
    db = {
        profile: { name: 'Rohan Sharma', email: 'rohan.sharma@example.com', phone: '+91 98765 43210', pass: 'Z9482104' },
        bookings: [
            { id: 'TRV-77412', type: 'visa', title: 'Dubai (UAE) e-Visa', date: '10 Aug 2026', price: '₹6,500', status: 'Approved' },
            { id: 'TRV-44122', type: 'tour', title: 'Kerala Backwaters', date: '25 Sep 2026', price: '₹22,000', status: 'Confirmed' }
        ]
    };
    localStorage.setItem('TravioraDb', JSON.stringify(db));
}

window.TravioraDb = {
    get: function() {
        return JSON.parse(localStorage.getItem('TravioraDb')) || db;
    },
    save: function(newData) {
        localStorage.setItem('TravioraDb', JSON.stringify(newData));
    },
    addBooking: function(booking) {
        const currentDb = this.get();
        currentDb.bookings.unshift(booking);
        this.save(currentDb);
    }
};

// 2. Active Application Context
window.TravioraApplicationContext = {
    get: function() {
        return JSON.parse(localStorage.getItem('TravioraApplicationContext'));
    },
    set: function(data) {
        localStorage.setItem('TravioraApplicationContext', JSON.stringify(data));
    },
    clear: function() {
        localStorage.removeItem('TravioraApplicationContext');
    },
    init: function(eligibilityResult, destCode) {
        const appId = 'TRV-' + Math.floor(10000 + Math.random() * 90000);
        
        const context = {
            applicationId: appId,
            destination: destCode,
            nationality: eligibilityResult.nationality || "",
            
            routeType: eligibilityResult.routeType,
            ruleId: eligibilityResult.ruleId,
            
            workflow: eligibilityResult.workflow,
            fees: eligibilityResult.fees,
            requiredDocuments: eligibilityResult.documents,
            
            currentStep: "CONTACT",
            status: "DRAFT",
            
            // Storing inputted data as they go through steps
            applicationData: {
                contact: {},
                applicant: {},
                passport: {},
                travel: {},
                accommodation: {},
                documents: []
            }
        };
        
        this.set(context);
        return context;
    }
};
