from fastapi import FastAPI
from app.routes import items, users

app = FastAPI(title="Warframe Farming Assistant")

# Include API routes
app.include_router(items.router, prefix="/items", tags=["Items"])
app.include_router(users.router, prefix="/users", tags=["Users"])

@app.get("/")
def home():
    return {"message": "Welcome to the Warframe Assistant API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
