export const site = {
  name: 'Royal Route Travel & Tours',
  shortName: 'Royal Route',
  tagline: 'Your Adventure, Our Responsibility!',
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
  { bank: 'JazzCash', title: 'Royal Route Travel & Tours', number: '0307-4326061' },
  { bank: 'EasyPaisa', title: 'Royal Route Travel & Tours', number: '0307-4326061' },
] as const

export const paymentMethods = ['Safepay', 'UBL Bank', 'JazzCash', 'EasyPaisa'] as const

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Tour Packages', href: '/packages' },
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
