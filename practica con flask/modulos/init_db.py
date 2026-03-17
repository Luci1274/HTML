from db import get_db, close_db

conn = get_db()
cursor = conn.cursor()

cursor.execute('''CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
)''')

conn.commit()
close_db(conn)

print("Base de datos inicializada correctamente.")