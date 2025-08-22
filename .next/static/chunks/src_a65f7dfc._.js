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
"[project]/src/app/admin/discount-codes/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AdminDiscountCodes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AdminDiscountCodes() {
    _s();
    const [discountCodes, setDiscountCodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('all');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminDiscountCodes.useEffect": ()=>{
            try {
                const allDiscountCodes = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataStore"].getAllDiscountCodes();
                setDiscountCodes(allDiscountCodes);
            } catch (err) {
                setError("Failed to load discount codes");
                console.error("Discount codes error:", err);
            } finally{
                setLoading(false);
            }
        }
    }["AdminDiscountCodes.useEffect"], []);
    const filteredCodes = discountCodes.filter((code)=>{
        if (filter === 'all') return true;
        return code.status === filter;
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
            case 'active':
                return `${baseClasses} bg-green-100 text-green-800`;
            case 'inactive':
                return `${baseClasses} bg-red-100 text-red-800`;
            default:
                return `${baseClasses} bg-gray-100 text-gray-800`;
        }
    };
    const formatDiscountValue = (type, value)=>{
        if (type === 'percentage') {
            return `${value}%`;
        }
        return formatCurrency(value);
    };
    const isExpired = (validUntil)=>{
        return new Date(validUntil) < new Date();
    };
    const isMaxedOut = (currentUses, maxUses)=>{
        return currentUses >= maxUses;
    };
    const getUsagePercentage = (currentUses, maxUses)=>{
        return Math.round(currentUses / maxUses * 100);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-64",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/discount-codes/page.tsx",
            lineNumber: 78,
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
                fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/admin/discount-codes/page.tsx",
            lineNumber: 86,
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
                        children: "Discount Codes"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mt-2",
                        children: "Manage promotional codes and discounts"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                lineNumber: 94,
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
                                label: 'All Codes',
                                count: discountCodes.length
                            },
                            {
                                key: 'active',
                                label: 'Active',
                                count: discountCodes.filter((c)=>c.status === 'active').length
                            },
                            {
                                key: 'inactive',
                                label: 'Inactive',
                                count: discountCodes.filter((c)=>c.status === 'inactive').length
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
                                fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                lineNumber: 108,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors",
                    children: "Create New Code"
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white shadow rounded-lg overflow-hidden",
                children: filteredCodes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500",
                        children: "No discount codes found for the selected filter."
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                        lineNumber: 135,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                    lineNumber: 134,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "min-w-full divide-y divide-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                className: "bg-gray-50",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "Code"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                            lineNumber: 142,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                            lineNumber: 145,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "Discount"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                            lineNumber: 148,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "Usage"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                            lineNumber: 151,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "Valid Period"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                            lineNumber: 154,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                            children: "Actions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                            lineNumber: 160,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                    lineNumber: 141,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                lineNumber: 140,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                className: "bg-white divide-y divide-gray-200",
                                children: filteredCodes.map((code)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "hover:bg-gray-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4 whitespace-nowrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium text-gray-900",
                                                        children: code.code
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                                        lineNumber: 169,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-gray-500",
                                                        children: [
                                                            "ID: ",
                                                            code.id.slice(-8)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                                lineNumber: 168,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-900 max-w-xs truncate",
                                                    children: code.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4 whitespace-nowrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm font-medium text-gray-900",
                                                        children: formatDiscountValue(code.type, code.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-gray-500 capitalize",
                                                        children: code.type
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                                        lineNumber: 181,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                                lineNumber: 177,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4 whitespace-nowrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-gray-900",
                                                        children: [
                                                            code.currentUses,
                                                            " / ",
                                                            code.maxUses
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                                        lineNumber: 184,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full bg-gray-200 rounded-full h-2 mt-1",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `h-2 rounded-full ${isMaxedOut(code.currentUses, code.maxUses) ? 'bg-red-500' : getUsagePercentage(code.currentUses, code.maxUses) > 80 ? 'bg-yellow-500' : 'bg-green-500'}`,
                                                            style: {
                                                                width: `${Math.min(getUsagePercentage(code.currentUses, code.maxUses), 100)}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                                lineNumber: 183,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: formatDate(code.validFrom)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-gray-500",
                                                        children: [
                                                            "to ",
                                                            formatDate(code.validUntil)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 23
                                                    }, this),
                                                    isExpired(code.validUntil) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-red-600 font-medium",
                                                        children: "Expired"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                                lineNumber: 202,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4 whitespace-nowrap",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: getStatusBadge(code.status),
                                                        children: code.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 23
                                                    }, this),
                                                    isMaxedOut(code.currentUses, code.maxUses) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-red-600 mt-1",
                                                        children: "Max uses reached"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                                lineNumber: 209,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "px-6 py-4 whitespace-nowrap text-sm font-medium",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex space-x-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "text-gray-600 hover:text-gray-900 transition-colors",
                                                            children: "Edit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "text-gray-600 hover:text-gray-900 transition-colors",
                                                            children: "Copy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 25
                                                        }, this),
                                                        code.status === 'active' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "text-red-600 hover:text-red-900 transition-colors",
                                                            children: "Deactivate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                                            lineNumber: 226,
                                                            columnNumber: 27
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "text-green-600 hover:text-green-900 transition-colors",
                                                            children: "Activate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                                lineNumber: 217,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, code.id, true, {
                                        fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                lineNumber: 165,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                        lineNumber: 139,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                    lineNumber: 138,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 grid grid-cols-1 md:grid-cols-4 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-gray-500",
                                children: "Total Codes"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-gray-900",
                                children: filteredCodes.length
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                lineNumber: 248,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-gray-500",
                                children: "Active Codes"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                lineNumber: 251,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-green-600",
                                children: discountCodes.filter((c)=>c.status === 'active' && !isExpired(c.validUntil) && !isMaxedOut(c.currentUses, c.maxUses)).length
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                        lineNumber: 250,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-gray-500",
                                children: "Total Uses"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-blue-600",
                                children: filteredCodes.reduce((sum, c)=>sum + c.currentUses, 0)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-gray-500",
                                children: "Avg Usage Rate"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                lineNumber: 263,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-2xl font-bold text-gray-900",
                                children: [
                                    filteredCodes.length > 0 ? Math.round(filteredCodes.reduce((sum, c)=>sum + getUsagePercentage(c.currentUses, c.maxUses), 0) / filteredCodes.length) : 0,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/discount-codes/page.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/discount-codes/page.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(AdminDiscountCodes, "n9yeroIc7yvvIbrDaNymdlGv+jA=");
_c = AdminDiscountCodes;
var _c;
__turbopack_context__.k.register(_c, "AdminDiscountCodes");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_a65f7dfc._.js.map