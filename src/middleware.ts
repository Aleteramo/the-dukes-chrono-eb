// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Definiamo esplicitamente `request` e `response`
  const response = NextResponse.next();
  
  // Aggiungi qui qualsiasi logica specifica per il middleware, utilizzando `request` se necessario
  
  // Restituiamo la risposta processata
  return response;
}

export const config = {
  matcher: [
    /*
     * Esegue il match su tutti i percorsi, eccetto quelli che iniziano con:
     * - api (per le route API)
     * - _next/static (file statici)
     * - _next/image (file per l'ottimizzazione delle immagini)
     * - favicon.ico (icona del sito)
     * - public (cartella pubblica)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
};
