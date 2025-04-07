import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className='py-10 md:py-20 px-5 md:px-10 bg-primary'>
          <div className='max-w-6xl mx-auto text-white text-center'>
            <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl'>Build stronger digital connections</h1>
            <p className='text-lg md:text-2xl font-normal mt-5'>Use our URL shortener, QR Codes, and landing pages to engage your audience and connect them to the right information. Build, edit, and track everything inside the Bitly Connections Platform.</p>
          </div>
          <div className='mt-10 md:mt-20 max-w-5xl mx-auto bg-white rounded-2xl md:rounded-[3rem] p-5 md:p-10 text-primary'>
            <h2 className='text-xl md:text-3xl font-semibold'>Shorten a long link</h2>
            <p className='text-base font-normal mt-2'>No credit card required.</p>
            <form className='w-full mt-10'>
              <h2 className='text-xl font-semibold leading-0'>Paste your long link here</h2>
              <input
                type='text'
                placeholder='https://www.example.com/long-link'
                className=''
              />
              <button
                type='submit'
                className='bg-blue cursor-pointer text-white py-3 px-5 mt-5 rounded-lg font-semibold flex text-xl items-center justify-center transition-all duration-300 hover:bg-blue/80'
              >
                <span className=''>Get your link for free</span>
                <span className='iconify mdi--arrow-right w-5 h-5 ml-2'></span>
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
