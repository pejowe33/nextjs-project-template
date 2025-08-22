-- Golf Simulator Booking App Database Schema
-- Run this in Supabase SQL Editor to create all tables

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(50) NOT NULL,
    password VARCHAR(255),
    membership_id UUID,
    is_admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Memberships table
CREATE TABLE IF NOT EXISTS memberships (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    status VARCHAR(20) NOT NULL CHECK (status IN ('active', 'inactive', 'cancelled')),
    free_hours_remaining DECIMAL(4,2) NOT NULL DEFAULT 0,
    billing_date TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Bookings table
CREATE TABLE IF NOT EXISTS bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    guest_name VARCHAR(255),
    guest_email VARCHAR(255),
    guest_phone VARCHAR(50),
    date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    duration DECIMAL(3,1) NOT NULL,
    number_of_bays INTEGER NOT NULL,
    number_of_people INTEGER NOT NULL,
    bay_numbers INTEGER[] NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    type VARCHAR(20) NOT NULL CHECK (type IN ('regular', 'membership', 'lesson', 'league')),
    status VARCHAR(20) NOT NULL CHECK (status IN ('confirmed', 'cancelled', 'completed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Coaches table
CREATE TABLE IF NOT EXISTS coaches (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(50) NOT NULL,
    photo TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Coach availability table
CREATE TABLE IF NOT EXISTS coach_availability (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    coach_id UUID NOT NULL REFERENCES coaches(id) ON DELETE CASCADE,
    day_of_week INTEGER NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6),
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    is_available BOOLEAN DEFAULT TRUE
);

-- Leagues table
CREATE TABLE IF NOT EXISTS leagues (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    format VARCHAR(20) NOT NULL CHECK (format IN ('single', '2-man', '4-man')),
    match_type VARCHAR(20) NOT NULL CHECK (match_type IN ('lowest-score', 'match-play')),
    price_per_person DECIMAL(8,2) NOT NULL,
    max_teams INTEGER NOT NULL,
    bay_allocation INTEGER[] NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    day_of_week INTEGER NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6),
    start_time TIME NOT NULL,
    number_of_weeks INTEGER NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('open', 'closed', 'in-progress', 'completed')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Gift cards table
CREATE TABLE IF NOT EXISTS gift_cards (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code VARCHAR(50) UNIQUE NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    remaining_balance DECIMAL(10,2) NOT NULL,
    purchaser_name VARCHAR(255) NOT NULL,
    purchaser_email VARCHAR(255) NOT NULL,
    recipient_name VARCHAR(255),
    recipient_email VARCHAR(255),
    status VARCHAR(20) NOT NULL CHECK (status IN ('active', 'redeemed', 'expired')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    redeemed_at TIMESTAMP WITH TIME ZONE
);

-- Discount codes table
CREATE TABLE IF NOT EXISTS discount_codes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    code VARCHAR(50) UNIQUE NOT NULL,
    description TEXT NOT NULL,
    type VARCHAR(20) NOT NULL CHECK (type IN ('percentage', 'dollar')),
    value DECIMAL(8,2) NOT NULL,
    max_uses INTEGER NOT NULL,
    current_uses INTEGER DEFAULT 0,
    valid_from TIMESTAMP WITH TIME ZONE NOT NULL,
    valid_until TIMESTAMP WITH TIME ZONE NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('active', 'inactive')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add foreign key constraint for membership_id in users table
ALTER TABLE users ADD CONSTRAINT fk_users_membership 
    FOREIGN KEY (membership_id) REFERENCES memberships(id) ON DELETE SET NULL;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(date);
CREATE INDEX IF NOT EXISTS idx_bookings_user_id ON bookings(user_id);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_memberships_user_id ON memberships(user_id);
CREATE INDEX IF NOT EXISTS idx_coach_availability_coach_id ON coach_availability(coach_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_gift_cards_code ON gift_cards(code);
CREATE INDEX IF NOT EXISTS idx_discount_codes_code ON discount_codes(code);

-- Insert sample data
INSERT INTO users (id, name, email, phone, password, is_admin, created_at) VALUES
    ('550e8400-e29b-41d4-a716-446655440000', 'Admin User', 'admin@golfsim.com', '555-0100', 'admin123', true, '2024-01-01 00:00:00+00'),
    ('550e8400-e29b-41d4-a716-446655440001', 'John Smith', 'john@example.com', '555-0101', 'password123', false, '2024-01-15 00:00:00+00'),
    ('550e8400-e29b-41d4-a716-446655440002', 'Sarah Johnson', 'sarah@example.com', '555-0102', 'password123', false, '2024-02-01 00:00:00+00')
ON CONFLICT (email) DO NOTHING;

INSERT INTO memberships (id, user_id, status, free_hours_remaining, billing_date, created_at) VALUES
    ('660e8400-e29b-41d4-a716-446655440000', '550e8400-e29b-41d4-a716-446655440001', 'active', 1.5, '2024-02-15 00:00:00+00', '2024-01-15 00:00:00+00')
ON CONFLICT (id) DO NOTHING;

-- Update user with membership_id
UPDATE users SET membership_id = '660e8400-e29b-41d4-a716-446655440000' 
WHERE id = '550e8400-e29b-41d4-a716-446655440001';

INSERT INTO bookings (id, user_id, date, start_time, end_time, duration, number_of_bays, number_of_people, bay_numbers, total_price, type, status, created_at) VALUES
    ('770e8400-e29b-41d4-a716-446655440000', '550e8400-e29b-41d4-a716-446655440001', '2024-01-15', '14:00', '16:00', 2.0, 1, 2, ARRAY[1], 100.00, 'regular', 'confirmed', '2024-01-10 00:00:00+00'),
    ('770e8400-e29b-41d4-a716-446655440001', null, '2024-01-20', '10:00', '11:30', 1.5, 1, 3, ARRAY[2], 75.00, 'regular', 'completed', '2024-01-18 00:00:00+00'),
    ('770e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440002', '2024-02-05', '16:00', '17:00', 1.0, 1, 1, ARRAY[3], 80.00, 'lesson', 'confirmed', '2024-02-01 00:00:00+00')
ON CONFLICT (id) DO NOTHING;

-- Update guest booking with guest info
UPDATE bookings SET 
    guest_name = 'Mike Wilson',
    guest_email = 'mike@example.com',
    guest_phone = '555-0103'
WHERE id = '770e8400-e29b-41d4-a716-446655440001';

INSERT INTO coaches (id, name, email, phone, created_at) VALUES
    ('880e8400-e29b-41d4-a716-446655440000', 'David Thompson', 'david@golfsim.com', '555-0200', '2024-01-01 00:00:00+00'),
    ('880e8400-e29b-41d4-a716-446655440001', 'Lisa Rodriguez', 'lisa@golfsim.com', '555-0201', '2024-01-01 00:00:00+00')
ON CONFLICT (email) DO NOTHING;

INSERT INTO coach_availability (id, coach_id, day_of_week, start_time, end_time, is_available) VALUES
    ('990e8400-e29b-41d4-a716-446655440000', '880e8400-e29b-41d4-a716-446655440000', 1, '09:00', '17:00', true),
    ('990e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440000', 2, '09:00', '17:00', true),
    ('990e8400-e29b-41d4-a716-446655440002', '880e8400-e29b-41d4-a716-446655440000', 3, '09:00', '17:00', true),
    ('990e8400-e29b-41d4-a716-446655440003', '880e8400-e29b-41d4-a716-446655440000', 4, '09:00', '17:00', true),
    ('990e8400-e29b-41d4-a716-446655440004', '880e8400-e29b-41d4-a716-446655440000', 5, '09:00', '17:00', true),
    ('990e8400-e29b-41d4-a716-446655440005', '880e8400-e29b-41d4-a716-446655440001', 6, '08:00', '16:00', true),
    ('990e8400-e29b-41d4-a716-446655440006', '880e8400-e29b-41d4-a716-446655440001', 0, '08:00', '16:00', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO leagues (id, name, description, format, match_type, price_per_person, max_teams, bay_allocation, start_date, end_date, day_of_week, start_time, number_of_weeks, status, created_at) VALUES
    ('aa0e8400-e29b-41d4-a716-446655440000', 'Winter Championship League', 'Competitive 4-man scramble league running through winter months', '4-man', 'lowest-score', 25.00, 16, ARRAY[1,2,3,4], '2024-01-08', '2024-03-25', 1, '18:00', 12, 'in-progress', '2023-12-15 00:00:00+00'),
    ('aa0e8400-e29b-41d4-a716-446655440001', 'Spring Singles League', 'Individual competition for spring season', 'single', 'match-play', 35.00, 24, ARRAY[1,2,3,4,5,6], '2024-04-01', '2024-06-17', 3, '19:00', 12, 'open', '2024-02-01 00:00:00+00')
ON CONFLICT (id) DO NOTHING;

INSERT INTO discount_codes (id, code, description, type, value, max_uses, current_uses, valid_from, valid_until, status, created_at) VALUES
    ('bb0e8400-e29b-41d4-a716-446655440000', 'WELCOME20', '20% off first booking for new customers', 'percentage', 20.00, 100, 15, '2024-01-01 00:00:00+00', '2024-12-31 23:59:59+00', 'active', '2024-01-01 00:00:00+00'),
    ('bb0e8400-e29b-41d4-a716-446655440001', 'MEMBER10', '$10 off for members', 'dollar', 10.00, 500, 45, '2024-01-01 00:00:00+00', '2024-06-30 23:59:59+00', 'active', '2024-01-01 00:00:00+00'),
    ('bb0e8400-e29b-41d4-a716-446655440002', 'EXPIRED50', '50% off - expired promotion', 'percentage', 50.00, 50, 50, '2023-12-01 00:00:00+00', '2023-12-31 23:59:59+00', 'inactive', '2023-11-15 00:00:00+00')
ON CONFLICT (code) DO NOTHING;

INSERT INTO gift_cards (id, code, amount, remaining_balance, purchaser_name, purchaser_email, recipient_name, recipient_email, status, created_at, redeemed_at) VALUES
    ('cc0e8400-e29b-41d4-a716-446655440000', 'GC-2024-001', 100.00, 100.00, 'Jennifer Davis', 'jennifer@example.com', 'Tom Davis', 'tom@example.com', 'active', '2024-01-10 00:00:00+00', null),
    ('cc0e8400-e29b-41d4-a716-446655440001', 'GC-2024-002', 200.00, 75.00, 'Corporate Client', 'hr@company.com', null, null, 'active', '2024-01-20 00:00:00+00', '2024-01-25 00:00:00+00'),
    ('cc0e8400-e29b-41d4-a716-446655440002', 'GC-2024-003', 50.00, 0.00, 'Mary Johnson', 'mary@example.com', 'Bob Johnson', 'bob@example.com', 'redeemed', '2024-02-01 00:00:00+00', '2024-02-05 00:00:00+00')
ON CONFLICT (code) DO NOTHING;

-- Disable Row Level Security for now since we're using custom authentication
-- Security will be handled at the application level
ALTER TABLE users DISABLE ROW LEVEL SECURITY;
ALTER TABLE bookings DISABLE ROW LEVEL SECURITY;
ALTER TABLE memberships DISABLE ROW LEVEL SECURITY;
ALTER TABLE coaches DISABLE ROW LEVEL SECURITY;
ALTER TABLE coach_availability DISABLE ROW LEVEL SECURITY;
ALTER TABLE leagues DISABLE ROW LEVEL SECURITY;
ALTER TABLE gift_cards DISABLE ROW LEVEL SECURITY;
ALTER TABLE discount_codes DISABLE ROW LEVEL SECURITY;

-- Note: In a production environment, you should implement proper RLS policies
-- or migrate to Supabase Auth for better security
