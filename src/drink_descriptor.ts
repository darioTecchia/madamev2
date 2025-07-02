import ollama from 'ollama';
import DB from './data/db_copy';

const PROMPT: string = `
Sei un esperto bartender e sommelier italiano.
Riceverai un JSON con una lista di menu e i relativi item.
Per ciascun item del menu, aggiungi una breve descrizione in italiano (massimo 60 caratteri), che includa se possibile:
- Ingredienti principali o botanica
- Profilo aromatico
- Nazione di origine

La risposta deve essere solo il JSON originale, con un campo "description", aggiunto a ogni item, contenente la descrizione breve. Non aggiungere testo extra, solo il JSON modificato.

Ecco il JSON\n:
${JSON.stringify(DB)}`;

const main = async () => {
  let response: string = '';
  console.log('Starting to process all menus...');
  const res = await ollama.chat({
    model: 'llama3.1',
    stream: true,
    think: false,
    format: 'json',
    messages: [
      {
        role: 'user',
        content: PROMPT,
      },
    ],
  });
  for await (const part of res) {
    process.stdout.write(part.message.content);
    response += part.message.content;
  }
  console.clear();
  console.log('\nAll menus processed.', JSON.stringify(JSON.parse(response), null, 2));
}

main();