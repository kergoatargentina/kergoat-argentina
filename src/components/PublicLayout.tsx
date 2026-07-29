import Navbar from './Navbar'
import Footer from './Footer'
import PageTransition from './PageTransition'

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="flex-1">{children}</main>
      </PageTransition>
      <Footer />
    </>
  )
}
