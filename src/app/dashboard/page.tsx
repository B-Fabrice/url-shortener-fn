import Link from 'next/link'

export default function Dashboard() {
  return (
    <section className='px-5 py-5 md:px-10'>
      <div className='flex items-center justify-between'>
        <h2 className='text-xl md:text-3xl font-semibold'>Shorten a long link</h2>
        <Link
          href='/dashboard/create'
          className='bg-blue text-white py-2 px-3 rounded font-semibold transition-all duration-300 hover:bg-blue/80'
        >
          Create your link
        </Link>
      </div>
    </section>
  )
}