import { apiUrl, apiKey } from '@/utils'
import { NextRequest, NextResponse } from 'next/server'

export async function handleAuthPost(endpoint: string, request: NextRequest) {
  const body = await request.json()
  try {
    const response = await fetch(`${apiUrl}/auth/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
      },
      body: JSON.stringify(body)
    })
    const data = await response.json()
    return NextResponse.json(data, { status: response.status })
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 })
  }
}