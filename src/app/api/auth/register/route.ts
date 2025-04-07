import { NextRequest } from 'next/server'
import { handleAuthPost } from '..'

export async function POST(request: NextRequest) {
  return handleAuthPost('register/', request)
}