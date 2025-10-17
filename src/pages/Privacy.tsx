const Privacy = () => {
  const lastUpdate = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <div className="crt-effect bg-card border border-border rounded-xl p-6 md:p-8 shadow-2xl relative">
          <div className="relative z-10">
            {/* Header */}
            <header className="mb-8 pb-6 border-b border-border">
              <h1 className="text-foreground font-semibold text-xl">
                Informativa privacy (essenziale)
              </h1>
            </header>

            {/* Main content */}
            <main className="space-y-6 text-foreground">
              <p>
                Questo sito non utilizza cookie di profilazione né sistemi di tracciamento. 
                Eventuali dati inviati volontariamente via email sono trattati da Venini59 srl 
                esclusivamente per rispondere alle richieste, nel rispetto del Reg. UE 2016/679.
              </p>

              <p>
                Titolare del trattamento: Venini59 srl, Piazza A. Gramsci 2, 20154 Milano (MI). 
                Contatti:{' '}
                <a 
                  href="mailto:hello@venini59.com" 
                  className="text-primary hover:underline hover:decoration-dashed underline-offset-2"
                >
                  hello@venini59.com
                </a>
              </p>

              <p>
                Diritti dell'interessato: può richiedere accesso, rettifica, cancellazione e 
                limitazione scrivendo a{' '}
                <a 
                  href="mailto:hello@venini59.com" 
                  className="text-primary hover:underline hover:decoration-dashed underline-offset-2"
                >
                  hello@venini59.com
                </a>
                .
              </p>

              <p className="text-muted-foreground text-sm pt-4 border-t border-border">
                Ultimo aggiornamento: {lastUpdate}
              </p>
            </main>

            {/* Footer */}
            <footer className="mt-8 pt-6 border-t border-border">
              <a 
                href="/" 
                className="text-primary hover:underline hover:decoration-dashed underline-offset-2 text-sm"
              >
                ← Torna alla home
              </a>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
