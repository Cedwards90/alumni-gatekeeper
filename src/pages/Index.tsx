import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO 
        title="Evolve Foundation Support Hub | Barrier & Alumni Support" 
        description="Get help fast. Submit Barrier or Alumni support requests, track progress, and connect with your case manager."
        canonical="/"
      />
      <header className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="font-playfair text-4xl md:text-5xl font-semibold leading-tight mb-4">Welcome to the Evolve Foundation Support Hub</h1>
          <p className="text-white/90 max-w-3xl mb-6">Track, manage, and request the support you need to overcome barriers and advance your goals. Get help with transportation, childcare, emergencies, career development, and more.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild className="bg-white text-evolve-700 hover:bg-white/90">
              <Link to="/barrier-request">Request Barrier Support</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/alumni-request">Ask for Alumni Support</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Two Ways to Get Support */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8">Two Ways to Get the Support You Need</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-medium mb-2">Barrier Support</h3>
              <p className="text-muted-foreground mb-3">Get help overcoming challenges that impact your training and daily life.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                <li>Transportation & gas assistance</li>
                <li>Childcare support</li>
                <li>Emergency funds</li>
                <li>Health & wellness needs</li>
              </ul>
            </article>

            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-medium mb-2">Alumni Support</h3>
              <p className="text-muted-foreground mb-3">Access resources to grow your career after graduation.</p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                <li>Career development & training</li>
                <li>Professional resources</li>
                <li>Work readiness assistance</li>
                <li>Health & wellness services</li>
              </ul>
            </article>
          </div>
        </section>

        {/* What's Not Covered */}
        <section className="bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8">What's Not Covered</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="rounded-xl border border-red-100 bg-red-50 p-6">
                <h3 className="text-red-700 font-medium mb-2">Barrier Requests Don't Cover:</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-red-800">
                  <li>Personal travel unrelated to training</li>
                  <li>Non-emergency expenses</li>
                  <li>Unapproved large purchases</li>
                </ul>
              </article>
              <article className="rounded-xl border border-amber-100 bg-amber-50 p-6">
                <h3 className="text-amber-800 font-medium mb-2">Alumni Requests Don't Cover:</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-amber-900">
                  <li>Personal business ventures</li>
                  <li>Unrelated certification costs</li>
                  <li>Luxury or non-essential items</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8">Why It Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-2">Barrier Support</h3>
              <p className="text-muted-foreground">Staying engaged in your program can be hard; we help you stay on track when life gets in the way.</p>
            </article>
            <article className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-2">Alumni Support</h3>
              <p className="text-muted-foreground">Once you graduate, we continue supporting your career growth with real, practical resources.</p>
            </article>
          </div>
        </section>

        {/* Steps CTA */}
        <section className="bg-white">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <h2 className="text-center text-2xl md:text-3xl font-semibold mb-8">Support Is Just a Click Away</h2>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <li className="rounded-xl border border-gray-200 p-6">
                <p className="text-3xl font-semibold text-evolve-600 mb-2">1</p>
                <p className="text-sm text-muted-foreground">Sign in to your account</p>
              </li>
              <li className="rounded-xl border border-gray-200 p-6">
                <p className="text-3xl font-semibold text-evolve-600 mb-2">2</p>
                <p className="text-sm text-muted-foreground">Choose Barrier or Alumni Support</p>
              </li>
              <li className="rounded-xl border border-gray-200 p-6">
                <p className="text-3xl font-semibold text-evolve-600 mb-2">3</p>
                <p className="text-sm text-muted-foreground">Submit & Track your request</p>
              </li>
            </ol>
            <div className="flex justify-center mt-8 gap-3">
              <Button asChild className="bg-evolve-600 hover:bg-evolve-700">
                <Link to="/sign-in">Sign In</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/sign-up">Create Account</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 py-10 text-center">
          <p className="text-sm">Evolve Foundation — Supporting participants & alumni with responsive, compassionate services.</p>
          <p className="text-xs text-gray-400 mt-2">© {new Date().getFullYear()} Evolve Foundation. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Index;
