const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="crt-effect bg-card border border-border rounded-xl p-6 md:p-8 shadow-2xl relative">
          <div className="relative z-10">
            {/* Header */}
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-border">
              <h1 className="text-foreground font-semibold mb-2 md:mb-0">
                VENINI59 srl — Milano
              </h1>
              <div className="text-muted-foreground text-sm">
                online · ver. minimal
              </div>
            </header>

            {/* Main terminal */}
            <main className="space-y-6">
              {/* whoami command */}
              <div className="space-y-2">
                <div className="text-primary font-semibold">$ whoami</div>
                <div className="pl-4 space-y-1">
                  <p>Venini59 srl — Milano. Commercio internazionale & progetti creativi.</p>
                  <p>Focus: filiere alimentari di qualità, spazi di lavoro e editoria visiva.</p>
                </div>
              </div>

              {/* tree command */}
              <div className="space-y-2">
                <div className="text-primary font-semibold">$ tree</div>
                <div className="pl-4 font-mono text-sm">
                  <div>.</div>
                  <div>└── export/ Italian food · B2B</div>
                  <div>└── workspace/ Wee Space — coworking</div>
                  <div>└── publishing/ editoria visiva (libri da colorare, oggetti illustrati)</div>
                </div>
              </div>

              {/* open command */}
              <div className="space-y-2">
                <div className="text-primary font-semibold">$ open</div>
                <div className="pl-4 flex flex-wrap gap-3 items-center">
                  <a 
                    href="#export" 
                    className="text-primary hover:underline hover:decoration-dashed underline-offset-4 transition-all"
                  >
                    export/
                  </a>
                  <a 
                    href="https://weespace.venini59.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline hover:decoration-dashed underline-offset-4 transition-all"
                  >
                    workspace/
                  </a>
                  <a 
                    href="#publishing" 
                    className="text-primary hover:underline hover:decoration-dashed underline-offset-4 transition-all"
                  >
                    publishing/
                  </a>
                  <span className="inline-block w-2 h-4 bg-primary cursor-blink"></span>
                </div>
              </div>

              {/* Nota */}
              <div className="pt-4 mt-6 border-t border-border">
                <p className="text-muted-foreground text-sm">
                  Nota: questo sito è un punto di contatto istituzionale. Per richieste B2B:{' '}
                  <a 
                    href="mailto:hello@venini59.com" 
                    className="text-primary hover:underline hover:decoration-dashed underline-offset-2"
                  >
                    hello@venini59.com
                  </a>
                  .
                </p>
              </div>
            </main>

            {/* Footer */}
            <footer className="mt-8 pt-6 border-t border-border text-sm text-muted-foreground space-y-1">
              <div>
                Venini59 srl · Piazza A. Gramsci 2, 20154 Milano (MI) · P.IVA 10979860961
              </div>
              <div>
                Contatti:{' '}
                <a 
                  href="mailto:hello@venini59.com" 
                  className="text-primary hover:underline hover:decoration-dashed underline-offset-2"
                >
                  hello@venini59.com
                </a>
                {' · '}
                <a 
                  href="/privacy" 
                  className="text-primary hover:underline hover:decoration-dashed underline-offset-2"
                >
                  Privacy
                </a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
