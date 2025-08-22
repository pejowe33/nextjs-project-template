"use client"

import { useState } from 'react'
import { testSupabaseConnection, migrateDataToSupabase } from '@/lib/migrate-to-supabase'
import { supabaseStore } from '@/lib/supabase-store'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function SupabaseTestPage() {
  const [connectionResult, setConnectionResult] = useState<any>(null)
  const [migrationResult, setMigrationResult] = useState<any>(null)
  const [testData, setTestData] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleTestConnection = async () => {
    setLoading(true)
    try {
      const result = await testSupabaseConnection()
      setConnectionResult(result)
    } catch (error) {
      setConnectionResult({ success: false, error: error })
    } finally {
      setLoading(false)
    }
  }

  const handleMigration = async () => {
    setLoading(true)
    try {
      const result = await migrateDataToSupabase()
      setMigrationResult(result)
    } catch (error) {
      setMigrationResult({ success: false, message: `Migration failed: ${error}` })
    } finally {
      setLoading(false)
    }
  }

  const handleTestQueries = async () => {
    setLoading(true)
    try {
      const [users, bookings, coaches, leagues, giftCards, discountCodes] = await Promise.all([
        supabaseStore.getAllUsers(),
        supabaseStore.getAllBookings(),
        supabaseStore.getAllCoaches(),
        supabaseStore.getAllLeagues(),
        supabaseStore.getAllGiftCards(),
        supabaseStore.getAllDiscountCodes()
      ])

      setTestData({
        users: users.length,
        bookings: bookings.length,
        coaches: coaches.length,
        leagues: leagues.length,
        giftCards: giftCards.length,
        discountCodes: discountCodes.length,
        sampleUser: users[0],
        sampleBooking: bookings[0]
      })
    } catch (error) {
      setTestData({ error: error })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Supabase Integration Test</h1>
          <p className="text-gray-600 mt-2">Test Supabase connection and data migration</p>
        </div>

        {/* Connection Test */}
        <Card>
          <CardHeader>
            <CardTitle>1. Test Supabase Connection</CardTitle>
            <CardDescription>
              Verify that the application can connect to Supabase
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={handleTestConnection} disabled={loading}>
              {loading ? 'Testing...' : 'Test Connection'}
            </Button>
            
            {connectionResult && (
              <Alert variant={connectionResult.success ? "default" : "destructive"}>
                <AlertDescription>
                  {connectionResult.success 
                    ? `✅ Connection successful! Found ${connectionResult.userCount} users in database.`
                    : `❌ Connection failed: ${connectionResult.error}`
                  }
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Migration */}
        <Card>
          <CardHeader>
            <CardTitle>2. Migrate Data to Supabase</CardTitle>
            <CardDescription>
              Transfer all data from in-memory store to Supabase database
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
              <p className="text-yellow-800 text-sm">
                <strong>Important:</strong> Make sure you have run the SQL migration script in Supabase SQL Editor first!
              </p>
            </div>
            
            <Button onClick={handleMigration} disabled={loading}>
              {loading ? 'Migrating...' : 'Run Migration'}
            </Button>
            
            {migrationResult && (
              <Alert variant={migrationResult.success ? "default" : "destructive"}>
                <AlertDescription>
                  {migrationResult.success 
                    ? `✅ ${migrationResult.message}`
                    : `❌ ${migrationResult.message}`
                  }
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Test Queries */}
        <Card>
          <CardHeader>
            <CardTitle>3. Test Database Queries</CardTitle>
            <CardDescription>
              Verify that data can be read from Supabase
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={handleTestQueries} disabled={loading}>
              {loading ? 'Testing...' : 'Test Queries'}
            </Button>
            
            {testData && (
              <div className="space-y-4">
                {testData.error ? (
                  <Alert variant="destructive">
                    <AlertDescription>
                      ❌ Query failed: {testData.error.toString()}
                    </AlertDescription>
                  </Alert>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h3 className="font-medium text-gray-900">Users</h3>
                      <p className="text-2xl font-bold text-blue-600">{testData.users}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h3 className="font-medium text-gray-900">Bookings</h3>
                      <p className="text-2xl font-bold text-green-600">{testData.bookings}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h3 className="font-medium text-gray-900">Coaches</h3>
                      <p className="text-2xl font-bold text-purple-600">{testData.coaches}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h3 className="font-medium text-gray-900">Leagues</h3>
                      <p className="text-2xl font-bold text-orange-600">{testData.leagues}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h3 className="font-medium text-gray-900">Gift Cards</h3>
                      <p className="text-2xl font-bold text-pink-600">{testData.giftCards}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <h3 className="font-medium text-gray-900">Discount Codes</h3>
                      <p className="text-2xl font-bold text-indigo-600">{testData.discountCodes}</p>
                    </div>
                  </div>
                )}

                {testData.sampleUser && (
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-medium text-gray-900 mb-2">Sample User Data</h3>
                    <pre className="text-sm text-gray-600 overflow-x-auto">
                      {JSON.stringify(testData.sampleUser, null, 2)}
                    </pre>
                  </div>
                )}

                {testData.sampleBooking && (
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-medium text-gray-900 mb-2">Sample Booking Data</h3>
                    <pre className="text-sm text-gray-600 overflow-x-auto">
                      {JSON.stringify(testData.sampleBooking, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>Setup Instructions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">1. Run SQL Migration</h4>
              <p className="text-sm text-gray-600">
                Copy the contents of <code>supabase-migration.sql</code> and run it in your Supabase SQL Editor.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">2. Test Connection</h4>
              <p className="text-sm text-gray-600">
                Click "Test Connection" to verify your Supabase credentials are working.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">3. Migrate Data</h4>
              <p className="text-sm text-gray-600">
                Click "Run Migration" to transfer sample data from the in-memory store to Supabase.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">4. Test Queries</h4>
              <p className="text-sm text-gray-600">
                Click "Test Queries" to verify that data can be read from Supabase successfully.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <a
            href="/"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}
