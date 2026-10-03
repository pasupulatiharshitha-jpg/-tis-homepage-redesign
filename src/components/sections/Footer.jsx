import { Mail, MapPin, Phone } from 'lucide-react'
import { school } from '../../data/content'

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-16 bg-brand text-on-brand">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold">Visit us in Selaqui</h2>
          <p className="mt-3 max-w-sm opacity-90">
            Call the helpline or write to us and the admissions team will guide you.
          </p>
        </div>

        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <MapPin size={20} className="mt-0.5 shrink-0" />
            <span>{school.address}</span>
          </li>
          <li className="flex items-start gap-3">
            <Phone size={20} className="mt-0.5 shrink-0" />
            <span>
              <a href={`tel:${school.helpline.replace(/-/g, '')}`} className="underline">
                {school.helpline}
              </a>
              <br />
              Landline: {school.landline.join(', ')}
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Mail size={20} className="mt-0.5 shrink-0" />
            <a href={`mailto:${school.email}`} className="underline">
              {school.email}
            </a>
          </li>
        </ul>
      </div>
      <p className="border-t border-white/20 px-5 py-4 text-center text-sm opacity-80">
        Redesign concept for {school.name}. Content from tis.edu.in.
      </p>
    </footer>
  )
}
