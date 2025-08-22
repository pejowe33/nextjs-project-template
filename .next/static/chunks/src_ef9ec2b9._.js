(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/data-store.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Shared data store for mock data with development persistence
__turbopack_context__.s({
    "DataStore": (()=>DataStore),
    "dataStore": (()=>dataStore)
});
class DataStore {
    bookings = [];
    users = [];
    memberships = [];
    coaches = [];
    leagues = [];
    giftCards = [];
    discountCodes = [];
    constructor(){
        // Initialize with some sample data only if empty
        if (this.bookings.length === 0) {
            this.initializeSampleData();
        }
    }
    initializeSampleData() {
        // Sample admin user
        this.users = [
            {
                id: "admin_1",
                name: "Admin User",
                email: "admin@golfsim.com",
                phone: "555-0100",
                password: "admin123",
                isAdmin: true,
                createdAt: new Date("2024-01-01")
            },
            {
                id: "user_1",
                name: "John Smith",
                email: "john@example.com",
                phone: "555-0101",
                membershipId: "membership_1",
                createdAt: new Date("2024-01-15")
            },
            {
                id: "user_2",
                name: "Sarah Johnson",
                email: "sarah@example.com",
                phone: "555-0102",
                createdAt: new Date("2024-02-01")
            }
        ];
        // Sample memberships
        this.memberships = [
            {
                id: "membership_1",
                userId: "user_1",
                status: "active",
                freeHoursRemaining: 1.5,
                billingDate: new Date("2024-02-15"),
                createdAt: new Date("2024-01-15")
            }
        ];
        // Sample bookings
        this.bookings = [
            {
                id: "booking_1",
                userId: "user_1",
                date: new Date("2024-01-15"),
                startTime: "14:00",
                endTime: "16:00",
                duration: 2,
                numberOfBays: 1,
                numberOfPeople: 2,
                bayNumbers: [
                    1
                ],
                totalPrice: 100,
                type: "regular",
                status: "confirmed",
                createdAt: new Date("2024-01-10")
            },
            {
                id: "booking_2",
                guestName: "Mike Wilson",
                guestEmail: "mike@example.com",
                guestPhone: "555-0103",
                date: new Date("2024-01-20"),
                startTime: "10:00",
                endTime: "11:30",
                duration: 1.5,
                numberOfBays: 1,
                numberOfPeople: 3,
                bayNumbers: [
                    2
                ],
                totalPrice: 75,
                type: "regular",
                status: "completed",
                createdAt: new Date("2024-01-18")
            },
            {
                id: "booking_3",
                userId: "user_2",
                date: new Date("2024-02-05"),
                startTime: "16:00",
                endTime: "17:00",
                duration: 1,
                numberOfBays: 1,
                numberOfPeople: 1,
                bayNumbers: [
                    3
                ],
                totalPrice: 80,
                type: "lesson",
                status: "confirmed",
                createdAt: new Date("2024-02-01")
            }
        ];
        // Sample coaches
        this.coaches = [
            {
                id: "coach_1",
                name: "David Thompson",
                email: "david@golfsim.com",
                phone: "555-0200",
                availability: [
                    {
                        id: "avail_1",
                        coachId: "coach_1",
                        dayOfWeek: 1,
                        startTime: "09:00",
                        endTime: "17:00",
                        isAvailable: true
                    },
                    {
                        id: "avail_2",
                        coachId: "coach_1",
                        dayOfWeek: 2,
                        startTime: "09:00",
                        endTime: "17:00",
                        isAvailable: true
                    },
                    {
                        id: "avail_3",
                        coachId: "coach_1",
                        dayOfWeek: 3,
                        startTime: "09:00",
                        endTime: "17:00",
                        isAvailable: true
                    },
                    {
                        id: "avail_4",
                        coachId: "coach_1",
                        dayOfWeek: 4,
                        startTime: "09:00",
                        endTime: "17:00",
                        isAvailable: true
                    },
                    {
                        id: "avail_5",
                        coachId: "coach_1",
                        dayOfWeek: 5,
                        startTime: "09:00",
                        endTime: "17:00",
                        isAvailable: true
                    }
                ],
                createdAt: new Date("2024-01-01")
            },
            {
                id: "coach_2",
                name: "Lisa Rodriguez",
                email: "lisa@golfsim.com",
                phone: "555-0201",
                availability: [
                    {
                        id: "avail_6",
                        coachId: "coach_2",
                        dayOfWeek: 6,
                        startTime: "08:00",
                        endTime: "16:00",
                        isAvailable: true
                    },
                    {
                        id: "avail_7",
                        coachId: "coach_2",
                        dayOfWeek: 0,
                        startTime: "08:00",
                        endTime: "16:00",
                        isAvailable: true
                    }
                ],
                createdAt: new Date("2024-01-01")
            }
        ];
        // Sample leagues
        this.leagues = [
            {
                id: "league_1",
                name: "Winter Championship League",
                description: "Competitive 4-man scramble league running through winter months",
                format: "4-man",
                matchType: "lowest-score",
                pricePerPerson: 25,
                maxTeams: 16,
                bayAllocation: [
                    1,
                    2,
                    3,
                    4
                ],
                startDate: new Date("2024-01-08"),
                endDate: new Date("2024-03-25"),
                dayOfWeek: 1,
                startTime: "18:00",
                numberOfWeeks: 12,
                status: "in-progress",
                createdAt: new Date("2023-12-15")
            },
            {
                id: "league_2",
                name: "Spring Singles League",
                description: "Individual competition for spring season",
                format: "single",
                matchType: "match-play",
                pricePerPerson: 35,
                maxTeams: 24,
                bayAllocation: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6
                ],
                startDate: new Date("2024-04-01"),
                endDate: new Date("2024-06-17"),
                dayOfWeek: 3,
                startTime: "19:00",
                numberOfWeeks: 12,
                status: "open",
                createdAt: new Date("2024-02-01")
            }
        ];
        // Sample discount codes
        this.discountCodes = [
            {
                id: "discount_1",
                code: "WELCOME20",
                description: "20% off first booking for new customers",
                type: "percentage",
                value: 20,
                maxUses: 100,
                currentUses: 15,
                validFrom: new Date("2024-01-01"),
                validUntil: new Date("2024-12-31"),
                status: "active",
                createdAt: new Date("2024-01-01")
            },
            {
                id: "discount_2",
                code: "MEMBER10",
                description: "$10 off for members",
                type: "dollar",
                value: 10,
                maxUses: 500,
                currentUses: 45,
                validFrom: new Date("2024-01-01"),
                validUntil: new Date("2024-06-30"),
                status: "active",
                createdAt: new Date("2024-01-01")
            },
            {
                id: "discount_3",
                code: "EXPIRED50",
                description: "50% off - expired promotion",
                type: "percentage",
                value: 50,
                maxUses: 50,
                currentUses: 50,
                validFrom: new Date("2023-12-01"),
                validUntil: new Date("2023-12-31"),
                status: "inactive",
                createdAt: new Date("2023-11-15")
            }
        ];
        // Sample gift cards
        this.giftCards = [
            {
                id: "gift_1",
                code: "GC-2024-001",
                amount: 100,
                remainingBalance: 100,
                purchaserName: "Jennifer Davis",
                purchaserEmail: "jennifer@example.com",
                recipientName: "Tom Davis",
                recipientEmail: "tom@example.com",
                status: "active",
                createdAt: new Date("2024-01-10")
            },
            {
                id: "gift_2",
                code: "GC-2024-002",
                amount: 200,
                remainingBalance: 75,
                purchaserName: "Corporate Client",
                purchaserEmail: "hr@company.com",
                status: "active",
                createdAt: new Date("2024-01-20"),
                redeemedAt: new Date("2024-01-25")
            },
            {
                id: "gift_3",
                code: "GC-2024-003",
                amount: 50,
                remainingBalance: 0,
                purchaserName: "Mary Johnson",
                purchaserEmail: "mary@example.com",
                recipientName: "Bob Johnson",
                recipientEmail: "bob@example.com",
                status: "redeemed",
                createdAt: new Date("2024-02-01"),
                redeemedAt: new Date("2024-02-05")
            }
        ];
    }
    static getInstance() {
        if (typeof globalThis !== 'undefined') {
            if (!globalThis.__dataStore) {
                globalThis.__dataStore = new DataStore();
            }
            return globalThis.__dataStore;
        }
        return new DataStore();
    }
    // Booking methods
    addBooking(booking) {
        this.bookings.push(booking);
        console.log(`Booking added: ${booking.id}. Total bookings: ${this.bookings.length}`);
    }
    getBooking(id) {
        return this.bookings.find((b)=>b.id === id);
    }
    getAllBookings() {
        return [
            ...this.bookings
        ];
    }
    updateBooking(id, updates) {
        const index = this.bookings.findIndex((b)=>b.id === id);
        if (index !== -1) {
            this.bookings[index] = {
                ...this.bookings[index],
                ...updates
            };
            return true;
        }
        return false;
    }
    deleteBooking(id) {
        const index = this.bookings.findIndex((b)=>b.id === id);
        if (index !== -1) {
            this.bookings.splice(index, 1);
            return true;
        }
        return false;
    }
    // User methods
    addUser(user) {
        this.users.push(user);
    }
    getUser(id) {
        return this.users.find((u)=>u.id === id);
    }
    getUserByEmail(email) {
        return this.users.find((u)=>u.email === email);
    }
    getAllUsers() {
        return [
            ...this.users
        ];
    }
    // Membership methods
    addMembership(membership) {
        this.memberships.push(membership);
    }
    getMembership(userId) {
        return this.memberships.find((m)=>m.userId === userId);
    }
    // Coach methods
    addCoach(coach) {
        this.coaches.push(coach);
    }
    getCoach(id) {
        return this.coaches.find((c)=>c.id === id);
    }
    getAllCoaches() {
        return [
            ...this.coaches
        ];
    }
    // League methods
    addLeague(league) {
        this.leagues.push(league);
    }
    getLeague(id) {
        return this.leagues.find((l)=>l.id === id);
    }
    getAllLeagues() {
        return [
            ...this.leagues
        ];
    }
    // Gift card methods
    addGiftCard(giftCard) {
        this.giftCards.push(giftCard);
    }
    getGiftCard(code) {
        return this.giftCards.find((gc)=>gc.code === code);
    }
    getAllGiftCards() {
        return [
            ...this.giftCards
        ];
    }
    // Discount code methods
    addDiscountCode(discountCode) {
        this.discountCodes.push(discountCode);
    }
    getDiscountCode(code) {
        return this.discountCodes.find((dc)=>dc.code === code);
    }
    getAllDiscountCodes() {
        return [
            ...this.discountCodes
        ];
    }
}
const dataStore = DataStore.getInstance();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/admin/coaches/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AdminCoaches)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AdminCoaches() {
    _s();
    const [coaches, setCoaches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminCoaches.useEffect": ()=>{
            try {
                const allCoaches = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataStore"].getAllCoaches();
                setCoaches(allCoaches);
            } catch (err) {
                setError("Failed to load coaches");
                console.error("Coaches error:", err);
            } finally{
                setLoading(false);
            }
        }
    }["AdminCoaches.useEffect"], []);
    const formatDate = (date)=>{
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };
    const getDayName = (dayOfWeek)=>{
        const days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];
        return days[dayOfWeek] || 'Unknown';
    };
    const formatTime = (time)=>{
        const [hours, minutes] = time.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour % 12 || 12;
        return `${displayHour}:${minutes} ${ampm}`;
    };
    const getAvailabilitySchedule = (availability)=>{
        const availableDays = availability.filter((a)=>a.isAvailable).sort((a, b)=>a.dayOfWeek - b.dayOfWeek);
        if (availableDays.length === 0) {
            return "No availability set";
        }
        return availableDays.map((day)=>`${getDayName(day.dayOfWeek)}: ${formatTime(day.startTime)} - ${formatTime(day.endTime)}`).join(', ');
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-64",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/coaches/page.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/coaches/page.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-red-50 border border-red-200 rounded-md p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-800",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/app/admin/coaches/page.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/coaches/page.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-gray-900",
                        children: "Coach Management"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/coaches/page.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mt-2",
                        children: "Manage golf instructors and their schedules"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/coaches/page.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/coaches/page.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors",
                    children: "Add New Coach"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/coaches/page.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/coaches/page.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            coaches.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow p-8 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500",
                    children: "No coaches found. Add your first coach to get started."
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/coaches/page.tsx",
                    lineNumber: 92,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/coaches/page.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: coaches.map((coach)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start space-x-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xl font-semibold text-gray-600",
                                                    children: coach.name.split(' ').map((n)=>n[0]).join('').toUpperCase()
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/coaches/page.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/coaches/page.tsx",
                                                lineNumber: 101,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-xl font-semibold text-gray-900",
                                                        children: coach.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/coaches/page.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 space-y-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-600",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: "Email:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/coaches/page.tsx",
                                                                        lineNumber: 111,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " ",
                                                                    coach.email
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/coaches/page.tsx",
                                                                lineNumber: 110,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-600",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: "Phone:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/coaches/page.tsx",
                                                                        lineNumber: 114,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " ",
                                                                    coach.phone
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/coaches/page.tsx",
                                                                lineNumber: 113,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-gray-600",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "font-medium",
                                                                        children: "Joined:"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/coaches/page.tsx",
                                                                        lineNumber: 117,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " ",
                                                                    formatDate(coach.createdAt)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/coaches/page.tsx",
                                                                lineNumber: 116,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/coaches/page.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/coaches/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/coaches/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-sm text-gray-600 hover:text-gray-900 transition-colors",
                                                children: "Edit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/coaches/page.tsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-sm text-gray-600 hover:text-gray-900 transition-colors",
                                                children: "Schedule"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/coaches/page.tsx",
                                                lineNumber: 127,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-sm text-red-600 hover:text-red-900 transition-colors",
                                                children: "Remove"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/coaches/page.tsx",
                                                lineNumber: 130,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/coaches/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/coaches/page.tsx",
                                lineNumber: 98,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 pt-6 border-t border-gray-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-medium text-gray-900 mb-3",
                                        children: "Weekly Availability"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/coaches/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 17
                                    }, this),
                                    coach.availability.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500",
                                        children: "No availability schedule set"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/coaches/page.tsx",
                                        lineNumber: 141,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                                        children: coach.availability.sort((a, b)=>a.dayOfWeek - b.dayOfWeek).map((availability)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `p-3 rounded-md border ${availability.isAvailable ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-medium text-gray-900",
                                                                children: getDayName(availability.dayOfWeek)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/coaches/page.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 29
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-xs px-2 py-1 rounded-full ${availability.isAvailable ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`,
                                                                children: availability.isAvailable ? 'Available' : 'Unavailable'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/coaches/page.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 29
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/coaches/page.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 27
                                                    }, this),
                                                    availability.isAvailable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600 mt-1",
                                                        children: [
                                                            formatTime(availability.startTime),
                                                            " - ",
                                                            formatTime(availability.endTime)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/coaches/page.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, availability.id, true, {
                                                fileName: "[project]/src/app/admin/coaches/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 25
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/coaches/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/coaches/page.tsx",
                                lineNumber: 137,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 pt-6 border-t border-gray-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-gray-900",
                                                    children: coach.availability.filter((a)=>a.isAvailable).length
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/coaches/page.tsx",
                                                    lineNumber: 182,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600",
                                                    children: "Available Days"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/coaches/page.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/coaches/page.tsx",
                                            lineNumber: 181,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-gray-900",
                                                    children: "0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/coaches/page.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600",
                                                    children: "Lessons This Week"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/coaches/page.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/coaches/page.tsx",
                                            lineNumber: 187,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-gray-900",
                                                    children: "$0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/coaches/page.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600",
                                                    children: "Revenue This Month"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/coaches/page.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/coaches/page.tsx",
                                            lineNumber: 191,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/coaches/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/coaches/page.tsx",
                                lineNumber: 179,
                                columnNumber: 15
                            }, this)
                        ]
                    }, coach.id, true, {
                        fileName: "[project]/src/app/admin/coaches/page.tsx",
                        lineNumber: 97,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/admin/coaches/page.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 grid grid-cols-1 md:grid-cols-4 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-gray-500",
                                children: "Total Coaches"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/coaches/page.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-gray-900",
                                children: coaches.length
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/coaches/page.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/coaches/page.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-gray-500",
                                children: "Active Coaches"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/coaches/page.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-green-600",
                                children: coaches.filter((c)=>c.availability.some((a)=>a.isAvailable)).length
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/coaches/page.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/coaches/page.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-gray-500",
                                children: "Total Availability Hours"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/coaches/page.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-blue-600",
                                children: [
                                    coaches.reduce((total, coach)=>{
                                        return total + coach.availability.filter((a)=>a.isAvailable).reduce((dayTotal, availability)=>{
                                            const start = new Date(`2000-01-01 ${availability.startTime}`);
                                            const end = new Date(`2000-01-01 ${availability.endTime}`);
                                            const hours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
                                            return dayTotal + hours;
                                        }, 0);
                                    }, 0),
                                    "h"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/coaches/page.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/coaches/page.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-gray-500",
                                children: "Avg Hours per Coach"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/coaches/page.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-gray-900",
                                children: [
                                    coaches.length > 0 ? Math.round(coaches.reduce((total, coach)=>{
                                        return total + coach.availability.filter((a)=>a.isAvailable).reduce((dayTotal, availability)=>{
                                            const start = new Date(`2000-01-01 ${availability.startTime}`);
                                            const end = new Date(`2000-01-01 ${availability.endTime}`);
                                            const hours = (end.getTime() - start.getTime()) / (1000 * 60 * 60);
                                            return dayTotal + hours;
                                        }, 0);
                                    }, 0) / coaches.length) : 0,
                                    "h"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/coaches/page.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/coaches/page.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/coaches/page.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/coaches/page.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(AdminCoaches, "0BsZ5+3dCi3JicxWWEz3aYt2ayc=");
_c = AdminCoaches;
var _c;
__turbopack_context__.k.register(_c, "AdminCoaches");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_ef9ec2b9._.js.map