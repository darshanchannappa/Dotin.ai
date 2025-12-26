import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20 px-6 pb-12 max-w-4xl mx-auto">
      <div className="bg-white/5 backdrop-blur-sm p-12 rounded-3xl border border-white/10 shadow-2xl">
        <h1 className="text-5xl font-bold mb-12 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
          About Dotin.ai
        </h1>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Content */}
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 p-8 rounded-2xl border border-indigo-500/30">
              <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                🚀 Our Mission
              </h2>
              <p className="text-lg text-indigo-100">
                We build cutting-edge AI solutions that transform businesses and empower creators. 
                From intelligent automation to generative AI, we're pushing the boundaries of what's possible.
              </p>
            </div>

            <div className="bg-purple-500/10 p-8 rounded-2xl border border-purple-500/30">
              <h3 className="text-2xl font-bold mb-6 text-white">🎯 What We Do</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 font-bold text-xl">•</span>
                  Develop custom AI/ML solutions
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 font-bold text-xl">•</span>
                  Build intelligent web applications
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 font-bold text-xl">•</span>
                  Create generative AI experiences
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-indigo-400 font-bold text-xl">•</span>
                  Optimize business workflows with AI
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Stats/Features */}
          <div className="space-y-8">
            <div className="bg-emerald-500/10 p-8 rounded-2xl border border-emerald-500/30 text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">500+</div>
              <div className="text-gray-300 font-medium">Projects Delivered</div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-8 rounded-2xl border border-blue-500/30 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300 font-medium">Support Available</div>
            </div>
            
            <div className="bg-orange-500/10 p-8 rounded-2xl border border-orange-500/30 text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-gray-300 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-900/50 p-10 rounded-3xl border border-gray-700 mb-16">
          <h2 className="text-3xl font-bold mb-10 text-white text-center">
            👥 Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl mx-auto mb-4 group-hover:scale-110 transition-transform"></div>
              <h3 className="font-bold text-white mb-2">John Doe</h3>
              <p className="text-indigo-400 text-sm">AI Architect</p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 group-hover:scale-110 transition-transform"></div>
              <h3 className="font-bold text-white mb-2">Jane Smith</h3>
              <p className="text-indigo-400 text-sm">Full Stack Developer</p>
            </div>
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mx-auto mb-4 group-hover:scale-110 transition-transform"></div>
              <h3 className="font-bold text-white mb-2">Mike Wilson</h3>
              <p className="text-indigo-400 text-sm">ML Engineer</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 pt-12 border-t border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl font-semibold text-white hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] inline-block"
            >
              🚀 Get Started
            </Link>
            <Link
              href="/projects"
              className="px-10 py-4 border-2 border-indigo-500/50 bg-transparent rounded-2xl font-semibold text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-400 hover:text-white transition-all inline-block"
            >
              📁 View Projects
            </Link>
          </div>
        </div>

        <div className="pt-12 mt-16 border-t border-white/10 text-center text-sm text-gray-500 space-y-2">
          <p>© 2025 Dotin.ai. All rights reserved.</p>
          <div className="flex justify-center gap-6 pt-4">
            <Link href="/terms" className="hover:text-indigo-400 transition">Terms</Link>
            <Link href="/privacy" className="hover:text-indigo-400 transition">Privacy</Link>
            <Link href="/contact" className="hover:text-indigo-400 transition">Contact</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
