from pydantic import BaseModel

class ItemBase(BaseModel):
    name: str
    category: str
    description: str

class ItemCreate(ItemBase):
    pass

class ItemResponse(ItemBase):
    id: int
    class Config:
        orm_mode = True
