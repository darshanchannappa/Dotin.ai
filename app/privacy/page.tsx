import Link from "next/link";
export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-20 px-6 pb-12 max-w-4xl mx-auto">
      <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 shadow-2xl">
        <h1 className="text-4xl font-bold mb-12 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
          Privacy Policy
        </h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p>
            At <span className="font-bold text-white">Dotin.ai</span>, your privacy is our priority. 
            We are committed to protecting your personal information.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-500/10 p-6 rounded-2xl border border-indigo-500/30">
              <h2 className="text-xl font-bold mb-4 text-white">📋 What We Collect</h2>
              <ul className="space-y-2">
                <li>• Name, email from contact forms</li>
                <li>• Phone numbers (with your consent)</li>
                <li>• Usage analytics (anonymized)</li>
              </ul>
            </div>
            
            <div className="bg-purple-500/10 p-6 rounded-2xl border border-purple-500/30">
              <h2 className="text-xl font-bold mb-4 text-white">🔒 How We Use It</h2>
              <ul className="space-y-2">
                <li>• Provide and improve services</li>
                <li>• Communicate about your account</li>
                <li>• Send promotional offers (opt-out available)</li>
              </ul>
            </div>
          </div>

          <div className="bg-emerald-500/10 p-6 rounded-2xl border border-emerald-500/30">
            <h2 className="text-xl font-bold mb-4 text-white">🛡️ Your Rights</h2>
            <ul className="space-y-2">
              <li>• Access, update, or delete your data</li>
              <li>• Opt-out of communications anytime</li>
              <li>• Request data export</li>
            </ul>
          </div>

          <div className="pt-8 mt-12 border-t border-white/10 text-center text-sm text-gray-500 space-y-2">
            <p>Last updated: December 26, 2025</p>
            <Link href="/contact" className="text-indigo-400 hover:text-indigo-300 underline inline-flex items-center gap-2">
              Privacy concerns? Contact us →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
