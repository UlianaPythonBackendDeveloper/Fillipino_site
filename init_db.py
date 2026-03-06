import sqlite3

def init_db():
    conn = sqlite3.connect('philippines.db')
    cursor = conn.cursor
    
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS feedback (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            message TEXT NOT NULL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP''')
    conn.commit()
    conn.close()
    print('Database initialized!')
    
    if __name__ == '__main__':
        init_db()