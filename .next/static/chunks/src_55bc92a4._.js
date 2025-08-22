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
            },
            {
                id: "user_3",
                name: "Pete Weldon",
                email: "pete.weldon@gmail.com",
                phone: "555-0103",
                password: "99csutma!",
                createdAt: new Date("2024-01-20")
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
"[project]/src/lib/supabase.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "supabase": (()=>supabase),
    "supabaseAdmin": (()=>supabaseAdmin)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://bmzhnavkxcxqtxyjcron.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtemhuYXZreGN4cXR4eWpjcm9uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4OTc2OTcsImV4cCI6MjA3MTQ3MzY5N30.zlUJVQq7j4vj5gUHu5yiUdb0cGByelYegi4VMru3_jA");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
const supabaseAdmin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/supabase-store.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SupabaseStore": (()=>SupabaseStore),
    "supabaseStore": (()=>supabaseStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
;
class SupabaseStore {
    // User methods
    async addUser(user) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseAdmin"].from('users').insert([
            {
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                password: user.password,
                membership_id: user.membershipId,
                is_admin: user.isAdmin || false,
                created_at: user.createdAt.toISOString()
            }
        ]).select().single();
        if (error) throw error;
        return this.mapUserFromDb(data);
    }
    async getUser(id) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').eq('id', id).single();
        if (error) {
            if (error.code === 'PGRST116') return null // Not found
            ;
            throw error;
        }
        return this.mapUserFromDb(data);
    }
    async getUserByEmail(email) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').eq('email', email).single();
        if (error) {
            if (error.code === 'PGRST116') return null // Not found
            ;
            throw error;
        }
        return this.mapUserFromDb(data);
    }
    async getAllUsers() {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('users').select('*').order('created_at', {
            ascending: false
        });
        if (error) throw error;
        return data.map(this.mapUserFromDb);
    }
    // Booking methods
    async addBooking(booking) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('bookings').insert([
            {
                id: booking.id,
                user_id: booking.userId,
                guest_name: booking.guestName,
                guest_email: booking.guestEmail,
                guest_phone: booking.guestPhone,
                date: booking.date.toISOString().split('T')[0],
                start_time: booking.startTime,
                end_time: booking.endTime,
                duration: booking.duration,
                number_of_bays: booking.numberOfBays,
                number_of_people: booking.numberOfPeople,
                bay_numbers: booking.bayNumbers,
                total_price: booking.totalPrice,
                type: booking.type,
                status: booking.status,
                created_at: booking.createdAt.toISOString()
            }
        ]).select().single();
        if (error) throw error;
        return this.mapBookingFromDb(data);
    }
    async getBooking(id) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('bookings').select('*').eq('id', id).single();
        if (error) {
            if (error.code === 'PGRST116') return null // Not found
            ;
            throw error;
        }
        return this.mapBookingFromDb(data);
    }
    async getAllBookings() {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('bookings').select('*').order('created_at', {
            ascending: false
        });
        if (error) throw error;
        return data.map(this.mapBookingFromDb);
    }
    async updateBooking(id, updates) {
        const dbUpdates = {};
        if (updates.userId !== undefined) dbUpdates.user_id = updates.userId;
        if (updates.guestName !== undefined) dbUpdates.guest_name = updates.guestName;
        if (updates.guestEmail !== undefined) dbUpdates.guest_email = updates.guestEmail;
        if (updates.guestPhone !== undefined) dbUpdates.guest_phone = updates.guestPhone;
        if (updates.date !== undefined) dbUpdates.date = updates.date.toISOString().split('T')[0];
        if (updates.startTime !== undefined) dbUpdates.start_time = updates.startTime;
        if (updates.endTime !== undefined) dbUpdates.end_time = updates.endTime;
        if (updates.duration !== undefined) dbUpdates.duration = updates.duration;
        if (updates.numberOfBays !== undefined) dbUpdates.number_of_bays = updates.numberOfBays;
        if (updates.numberOfPeople !== undefined) dbUpdates.number_of_people = updates.numberOfPeople;
        if (updates.bayNumbers !== undefined) dbUpdates.bay_numbers = updates.bayNumbers;
        if (updates.totalPrice !== undefined) dbUpdates.total_price = updates.totalPrice;
        if (updates.type !== undefined) dbUpdates.type = updates.type;
        if (updates.status !== undefined) dbUpdates.status = updates.status;
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('bookings').update(dbUpdates).eq('id', id);
        if (error) throw error;
        return true;
    }
    async deleteBooking(id) {
        const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('bookings').delete().eq('id', id);
        if (error) throw error;
        return true;
    }
    // Membership methods
    async addMembership(membership) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('memberships').insert([
            {
                id: membership.id,
                user_id: membership.userId,
                status: membership.status,
                free_hours_remaining: membership.freeHoursRemaining,
                billing_date: membership.billingDate.toISOString(),
                created_at: membership.createdAt.toISOString()
            }
        ]).select().single();
        if (error) throw error;
        return this.mapMembershipFromDb(data);
    }
    async getMembership(userId) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('memberships').select('*').eq('user_id', userId).single();
        if (error) {
            if (error.code === 'PGRST116') return null // Not found
            ;
            throw error;
        }
        return this.mapMembershipFromDb(data);
    }
    // Coach methods
    async addCoach(coach) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('coaches').insert([
            {
                id: coach.id,
                name: coach.name,
                email: coach.email,
                phone: coach.phone,
                photo: coach.photo,
                created_at: coach.createdAt.toISOString()
            }
        ]).select().single();
        if (error) throw error;
        // Insert availability records
        if (coach.availability.length > 0) {
            const { error: availError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('coach_availability').insert(coach.availability.map((avail)=>({
                    id: avail.id,
                    coach_id: avail.coachId,
                    day_of_week: avail.dayOfWeek,
                    start_time: avail.startTime,
                    end_time: avail.endTime,
                    is_available: avail.isAvailable
                })));
            if (availError) throw availError;
        }
        return this.mapCoachFromDb(data, coach.availability);
    }
    async getCoach(id) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('coaches').select('*').eq('id', id).single();
        if (error) {
            if (error.code === 'PGRST116') return null // Not found
            ;
            throw error;
        }
        // Get availability
        const { data: availData, error: availError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('coach_availability').select('*').eq('coach_id', id);
        if (availError) throw availError;
        const availability = availData.map(this.mapAvailabilityFromDb);
        return this.mapCoachFromDb(data, availability);
    }
    async getAllCoaches() {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('coaches').select('*').order('created_at', {
            ascending: false
        });
        if (error) throw error;
        // Get all availability records
        const { data: availData, error: availError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('coach_availability').select('*');
        if (availError) throw availError;
        return data.map((coach)=>{
            const availability = availData.filter((avail)=>avail.coach_id === coach.id).map(this.mapAvailabilityFromDb);
            return this.mapCoachFromDb(coach, availability);
        });
    }
    // League methods
    async addLeague(league) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('leagues').insert([
            {
                id: league.id,
                name: league.name,
                description: league.description,
                format: league.format,
                match_type: league.matchType,
                price_per_person: league.pricePerPerson,
                max_teams: league.maxTeams,
                bay_allocation: league.bayAllocation,
                start_date: league.startDate.toISOString().split('T')[0],
                end_date: league.endDate.toISOString().split('T')[0],
                day_of_week: league.dayOfWeek,
                start_time: league.startTime,
                number_of_weeks: league.numberOfWeeks,
                status: league.status,
                created_at: league.createdAt.toISOString()
            }
        ]).select().single();
        if (error) throw error;
        return this.mapLeagueFromDb(data);
    }
    async getLeague(id) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('leagues').select('*').eq('id', id).single();
        if (error) {
            if (error.code === 'PGRST116') return null // Not found
            ;
            throw error;
        }
        return this.mapLeagueFromDb(data);
    }
    async getAllLeagues() {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('leagues').select('*').order('created_at', {
            ascending: false
        });
        if (error) throw error;
        return data.map(this.mapLeagueFromDb);
    }
    // Gift card methods
    async addGiftCard(giftCard) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('gift_cards').insert([
            {
                id: giftCard.id,
                code: giftCard.code,
                amount: giftCard.amount,
                remaining_balance: giftCard.remainingBalance,
                purchaser_name: giftCard.purchaserName,
                purchaser_email: giftCard.purchaserEmail,
                recipient_name: giftCard.recipientName,
                recipient_email: giftCard.recipientEmail,
                status: giftCard.status,
                created_at: giftCard.createdAt.toISOString(),
                redeemed_at: giftCard.redeemedAt?.toISOString()
            }
        ]).select().single();
        if (error) throw error;
        return this.mapGiftCardFromDb(data);
    }
    async getGiftCard(code) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('gift_cards').select('*').eq('code', code).single();
        if (error) {
            if (error.code === 'PGRST116') return null // Not found
            ;
            throw error;
        }
        return this.mapGiftCardFromDb(data);
    }
    async getAllGiftCards() {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('gift_cards').select('*').order('created_at', {
            ascending: false
        });
        if (error) throw error;
        return data.map(this.mapGiftCardFromDb);
    }
    // Discount code methods
    async addDiscountCode(discountCode) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('discount_codes').insert([
            {
                id: discountCode.id,
                code: discountCode.code,
                description: discountCode.description,
                type: discountCode.type,
                value: discountCode.value,
                max_uses: discountCode.maxUses,
                current_uses: discountCode.currentUses,
                valid_from: discountCode.validFrom.toISOString(),
                valid_until: discountCode.validUntil.toISOString(),
                status: discountCode.status,
                created_at: discountCode.createdAt.toISOString()
            }
        ]).select().single();
        if (error) throw error;
        return this.mapDiscountCodeFromDb(data);
    }
    async getDiscountCode(code) {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('discount_codes').select('*').eq('code', code).single();
        if (error) {
            if (error.code === 'PGRST116') return null // Not found
            ;
            throw error;
        }
        return this.mapDiscountCodeFromDb(data);
    }
    async getAllDiscountCodes() {
        const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('discount_codes').select('*').order('created_at', {
            ascending: false
        });
        if (error) throw error;
        return data.map(this.mapDiscountCodeFromDb);
    }
    // Mapping functions to convert between database format and TypeScript interfaces
    mapUserFromDb(data) {
        return {
            id: data.id,
            name: data.name,
            email: data.email,
            phone: data.phone,
            password: data.password,
            membershipId: data.membership_id,
            isAdmin: data.is_admin,
            createdAt: new Date(data.created_at)
        };
    }
    mapBookingFromDb(data) {
        return {
            id: data.id,
            userId: data.user_id,
            guestName: data.guest_name,
            guestEmail: data.guest_email,
            guestPhone: data.guest_phone,
            date: new Date(data.date),
            startTime: data.start_time,
            endTime: data.end_time,
            duration: data.duration,
            numberOfBays: data.number_of_bays,
            numberOfPeople: data.number_of_people,
            bayNumbers: data.bay_numbers,
            totalPrice: data.total_price,
            type: data.type,
            status: data.status,
            createdAt: new Date(data.created_at)
        };
    }
    mapMembershipFromDb(data) {
        return {
            id: data.id,
            userId: data.user_id,
            status: data.status,
            freeHoursRemaining: data.free_hours_remaining,
            billingDate: new Date(data.billing_date),
            createdAt: new Date(data.created_at)
        };
    }
    mapCoachFromDb(data, availability) {
        return {
            id: data.id,
            name: data.name,
            email: data.email,
            phone: data.phone,
            photo: data.photo,
            availability,
            createdAt: new Date(data.created_at)
        };
    }
    mapAvailabilityFromDb(data) {
        return {
            id: data.id,
            coachId: data.coach_id,
            dayOfWeek: data.day_of_week,
            startTime: data.start_time,
            endTime: data.end_time,
            isAvailable: data.is_available
        };
    }
    mapLeagueFromDb(data) {
        return {
            id: data.id,
            name: data.name,
            description: data.description,
            format: data.format,
            matchType: data.match_type,
            pricePerPerson: data.price_per_person,
            maxTeams: data.max_teams,
            bayAllocation: data.bay_allocation,
            startDate: new Date(data.start_date),
            endDate: new Date(data.end_date),
            dayOfWeek: data.day_of_week,
            startTime: data.start_time,
            numberOfWeeks: data.number_of_weeks,
            status: data.status,
            createdAt: new Date(data.created_at)
        };
    }
    mapGiftCardFromDb(data) {
        return {
            id: data.id,
            code: data.code,
            amount: data.amount,
            remainingBalance: data.remaining_balance,
            purchaserName: data.purchaser_name,
            purchaserEmail: data.purchaser_email,
            recipientName: data.recipient_name,
            recipientEmail: data.recipient_email,
            status: data.status,
            createdAt: new Date(data.created_at),
            redeemedAt: data.redeemed_at ? new Date(data.redeemed_at) : undefined
        };
    }
    mapDiscountCodeFromDb(data) {
        return {
            id: data.id,
            code: data.code,
            description: data.description,
            type: data.type,
            value: data.value,
            maxUses: data.max_uses,
            currentUses: data.current_uses,
            validFrom: new Date(data.valid_from),
            validUntil: new Date(data.valid_until),
            status: data.status,
            createdAt: new Date(data.created_at)
        };
    }
}
const supabaseStore = new SupabaseStore();
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/migrate-to-supabase.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "migrateDataToSupabase": (()=>migrateDataToSupabase),
    "testSupabaseConnection": (()=>testSupabaseConnection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase-store.ts [app-client] (ecmascript)");
;
;
async function migrateDataToSupabase() {
    console.log('Starting migration to Supabase...');
    try {
        // Migrate users first (needed for foreign key relationships)
        console.log('Migrating users...');
        const users = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataStore"].getAllUsers();
        for (const user of users){
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseStore"].addUser(user);
                console.log(`✓ Migrated user: ${user.email}`);
            } catch (error) {
                if (error.code === '23505') {
                    console.log(`- User already exists: ${user.email}`);
                } else {
                    console.error(`✗ Failed to migrate user ${user.email}:`, error.message);
                }
            }
        }
        // Migrate memberships
        console.log('Migrating memberships...');
        const memberships = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataStore"].getAllUsers().filter((user)=>user.membershipId).map((user)=>{
            const membership = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataStore"].getMembership(user.id);
            return membership;
        }).filter(Boolean);
        for (const membership of memberships){
            if (membership) {
                try {
                    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseStore"].addMembership(membership);
                    console.log(`✓ Migrated membership: ${membership.id}`);
                } catch (error) {
                    if (error.code === '23505') {
                        console.log(`- Membership already exists: ${membership.id}`);
                    } else {
                        console.error(`✗ Failed to migrate membership ${membership.id}:`, error.message);
                    }
                }
            }
        }
        // Migrate coaches
        console.log('Migrating coaches...');
        const coaches = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataStore"].getAllCoaches();
        for (const coach of coaches){
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseStore"].addCoach(coach);
                console.log(`✓ Migrated coach: ${coach.name}`);
            } catch (error) {
                if (error.code === '23505') {
                    console.log(`- Coach already exists: ${coach.name}`);
                } else {
                    console.error(`✗ Failed to migrate coach ${coach.name}:`, error.message);
                }
            }
        }
        // Migrate leagues
        console.log('Migrating leagues...');
        const leagues = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataStore"].getAllLeagues();
        for (const league of leagues){
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseStore"].addLeague(league);
                console.log(`✓ Migrated league: ${league.name}`);
            } catch (error) {
                if (error.code === '23505') {
                    console.log(`- League already exists: ${league.name}`);
                } else {
                    console.error(`✗ Failed to migrate league ${league.name}:`, error.message);
                }
            }
        }
        // Migrate bookings
        console.log('Migrating bookings...');
        const bookings = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataStore"].getAllBookings();
        for (const booking of bookings){
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseStore"].addBooking(booking);
                console.log(`✓ Migrated booking: ${booking.id}`);
            } catch (error) {
                if (error.code === '23505') {
                    console.log(`- Booking already exists: ${booking.id}`);
                } else {
                    console.error(`✗ Failed to migrate booking ${booking.id}:`, error.message);
                }
            }
        }
        // Migrate gift cards
        console.log('Migrating gift cards...');
        const giftCards = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataStore"].getAllGiftCards();
        for (const giftCard of giftCards){
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseStore"].addGiftCard(giftCard);
                console.log(`✓ Migrated gift card: ${giftCard.code}`);
            } catch (error) {
                if (error.code === '23505') {
                    console.log(`- Gift card already exists: ${giftCard.code}`);
                } else {
                    console.error(`✗ Failed to migrate gift card ${giftCard.code}:`, error.message);
                }
            }
        }
        // Migrate discount codes
        console.log('Migrating discount codes...');
        const discountCodes = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataStore"].getAllDiscountCodes();
        for (const discountCode of discountCodes){
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseStore"].addDiscountCode(discountCode);
                console.log(`✓ Migrated discount code: ${discountCode.code}`);
            } catch (error) {
                if (error.code === '23505') {
                    console.log(`- Discount code already exists: ${discountCode.code}`);
                } else {
                    console.error(`✗ Failed to migrate discount code ${discountCode.code}:`, error.message);
                }
            }
        }
        console.log('✅ Migration completed successfully!');
        return {
            success: true,
            message: 'All data migrated to Supabase'
        };
    } catch (error) {
        console.error('❌ Migration failed:', error);
        return {
            success: false,
            message: `Migration failed: ${error}`
        };
    }
}
async function testSupabaseConnection() {
    try {
        console.log('Testing Supabase connection...');
        const users = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseStore"].getAllUsers();
        console.log(`✅ Connection successful! Found ${users.length} users in database.`);
        return {
            success: true,
            userCount: users.length
        };
    } catch (error) {
        console.error('❌ Supabase connection failed:', error);
        return {
            success: false,
            error: error
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "BAY_CONFIG": (()=>BAY_CONFIG),
    "MEMBERSHIP_RATES": (()=>MEMBERSHIP_RATES),
    "OPERATING_HOURS": (()=>OPERATING_HOURS),
    "PRICING_TIERS": (()=>PRICING_TIERS),
    "calculateBookingPrice": (()=>calculateBookingPrice),
    "calculateDuration": (()=>calculateDuration),
    "cn": (()=>cn),
    "formatCurrency": (()=>formatCurrency),
    "formatTime": (()=>formatTime),
    "generateGiftCardCode": (()=>generateGiftCardCode),
    "generateMockBookings": (()=>generateMockBookings),
    "generateMockUsers": (()=>generateMockUsers),
    "generateTimeSlots": (()=>generateTimeSlots),
    "isValidDuration": (()=>isValidDuration),
    "isValidEmail": (()=>isValidEmail),
    "isValidPhone": (()=>isValidPhone),
    "isValidTimeSlot": (()=>isValidTimeSlot)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parse.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isAfter.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isBefore.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMinutes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/addMinutes.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInMinutes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/differenceInMinutes.mjs [app-client] (ecmascript)");
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const OPERATING_HOURS = {
    monday: {
        open: "10:00",
        close: "22:00"
    },
    tuesday: {
        open: "10:00",
        close: "22:00"
    },
    wednesday: {
        open: "10:00",
        close: "22:00"
    },
    thursday: {
        open: "10:00",
        close: "22:00"
    },
    friday: {
        open: "10:00",
        close: "24:00"
    },
    saturday: {
        open: "09:00",
        close: "24:00"
    },
    sunday: {
        open: "10:00",
        close: "22:00"
    }
};
const PRICING_TIERS = [
    {
        name: "Off-Peak",
        rate: 50,
        conditions: {
            days: [
                "monday",
                "tuesday",
                "wednesday",
                "thursday",
                "friday"
            ],
            timeRange: {
                start: "10:00",
                end: "17:00"
            }
        }
    },
    {
        name: "Peak",
        rate: 60,
        conditions: {
            days: [
                "monday",
                "tuesday",
                "wednesday",
                "thursday",
                "friday"
            ],
            timeRange: {
                start: "17:00",
                end: "24:00"
            }
        }
    },
    {
        name: "Weekend",
        rate: 60,
        conditions: {
            days: [
                "saturday",
                "sunday"
            ],
            timeRange: {
                start: "09:00",
                end: "24:00"
            }
        }
    }
];
const MEMBERSHIP_RATES = {
    monthly: 90,
    freeHours: 2,
    discountedRate: 40,
    membershipHourValue: 45
};
const BAY_CONFIG = {
    totalBays: 5,
    maxBaysPerBooking: 2,
    maxSimultaneousBookings: 5
};
function generateTimeSlots(date) {
    const dayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'EEEE').toLowerCase();
    const hours = OPERATING_HOURS[dayName];
    if (!hours) return [];
    const slots = [];
    const startTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(hours.open, 'HH:mm', new Date());
    const endTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(hours.close === '24:00' ? '23:59' : hours.close, 'HH:mm', new Date());
    let currentTime = startTime;
    while((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBefore"])(currentTime, endTime)){
        slots.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(currentTime, 'HH:mm'));
        currentTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMinutes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMinutes"])(currentTime, 30);
    }
    return slots;
}
function calculateBookingPrice(date, startTime, duration, numberOfBays, isMember = false, membershipHoursUsed = 0) {
    const dayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'EEEE').toLowerCase();
    const timeSlot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(startTime, 'HH:mm', new Date());
    // Find applicable pricing tier
    let hourlyRate = 60 // default weekend rate
    ;
    for (const tier of PRICING_TIERS){
        if (tier.conditions.days.includes(dayName)) {
            const tierStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(tier.conditions.timeRange.start, 'HH:mm', new Date());
            const tierEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(tier.conditions.timeRange.end === '24:00' ? '23:59' : tier.conditions.timeRange.end, 'HH:mm', new Date());
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBefore"])(timeSlot, tierStart) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBefore"])(timeSlot, tierEnd)) {
                hourlyRate = tier.rate;
                break;
            }
        }
    }
    const totalHours = duration * numberOfBays;
    const basePrice = totalHours * hourlyRate;
    if (!isMember) {
        return {
            basePrice,
            membershipDiscount: 0,
            totalPrice: basePrice,
            membershipHoursApplied: 0
        };
    }
    // Apply membership benefits
    const freeHoursAvailable = Math.max(0, MEMBERSHIP_RATES.freeHours - membershipHoursUsed);
    const freeHoursToApply = Math.min(freeHoursAvailable, totalHours);
    const paidHours = totalHours - freeHoursToApply;
    const membershipDiscount = freeHoursToApply * hourlyRate + paidHours * (hourlyRate - MEMBERSHIP_RATES.discountedRate);
    const totalPrice = basePrice - membershipDiscount;
    return {
        basePrice,
        membershipDiscount,
        totalPrice,
        membershipHoursApplied: freeHoursToApply
    };
}
function isValidTimeSlot(date, time) {
    const dayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'EEEE').toLowerCase();
    const hours = OPERATING_HOURS[dayName];
    if (!hours) return false;
    const timeSlot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(time, 'HH:mm', new Date());
    const openTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(hours.open, 'HH:mm', new Date());
    const closeTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(hours.close === '24:00' ? '23:59' : hours.close, 'HH:mm', new Date());
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBefore"])(timeSlot, openTime) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isBefore$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBefore"])(timeSlot, closeTime);
}
function isValidDuration(startTime, duration, date) {
    const dayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, 'EEEE').toLowerCase();
    const hours = OPERATING_HOURS[dayName];
    if (!hours) return false;
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(startTime, 'HH:mm', new Date());
    const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$addMinutes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMinutes"])(start, duration * 60);
    const closeTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(hours.close === '24:00' ? '23:59' : hours.close, 'HH:mm', new Date());
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isAfter$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAfter"])(end, closeTime) && duration >= 1 && duration <= 4;
}
function generateGiftCardCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for(let i = 0; i < 12; i++){
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function isValidPhone(phone) {
    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
}
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}
function formatTime(time) {
    const parsed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(time, 'HH:mm', new Date());
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(parsed, 'h:mm a');
}
function calculateDuration(startTime, endTime) {
    const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(startTime, 'HH:mm', new Date());
    const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["parse"])(endTime, 'HH:mm', new Date());
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInMinutes$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInMinutes"])(end, start) / 60;
}
function generateMockBookings(count = 10) {
    // This will be used for development/testing
    return [];
}
function generateMockUsers(count = 5) {
    // This will be used for development/testing
    return [];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardAction": (()=>CardAction),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/alert.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Alert": (()=>Alert),
    "AlertDescription": (()=>AlertDescription),
    "AlertTitle": (()=>AlertTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current", {
    variants: {
        variant: {
            default: "bg-card text-card-foreground",
            destructive: "text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Alert({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert",
        role: "alert",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = Alert;
function AlertTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c1 = AlertTitle;
function AlertDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "alert-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_c2 = AlertDescription;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Alert");
__turbopack_context__.k.register(_c1, "AlertTitle");
__turbopack_context__.k.register(_c2, "AlertDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/supabase-test/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SupabaseTestPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$migrate$2d$to$2d$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/migrate-to-supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function SupabaseTestPage() {
    _s();
    const [connectionResult, setConnectionResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [migrationResult, setMigrationResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [testData, setTestData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleTestConnection = async ()=>{
        setLoading(true);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$migrate$2d$to$2d$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testSupabaseConnection"])();
            setConnectionResult(result);
        } catch (error) {
            setConnectionResult({
                success: false,
                error: error
            });
        } finally{
            setLoading(false);
        }
    };
    const handleMigration = async ()=>{
        setLoading(true);
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$migrate$2d$to$2d$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["migrateDataToSupabase"])();
            setMigrationResult(result);
        } catch (error) {
            setMigrationResult({
                success: false,
                message: `Migration failed: ${error}`
            });
        } finally{
            setLoading(false);
        }
    };
    const handleTestQueries = async ()=>{
        setLoading(true);
        try {
            const [users, bookings, coaches, leagues, giftCards, discountCodes] = await Promise.all([
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseStore"].getAllUsers(),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseStore"].getAllBookings(),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseStore"].getAllCoaches(),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseStore"].getAllLeagues(),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseStore"].getAllGiftCards(),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabaseStore"].getAllDiscountCodes()
            ]);
            setTestData({
                users: users.length,
                bookings: bookings.length,
                coaches: coaches.length,
                leagues: leagues.length,
                giftCards: giftCards.length,
                discountCodes: discountCodes.length,
                sampleUser: users[0],
                sampleBooking: bookings[0]
            });
        } catch (error) {
            setTestData({
                error: error
            });
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 py-12 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl font-bold text-gray-900",
                            children: "Supabase Integration Test"
                        }, void 0, false, {
                            fileName: "[project]/src/app/supabase-test/page.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mt-2",
                            children: "Test Supabase connection and data migration"
                        }, void 0, false, {
                            fileName: "[project]/src/app/supabase-test/page.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/supabase-test/page.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    children: "1. Test Supabase Connection"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                    children: "Verify that the application can connect to Supabase"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/supabase-test/page.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleTestConnection,
                                    disabled: loading,
                                    children: loading ? 'Testing...' : 'Test Connection'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                connectionResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                                    variant: connectionResult.success ? "default" : "destructive",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                        children: connectionResult.success ? `✅ Connection successful! Found ${connectionResult.userCount} users in database.` : `❌ Connection failed: ${connectionResult.error}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/supabase-test/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/supabase-test/page.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/supabase-test/page.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    children: "2. Migrate Data to Supabase"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                    children: "Transfer all data from in-memory store to Supabase database"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/supabase-test/page.tsx",
                            lineNumber: 105,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-yellow-50 border border-yellow-200 rounded-md p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-yellow-800 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Important:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/supabase-test/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this),
                                            " Make sure you have run the SQL migration script in Supabase SQL Editor first!"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/supabase-test/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleMigration,
                                    disabled: loading,
                                    children: loading ? 'Migrating...' : 'Run Migration'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                migrationResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                                    variant: migrationResult.success ? "default" : "destructive",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                        children: migrationResult.success ? `✅ ${migrationResult.message}` : `❌ ${migrationResult.message}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/supabase-test/page.tsx",
                                        lineNumber: 124,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/supabase-test/page.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/supabase-test/page.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    children: "3. Test Database Queries"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                                    children: "Verify that data can be read from Supabase"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/supabase-test/page.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: handleTestQueries,
                                    disabled: loading,
                                    children: loading ? 'Testing...' : 'Test Queries'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                testData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-4",
                                    children: [
                                        testData.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Alert"], {
                                            variant: "destructive",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDescription"], {
                                                children: [
                                                    "❌ Query failed: ",
                                                    testData.error.toString()
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/supabase-test/page.tsx",
                                                lineNumber: 152,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/supabase-test/page.tsx",
                                            lineNumber: 151,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white p-4 rounded-lg shadow",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-medium text-gray-900",
                                                            children: "Users"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/supabase-test/page.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold text-blue-600",
                                                            children: testData.users
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/supabase-test/page.tsx",
                                                            lineNumber: 160,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white p-4 rounded-lg shadow",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-medium text-gray-900",
                                                            children: "Bookings"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/supabase-test/page.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold text-green-600",
                                                            children: testData.bookings
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/supabase-test/page.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white p-4 rounded-lg shadow",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-medium text-gray-900",
                                                            children: "Coaches"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/supabase-test/page.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold text-purple-600",
                                                            children: testData.coaches
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/supabase-test/page.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white p-4 rounded-lg shadow",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-medium text-gray-900",
                                                            children: "Leagues"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/supabase-test/page.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold text-orange-600",
                                                            children: testData.leagues
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/supabase-test/page.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white p-4 rounded-lg shadow",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-medium text-gray-900",
                                                            children: "Gift Cards"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/supabase-test/page.tsx",
                                                            lineNumber: 175,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold text-pink-600",
                                                            children: testData.giftCards
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/supabase-test/page.tsx",
                                                            lineNumber: 176,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                                    lineNumber: 174,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "bg-white p-4 rounded-lg shadow",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-medium text-gray-900",
                                                            children: "Discount Codes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/supabase-test/page.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-2xl font-bold text-indigo-600",
                                                            children: testData.discountCodes
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/supabase-test/page.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/supabase-test/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 19
                                        }, this),
                                        testData.sampleUser && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-4 rounded-lg shadow",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-medium text-gray-900 mb-2",
                                                    children: "Sample User Data"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                    className: "text-sm text-gray-600 overflow-x-auto",
                                                    children: JSON.stringify(testData.sampleUser, null, 2)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/supabase-test/page.tsx",
                                            lineNumber: 186,
                                            columnNumber: 19
                                        }, this),
                                        testData.sampleBooking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-4 rounded-lg shadow",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-medium text-gray-900 mb-2",
                                                    children: "Sample Booking Data"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                                    className: "text-sm text-gray-600 overflow-x-auto",
                                                    children: JSON.stringify(testData.sampleBooking, null, 2)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/supabase-test/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/supabase-test/page.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/supabase-test/page.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                children: "Setup Instructions"
                            }, void 0, false, {
                                fileName: "[project]/src/app/supabase-test/page.tsx",
                                lineNumber: 210,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/supabase-test/page.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-medium",
                                            children: "1. Run SQL Migration"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/supabase-test/page.tsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600",
                                            children: [
                                                "Copy the contents of ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                    children: "supabase-migration.sql"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 38
                                                }, this),
                                                " and run it in your Supabase SQL Editor."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/supabase-test/page.tsx",
                                            lineNumber: 215,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-medium",
                                            children: "2. Test Connection"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/supabase-test/page.tsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600",
                                            children: 'Click "Test Connection" to verify your Supabase credentials are working.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/supabase-test/page.tsx",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-medium",
                                            children: "3. Migrate Data"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/supabase-test/page.tsx",
                                            lineNumber: 228,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600",
                                            children: 'Click "Run Migration" to transfer sample data from the in-memory store to Supabase.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/supabase-test/page.tsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-medium",
                                            children: "4. Test Queries"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/supabase-test/page.tsx",
                                            lineNumber: 235,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600",
                                            children: 'Click "Test Queries" to verify that data can be read from Supabase successfully.'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/supabase-test/page.tsx",
                                            lineNumber: 236,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/supabase-test/page.tsx",
                                    lineNumber: 234,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/supabase-test/page.tsx",
                            lineNumber: 212,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/supabase-test/page.tsx",
                    lineNumber: 208,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/",
                        className: "text-blue-600 hover:text-blue-800 underline",
                        children: "← Back to Home"
                    }, void 0, false, {
                        fileName: "[project]/src/app/supabase-test/page.tsx",
                        lineNumber: 244,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/supabase-test/page.tsx",
                    lineNumber: 243,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/supabase-test/page.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/supabase-test/page.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_s(SupabaseTestPage, "qac/gyiHXY7DXjZQlUUznvnKaeg=");
_c = SupabaseTestPage;
var _c;
__turbopack_context__.k.register(_c, "SupabaseTestPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_55bc92a4._.js.map