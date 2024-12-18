import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, unstable_setRequestLocale } from 'next-intl/server'
import '../globals.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }]
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  unstable_setRequestLocale(locale);
  
  let messages
  try {
    messages = await getMessages({ locale })
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body className={`${inter.className} bg-black min-h-screen`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
