USE mylist_db;
SELECT mylist.mylist_name, COUNT(*) AS 'My enemies'
FROM mylist
LEFT JOIN mylist
ON mylist.mylist_id = mylist.mylist_id
ORDER BY 'My enemies' DESC;

SELECT enemie.enemie_name, enimie.last_name, enemie.grade, enemie.rank, mylist.mylist_name
FROM enemie
ON enemie.enemie_id = mylist.enemie_id
LEFT JOIN mylist
ON mylist.mylist_id = enemie.mylist_id
ORDER BY 'My enemies' DESC;

SELECT enemie.enemie_name, COUNT(*) AS 'My enemies'
FROM enemie
LEFT JOIN enemie
ON enemie.enemie_id = enemie.enemie_id
ORDER BY 'My enemies' DESC;

SELECT * FROM enemie
SELECT * FROM mylist
SELECT * FROM enemie_mylist