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
"[project]/src/app/admin/leagues/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AdminLeagues)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AdminLeagues() {
    _s();
    const [leagues, setLeagues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminLeagues.useEffect": ()=>{
            try {
                const allLeagues = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataStore"].getAllLeagues();
                setLeagues(allLeagues);
            } catch (err) {
                setError("Failed to load leagues");
                console.error("Leagues error:", err);
            } finally{
                setLoading(false);
            }
        }
    }["AdminLeagues.useEffect"], []);
    const filteredLeagues = leagues.filter((league)=>{
        if (filter === 'all') return true;
        return league.status === filter;
    });
    const formatCurrency = (amount)=>{
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };
    const formatDate = (date)=>{
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };
    const getStatusBadge = (status)=>{
        const baseClasses = "px-2 py-1 text-xs font-medium rounded-full";
        switch(status){
            case 'open':
                return `${baseClasses} bg-green-100 text-green-800`;
            case 'closed':
                return `${baseClasses} bg-red-100 text-red-800`;
            case 'in-progress':
                return `${baseClasses} bg-blue-100 text-blue-800`;
            case 'completed':
                return `${baseClasses} bg-gray-100 text-gray-800`;
            default:
                return `${baseClasses} bg-gray-100 text-gray-800`;
        }
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
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-64",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/leagues/page.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/leagues/page.tsx",
            lineNumber: 68,
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
                fileName: "[project]/src/app/admin/leagues/page.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/leagues/page.tsx",
            lineNumber: 76,
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
                        children: "League Management"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/leagues/page.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mt-2",
                        children: "Organize and manage golf leagues"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/leagues/page.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/leagues/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b border-gray-200",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "-mb-px flex space-x-8",
                        children: [
                            {
                                key: 'all',
                                label: 'All Leagues',
                                count: leagues.length
                            },
                            {
                                key: 'open',
                                label: 'Open',
                                count: leagues.filter((l)=>l.status === 'open').length
                            },
                            {
                                key: 'in-progress',
                                label: 'In Progress',
                                count: leagues.filter((l)=>l.status === 'in-progress').length
                            },
                            {
                                key: 'completed',
                                label: 'Completed',
                                count: leagues.filter((l)=>l.status === 'completed').length
                            },
                            {
                                key: 'closed',
                                label: 'Closed',
                                count: leagues.filter((l)=>l.status === 'closed').length
                            }
                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setFilter(tab.key),
                                className: `py-2 px-1 border-b-2 font-medium text-sm ${filter === tab.key ? 'border-gray-900 text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`,
                                children: [
                                    tab.label,
                                    " (",
                                    tab.count,
                                    ")"
                                ]
                            }, tab.key, true, {
                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/leagues/page.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/leagues/page.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/leagues/page.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors",
                    children: "Create New League"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/leagues/page.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/leagues/page.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            filteredLeagues.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow p-8 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500",
                    children: "No leagues found for the selected filter."
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/leagues/page.tsx",
                    lineNumber: 126,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/leagues/page.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                children: filteredLeagues.map((league)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-start mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-semibold text-gray-900",
                                                children: league.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                                lineNumber: 134,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 mt-1",
                                                children: league.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                                lineNumber: 135,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/leagues/page.tsx",
                                        lineNumber: 133,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: getStatusBadge(league.status),
                                        children: league.status
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/leagues/page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                lineNumber: 132,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-medium text-gray-500 uppercase tracking-wide",
                                                children: "Format"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                                lineNumber: 144,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-900 capitalize",
                                                children: league.format
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/leagues/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-medium text-gray-500 uppercase tracking-wide",
                                                children: "Match Type"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                                lineNumber: 148,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-900 capitalize",
                                                children: league.matchType.replace('-', ' ')
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                                lineNumber: 149,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/leagues/page.tsx",
                                        lineNumber: 147,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-medium text-gray-500 uppercase tracking-wide",
                                                children: "Price per Person"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                                lineNumber: 152,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-900",
                                                children: formatCurrency(league.pricePerPerson)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                                lineNumber: 153,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/leagues/page.tsx",
                                        lineNumber: 151,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-medium text-gray-500 uppercase tracking-wide",
                                                children: "Max Teams"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                                lineNumber: 156,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-900",
                                                children: league.maxTeams
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/leagues/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-4 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-medium text-gray-500 uppercase tracking-wide",
                                                children: "Schedule"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-900",
                                                children: [
                                                    getDayName(league.dayOfWeek),
                                                    "s at ",
                                                    league.startTime
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-600",
                                                children: [
                                                    formatDate(league.startDate),
                                                    " - ",
                                                    formatDate(league.endDate),
                                                    " (",
                                                    league.numberOfWeeks,
                                                    " weeks)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                                lineNumber: 167,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/leagues/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-medium text-gray-500 uppercase tracking-wide",
                                                children: "Bay Allocation"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-900",
                                                children: [
                                                    "Bays: ",
                                                    league.bayAllocation.join(', ')
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/leagues/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                lineNumber: 161,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center pt-4 border-t border-gray-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-500",
                                        children: [
                                            "Created ",
                                            formatDate(league.createdAt)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/leagues/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-sm text-gray-600 hover:text-gray-900 transition-colors",
                                                children: "View Details"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                                lineNumber: 184,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-sm text-gray-600 hover:text-gray-900 transition-colors",
                                                children: "Edit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 19
                                            }, this),
                                            league.status === 'open' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-sm text-red-600 hover:text-red-900 transition-colors",
                                                children: "Close Registration"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                                lineNumber: 191,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/leagues/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                lineNumber: 179,
                                columnNumber: 15
                            }, this)
                        ]
                    }, league.id, true, {
                        fileName: "[project]/src/app/admin/leagues/page.tsx",
                        lineNumber: 131,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/admin/leagues/page.tsx",
                lineNumber: 129,
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
                                children: "Total Leagues"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-gray-900",
                                children: filteredLeagues.length
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/leagues/page.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-gray-500",
                                children: "Active Leagues"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                lineNumber: 209,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-blue-600",
                                children: leagues.filter((l)=>l.status === 'in-progress').length
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                lineNumber: 210,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/leagues/page.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-gray-500",
                                children: "Open for Registration"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-green-600",
                                children: leagues.filter((l)=>l.status === 'open').length
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/leagues/page.tsx",
                        lineNumber: 214,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-gray-500",
                                children: "Potential Revenue"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-gray-900",
                                children: formatCurrency(filteredLeagues.reduce((sum, l)=>sum + l.pricePerPerson * l.maxTeams * (l.format === 'single' ? 1 : l.format === '2-man' ? 2 : 4), 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/leagues/page.tsx",
                                lineNumber: 222,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/leagues/page.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/leagues/page.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/leagues/page.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_s(AdminLeagues, "HYxoTca0izgaJf7bjWKGf5Crt6Q=");
_c = AdminLeagues;
var _c;
__turbopack_context__.k.register(_c, "AdminLeagues");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_9b0b47b0._.js.map