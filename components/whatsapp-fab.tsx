import { whatsappLink } from '@/lib/site'
import { WhatsappIcon } from '@/components/brand-icons'

export function WhatsappFab() {
  return (
    <a
      href={whatsappLink('Hello Royal Route Travel & Tours! I would like to know more about your tour packages.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105"
    >
      <WhatsappIcon className="size-7" />
      <span className="pointer-events-none absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-20" />
    </a>
  )
}
