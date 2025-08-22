# Supabase Integration Setup Guide

This guide explains how to set up and use Supabase as the database backend for the Golf Simulator Booking App.

## Overview

The application now supports both in-memory storage (for development) and Supabase (for production). The Supabase integration provides:

- **Real Database**: PostgreSQL with full ACID compliance
- **Authentication**: Built-in user authentication system
- **Real-time**: Live updates across clients
- **Row Level Security**: Fine-grained access control
- **Scalability**: Production-ready infrastructure

## Prerequisites

1. **Supabase Account**: Create a free account at [supabase.com](https://supabase.com)
2. **Node.js 18+**: Required for the Next.js application
3. **Environment Variables**: Supabase credentials (already configured)

## Setup Steps

### 1. Environment Configuration

The following environment variables are already configured in `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://bmzhnavkxcxqtxyjcron.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 2. Database Schema Setup

1. **Open Supabase Dashboard**: Go to your project dashboard
2. **Navigate to SQL Editor**: Click on "SQL Editor" in the sidebar
3. **Run Migration Script**: Copy the entire contents of `supabase-migration.sql` and execute it

The migration script will:
- Create all necessary tables with proper relationships
- Set up indexes for optimal performance
- Enable Row Level Security (RLS)
- Create security policies
- Insert sample data for testing

### 3. Test the Integration

1. **Start the Development Server**:
   ```bash
   npm run dev
   ```

2. **Visit Test Page**: Navigate to `http://localhost:8000/supabase-test`

3. **Run Tests in Order**:
   - Click "Test Connection" to verify Supabase connectivity
   - Click "Run Migration" to transfer sample data
   - Click "Test Queries" to verify data retrieval

## Database Schema

### Tables Created

1. **users** - User accounts and profiles
2. **memberships** - Membership subscriptions
3. **bookings** - Simulator bay reservations
4. **coaches** - Instructor profiles
5. **coach_availability** - Coach scheduling
6. **leagues** - Competition management
7. **gift_cards** - Digital gift card system
8. **discount_codes** - Promotional codes

### Key Features

- **UUID Primary Keys**: All tables use UUID for better scalability
- **Foreign Key Constraints**: Proper relationships between tables
- **Check Constraints**: Data validation at database level
- **Indexes**: Optimized for common query patterns
- **Row Level Security**: User-based access control

## Security Policies

### Row Level Security (RLS)

All tables have RLS enabled with the following policies:

- **Users**: Can view/edit own profile, admins see all
- **Bookings**: Users see own bookings, admins see all
- **Memberships**: Users see own membership, admins see all
- **Public Data**: Coaches and leagues are publicly readable
- **Admin Only**: Gift cards and discount codes require admin access

### Authentication Integration

The system supports both:
- **Custom Authentication**: Current localStorage-based system
- **Supabase Auth**: Built-in authentication (ready for future migration)

## API Integration

### Current Implementation

The `SupabaseStore` class in `src/lib/supabase-store.ts` provides:

- **Full CRUD Operations**: Create, Read, Update, Delete for all entities
- **Type Safety**: Full TypeScript integration
- **Error Handling**: Proper error management and logging
- **Data Mapping**: Conversion between database and TypeScript formats

### Usage Example

```typescript
import { supabaseStore } from '@/lib/supabase-store'

// Get all bookings
const bookings = await supabaseStore.getAllBookings()

// Add a new booking
const newBooking = await supabaseStore.addBooking(bookingData)

// Update booking status
await supabaseStore.updateBooking(bookingId, { status: 'completed' })
```

## Migration from In-Memory Store

### Automatic Migration

The `migrate-to-supabase.ts` utility provides:

- **Data Transfer**: Moves all existing data to Supabase
- **Conflict Resolution**: Handles duplicate entries gracefully
- **Progress Logging**: Detailed migration status
- **Error Recovery**: Continues migration even if some records fail

### Manual Migration Steps

1. **Backup Current Data**: Export existing data if needed
2. **Run Database Migration**: Execute `supabase-migration.sql`
3. **Test Connection**: Verify Supabase connectivity
4. **Run Data Migration**: Use the migration utility
5. **Verify Data**: Check that all data transferred correctly

## Switching Between Storage Systems

### Development Mode (In-Memory)

```typescript
import { dataStore } from '@/lib/data-store'
// Uses in-memory storage with hot-reload persistence
```

### Production Mode (Supabase)

```typescript
import { supabaseStore } from '@/lib/supabase-store'
// Uses Supabase PostgreSQL database
```

### Configuration Toggle

To switch the entire application to use Supabase:

1. **Update API Routes**: Replace `dataStore` imports with `supabaseStore`
2. **Update Components**: Change data fetching to use async/await
3. **Handle Loading States**: Add proper loading and error states
4. **Test Thoroughly**: Verify all functionality works with real database

## Performance Considerations

### Optimizations Included

- **Database Indexes**: On frequently queried columns
- **Connection Pooling**: Automatic connection management
- **Query Optimization**: Efficient data retrieval patterns
- **Caching**: Client-side caching where appropriate

### Best Practices

- **Batch Operations**: Group multiple database operations
- **Selective Queries**: Only fetch needed columns
- **Pagination**: Implement for large datasets
- **Real-time Subscriptions**: Use for live updates

## Monitoring and Maintenance

### Supabase Dashboard

Monitor your application through:
- **Database**: View tables, run queries, check performance
- **Authentication**: Manage users and sessions
- **Storage**: File uploads and management
- **Edge Functions**: Serverless function deployment
- **Logs**: Real-time application logs

### Backup Strategy

Supabase provides:
- **Automatic Backups**: Daily backups for paid plans
- **Point-in-Time Recovery**: Restore to any point in time
- **Manual Exports**: CSV/SQL export functionality

## Troubleshooting

### Common Issues

1. **Connection Errors**
   - Verify environment variables are correct
   - Check Supabase project status
   - Ensure network connectivity

2. **Permission Errors**
   - Review RLS policies
   - Check user authentication status
   - Verify admin privileges

3. **Migration Failures**
   - Check for existing data conflicts
   - Verify foreign key relationships
   - Review error logs for specific issues

### Debug Tools

- **Supabase Logs**: Real-time error monitoring
- **Browser Console**: Client-side error tracking
- **Network Tab**: API request/response inspection
- **Test Page**: `/supabase-test` for connection verification

## Next Steps

### Recommended Enhancements

1. **Supabase Auth Migration**: Replace localStorage with Supabase authentication
2. **Real-time Features**: Add live booking updates
3. **File Storage**: Use Supabase Storage for coach photos
4. **Edge Functions**: Implement serverless business logic
5. **Advanced Analytics**: Use Supabase's built-in analytics

### Production Deployment

1. **Environment Variables**: Set up production environment variables
2. **Database Scaling**: Configure appropriate database size
3. **Monitoring**: Set up alerts and monitoring
4. **Backup Verification**: Test backup and restore procedures
5. **Performance Testing**: Load test with realistic data volumes

## Support

For issues or questions:
- **Supabase Documentation**: [docs.supabase.com](https://docs.supabase.com)
- **Community Support**: [github.com/supabase/supabase](https://github.com/supabase/supabase)
- **Application Issues**: Check the test page at `/supabase-test`
