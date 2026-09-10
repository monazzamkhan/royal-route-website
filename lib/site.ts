export const site = {
  name: 'Royal Route Travel & Tours',
  shortName: 'Royal Route',
  tagline: 'Your Adventure, Our Responsibility!',
  description: "Royal Route Travel & Tours is the best travel agency in Pakistan offering premium family & corporate tour packages to Naran Kaghan, Swat, Kalam, Kashmir, and Hunza from Lahore & Islamabad.",
  logo: '/images/logo.png',
  phone: '0307-4326061',
  phoneIntl: '+923074326061',
  email: 'royalroutetraveltours@gmail.com',
  facebook: 'https://www.facebook.com/share/1axo6jpCGk/',
  instagram: 'https://www.instagram.com/royalroutetraveltours',
  address: '111-A, Unit-II, Block K, Gulberg-III, Lahore',
} as const

export const primaryBank = {
  bank: 'United Bank Limited (UBL)',
  title: 'MONAZZAM KHAN',
  iban: 'PK63UNIL0109000282669683',
} as const

export const bankAccounts = [
  { bank: 'United Bank Limited (UBL)', title: 'MONAZZAM KHAN', number: 'PK63UNIL0109000282669683' },
  { bank: 'JazzCash', title: 'MONAZZAM KHAN', number: '0307-4326061' },
  { bank: 'EasyPaisa', title: 'MONAZZAM KHAN', number: '0314-4326061' },
] as const

export const paymentMethods = ['Cards(Credit/Debit)', 'UBL Bank', 'JazzCash', 'EasyPaisa'] as const

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Tour Packages', href: '/packages' },
  { label: 'Travel Guides', href: '/travel-guides' },
  { label: 'About Us', href: '/about' },
  { label: 'Terms & Policy', href: '/terms' },
  { label: 'Contact Us', href: '/contact' },
] as const

export const policyLinks = [
  { label: 'Cancellation & Refund Policy', href: '/terms#refund' },
  { label: 'Privacy Policy', href: '/terms#privacy' },
  { label: 'Terms & Conditions', href: '/terms#terms' },
] as const

export function whatsappLink(message: string) {
  return `https://wa.me/${site.phoneIntl.replace('+', '')}?text=${encodeURIComponent(
    message,
  )}`
}
