from modulos.db import get_db, close_db
from werkzeug.security import generate_password_hash, check_password_hash
import sqlite3

def crear_usuario(username, password):
    conn = get_db()
    cursor = conn.cursor()
    
    password_hash = generate_password_hash(password)
    try:
        cursor.execute(
            "INSERT INTO users (username, password) VALUES (?, ?)",
            (username, password_hash)
        )
        conn.commit()
        return True # ✅ usuario creado exitosamente
    except sqlite3.IntegrityError:
        conn.rollback()
        return False  # ✅ usuario ya existe
    finally:
        close_db(conn)

def verificar_usuario(username, password):
    conn = get_db()
    cursor = conn.cursor()
    
    cursor.execute("SELECT * FROM users WHERE username = ?", (username,))
    user = cursor.fetchone()
    conn.close()
    
    if user and check_password_hash(user['password'], password):
        return user # ✅ credenciales correctas
    return None # ✅ credenciales incorrectas
