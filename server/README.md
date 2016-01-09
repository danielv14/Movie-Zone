# Servern
Servern är av Node.js / Express.js och är tänkt som min back-end för att prata med OMDb API för att leverera json-data som klienten kan använda sig av.


### Routes
Inuti ```routes/``` finns det två olika filer som representerar olika områden för routing.

* ```routes/api.js``` handlar om de routes som behövs för att prata med OMDb's API och har ett prefix på ```/api```.

* ```routes/user.js``` handlar om de routes som i framtiden sköter MongoDB databasen för appen. Använd prefix ```/user``` för att nå dessa routes.

* ```index.js``` är roten av routes och ligger på ```localhost:1337/``` och förklarar om de andra routes som finns
