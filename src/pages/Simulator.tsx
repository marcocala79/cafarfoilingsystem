import { Link } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/LanguageProvider";
import oceanBg from "@/assets/hero-ocean-tech.webp";

const SITE_URL = "https://cafarfoilingsystem.com";

const Simulator = () => {
  const { t, lang, homePath } = useI18n();
  const c = t.sim;
  const canonical = lang === "it" ? `${SITE_URL}/it/simulatore` : `${SITE_URL}/simulator`;
  const simSrc = lang === "it" ? "/sim/index.html?lang=it" : "/sim/index.html?lang=en";

  return (
    <div className="min-h-screen relative">
      <Head>
        <title>{c.meta.title}</title>
        <meta name="description" content={c.meta.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={c.meta.title} />
        <meta property="og:description" content={c.meta.description} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:title" content={c.meta.title} />
        <meta name="twitter:description" content={c.meta.description} />
      </Head>

      {/* Fixed ocean background, as on the home page */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${oceanBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-background/55" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main>
          {/* Hero */}
          <section className="pt-28 pb-10 bg-background/35 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <p className="text-accent font-medium mb-2">{c.eyebrow}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{c.heading}</h1>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto">{c.subtitle}</p>
            </div>
          </section>

          {/* The simulator itself */}
          <section className="pb-6 bg-background/35 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-6">
              <div className="bg-card rounded-xl shadow-elegant p-2 sm:p-3">
                <iframe
                  src={simSrc}
                  title={c.iframeTitle}
                  allow="fullscreen"
                  loading="lazy"
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    minHeight: "620px",
                    border: 0,
                    borderRadius: "12px",
                  }}
                />
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">{c.hint}</p>
            </div>
          </section>

          {/* What you can do / what you unlock / full VPP */}
          <section className="py-16 bg-background/35 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-6">
              <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
                {c.cards.map((card, i) => (
                  <StaggerItem key={i}>
                    <div className="bg-card p-8 rounded-lg shadow-elegant h-full">
                      <h2 className="text-lg font-semibold text-foreground mb-3">{card.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* Full VPP teaser */}
              <ScrollReveal delay={0.15}>
                <div className="mt-12 bg-card rounded-lg shadow-elegant p-8 md:p-10 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{c.vppTitle}</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto mb-8">{c.vppText}</p>
                  <Button asChild size="lg">
                    <Link to={`${homePath}#contact`}>{c.vppCta}</Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Simulator;
