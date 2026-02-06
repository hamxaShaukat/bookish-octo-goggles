export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 text-center">
        <span className="inline-block mb-4 text-sm font-medium text-gray-500">
          Launch faster. Scale smarter.
        </span>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          The modern platform <br className="hidden md:block" />
          for growing SaaS teams
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-gray-600">
          Everything you need to build, ship, and scale your product —
          without unnecessary complexity.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-8 py-3 bg-green-900 text-white rounded-md hover:bg-green-800 transition">
            Start free trial
          </button>
          <button className="px-8 py-3 bg-pink-400 border border-gray-300 rounded-md hover:border-gray-400 hover:bg-pink-500 transition">
            View demo
          </button>
        </div>

 
      </section>

      {/* Social Proof */}
      <section className="py-16 border-t border-b">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-500 mb-8">
            Trusted by teams at
          </p>

          <div className="flex flex-wrap justify-center gap-10 text-gray-400 font-semibold">
            <span>Acme</span>
            <span>Nova</span>
            <span>Vertex</span>
            <span>Cloudly</span>
            <span>Nextbase</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center">
            Everything your SaaS needs
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg border">
              <h3 className="font-semibold text-lg">Analytics</h3>
              <p className="mt-3 text-gray-600">
                Track usage, conversions, and growth in real time.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border">
              <h3 className="font-semibold text-lg">Automation</h3>
              <p className="mt-3 text-gray-600">
                Automate workflows and focus on what matters.
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg border">
              <h3 className="font-semibold text-lg">Security</h3>
              <p className="mt-3 text-gray-600">
                Enterprise-grade security baked in by default.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold">
            Start building today
          </h2>
          <p className="mt-4 text-gray-600">
            Join thousands of teams shipping better software with less effort.
          </p>

          <button className="mt-8 px-10 py-4 bg-pink-900 text-white rounded-md hover:bg-pink-800 transition">
            Get started for free
          </button>

          <p className="mt-4 text-sm text-gray-500">
            No credit card required
          </p>
        </div>
      </section>

    </div>
  );
}
