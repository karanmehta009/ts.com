/**
 * Traviora International Tour Booking System - Data Engine & Persistence
 */

(function () {
    const TOURS_KEY = 'traviora_tours';
    const BOOKINGS_KEY = 'traviora_tour_bookings';

    // Seed Data
    const defaultPackages = [
        {
            id: 'pkg-switzerland-explorer',
            slug: 'switzerland-explorer',
            title: 'Switzerland Alps & Paris Grand Odyssey',
            subtitle: '8 Days of Alpine Majesty & Parisian Chic',
            destination: 'Switzerland & France',
            countries: ['Switzerland', 'France'],
            duration: '8 Days / 7 Nights',
            startingPriceUSD: 1499,
            startingPriceINR: 125000,
            tourType: 'Luxury Group',
            mainImage: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80'
            ],
            overview: 'Experience the ultimate European escapade crossing the majestic Swiss Alps, panoramic train rides, crystal lakes, and the romantic boulevard of Paris with handpicked luxury stays.',
            highlights: [
                'Eurail Express Scenic Train across Swiss Valleys',
                'Mount Titlis Cable Car & Glacier Cave Experience',
                'Paris Eiffel Tower Priority Access & Seine River Cruise',
                'Guided Walking Tour of Lucerne & Old Town Zurich'
            ],
            itinerary: [
                {
                    day: 1,
                    title: 'Arrival in Zurich & Swiss Welcome',
                    location: 'Zurich, Switzerland',
                    description: 'Private airport arrival transfer to your 4-Star boutique hotel in Zurich. Meet your tour concierge in the evening for a welcome fondue dinner.',
                    meals: { breakfast: false, lunch: false, dinner: true }
                },
                {
                    day: 2,
                    title: 'Zurich Old Town & Scenic Lucerne',
                    location: 'Lucerne, Switzerland',
                    description: 'Morning guided walk through Zurich Old Town. Scenic train journey to Lucerne, visiting the Chapel Bridge and Lion Monument.',
                    meals: { breakfast: true, lunch: false, dinner: false }
                },
                {
                    day: 3,
                    title: 'Mount Titlis Glacier Expedition',
                    location: 'Engelberg & Titlis',
                    description: 'Ascend 10,000 feet aboard the Rotair revolving cable car. Explore the Titlis Cliff Walk and Ice Grotto.',
                    meals: { breakfast: true, lunch: true, dinner: false }
                },
                {
                    day: 4,
                    title: 'Interlaken & Jungfrau Panorama',
                    location: 'Interlaken, Switzerland',
                    description: 'Travel between Lake Thun & Lake Brienz into Interlaken. Optional excursion to Jungfraujoch - Top of Europe.',
                    meals: { breakfast: true, lunch: false, dinner: true }
                },
                {
                    day: 5,
                    title: 'TGV High-Speed Rail to Paris',
                    location: 'Paris, France',
                    description: 'Board the TGV Lyria high-speed train straight to Paris Gare de Lyon. Evening illumination tour of Champs-Élysées.',
                    meals: { breakfast: true, lunch: false, dinner: false }
                },
                {
                    day: 6,
                    title: 'Eiffel Tower & Louvre Museum',
                    location: 'Paris, France',
                    description: 'Priority 2nd Floor Eiffel Tower access followed by guided highlights tour of the Louvre and Tuileries Garden.',
                    meals: { breakfast: true, lunch: false, dinner: false }
                },
                {
                    day: 7,
                    title: 'Seine River Cruise & Farewell Gala',
                    location: 'Paris, France',
                    description: 'Leisure morning at Montmartre. Sunset glass-canopy Seine River Dinner Cruise with live Parisian jazz music.',
                    meals: { breakfast: true, lunch: false, dinner: true }
                },
                {
                    day: 8,
                    title: 'Paris Departure',
                    location: 'Paris Charles de Gaulle',
                    description: 'Complimentary private transfer to CDG airport for departure flights.',
                    meals: { breakfast: true, lunch: false, dinner: false }
                }
            ],
            accommodationRules: {
                categories: [
                    { id: '4STAR_SUPERIOR', name: '4-Star Superior Boutique', priceAdjustmentUSD: 0, description: 'Central luxury city hotels (e.g., Radisson Blu Zurich / Novotel Paris Tour Eiffel).' },
                    { id: '5STAR_LUXURY', name: '5-Star Ultra Luxury Collection', priceAdjustmentUSD: 350, description: 'Palace tier hotels (e.g., Grand Hotel National Lucerne / Shangri-La Paris).' }
                ],
                allowedRoomTypes: [
                    { id: 'SINGLE', name: 'Single Occupancy Room', supplementUSD: 280, maxOccupancy: 1 },
                    { id: 'DOUBLE', name: 'Standard Double / Twin Room', supplementUSD: 0, maxOccupancy: 2 },
                    { id: 'FAMILY_SUITE', name: 'Family Suite (2 Adults + 2 Kids)', supplementUSD: 180, maxOccupancy: 4 }
                ]
            },
            transportation: 'TGV Lyria High-Speed Rail, Private Luxury Coach, Airport Transfers',
            mealsSummary: '7 Breakfasts, 1 Alpine Lunch, 3 Gourmet Dinners Included',
            departures: [
                { id: 'DEP-SWISS-01', startDate: '2027-06-10', endDate: '2027-06-17', basePriceUSD: 1499, totalSeats: 20, availableSeats: 14, status: 'AVAILABLE' },
                { id: 'DEP-SWISS-02', startDate: '2027-07-15', endDate: '2027-07-22', basePriceUSD: 1599, totalSeats: 20, availableSeats: 4, status: 'LIMITED' },
                { id: 'DEP-SWISS-03', startDate: '2027-08-12', endDate: '2027-08-19', basePriceUSD: 1649, totalSeats: 20, availableSeats: 0, status: 'SOLD_OUT' }
            ],
            inclusions: [
                '7 Nights Accommodation in 4/5-Star City Hotels',
                'Daily Buffet Breakfast & Welcome/Farewell Dinners',
                'TGV Lyria First Class Rail Ticket (Zurich -> Paris)',
                'Mount Titlis Cable Car Pass & Rotair Excursion',
                'Seine River Sunset Dinner Cruise Ticket',
                'Private Airport Arrival & Departure Transfers'
            ],
            exclusions: [
                'International Long-haul Airfare',
                'Schengen Visa Fee ($110)',
                'Mandatory Comprehensive Travel Insurance',
                'Personal Expenses & Porterage Tips'
            ],
            addOns: [
                { id: 'addon-insurance', name: 'Comprehensive Global Travel & Medical Insurance', priceUSD: 85, perType: 'PER_TRAVELER' },
                { id: 'addon-jungfrau', name: 'Jungfraujoch Top of Europe Peak Pass', priceUSD: 160, perType: 'PER_TRAVELER' },
                { id: 'addon-transfer', name: 'VIP Private Chauffeur Airport Upgrades', priceUSD: 70, perType: 'PER_BOOKING' },
                { id: 'addon-visa-assist', name: 'Traviora Priority Schengen Visa Assistance Concierge', priceUSD: 100, perType: 'PER_TRAVELER' }
            ],
            visaConfig: {
                destinationCountry: 'Switzerland & Schengen Zone',
                generalRequirementText: 'Schengen Visa (Short-stay Type C) is required for Indian, Nepalese, and non-exempt passport holders.',
                assistanceFeeUSD: 100,
                requiredDocuments: [
                    { id: 'DOC_PASSPORT', name: 'Passport Copy (Valid 6+ months from travel date)' },
                    { id: 'DOC_PHOTO', name: 'Biometric Schengen Passport Photo (35x45mm)' },
                    { id: 'DOC_BANK', name: '3-Month Bank Statement with Bank Seal' },
                    { id: 'DOC_WORK', name: 'Employer NOC or Business Registration Proof' }
                ]
            }
        },
        {
            id: 'pkg-dubai-luxury',
            slug: 'dubai-luxury',
            title: 'Dubai & Abu Dhabi Royal Arabian Escape',
            subtitle: '5 Days of Desert Dunes, Skyscrapers & Luxury Hospitality',
            destination: 'United Arab Emirates',
            countries: ['United Arab Emirates'],
            duration: '5 Days / 4 Nights',
            startingPriceUSD: 899,
            startingPriceINR: 75000,
            tourType: 'Luxury Family',
            mainImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
                'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1200&q=80'
            ],
            overview: 'Immerse yourself in futuristic marvels and Bedouin traditions. Enjoy VIP Burj Khalifa access, a 4x4 private Desert Safari, and Abu Dhabi Grand Mosque tour.',
            highlights: [
                'Burj Khalifa 124th + 125th Floor Observation Deck',
                'VIP 4x4 Desert Safari with Dune Bashing & BBQ Gala',
                'Sheikh Zayed Grand Mosque Tour in Abu Dhabi',
                'Marina Dinner Yacht Cruise with Skyline Views'
            ],
            itinerary: [
                {
                    day: 1,
                    title: 'Arrival in Dubai & Marina Cruise',
                    location: 'Dubai, UAE',
                    description: 'Landed at DXB airport. Private transfer to 4-Star Marina Hotel. Evening luxury Marina yacht dinner cruise.',
                    meals: { breakfast: false, lunch: false, dinner: true }
                },
                {
                    day: 2,
                    title: 'Dubai City Tour & Burj Khalifa',
                    location: 'Downtown Dubai',
                    description: 'Morning guided city tour past Dubai Frame & Burj Al Arab. Sunset entry to Burj Khalifa 124th Floor.',
                    meals: { breakfast: true, lunch: false, dinner: false }
                },
                {
                    day: 3,
                    title: 'Abu Dhabi Day Tour & Grand Mosque',
                    location: 'Abu Dhabi',
                    description: 'Full day trip to Abu Dhabi visiting Sheikh Zayed Grand Mosque, Corniche, and Louvre Abu Dhabi museum.',
                    meals: { breakfast: true, lunch: true, dinner: false }
                },
                {
                    day: 4,
                    title: 'Red Dune Desert Safari & BBQ Dinner',
                    location: 'Lahbab Desert',
                    description: 'Afternoon 4x4 dune bashing adventure in Lahbab desert, camel rides, henna art, and traditional Tanoura belly dance show.',
                    meals: { breakfast: true, lunch: false, dinner: true }
                },
                {
                    day: 5,
                    title: 'Shopping at Dubai Mall & Departure',
                    location: 'Dubai Airport',
                    description: 'Free morning for Gold Souk shopping or Dubai Mall. Private transfer to DXB airport.',
                    meals: { breakfast: true, lunch: false, dinner: false }
                }
            ],
            accommodationRules: {
                categories: [
                    { id: '4STAR_SUPERIOR', name: '4-Star Dubai Marina Hotel', priceAdjustmentUSD: 0, description: 'Millennium Place Marina or similar.' },
                    { id: '5STAR_LUXURY', name: '5-Star Atlantis The Palm Resort', priceAdjustmentUSD: 250, description: 'Includes Aquaventure Park access.' }
                ],
                allowedRoomTypes: [
                    { id: 'SINGLE', name: 'Single Room', supplementUSD: 180, maxOccupancy: 1 },
                    { id: 'DOUBLE', name: 'Deluxe Double / Twin', supplementUSD: 0, maxOccupancy: 2 }
                ]
            },
            transportation: 'Private Chauffeur AC SUV & Coaches',
            mealsSummary: '4 Breakfasts, 1 Lunch, 2 Dinners Included',
            departures: [
                { id: 'DEP-DXB-01', startDate: '2027-05-20', endDate: '2027-05-25', basePriceUSD: 899, totalSeats: 18, availableSeats: 10, status: 'AVAILABLE' },
                { id: 'DEP-DXB-02', startDate: '2027-06-18', endDate: '2027-06-23', basePriceUSD: 949, totalSeats: 18, availableSeats: 5, status: 'AVAILABLE' }
            ],
            inclusions: ['4 Nights Hotel Stay', 'Dubai e-Visa Express Approval', 'Desert Safari with Dinner', 'Burj Khalifa Ticket'],
            exclusions: ['International Flights', 'Tourism Dirham Tax (payable at hotel, ~$4/night)', 'Personal Shopping'],
            addOns: [
                { id: 'addon-aquaventure', name: 'Atlantis Aquaventure & Lost Chambers Ticket', priceUSD: 95, perType: 'PER_TRAVELER' },
                { id: 'addon-sim', name: 'UAE Unlimited 5G Tourist eSIM', priceUSD: 25, perType: 'PER_TRAVELER' }
            ],
            visaConfig: {
                destinationCountry: 'United Arab Emirates',
                generalRequirementText: 'UAE e-Visa is mandatory for Indian & South Asian passport holders. Issued electronically in 48-72 hours.',
                assistanceFeeUSD: 60,
                requiredDocuments: [
                    { id: 'DOC_PASSPORT', name: 'Passport Front & Back Page Scan' },
                    { id: 'DOC_PHOTO', name: 'White Background Passport Photo' }
                ]
            }
        },
        {
            id: 'pkg-bali-paradise',
            slug: 'bali-paradise',
            title: 'Bali Tropical Island Hopping & Nusa Penida',
            subtitle: '6 Days of Ocean Villas, Waterfalls & Sacred Temples',
            destination: 'Indonesia',
            countries: ['Indonesia'],
            duration: '6 Days / 5 Nights',
            startingPriceUSD: 799,
            startingPriceINR: 65000,
            tourType: 'Beach & Culture',
            mainImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
            gallery: [
                'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80'
            ],
            overview: 'Escape into lush jungle valleys of Ubud and turquoise beaches of Nusa Penida with private pool villa stays and traditional Balinese spa experiences.',
            highlights: ['Private Pool Villa in Ubud', 'Nusa Penida Fastboat & Kelingking Cliff', 'Uluwatu Temple Sunset & Kecak Dance'],
            itinerary: [
                { day: 1, title: 'Arrival in Bali & Ubud Villa Check-in', location: 'Ubud, Bali', description: 'Airport pickup to private pool villa.', meals: { breakfast: false, lunch: false, dinner: true } },
                { day: 2, title: 'Ubud Waterfalls & Sacred Monkey Forest', location: 'Ubud, Bali', description: 'Visit Tegenungan Waterfall, Tegallalang Rice Terrace, and Monkey Forest.', meals: { breakfast: true, lunch: true, dinner: false } },
                { day: 3, title: 'Nusa Penida Island Expedition', location: 'Nusa Penida', description: 'Fastboat to Nusa Penida. Visit Kelingking T-Rex cliff and Broken Beach.', meals: { breakfast: true, lunch: true, dinner: false } },
                { day: 4, title: 'Uluwatu Sunset & Kecak Fire Dance', location: 'Seminyak / Uluwatu', description: 'Check-in to beachfront hotel in Seminyak. Evening Kecak Fire Dance at Uluwatu Cliff Temple.', meals: { breakfast: true, lunch: false, dinner: true } },
                { day: 5, title: 'Balinese Spa & Beach Club Night', location: 'Seminyak', description: 'Complimentary 2-hour Balinese herbal massage followed by reserved lounge at Potato Head Beach Club.', meals: { breakfast: true, lunch: false, dinner: false } },
                { day: 6, title: 'Souvenir Shopping & Departure', location: 'Denpasar DPS', description: 'Souvenir shopping at Krisna Oleh Oleh and transfer to DPS airport.', meals: { breakfast: true, lunch: false, dinner: false } }
            ],
            accommodationRules: {
                categories: [
                    { id: '4STAR_SUPERIOR', name: '4-Star Boutique Resort & Private Pool Villa', priceAdjustmentUSD: 0, description: 'Ubud Villa + Seminyak Beachfront Resort.' },
                    { id: '5STAR_LUXURY', name: '5-Star Cliffside Resort (Ayana Bali)', priceAdjustmentUSD: 200, description: 'Luxury Ayana Resort & Spa stay.' }
                ],
                allowedRoomTypes: [
                    { id: 'SINGLE', name: 'Single Villa', supplementUSD: 160, maxOccupancy: 1 },
                    { id: 'DOUBLE', name: 'One-Bedroom Pool Villa / Double Room', supplementUSD: 0, maxOccupancy: 2 }
                ]
            },
            transportation: 'Private Air-Conditioned Car with Driver & Fastboat',
            mealsSummary: '5 Breakfasts, 2 Lunches, 2 Dinners',
            departures: [
                { id: 'DEP-BALI-01', startDate: '2027-06-01', endDate: '2027-06-06', basePriceUSD: 799, totalSeats: 16, availableSeats: 12, status: 'AVAILABLE' }
            ],
            inclusions: ['5 Nights Villa/Resort Stay', 'Nusa Penida Island Tour with Lunch', 'Balinese Spa Session', 'Airport Transfers'],
            exclusions: ['International Flights', 'Indonesia Visa on Arrival (VoA ~$35 IDR paid at airport)'],
            addOns: [
                { id: 'addon-floating', name: 'Instagrammable Floating Breakfast in Pool', priceUSD: 35, perType: 'PER_BOOKING' }
            ],
            visaConfig: {
                destinationCountry: 'Indonesia',
                generalRequirementText: 'Visa on Arrival (VoA) or e-VoA available for 90+ nationalities including India. Valid 30 days.',
                assistanceFeeUSD: 40,
                requiredDocuments: [{ id: 'DOC_PASSPORT', name: 'Passport Copy (Valid 6+ months)' }]
            }
        }
    ];

    const defaultBookings = [
        {
            id: 'TRV-T78412',
            bookingId: 'TRV-T78412',
            tourPackageId: 'pkg-switzerland-explorer',
            tourSlug: 'switzerland-explorer',
            tourTitle: 'Switzerland Alps & Paris Grand Odyssey',
            customerName: 'Rohan Sharma',
            customerEmail: 'rohan.sharma@example.com',
            customerPhone: '+91 98765 43210',
            departureId: 'DEP-SWISS-01',
            departureDate: '2027-06-10',
            duration: '8 Days / 7 Nights',
            accommodationCategory: '4STAR_SUPERIOR',
            accommodationName: '4-Star Superior Boutique',
            travelers: [
                {
                    travelerNum: 1,
                    fullName: 'Rohan Sharma',
                    gender: 'Male',
                    nationality: 'India',
                    countryOfResidence: 'India',
                    passportNumber: 'Z9482104',
                    passportExpiry: '2030-10-12',
                    visaOption: 'NEEDS_ASSISTANCE',
                    visaStatus: 'ASSISTANCE_REQUESTED'
                },
                {
                    travelerNum: 2,
                    fullName: 'Ananya Sharma',
                    gender: 'Female',
                    nationality: 'India',
                    countryOfResidence: 'India',
                    passportNumber: 'Z9482105',
                    passportExpiry: '2031-04-18',
                    visaOption: 'HAS_VISA',
                    visaStatus: 'HAS_VALID_VISA',
                    visaNumber: 'SCH-7749102'
                }
            ],
            travelersCount: { adults: 2, children: 0, infants: 0 },
            rooms: [
                { type: 'DOUBLE', count: 1, roomName: 'Standard Double / Twin Room', supplementUSD: 0 }
            ],
            selectedAddOns: [
                { id: 'addon-insurance', name: 'Comprehensive Global Travel & Medical Insurance', priceUSD: 85, perType: 'PER_TRAVELER', totalCost: 170 }
            ],
            pricing: {
                basePricePerAdultUSD: 1499,
                adultsTotalUSD: 2998,
                childrenTotalUSD: 0,
                infantsTotalUSD: 0,
                hotelUpgradeUSD: 0,
                roomSupplementUSD: 0,
                visaAssistanceUSD: 100, // 1 traveler requested
                addOnsTotalUSD: 170,
                taxesUSD: 150,
                grandTotalUSD: 3418,
                paidAmountUSD: 1000,
                balanceUSD: 2418
            },
            bookingStatus: 'BOOKING_CONFIRMED',
            paymentStatus: 'PARTIALLY_PAID',
            overallVisaStatus: 'ASSISTANCE_REQUESTED',
            type: 'tour',
            createdDate: '2026-09-18'
        }
    ];

    function sanitizePackage(pkg) {
        if (!pkg) return null;

        let pTitle = pkg.title;
        if (!pTitle || pTitle === 'Luxury Tour Package') {
            if (pkg.slug === 'switzerland-explorer' || (pkg.id && pkg.id.includes('switzerland'))) pTitle = 'Switzerland Alps & Paris Grand Odyssey';
            else if (pkg.slug === 'dubai-luxury' || (pkg.id && pkg.id.includes('dubai'))) pTitle = 'Dubai & Abu Dhabi Royal Arabian Escape';
            else if (pkg.slug === 'bali-paradise' || (pkg.id && pkg.id.includes('bali'))) pTitle = 'Bali Tropical Island Hopping & Nusa Penida';
            else pTitle = pkg.country ? `${pkg.country} Luxury Tour Package` : 'International Tour Package';
        }

        let defaultImg = 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80';
        if (pkg.slug === 'dubai-luxury' || (pkg.id && pkg.id.includes('dubai')) || (pkg.country && pkg.country.toLowerCase().includes('uae'))) {
            defaultImg = 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80';
        } else if (pkg.slug === 'bali-paradise' || (pkg.id && pkg.id.includes('bali')) || (pkg.country && pkg.country.toLowerCase().includes('indonesia'))) {
            defaultImg = 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80';
        }

        const mainImg = pkg.mainImage || pkg.heroImage || defaultImg;
        const usd = pkg.startingPriceUSD || pkg.priceUSD || 1200;
        const inr = pkg.startingPriceINR || Math.round(usd * 85);

        return {
            ...pkg,
            id: pkg.id || ('pkg-' + (pkg.slug || 'custom-' + Date.now())),
            slug: pkg.slug || ('tour-' + Date.now()),
            title: pTitle,
            subtitle: pkg.subtitle || pkg.overview || 'Explore handpicked luxury destinations.',
            destination: pkg.destination || pkg.country || 'Global Destination',
            country: pkg.country || pkg.destination || 'Global',
            countries: (pkg.countries && pkg.countries.filter(Boolean).length) ? pkg.countries : [pkg.destination || pkg.country || 'Global'],
            duration: pkg.duration || '6 Days / 5 Nights',
            startingPriceUSD: usd,
            startingPriceINR: inr,
            priceUSD: usd,
            tourType: pkg.tourType || pkg.badge || 'Luxury Tour',
            mainImage: mainImg,
            heroImage: mainImg,
            overview: pkg.overview || 'Experience iconic sights, luxury stays, and seamless guided transfers.',
            highlights: pkg.highlights || ['5-Star Luxury Accommodations', 'Private Transfers', 'Guided City Excursions'],
            inclusions: pkg.inclusions || ['Luxury Hotel Stay', 'Daily Gourmet Breakfast', 'Airport VIP Arrival'],
            exclusions: pkg.exclusions || ['Personal Expenses', 'Flight Tickets'],
            departures: (pkg.departures && pkg.departures.length) ? pkg.departures : [
                { id: 'DEP-GENERIC-1', startDate: '2027-06-10', endDate: '2027-06-17', basePriceUSD: usd, availableSeats: 12, status: 'AVAILABLE' }
            ]
        };
    }

    window.TravioraTourDb = {
        getPackages: function () {
            let pkgs = [];
            try {
                const stored = localStorage.getItem(TOURS_KEY);
                if (stored) {
                    const parsed = JSON.parse(stored);
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        pkgs = parsed.map(sanitizePackage).filter(Boolean);
                    }
                }
            } catch (e) { }

            // Auto-heal duplicate fallback titles or corrupted store
            const defaultTitles = defaultPackages.map(d => d.title);
            const hasDuplicateGeneric = pkgs.filter(p => p.title === 'Luxury Tour Package' || p.title === 'International Tour Package').length > 1;
            const isMissingCore = !pkgs.some(p => p.slug === 'switzerland-explorer') || !pkgs.some(p => p.slug === 'dubai-luxury');

            if (!pkgs || !pkgs.length || hasDuplicateGeneric || isMissingCore) {
                pkgs = defaultPackages.map(sanitizePackage);
                localStorage.setItem(TOURS_KEY, JSON.stringify(pkgs));
            }
            return pkgs;
        },
        getPackageBySlug: function (slug) {
            const pkgs = this.getPackages();
            const found = pkgs.find(p => p.slug === slug || p.id === slug);
            return found || pkgs[0];
        },
        savePackage: function (pkg) {
            const clean = sanitizePackage(pkg);
            const pkgs = this.getPackages();
            const idx = pkgs.findIndex(p => p.id === clean.id);
            if (idx >= 0) pkgs[idx] = clean;
            else pkgs.push(clean);
            localStorage.setItem(TOURS_KEY, JSON.stringify(pkgs));
        },
        deletePackage: function (id) {
            let pkgs = this.getPackages();
            pkgs = pkgs.filter(p => p.id !== id);
            localStorage.setItem(TOURS_KEY, JSON.stringify(pkgs));
        },
        getBookings: function () {
            try {
                const stored = localStorage.getItem(BOOKINGS_KEY);
                if (stored) {
                    const parsed = JSON.parse(stored);
                    if (parsed && parsed.length) return parsed;
                }
            } catch (e) { }
            localStorage.setItem(BOOKINGS_KEY, JSON.stringify(defaultBookings));
            return defaultBookings;
        },
        getBookingById: function (id) {
            const bookings = this.getBookings();
            return bookings.find(b => b.id === id || b.bookingId === id);
        },
        saveBooking: function (booking) {
            const bookings = this.getBookings();
            const idx = bookings.findIndex(b => b.id === booking.id || b.bookingId === booking.bookingId);
            if (idx >= 0) bookings[idx] = booking;
            else bookings.unshift(booking);
            localStorage.setItem(BOOKINGS_KEY, JSON.stringify(bookings));

            // Also sync to main TravioraDb so profile.html can read it!
            if (window.TravioraDb) {
                const db = window.TravioraDb.get();
                const existingIdx = db.bookings.findIndex(b => b.id === booking.id);
                const profileObj = {
                    id: booking.id,
                    type: 'tour',
                    name: booking.tourTitle,
                    destination: booking.tourTitle,
                    date: booking.departureDate,
                    price: `$${booking.pricing ? booking.pricing.grandTotalUSD : booking.total}`,
                    status: booking.bookingStatus || 'CONFIRMED'
                };
                if (existingIdx >= 0) db.bookings[existingIdx] = profileObj;
                else db.bookings.unshift(profileObj);
                window.TravioraDb.save(db);
            }
        },
        updateBookingStatus: function (bookingId, bookingStatus, paymentStatus, visaStatus) {
            const bookings = this.getBookings();
            const b = bookings.find(x => x.id === bookingId || x.bookingId === bookingId);
            if (b) {
                if (bookingStatus) b.bookingStatus = bookingStatus;
                if (paymentStatus) b.paymentStatus = paymentStatus;
                if (visaStatus) b.overallVisaStatus = visaStatus;
                this.saveBooking(b);
            }
        }
    };

    // Central Pricing Function required by Prompt
    window.calculateTourPrice = function (state) {
        if (!state || !state.tour) return { grandTotalUSD: 0 };
        const tour = state.tour;
        const dep = state.selectedDeparture || (tour.departures && tour.departures[0]);
        const basePrice = dep ? dep.basePriceUSD : tour.startingPriceUSD;

        const adultCount = (state.travelersCount && state.travelersCount.adults) || 1;
        const childCount = (state.travelersCount && state.travelersCount.children) || 0;
        const infantCount = (state.travelersCount && state.travelersCount.infants) || 0;

        const adultsTotalUSD = adultCount * basePrice;
        const childrenTotalUSD = childCount * Math.round(basePrice * 0.75); // 25% child discount
        const infantsTotalUSD = infantCount * Math.round(basePrice * 0.15); // 85% infant discount

        // Accommodation category upgrade
        let hotelUpgradeUSD = 0;
        if (state.accommodationCategory && tour.accommodationRules && tour.accommodationRules.categories) {
            const cat = tour.accommodationRules.categories.find(c => c.id === state.accommodationCategory);
            if (cat && cat.priceAdjustmentUSD) {
                hotelUpgradeUSD = cat.priceAdjustmentUSD * (adultCount + childCount);
            }
        }

        // Room Supplement
        let roomSupplementUSD = 0;
        if (state.rooms && Array.isArray(state.rooms)) {
            state.rooms.forEach(r => {
                if (r.supplementUSD) roomSupplementUSD += (r.supplementUSD * (r.count || 1));
            });
        } else if (adultCount === 1) {
            roomSupplementUSD = 280; // Single supplement default
        }

        // Visa Assistance calculation (per traveler requesting)
        let visaAssistanceUSD = 0;
        const visaFeePerTraveler = (tour.visaConfig && tour.visaConfig.assistanceFeeUSD) || 100;
        if (state.travelers && Array.isArray(state.travelers)) {
            state.travelers.forEach(t => {
                if (t.visaOption === 'NEEDS_ASSISTANCE') {
                    visaAssistanceUSD += visaFeePerTraveler;
                }
            });
        }

        // Add-ons
        let addOnsTotalUSD = 0;
        if (state.selectedAddOns && Array.isArray(state.selectedAddOns)) {
            state.selectedAddOns.forEach(ao => {
                let cost = ao.priceUSD || 0;
                if (ao.perType === 'PER_TRAVELER') {
                    cost = cost * (adultCount + childCount);
                }
                addOnsTotalUSD += cost;
            });
        }

        const subtotal = adultsTotalUSD + childrenTotalUSD + infantsTotalUSD + hotelUpgradeUSD + roomSupplementUSD + visaAssistanceUSD + addOnsTotalUSD;
        const taxesUSD = Math.round(subtotal * 0.05); // 5% Govt & Tourism tax
        const grandTotalUSD = subtotal + taxesUSD;

        return {
            basePricePerAdultUSD: basePrice,
            adultsTotalUSD,
            childrenTotalUSD,
            infantsTotalUSD,
            hotelUpgradeUSD,
            roomSupplementUSD,
            visaAssistanceUSD,
            addOnsTotalUSD,
            taxesUSD,
            grandTotalUSD,
            depositUSD: Math.round(grandTotalUSD * 0.3) // 30% deposit
        };
    };

    // Initialize DB on load
    window.TravioraTourDb.getPackages();
    window.TravioraTourDb.getBookings();
})();
