from sqlalchemy import create_engine

DATABASE_URL = "postgresql+psycopg2://postgres:13082002Invo@localhost:5432/warframe_db"
engine = create_engine(DATABASE_URL)

try:
    connection = engine.connect()
    print("✅ Connection successful!")  # No indentation issues
    connection.close()
except Exception as e:
    print("❌ Connection failed:", e)
