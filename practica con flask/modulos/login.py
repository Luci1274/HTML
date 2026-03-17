from modulos.db import get_db, close_db
from werkzeug.security import generate_password_hash, check_password_hash

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
    except Exception as e:
        conn.rollback()
        raise e
    finally:
        close_db(conn)

def verificar_usuario(username, password):
    conn = get_db()
    cursor = conn.cursor()
    
    cursor.execute("SELECT password FROM users WHERE username = ?", (username,))
    user = cursor.fetchone()
    conn.close()
    
    if user and check_password_hash(user['password'], password):
        return True
    return False
