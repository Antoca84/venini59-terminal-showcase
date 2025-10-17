# Venini59 srl - Sito Statico per GitHub Pages

Versione statica HTML pronta per la pubblicazione su GitHub Pages.

## Contenuto

- `index.html` - Homepage con terminal card
- `privacy.html` - Pagina informativa privacy
- Nessuna dipendenza esterna (solo Google Fonts per IBM Plex Mono)
- Animazioni CSS pure (cursore lampeggiante, effetto CRT)

## Deployment su GitHub Pages

### Opzione 1: Repository principale
1. Crea un repository chiamato `[username].github.io`
2. Carica `index.html` e `privacy.html` nella root
3. Il sito sarà disponibile su `https://[username].github.io/`

### Opzione 2: Repository progetto
1. Crea un repository (es. `venini59-site`)
2. Carica i file nella root del repository
3. Vai su Settings > Pages
4. Seleziona "Deploy from a branch" > "main" > "/ (root)"
5. Il sito sarà disponibile su `https://[username].github.io/venini59-site/`

## Caratteristiche

- ✅ HTML statico puro senza build step
- ✅ CSS inline per performance massime
- ✅ Zero tracciamento, zero cookie
- ✅ Font IBM Plex Mono da Google Fonts
- ✅ Effetto CRT e cursore lampeggiante con CSS
- ✅ Completamente responsive
- ✅ Nessun riferimento a Lovable.dev o script esterni
- ✅ Peso totale < 10KB (escluso font)

## Struttura

```
static-export/
├── index.html      # Homepage con terminal card
├── privacy.html    # Pagina privacy
└── README.md       # Questo file
```

## Personalizzazione

### Modificare i colori
Nel tag `<style>` di ciascun file HTML, cerca e modifica:
- `#0E0E11` - Sfondo principale
- `#121318` - Sfondo card
- `#00FF88` - Verde fosforo (accento)
- `#E6E6E6` - Testo principale
- `#9AA0A6` - Testo attenuato
- `#23252D` - Bordi

### Modificare i contenuti
I testi sono direttamente nell'HTML, facili da modificare senza conoscenze tecniche.

## Contatti

Venini59 srl  
Piazza A. Gramsci 2, 20154 Milano (MI)  
Email: hello@venini59.com  
P.IVA: 10979860961
