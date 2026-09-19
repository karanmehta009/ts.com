/**
 * TravioraHotelDb - Hotel Data & Manual Concierge Booking Engine
 * Standardized Database & State Management for Hotels
 */
(function (window) {
    'use strict';

    const INITIAL_HOTELS = [
        {
            id: "hotel-atlantis",
            name: "Atlantis The Royal",
            city: "Dubai",
            country: "UAE",
            rating: "4.9",
            pricePerNightUSD: 850,
            badge: "Ultra-Luxury Sanctuary",
            heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
            overview: "Experience the pinnacle of world-class luxury at Atlantis The Royal. Featuring architectural masterpiece design, Michelin-star dining by celebrity chefs, private infinity pools, and 24/7 personal butler service.",
            address: "Crescent Rd, Palm Jumeirah, Dubai, UAE",
            amenities: ["Infinity Pool", "Spa & Wellness", "Michelin Dining", "Private Butler", "Beach Access", "Free High-Speed Wi-Fi"],
            rooms: [
                { id: "room-std", name: "Standard Deluxe Ocean Suite", basePriceUSD: 850, maxAdults: 2, maxChildren: 1 },
                { id: "room-dlx", name: "Royal Ocean Sky Suite", basePriceUSD: 1200, maxAdults: 3, maxChildren: 2 },
                { id: "room-vip", name: "Presidential Sky Penthouse", basePriceUSD: 2500, maxAdults: 5, maxChildren: 3 }
            ]
        },
        {
            id: "hotel-taj-mahal",
            name: "Taj Mahal Palace",
            city: "Mumbai",
            country: "India",
            rating: "4.8",
            pricePerNightUSD: 240,
            badge: "Heritage Royal Palace",
            heroImage: "https://images.unsplash.com/photo-1542314831-c6a4d142104d?auto=format&fit=crop&w=800&q=80",
            overview: "Iconic flagship luxury heritage hotel overlooking the Gateway of India and the Arabian Sea. Renowned for regal Indian hospitality and timeless sophistication.",
            address: "Apollo Bunder, Colaba, Mumbai, Maharashtra 400001, India",
            amenities: ["Sea View", "Heritage Tours", "Luxury Jiva Spa", "Fine Dining", "Outdoor Pool", "Valet Parking"],
            rooms: [
                { id: "room-taj-std", name: "Superior City View Room", basePriceUSD: 240, maxAdults: 2, maxChildren: 1 },
                { id: "room-taj-dlx", name: "Palace Wing Ocean Suite", basePriceUSD: 450, maxAdults: 3, maxChildren: 2 }
            ]
        },
        {
            id: "hotel-marina-bay",
            name: "Marina Bay Sands",
            city: "Singapore",
            country: "Singapore",
            rating: "4.9",
            pricePerNightUSD: 620,
            badge: "Architectural Icon",
            heroImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
            overview: "Iconic luxury resort featuring the world's largest rooftop infinity pool, award-winning dining, luxury shopping mall, and breathtaking skyline panoramas.",
            address: "10 Bayfront Ave, Singapore 018956",
            amenities: ["Rooftop Infinity Pool", "SkyPark Observation Deck", "Casino Access", "Designer Shopping", "Fitness Center"],
            rooms: [
                { id: "room-mbs-std", name: "Deluxe King Room", basePriceUSD: 620, maxAdults: 2, maxChildren: 1 },
                { id: "room-mbs-dlx", name: "Sands Premier Suite", basePriceUSD: 980, maxAdults: 3, maxChildren: 2 }
            ]
        },
        {
            id: "hotel-four-seasons-bali",
            name: "Four Seasons Resort",
            city: "Bali",
            country: "Indonesia",
            rating: "4.7",
            pricePerNightUSD: 520,
            badge: "Tropical Beach Resort",
            heroImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
            overview: "Beachfront sanctuary in Jimbaran Bay with ocean-facing private pool villas, authentic Balinese architecture, and holistic wellness spa.",
            address: "Jimbaran Bay, Bali 80361, Indonesia",
            amenities: ["Private Beach", "Yoga Pavilion", "Water Sports", "Ocean Villa Pool", "Cooking Academy"],
            rooms: [
                { id: "room-bali-std", name: "Garden Villa with Pool", basePriceUSD: 520, maxAdults: 2, maxChildren: 1 },
                { id: "room-bali-dlx", name: "Oceanfront Deluxe Villa", basePriceUSD: 850, maxAdults: 3, maxChildren: 2 }
            ]
        },
        {
            id: "hotel-soneva-fushi",
            name: "Soneva Fushi",
            city: "Noonu Atoll",
            country: "Maldives",
            rating: "5.0",
            pricePerNightUSD: 1100,
            badge: "Barefoot Paradise",
            heroImage: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80",
            overview: "Ultra-exclusive island hideaway with private overwater villas, private butler Barefoot Guardian service, and pristine marine biosphere.",
            address: "Baa Atoll UNESCO Biosphere Reserve, Maldives",
            amenities: ["Overwater Villa", "Scuba Diving", "Marine Biologist", "Star Observatory", "Open-Air Cinema"],
            rooms: [
                { id: "room-son-std", name: "Crusoe Villa with Pool", basePriceUSD: 1100, maxAdults: 2, maxChildren: 2 },
                { id: "room-son-dlx", name: "Water Reserve with Slide", basePriceUSD: 2400, maxAdults: 4, maxChildren: 2 }
            ]
        },
        {
            id: "hotel-ritz-paris",
            name: "Ritz Paris",
            city: "Paris",
            country: "France",
            rating: "4.9",
            pricePerNightUSD: 1250,
            badge: "Grand French Palace",
            heroImage: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
            overview: "Legendary palace hotel on Place Vendôme offering haute French decor, historic suites, private garden dining, and Chanel spa treatments.",
            address: "15 Place Vendôme, 75001 Paris, France",
            amenities: ["Palace Gardens", "Chanel Spa", "Fine Dining", "Historic Bar", "Subterranean Pool"],
            rooms: [
                { id: "room-ritz-std", name: "Superior Executive Suite", basePriceUSD: 1250, maxAdults: 2, maxChildren: 1 },
                { id: "room-ritz-dlx", name: "Prestige Imperial Suite", basePriceUSD: 2800, maxAdults: 3, maxChildren: 2 }
            ]
        }
    ];

    const BOOKING_STATUS = {
        PENDING: "Pending Hotel Confirmation",
        CONTACTED: "Hotel Contacted",
        CONFIRMED: "Confirmed",
        ALT_OFFERED: "Alternative Offered",
        ALT_ACCEPTED: "Alternative Accepted",
        REFUND_REQUESTED: "Refund Requested",
        CANCELLED: "Cancelled"
    };

    const PAYMENT_STATUS = {
        PENDING: "Pending",
        PAID: "Paid",
        PARTIALLY_REFUNDED: "Partially Refunded",
        REFUNDED: "Refunded",
        FAILED: "Failed"
    };

    const STORAGE_KEY_HOTELS = 'traviora_hotels_list';
    const STORAGE_KEY_BOOKINGS = 'traviora_hotel_bookings';

    function initStorage() {
        if (!localStorage.getItem(STORAGE_KEY_HOTELS)) {
            localStorage.setItem(STORAGE_KEY_HOTELS, JSON.stringify(INITIAL_HOTELS));
        }
        if (!localStorage.getItem(STORAGE_KEY_BOOKINGS)) {
            localStorage.setItem(STORAGE_KEY_BOOKINGS, JSON.stringify([]));
        }
    }

    initStorage();

    const TravioraHotelDb = {
        BOOKING_STATUS,
        PAYMENT_STATUS,

        getHotels: function () {
            try {
                return JSON.parse(localStorage.getItem(STORAGE_KEY_HOTELS)) || INITIAL_HOTELS;
            } catch (e) {
                return INITIAL_HOTELS;
            }
        },

        getHotelById: function (id) {
            const list = this.getHotels();
            return list.find(h => h.id === id) || list[0];
        },

        saveHotel: function (hotelData) {
            const list = this.getHotels();
            const existingIdx = list.findIndex(h => h.id === hotelData.id);
            if (existingIdx >= 0) {
                list[existingIdx] = hotelData;
            } else {
                if (!hotelData.id) hotelData.id = 'hotel-' + Date.now();
                list.push(hotelData);
            }
            localStorage.setItem(STORAGE_KEY_HOTELS, JSON.stringify(list));
            return hotelData;
        },

        getBookings: function () {
            try {
                return JSON.parse(localStorage.getItem(STORAGE_KEY_BOOKINGS)) || [];
            } catch (e) {
                return [];
            }
        },

        getBookingById: function (bookingId) {
            const bookings = this.getBookings();
            return bookings.find(b => b.bookingId === bookingId || b.id === bookingId);
        },

        createBooking: function (data) {
            const bookings = this.getBookings();
            const bookingId = 'HTL-' + Math.floor(10000 + Math.random() * 90000);

            const newBooking = {
                id: bookingId,
                bookingId: bookingId,
                type: 'HOTEL',
                hotelId: data.hotelId || 'hotel-atlantis',
                hotelName: data.hotelName || 'Atlantis The Royal',
                location: data.location || 'Dubai, UAE',
                roomName: data.roomName || 'Royal Ocean Suite',
                checkIn: data.checkIn || new Date().toISOString().split('T')[0],
                checkOut: data.checkOut || new Date().toISOString().split('T')[0],
                nights: data.nights || 1,
                adults: data.adults || 2,
                children: data.children || 0,
                rooms: data.rooms || 1,
                
                // Customer Profile
                customerName: data.customerName || 'Guest User',
                email: data.email || 'guest@traviora.com',
                phone: data.phone || '+1 555-0192',
                nationality: data.nationality || 'United States',
                
                // Price Snapshot
                priceSnapshot: {
                    basePriceUSD: data.pricing ? data.pricing.basePriceUSD : 850,
                    extraFeesUSD: data.pricing ? data.pricing.extraFeesUSD : 0,
                    taxesUSD: data.pricing ? data.pricing.taxesUSD : 102,
                    grandTotalUSD: data.pricing ? data.pricing.grandTotalUSD : 952
                },

                // Status Management
                bookingStatus: BOOKING_STATUS.PENDING,
                paymentStatus: PAYMENT_STATUS.PAID,
                confirmationNumber: null,
                alternativeOffer: null,
                createdAt: new Date().toISOString()
            };

            bookings.unshift(newBooking);
            localStorage.setItem(STORAGE_KEY_BOOKINGS, JSON.stringify(bookings));
            return newBooking;
        },

        updateBookingStatus: function (bookingId, newBookingStatus, newPaymentStatus, confirmationNumber, altOffer) {
            const bookings = this.getBookings();
            const booking = bookings.find(b => b.bookingId === bookingId || b.id === bookingId);
            if (booking) {
                if (newBookingStatus) booking.bookingStatus = newBookingStatus;
                if (newPaymentStatus) booking.paymentStatus = newPaymentStatus;
                if (confirmationNumber) booking.confirmationNumber = confirmationNumber;
                if (altOffer) booking.alternativeOffer = altOffer;
                booking.updatedAt = new Date().toISOString();
                localStorage.setItem(STORAGE_KEY_BOOKINGS, JSON.stringify(bookings));
            }
            return booking;
        }
    };

    window.TravioraHotelDb = TravioraHotelDb;
})(window);
