import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-20 px-6 pb-12 max-w-4xl mx-auto">
      <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 shadow-2xl">
        <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
          Terms & Conditions
        </h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p>
            Welcome to <span className="font-bold text-white">Dotin.ai</span>, a premier website development agency. 
            These Terms and Conditions govern your use of our website development services and platform.
          </p>

          {/* REQUIRED PHONE CONSENT CLAUSE - EXACT WORDING */}
          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 p-8 rounded-2xl border border-indigo-500/30">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
              📱 Phone Number Consent
            </h2>
            <div className="bg-indigo-500/20 p-6 rounded-xl border-l-4 border-indigo-400">
              <p className="text-lg font-semibold text-indigo-100">
                <strong>
                  "By providing your phone number during the sign-up process, you explicitly consent to receive calls and SMS messages from us regarding your account, services, and promotional offers, in accordance with applicable laws and regulations."
                </strong>
              </p>
            </div>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-6 text-white">🌐 Website Development Services</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 font-bold text-xl">•</span>
                We provide professional website development, design, and maintenance services
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 font-bold text-xl">•</span>
                All projects are delivered according to agreed specifications and timelines
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 font-bold text-xl">•</span>
                Client approval required before final deployment
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-400 font-bold text-xl">•</span>
                Revisions limited to 2 rounds unless otherwise specified in contract
              </li>
            </ul>
          </div>

          <div className="bg-emerald-500/10 p-8 rounded-2xl border border-emerald-500/30">
            <h3 className="text-xl font-semibold mb-6 text-white">💳 Payment Terms</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• 50% advance payment required to start project</li>
              <li>• 30% on design approval</li>
              <li>• 20% on final delivery</li>
              <li>• All payments via bank transfer or specified payment gateway</li>
            </ul>
          </div>

          <div className="bg-orange-500/10 p-6 rounded-xl border border-orange-500/30">
            <h3 className="text-lg font-semibold mb-4 text-white">⚠️ Cancellation Policy</h3>
            <p className="text-gray-300">
              Projects cancelled after design approval will forfeit 50% of advance payment. 
              No refunds after 50% project completion.
            </p>
          </div>

          <div className="pt-12 mt-16 border-t border-white/10 text-center text-sm text-gray-500 space-y-4">
            <p className="text-gray-400">Last updated: December 26, 2025</p>
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <Link href="/privacy" className="hover:text-indigo-400 transition font-medium">Privacy Policy</Link>
              <Link href="/contact" className="hover:text-indigo-400 transition font-medium">Contact Us</Link>
              <Link href="/about" className="hover:text-indigo-400 transition font-medium">About Dotin.ai</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
