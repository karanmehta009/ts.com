// d:\Traviora\Traviora-demo2-webpage\js\visa-data.js

const VISA_ROUTE_TYPES = {
    VISA_FREE: "VISA_FREE",
    VISA_ON_ARRIVAL: "VISA_ON_ARRIVAL",
    E_VISA: "E_VISA",
    E_STICKER: "E_STICKER",
    EMBASSY: "EMBASSY"
};

const documentDefinitions = {
    PASSPORT: {
        id: "PASSPORT",
        name: "Passport",
        type: "identity",
        allowedMimeTypes: ["image/jpeg", "image/png", "application/pdf"],
        maxSizeMB: 10,
        description: "Color copy of your passport bio page."
    },
    PASSPORT_PHOTO: {
        id: "PASSPORT_PHOTO",
        name: "Passport Photo",
        type: "photo",
        allowedMimeTypes: ["image/jpeg", "image/png"],
        maxSizeMB: 5,
        description: "Recent color photo with a white background."
    },
    RETURN_TICKET: {
        id: "RETURN_TICKET",
        name: "Return / Onward Ticket",
        type: "travel",
        allowedMimeTypes: ["application/pdf", "image/jpeg", "image/png"],
        maxSizeMB: 10,
        description: "Confirmed return flight ticket."
    },
    HOTEL_BOOKING: {
        id: "HOTEL_BOOKING",
        name: "Hotel Booking",
        type: "accommodation",
        allowedMimeTypes: ["application/pdf", "image/jpeg", "image/png"],
        maxSizeMB: 10,
        description: "Confirmed hotel reservation for your stay."
    },
    BANK_STATEMENT: {
        id: "BANK_STATEMENT",
        name: "Bank Statement",
        type: "financial",
        allowedMimeTypes: ["application/pdf"],
        maxSizeMB: 15,
        description: "Recent 3 months bank statement."
    }
};

const visaProducts = [
    {
        id: "TH-TOURIST",
        destination: "TH",
        countryName: "Thailand",
        visaName: "Tourist Visa",
        purpose: "TOURISM",
        image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1920&q=80",
        active: true
    },
    {
        id: "ID-TOURIST",
        destination: "ID",
        countryName: "Indonesia",
        visaName: "Tourist Visa",
        purpose: "TOURISM",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1920&q=80",
        active: true
    },
    {
        id: "AE-TOURIST",
        destination: "AE",
        countryName: "United Arab Emirates",
        visaName: "Tourist Visa",
        purpose: "TOURISM",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80",
        active: true
    },
    {
        id: "GB-TOURIST",
        destination: "GB",
        countryName: "United Kingdom",
        visaName: "Standard Visitor Visa",
        purpose: "TOURISM",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1920&q=80",
        active: true
    },
    {
        id: "EU-TOURIST",
        destination: "EU",
        countryName: "Schengen Area",
        visaName: "Schengen Visa",
        purpose: "TOURISM",
        image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1920&q=80",
        active: true
    },
    {
        id: "JP-TOURIST",
        destination: "JP",
        countryName: "Japan",
        visaName: "Tourist e-Visa",
        purpose: "TOURISM",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1920&q=80",
        active: true
    },
    {
        id: "SG-TOURIST",
        destination: "SG",
        countryName: "Singapore",
        visaName: "Tourist Visa",
        purpose: "TOURISM",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1920&q=80",
        active: true
    },
    {
        id: "AU-TOURIST",
        destination: "AU",
        countryName: "Australia",
        visaName: "Visitor Visa (Subclass 600)",
        purpose: "TOURISM",
        image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1920&q=80",
        active: true
    },
    {
        id: "TR-TOURIST",
        destination: "TR",
        countryName: "Turkey",
        visaName: "Tourist e-Visa",
        purpose: "TOURISM",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1920&q=80",
        active: true
    },
    {
        id: "VN-TOURIST",
        destination: "VN",
        countryName: "Vietnam",
        visaName: "Tourist e-Visa",
        purpose: "TOURISM",
        image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1920&q=80",
        active: true
    },
    {
        id: "US-TOURIST",
        destination: "US",
        countryName: "United States",
        visaName: "B1/B2 Visitor Visa",
        purpose: "TOURISM",
        image: "https://images.unsplash.com/photo-1496442226666-8d130c9966cb?auto=format&fit=crop&w=1920&q=80",
        active: true
    },
    {
        id: "CA-TOURIST",
        destination: "CA",
        countryName: "Canada",
        visaName: "Visitor Visa",
        purpose: "TOURISM",
        image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=1920&q=80",
        active: true
    },
    {
        id: "MY-TOURIST",
        destination: "MY",
        countryName: "Malaysia",
        visaName: "Tourist e-Visa",
        purpose: "TOURISM",
        image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1920&q=80",
        active: true
    },
    {
        id: "LK-TOURIST",
        destination: "LK",
        countryName: "Sri Lanka",
        visaName: "Tourist e-Visa",
        purpose: "TOURISM",
        image: "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?auto=format&fit=crop&w=1920&q=80",
        active: true
    },
    {
        id: "EG-TOURIST",
        destination: "EG",
        countryName: "Egypt",
        visaName: "Tourist e-Visa",
        purpose: "TOURISM",
        image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1920&q=80",
        active: true
    },
    {
        id: "KR-TOURIST",
        destination: "KR",
        countryName: "South Korea",
        visaName: "Tourist Sticker Visa",
        purpose: "TOURISM",
        image: "https://images.unsplash.com/photo-1515275522770-07bf11a141aa?auto=format&fit=crop&w=1920&q=80",
        active: true
    },
    {
        id: "ZA-TOURIST",
        destination: "ZA",
        countryName: "South Africa",
        visaName: "Tourist e-Visa",
        purpose: "TOURISM",
        image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&w=1920&q=80",
        active: true
    }
];

const visaRules = [
    // 1. VISA FREE (India -> Thailand)
    {
        id: "RULE-TH-IN-001",
        destination: "TH",
        nationality: "IN",
        purpose: "TOURISM",
        routeType: VISA_ROUTE_TYPES.VISA_FREE,
        eligibility: { maxStayDays: 60, minimumPassportValidityDays: 180 },
        fees: { governmentFee: 0, serviceFee: 0, tax: 0, currency: "INR" },
        processing: { display: "No visa processing required" },
        documents: [],
        workflow: {
            requiresApplication: false,
            requiresTravelerDetails: true,
            requiresPayment: false,
            requiresDocumentUpload: false,
            requiresAppointment: false,
            requiresPassportSubmission: false,
            requiresBiometrics: false,
            requiresInterview: false,
            teamAssistance: false
        },
        status: "PUBLISHED"
    },
    // 2. VISA ON ARRIVAL (India -> Indonesia)
    {
        id: "RULE-ID-IN-001",
        destination: "ID",
        nationality: "IN",
        purpose: "TOURISM",
        routeType: VISA_ROUTE_TYPES.VISA_ON_ARRIVAL,
        eligibility: { maxStayDays: 30, minimumPassportValidityDays: 180 },
        fees: { governmentFee: 2500, serviceFee: 0, tax: 0, currency: "INR" }, // Gov fee exists, but Traveller checkout is off
        processing: { display: "On arrival at immigration" },
        documents: [
            { id: "PASSPORT", required: true },
            { id: "RETURN_TICKET", required: true },
            { id: "HOTEL_BOOKING", required: true }
        ],
        workflow: {
            requiresApplication: false,
            requiresTravelerDetails: true,
            requiresPayment: false, // No Traviora payment
            requiresDocumentUpload: false,
            requiresAppointment: false,
            requiresPassportSubmission: false,
            requiresBiometrics: false,
            requiresInterview: false,
            teamAssistance: false
        },
        status: "PUBLISHED"
    },
    // 3. E-VISA (India -> UAE)
    {
        id: "RULE-AE-IN-001",
        destination: "AE",
        nationality: "IN",
        purpose: "TOURISM",
        routeType: VISA_ROUTE_TYPES.E_VISA,
        eligibility: { maxStayDays: 30, minimumPassportValidityDays: 180 },
        fees: { governmentFee: 6500, serviceFee: 999, tax: 180, currency: "INR" },
        processing: { minDays: 3, maxDays: 4, display: "3-4 business days" },
        documents: [
            { id: "PASSPORT", required: true },
            { id: "PASSPORT_PHOTO", required: true }
        ],
        workflow: {
            requiresApplication: true,
            requiresTravelerDetails: true,
            requiresPayment: true,
            requiresDocumentUpload: true,
            requiresAppointment: false,
            requiresPassportSubmission: false,
            requiresBiometrics: false,
            requiresInterview: false,
            teamAssistance: false
        },
        status: "PUBLISHED"
    },
    // 4. E-STICKER (India -> UK)
    {
        id: "RULE-GB-IN-001",
        destination: "GB",
        nationality: "IN",
        purpose: "TOURISM",
        routeType: VISA_ROUTE_TYPES.E_STICKER,
        eligibility: { maxStayDays: 180, minimumPassportValidityDays: 180 },
        fees: { governmentFee: 11500, serviceFee: 2499, tax: 450, currency: "INR" },
        processing: { minDays: 15, maxDays: 20, display: "15-20 business days" },
        documents: [
            { id: "PASSPORT", required: true },
            { id: "BANK_STATEMENT", required: true },
            { id: "HOTEL_BOOKING", required: false }
        ],
        workflow: {
            requiresApplication: true,
            requiresTravelerDetails: true,
            requiresPayment: true,
            requiresDocumentUpload: true,
            requiresAppointment: true,
            requiresPassportSubmission: true,
            requiresBiometrics: true,
            requiresInterview: false,
            teamAssistance: true
        },
        status: "PUBLISHED"
    },
    // 5. EMBASSY (India -> Schengen)
    {
        id: "RULE-EU-IN-001",
        destination: "EU",
        nationality: "IN",
        purpose: "TOURISM",
        routeType: VISA_ROUTE_TYPES.EMBASSY,
        eligibility: { maxStayDays: 90, minimumPassportValidityDays: 180 },
        fees: { governmentFee: 7800, serviceFee: 1999, tax: 360, currency: "INR" },
        processing: { minDays: 15, maxDays: 30, display: "15-30 business days" },
        documents: [
            { id: "PASSPORT", required: true },
            { id: "PASSPORT_PHOTO", required: true },
            { id: "RETURN_TICKET", required: true },
            { id: "HOTEL_BOOKING", required: true },
            { id: "BANK_STATEMENT", required: true }
        ],
        workflow: {
            requiresApplication: true,
            requiresTravelerDetails: true,
            requiresPayment: true,
            requiresDocumentUpload: true,
            requiresAppointment: true,
            requiresPassportSubmission: true,
            requiresBiometrics: true,
            requiresInterview: true,
            teamAssistance: true
        },
        status: "PUBLISHED"
    },
    // 6. E-VISA (India -> Japan)
    {
        id: "RULE-JP-IN-001",
        destination: "JP",
        nationality: "IN",
        purpose: "TOURISM",
        routeType: VISA_ROUTE_TYPES.E_VISA,
        eligibility: { maxStayDays: 15, minimumPassportValidityDays: 180 },
        fees: { governmentFee: 500, serviceFee: 799, tax: 100, currency: "INR" },
        processing: { minDays: 5, maxDays: 7, display: "5-7 business days" },
        documents: [
            { id: "PASSPORT", required: true },
            { id: "PASSPORT_PHOTO", required: true },
            { id: "BANK_STATEMENT", required: true }
        ],
        workflow: {
            requiresApplication: true,
            requiresTravelerDetails: true,
            requiresPayment: true,
            requiresDocumentUpload: true,
            requiresAppointment: false,
            requiresPassportSubmission: false,
            requiresBiometrics: false,
            requiresInterview: false,
            teamAssistance: false
        },
        status: "PUBLISHED"
    },
    // 7. E-VISA (India -> Singapore)
    {
        id: "RULE-SG-IN-001",
        destination: "SG",
        nationality: "IN",
        purpose: "TOURISM",
        routeType: VISA_ROUTE_TYPES.E_VISA,
        eligibility: { maxStayDays: 30, minimumPassportValidityDays: 180 },
        fees: { governmentFee: 1800, serviceFee: 1499, tax: 150, currency: "INR" },
        processing: { minDays: 3, maxDays: 5, display: "3-5 business days" },
        documents: [
            { id: "PASSPORT", required: true },
            { id: "PASSPORT_PHOTO", required: true },
            { id: "RETURN_TICKET", required: true }
        ],
        workflow: {
            requiresApplication: true,
            requiresTravelerDetails: true,
            requiresPayment: true,
            requiresDocumentUpload: true,
            requiresAppointment: false,
            requiresPassportSubmission: false,
            requiresBiometrics: false,
            requiresInterview: false,
            teamAssistance: false
        },
        status: "PUBLISHED"
    },
    // 8. E-VISA (India -> Australia)
    {
        id: "RULE-AU-IN-001",
        destination: "AU",
        nationality: "IN",
        purpose: "TOURISM",
        routeType: VISA_ROUTE_TYPES.E_VISA,
        eligibility: { maxStayDays: 90, minimumPassportValidityDays: 180 },
        fees: { governmentFee: 10500, serviceFee: 2499, tax: 350, currency: "INR" },
        processing: { minDays: 15, maxDays: 20, display: "15-20 business days" },
        documents: [
            { id: "PASSPORT", required: true },
            { id: "PASSPORT_PHOTO", required: true },
            { id: "BANK_STATEMENT", required: true },
            { id: "RETURN_TICKET", required: false }
        ],
        workflow: {
            requiresApplication: true,
            requiresTravelerDetails: true,
            requiresPayment: true,
            requiresDocumentUpload: true,
            requiresAppointment: false,
            requiresPassportSubmission: false,
            requiresBiometrics: false,
            requiresInterview: false,
            teamAssistance: false
        },
        status: "PUBLISHED"
    },
    // 9. E-VISA (India -> Turkey)
    {
        id: "RULE-TR-IN-001",
        destination: "TR",
        nationality: "IN",
        purpose: "TOURISM",
        routeType: VISA_ROUTE_TYPES.E_VISA,
        eligibility: { maxStayDays: 30, minimumPassportValidityDays: 180 },
        fees: { governmentFee: 3500, serviceFee: 999, tax: 200, currency: "INR" },
        processing: { minDays: 1, maxDays: 2, display: "24-48 hours" },
        documents: [
            { id: "PASSPORT", required: true }
        ],
        workflow: {
            requiresApplication: true,
            requiresTravelerDetails: true,
            requiresPayment: true,
            requiresDocumentUpload: true,
            requiresAppointment: false,
            requiresPassportSubmission: false,
            requiresBiometrics: false,
            requiresInterview: false,
            teamAssistance: false
        },
        status: "PUBLISHED"
    },
    // 10. E-VISA (India -> Vietnam)
    {
        id: "RULE-VN-IN-001",
        destination: "VN",
        nationality: "IN",
        purpose: "TOURISM",
        routeType: VISA_ROUTE_TYPES.E_VISA,
        eligibility: { maxStayDays: 30, minimumPassportValidityDays: 180 },
        fees: { governmentFee: 2100, serviceFee: 899, tax: 150, currency: "INR" },
        processing: { minDays: 3, maxDays: 5, display: "3-5 business days" },
        documents: [
            { id: "PASSPORT", required: true },
            { id: "PASSPORT_PHOTO", required: true }
        ],
        workflow: {
            requiresApplication: true,
            requiresTravelerDetails: true,
            requiresPayment: true,
            requiresDocumentUpload: true,
            requiresAppointment: false,
            requiresPassportSubmission: false,
            requiresBiometrics: false,
            requiresInterview: false,
            teamAssistance: false
        },
        status: "PUBLISHED"
    },
    // 11. EMBASSY (India -> USA)
    {
        id: "RULE-US-IN-001",
        destination: "US",
        nationality: "IN",
        purpose: "TOURISM",
        routeType: VISA_ROUTE_TYPES.EMBASSY,
        eligibility: { maxStayDays: 180, minimumPassportValidityDays: 180 },
        fees: { governmentFee: 15500, serviceFee: 4999, tax: 899, currency: "INR" },
        processing: { minDays: 60, maxDays: 180, display: "Varies by interview" },
        documents: [
            { id: "PASSPORT", required: true },
            { id: "PASSPORT_PHOTO", required: true },
            { id: "BANK_STATEMENT", required: true }
        ],
        workflow: {
            requiresApplication: true,
            requiresTravelerDetails: true,
            requiresPayment: true,
            requiresDocumentUpload: true,
            requiresAppointment: true,
            requiresPassportSubmission: true,
            requiresBiometrics: true,
            requiresInterview: true,
            teamAssistance: true
        },
        status: "PUBLISHED"
    },
    // 12. EMBASSY (India -> Canada)
    {
        id: "RULE-CA-IN-001",
        destination: "CA",
        nationality: "IN",
        purpose: "TOURISM",
        routeType: VISA_ROUTE_TYPES.EMBASSY,
        eligibility: { maxStayDays: 180, minimumPassportValidityDays: 180 },
        fees: { governmentFee: 11000, serviceFee: 2999, tax: 500, currency: "INR" },
        processing: { minDays: 20, maxDays: 40, display: "20-40 business days" },
        documents: [
            { id: "PASSPORT", required: true },
            { id: "PASSPORT_PHOTO", required: true },
            { id: "BANK_STATEMENT", required: true }
        ],
        workflow: {
            requiresApplication: true,
            requiresTravelerDetails: true,
            requiresPayment: true,
            requiresDocumentUpload: true,
            requiresAppointment: true,
            requiresPassportSubmission: true,
            requiresBiometrics: true,
            requiresInterview: false,
            teamAssistance: true
        },
        status: "PUBLISHED"
    },
    // 13. E_VISA (India -> Malaysia)
    {
        id: "RULE-MY-IN-001",
        destination: "MY",
        nationality: "IN",
        purpose: "TOURISM",
        routeType: VISA_ROUTE_TYPES.E_VISA,
        eligibility: { maxStayDays: 30, minimumPassportValidityDays: 180 },
        fees: { governmentFee: 3500, serviceFee: 999, tax: 180, currency: "INR" },
        processing: { minDays: 3, maxDays: 5, display: "3-5 business days" },
        documents: [
            { id: "PASSPORT", required: true },
            { id: "PASSPORT_PHOTO", required: true },
            { id: "RETURN_TICKET", required: true }
        ],
        workflow: {
            requiresApplication: true,
            requiresTravelerDetails: true,
            requiresPayment: true,
            requiresDocumentUpload: true,
            requiresAppointment: false,
            requiresPassportSubmission: false,
            requiresBiometrics: false,
            requiresInterview: false,
            teamAssistance: false
        },
        status: "PUBLISHED"
    },
    // 14. E_VISA (India -> Sri Lanka)
    {
        id: "RULE-LK-IN-001",
        destination: "LK",
        nationality: "IN",
        purpose: "TOURISM",
        routeType: VISA_ROUTE_TYPES.E_VISA,
        eligibility: { maxStayDays: 30, minimumPassportValidityDays: 180 },
        fees: { governmentFee: 1500, serviceFee: 599, tax: 100, currency: "INR" },
        processing: { minDays: 2, maxDays: 3, display: "48-72 hours" },
        documents: [
            { id: "PASSPORT", required: true }
        ],
        workflow: {
            requiresApplication: true,
            requiresTravelerDetails: true,
            requiresPayment: true,
            requiresDocumentUpload: true,
            requiresAppointment: false,
            requiresPassportSubmission: false,
            requiresBiometrics: false,
            requiresInterview: false,
            teamAssistance: false
        },
        status: "PUBLISHED"
    },
    // 15. E_VISA (India -> Egypt)
    {
        id: "RULE-EG-IN-001",
        destination: "EG",
        nationality: "IN",
        purpose: "TOURISM",
        routeType: VISA_ROUTE_TYPES.E_VISA,
        eligibility: { maxStayDays: 30, minimumPassportValidityDays: 180 },
        fees: { governmentFee: 2100, serviceFee: 899, tax: 150, currency: "INR" },
        processing: { minDays: 5, maxDays: 7, display: "5-7 business days" },
        documents: [
            { id: "PASSPORT", required: true },
            { id: "PASSPORT_PHOTO", required: true }
        ],
        workflow: {
            requiresApplication: true,
            requiresTravelerDetails: true,
            requiresPayment: true,
            requiresDocumentUpload: true,
            requiresAppointment: false,
            requiresPassportSubmission: false,
            requiresBiometrics: false,
            requiresInterview: false,
            teamAssistance: false
        },
        status: "PUBLISHED"
    },
    // 16. E_STICKER (India -> South Korea)
    {
        id: "RULE-KR-IN-001",
        destination: "KR",
        nationality: "IN",
        purpose: "TOURISM",
        routeType: VISA_ROUTE_TYPES.E_STICKER,
        eligibility: { maxStayDays: 90, minimumPassportValidityDays: 180 },
        fees: { governmentFee: 3200, serviceFee: 1499, tax: 280, currency: "INR" },
        processing: { minDays: 10, maxDays: 15, display: "10-15 business days" },
        documents: [
            { id: "PASSPORT", required: true },
            { id: "PASSPORT_PHOTO", required: true },
            { id: "BANK_STATEMENT", required: true }
        ],
        workflow: {
            requiresApplication: true,
            requiresTravelerDetails: true,
            requiresPayment: true,
            requiresDocumentUpload: true,
            requiresAppointment: true,
            requiresPassportSubmission: true,
            requiresBiometrics: false,
            requiresInterview: false,
            teamAssistance: true
        },
        status: "PUBLISHED"
    },
    // 17. E_VISA (India -> South Africa)
    {
        id: "RULE-ZA-IN-001",
        destination: "ZA",
        nationality: "IN",
        purpose: "TOURISM",
        routeType: VISA_ROUTE_TYPES.E_VISA,
        eligibility: { maxStayDays: 90, minimumPassportValidityDays: 180 },
        fees: { governmentFee: 0, serviceFee: 1999, tax: 350, currency: "INR" }, // SA Gov fee is 0, service fee applied
        processing: { minDays: 15, maxDays: 30, display: "15-30 business days" },
        documents: [
            { id: "PASSPORT", required: true },
            { id: "PASSPORT_PHOTO", required: true },
            { id: "BANK_STATEMENT", required: true },
            { id: "HOTEL_BOOKING", required: true }
        ],
        workflow: {
            requiresApplication: true,
            requiresTravelerDetails: true,
            requiresPayment: true,
            requiresDocumentUpload: true,
            requiresAppointment: false,
            requiresPassportSubmission: false,
            requiresBiometrics: false,
            requiresInterview: false,
            teamAssistance: false
        },
        status: "PUBLISHED"
    }
];

// Helper to provide countries list for UI dropdowns
const visaCountries = [
    { code: 'IN', name: 'India' },
    { code: 'US', name: 'United States' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'AE', name: 'United Arab Emirates' },
    { code: 'TH', name: 'Thailand' },
    { code: 'ID', name: 'Indonesia' },
    { code: 'EU', name: 'Schengen Area' },
    { code: 'JP', name: 'Japan' },
    { code: 'SG', name: 'Singapore' },
    { code: 'AU', name: 'Australia' },
    { code: 'TR', name: 'Turkey' },
    { code: 'VN', name: 'Vietnam' },
    { code: 'CA', name: 'Canada' },
    { code: 'MY', name: 'Malaysia' },
    { code: 'LK', name: 'Sri Lanka' },
    { code: 'EG', name: 'Egypt' },
    { code: 'KR', name: 'South Korea' },
    { code: 'ZA', name: 'South Africa' }
];

window.TravioraVisaData = {
    VISA_ROUTE_TYPES,
    documentDefinitions,
    visaProducts,
    visaRules,
    countries: visaCountries
};

function validateVisaConfiguration() {
    visaRules.forEach(rule => {
        if (!rule.destination || !rule.nationality) console.error(`[Traviora Visa Config Error] ${rule.id}: Missing destination or nationality.`);
        if (!VISA_ROUTE_TYPES[rule.routeType]) console.error(`[Traviora Visa Config Error] ${rule.id}: Invalid routeType.`);
        if (!rule.fees) console.error(`[Traviora Visa Config Error] ${rule.id}: Missing fees.`);
        
        if (rule.routeType === VISA_ROUTE_TYPES.VISA_FREE) {
            if (rule.fees.serviceFee > 0) console.error(`[Traviora Visa Config Error] ${rule.id}: VISA_FREE cannot have a service fee.`);
            if (rule.workflow.requiresPayment) console.error(`[Traviora Visa Config Error] ${rule.id}: VISA_FREE cannot have payment enabled.`);
        }
        
        if (rule.routeType === VISA_ROUTE_TYPES.VISA_ON_ARRIVAL) {
            if (rule.fees.serviceFee > 0) console.error(`[Traviora Visa Config Error] ${rule.id}: VOA cannot have a service fee.`);
            if (rule.workflow.requiresPayment) console.error(`[Traviora Visa Config Error] ${rule.id}: VOA cannot have Traviora checkout payment enabled.`);
        }
        
        if (!rule.workflow) console.error(`[Traviora Visa Config Error] ${rule.id}: Missing workflow.`);
        if (!rule.documents) console.error(`[Traviora Visa Config Error] ${rule.id}: Missing documents.`);
    });
}
validateVisaConfiguration();
