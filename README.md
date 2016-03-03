# Movie Zone
Detta repo är tänkt att på server sidan använda Node.js och Express.js för att prata med API från [Omdb API](http://www.omdbapi.com).

Tanken är alltså att express servern ska göra http requests mot API'n och returnera json-data som i sin tur angular klienten ska kunna använda.

## Node / Express Server
Servern `server/app.js` är själva kärnan som i sin tur inkluderar en del filer. All serverkonfiguration sker i `server/config.js` som bland annat serverar angular appen från `public/` på localhost:1337. I `server/routes` finns filer för de routes Express servern använder sig av. `server/routes/api.js` är den fil som innehåller routes med prefix `/api` för att i sin tur prata med OMDb's API och returnera json-data av olika slag. `server/routes/watchlist.js` är den fil pratar RESTfully med Rethinkdb databasen och via routes med `/watchlist` som prefix.


Backend servern och Angular appen startas med hjälp av `node server/app.js` eller `nodemon server/app.js` om utveckling ska ske då nodemon automatiskt startar om servern om ändring i filerna har skett.

## RethinkDB
Som databas för watchlist funktionen i appen används NO-SQL databasen [RethinkDB](http://www.rethinkdb.com).

Databasen startas genom `$ rethinkdb` i terminalen och sedan kan man gå till `localhost:8080` i webbläsaren för ett admingränssnitt. För att appen ska fungera (watchlist funktionerna i alla fall) måste appen köras genom terminalen och startas först.

Den databas som används för appen är "moviezone" och tabellen heter "watchlist".

## Angular app
I mappen `public/` finns själva Angular appen som serveras som statiska filer med hjälp av express servern på `localhost:133/`. Appen är av single-page-application stuk och använder routing och controllers samt html partials.    
`public/js/app.js` är själva kärnan i applikationen och använder angular-ui-router som node_module för att sköta routingen. Controllers definieras inte i `public/js/app.js` utan definieras istället med `ng-controller="Ctrl"` direkt i html-filerna.    
Html partials finns i `public/partials/` och controllers finns i `public/js/controllers/` där diverse olika controllers sköter olika funktioner av applikationen.   

Appen använder http request i sina controllers för att prata med express servern på på antingen `/api` eller `/watchlist` beroende på vad som ska göras och servern skickar i sin tur tillbaka ett response (oftast i json).
